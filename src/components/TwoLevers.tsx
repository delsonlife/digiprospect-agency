import Link from "next/link";
import { Icon } from "./Icon";

const levers = [
  {
    icon: "search" as const,
    title: "Développer votre visibilité organique",
    text: "Le référencement naturel et le SEO local aident votre entreprise à apparaître dans les résultats de Google, sur la carte comme dans la recherche. C'est un travail progressif, qui construit une présence dans la durée.",
    links: [
      { label: "SEO local et fiche Google", href: "/seo-referencement-local" },
      { label: "SEO inclus dans les sites", href: "/creation-site-web-abidjan" },
    ],
  },
  {
    icon: "megaphone" as const,
    title: "Obtenir des prospects grâce à la publicité",
    text: "Les campagnes payantes sur Google, Facebook, Instagram ou TikTok permettent d'aller chercher des demandes selon vos objectifs et votre budget. Elles se pilotent et s'ajustent au fil des résultats.",
    links: [
      { label: "Google Ads", href: "/google-ads-abidjan" },
      { label: "Facebook, Instagram, TikTok", href: "/acquisition-clients" },
    ],
  },
];

/** Accueil : deux leviers complémentaires, organique et publicité payante. */
export function TwoLevers() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <h2 className="text-h2">Deux leviers complémentaires pour trouver des clients</h2>
          <p className="prose-measure mt-5 text-lg text-ink-soft">
            Selon votre activité, DigiProspect Agency peut vous accompagner sur l'un, sur l'autre ou sur les deux : l'un construit votre présence dans la durée, l'autre agit selon vos objectifs et votre budget.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {levers.map((l) => (
            <li key={l.title} className="rounded-2xl border border-line bg-mist p-6 sm:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white"><Icon name={l.icon} /></span>
              <h3 className="mt-5 text-h3 font-bold">{l.title}</h3>
              <p className="mt-3 text-ink-soft">{l.text}</p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {l.links.map((k) => (
                  <Link key={k.href} href={k.href} className="link-underline font-semibold">{k.label}</Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
