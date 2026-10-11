import Link from "next/link";
import { Icon } from "./Icon";
import { whatsappLink } from "@/lib/site";

export function CtaBand({
  title = "Parlons de votre projet",
  text = "Décrivez votre activité et votre besoin. Vous recevez une réponse claire sur ce qui est faisable et sur la suite.",
  waMessage = "Bonjour, je souhaite demander un devis.",
}: { title?: string; text?: string; waMessage?: string }) {
  return (
    <section className="bg-ink text-white">
      <div className="tricolor" />
      <div className="container-page section grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <h2 className="text-h2">{title}</h2>
          <p className="prose-measure mt-4 text-lg text-white/75">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link href="/contact" className="btn btn-on-dark">Demander un devis</Link>
          <a href={whatsappLink(waMessage)} target="_blank" rel="noopener noreferrer"
             className="btn border-2 border-white/40 text-white hover:border-white hover:bg-white/10">
            <Icon name="whatsapp" size={22} /> Écrire sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
