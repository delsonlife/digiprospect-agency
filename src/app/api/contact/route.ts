import { NextResponse } from "next/server";
import { validate, type ContactPayload } from "@/lib/contact-schema";

export const runtime = "nodejs";

// Limitation simple en mémoire (par instance) : suffisant contre les envois répétés accidentels.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { ok: false, error: "Le formulaire n'est pas encore configuré. Merci d'utiliser WhatsApp pour le moment." },
      { status: 503 },
    );
  }

  let body: Partial<ContactPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Requête invalide." }, { status: 400 });
  }

  const payload: ContactPayload = {
    name: String(body.name ?? ""),
    company: String(body.company ?? ""),
    contact: String(body.contact ?? ""),
    service: String(body.service ?? ""),
    message: String(body.message ?? ""),
    budget: String(body.budget ?? ""),
    website: String(body.website ?? ""),
  };

  // Champ piège rempli : on répond comme si tout allait bien, sans rien envoyer.
  if (payload.website) return NextResponse.json({ ok: true });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) {
    return NextResponse.json({ ok: false, error: "Trop de demandes. Réessayez dans quelques minutes." }, { status: 429 });
  }

  const errors = validate(payload);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, error: "Vérifiez les champs signalés.", fields: errors }, { status: 422 });
  }

  const isEmail = payload.contact.includes("@");
  const html = `
    <h2>Nouvelle demande de devis</h2>
    <p><strong>Nom :</strong> ${esc(payload.name)}</p>
    <p><strong>Entreprise :</strong> ${esc(payload.company) || "—"}</p>
    <p><strong>Contact :</strong> ${esc(payload.contact)}</p>
    <p><strong>Service :</strong> ${esc(payload.service)}</p>
    <p><strong>Budget indicatif :</strong> ${esc(payload.budget) || "—"}</p>
    <p><strong>Besoin :</strong></p>
    <p style="white-space:pre-wrap">${esc(payload.message)}</p>`;

  let res: Response;
  try {
    res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      ...(isEmail ? { reply_to: payload.contact.trim() } : {}),
      subject: `Demande de devis : ${payload.service} (${payload.name})`,
      html,
    }),
    });
  } catch (err) {
    console.error("Resend injoignable", err);
    return NextResponse.json(
      { ok: false, error: "L'envoi a échoué. Réessayez ou contactez DigiProspect Agency sur WhatsApp." },
      { status: 502 },
    );
  }

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json(
      { ok: false, error: "L'envoi a échoué. Réessayez ou contactez DigiProspect Agency sur WhatsApp." },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}
