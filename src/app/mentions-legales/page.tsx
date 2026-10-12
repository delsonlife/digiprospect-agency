import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site digiprospectagency.com.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true }, // passer à true une fois les informations complétées
};

const todo = "text-orange-deep font-semibold";

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Mentions légales", href: "/mentions-legales" }]} title="Mentions légales" image={{ src: "/images/mentions-legales-document-sceau.svg", alt: "Illustration d'un document officiel avec un sceau" }} />
      <section className="section">
        <div className="container-page prose-measure space-y-10">
          <p className="rounded-lg border-2 border-orange bg-mist p-4 text-sm">
            Les passages marqués <span className={todo}>[À COMPLÉTER]</span> doivent être renseignés avec vos informations réelles avant la mise en ligne définitive. Faites relire cette page par un professionnel du droit si nécessaire.
          </p>
          <div>
            <h2 className="text-h3 font-bold">Éditeur du site</h2>
            <ul className="mt-3 space-y-1 text-ink-soft">
              <li>Nom commercial : {site.name}</li>
              <li>Responsable de la publication : <span className={todo}>[À COMPLÉTER : nom et prénom]</span></li>
              <li>Statut juridique et immatriculation : <span className={todo}>[À COMPLÉTER : forme juridique, numéro RCCM ou équivalent]</span></li>
              <li>Adresse de contact : <span className={todo}>[À COMPLÉTER : adresse postale professionnelle ou de domiciliation, si applicable]</span></li>
              <li>Contact : via le <a className="link-underline" href="/contact">formulaire de contact</a> ou WhatsApp</li>
            </ul>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Hébergement</h2>
            <p className="mt-3 text-ink-soft">Le site est hébergé par Vercel Inc. (vercel.com). <span className={todo}>[À COMPLÉTER : adresse officielle de l'hébergeur]</span></p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Propriété intellectuelle</h2>
            <p className="mt-3 text-ink-soft">Les textes, la mise en page et les éléments graphiques de ce site sont la propriété de {site.name}, sauf mention contraire. Toute reproduction sans autorisation écrite est interdite.</p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Responsabilité</h2>
            <p className="mt-3 text-ink-soft">Les informations du site sont fournies à titre indicatif et peuvent évoluer. Les résultats de visibilité sur les moteurs de recherche dépendent de nombreux facteurs extérieurs et ne sont pas garantis.</p>
          </div>
        </div>
      </section>
    </>
  );
}
