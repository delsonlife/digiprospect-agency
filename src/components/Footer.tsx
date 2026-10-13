import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { nav, site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="tricolor" />
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed">
            Sites web, boutiques en ligne et référencement local pour les entreprises de Côte d'Ivoire et d'ailleurs.
          </p>
        </div>
        <div>
          <h2 className="font-display text-base font-bold text-white">Services</h2>
          <ul className="mt-4 space-y-2 text-[0.95rem]">
            {nav.slice(0, 3).map((i) => (
              <li key={i.href}><Link href={i.href} className="inline-block py-1 hover:text-white link-underline">{i.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-base font-bold text-white">Agence</h2>
          <ul className="mt-4 space-y-2 text-[0.95rem]">
            <li><Link href="/realisations" className="inline-block py-1 hover:text-white link-underline">Réalisations</Link></li>
            <li><Link href="/a-propos" className="inline-block py-1 hover:text-white link-underline">À propos</Link></li>
            <li><Link href="/zones-intervention" className="inline-block py-1 hover:text-white link-underline">Zones d'intervention</Link></li>
            <li><Link href="/contact" className="inline-block py-1 hover:text-white link-underline">Demande de devis</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-base font-bold text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-[0.95rem]">
            <li className="flex items-center gap-3"><Icon name="pin" size={20} className="shrink-0" />Entreprises d'Abidjan et de {site.country}</li>
            <li>
              <a href={whatsappLink("Bonjour, je vous contacte depuis le site DigiProspect Agency.")} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 py-1 hover:text-white">
                <Icon name="whatsapp" size={20} className="shrink-0" /> WhatsApp
              </a>
            </li>
            {site.email && (
              <li><a href={`mailto:${site.email}`} className="flex items-center gap-3 py-1 hover:text-white"><Icon name="mail" size={20} className="shrink-0" />{site.email}</a></li>
            )}
            {site.comeup && (
              <li><a href={site.comeup} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-1 hover:text-white"><Icon name="link" size={20} className="shrink-0" />Profil ComeUp</a></li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 pb-28 text-sm text-white/60 md:pb-6">
          <p>Projets menés partout en Côte d'Ivoire, et à distance pour les entreprises situées à l'étranger.</p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
            <p className="flex gap-5">
              <Link href="/mentions-legales" className="py-1 hover:text-white link-underline">Mentions légales</Link>
              <Link href="/politique-de-confidentialite" className="py-1 hover:text-white link-underline">Confidentialité</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
