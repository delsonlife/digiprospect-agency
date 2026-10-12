"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./Icon";
import { budgetOptions, serviceOptions, validate, type ContactPayload, type FieldErrors } from "@/lib/contact-schema";
import { whatsappLink } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 block min-h-12 w-full rounded-lg border-2 border-line bg-white px-4 py-3 text-base text-ink placeholder:text-ink-soft/70 focus:border-ink focus:outline-none";

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload: ContactPayload = {
      name: String(form.get("name") ?? ""),
      company: String(form.get("company") ?? ""),
      contact: String(form.get("contact") ?? ""),
      service: String(form.get("service") ?? ""),
      message: String(form.get("message") ?? ""),
      budget: String(form.get("budget") ?? ""),
      website: String(form.get("website") ?? ""),
    };
    const found = validate(payload);
    setErrors(found);
    setServerError("");
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      (e.currentTarget.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("sent");
        return;
      }
      if (data.fields) setErrors(data.fields);
      setServerError(data.error || "L'envoi a échoué. Réessayez ou contactez DigiProspect Agency sur WhatsApp.");
      setStatus("error");
    } catch {
      setServerError("Connexion impossible. Vérifiez votre réseau, puis réessayez ou contactez DigiProspect Agency sur WhatsApp.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border-2 border-green bg-mist p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-deep text-white"><Icon name="check" /></span>
        <h2 className="mt-5 text-h3 font-bold">Votre demande a bien été transmise</h2>
        <p className="prose-measure mt-3 text-ink-soft">
          Merci. Vous recevrez une réponse sur le contact que vous avez indiqué. Pour une question urgente, vous pouvez aussi écrire sur WhatsApp.
        </p>
        <a href={whatsappLink("Bonjour, je viens d'envoyer une demande de devis depuis le site.")} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-6">
          <Icon name="whatsapp" size={22} /> Écrire sur WhatsApp
        </a>
      </div>
    );
  }

  const err = (k: keyof FieldErrors) =>
    errors[k] ? <p id={`${k}-error`} className="mt-2 text-sm font-semibold text-[#b42318]">{errors[k]}</p> : null;
  const aria = (k: keyof FieldErrors) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `${k}-error` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6" aria-describedby={serverError ? "form-error" : undefined}>
      <div>
        <label htmlFor="name" className="font-semibold">Votre nom</label>
        <input id="name" name="name" autoComplete="name" required className={field} {...aria("name")} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="company" className="font-semibold">Entreprise <span className="font-normal text-ink-soft">(facultatif)</span></label>
        <input id="company" name="company" autoComplete="organization" className={field} {...aria("company")} />
        {err("company")}
      </div>
      <div>
        <label htmlFor="contact" className="font-semibold">E-mail ou numéro WhatsApp</label>
        <input id="contact" name="contact" inputMode="email" autoComplete="email" required placeholder="nom@exemple.com ou +225…" className={field} {...aria("contact")} />
        {err("contact")}
      </div>
      <div>
        <label htmlFor="service" className="font-semibold">Service souhaité</label>
        <select id="service" name="service" required defaultValue={defaultService} className={field} {...aria("service")}>
          <option value="" disabled>Choisir un service</option>
          {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {err("service")}
      </div>
      <div>
        <label htmlFor="message" className="font-semibold">Votre besoin</label>
        <textarea id="message" name="message" rows={6} required className={field}
          placeholder="Votre activité, ce que vous voulez obtenir, votre site actuel s'il existe…" {...aria("message")} />
        {err("message")}
      </div>
      <div>
        <label htmlFor="budget" className="font-semibold">Budget indicatif <span className="font-normal text-ink-soft">(facultatif)</span></label>
        <select id="budget" name="budget" defaultValue="" className={field}>
          <option value="">Non précisé</option>
          {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>
      {/* Champ piège anti-spam : masqué aux utilisateurs */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Ne pas remplir<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      {serverError && (
        <p id="form-error" role="alert" className="rounded-lg border-2 border-[#b42318] bg-[#fef3f2] p-4 font-semibold text-[#b42318]">{serverError}</p>
      )}
      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto">
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
      <p className="text-sm text-ink-soft">Vos informations servent uniquement à répondre à votre demande. Voir la <a className="link-underline" href="/politique-de-confidentialite">politique de confidentialité</a>.</p>
    </form>
  );
}
