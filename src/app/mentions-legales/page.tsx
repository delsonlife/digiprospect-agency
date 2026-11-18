import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { legal, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site digiprospectagency.com : éditeur, hébergement, propriété intellectuelle et données personnelles.",
  path: "/mentions-legales",
  // Les pages légales restent hors de l'index tant que l'immatriculation de l'éditeur n'est pas indiquée.
  noindex: true,
});

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Mentions légales", href: "/mentions-legales" }]}
        title="Mentions légales"
        image={{ src: "/images/mentions-legales-document-sceau.svg", alt: "Illustration d'un document officiel avec un sceau" }}
      />
      <section className="section">
        <div className="container-page prose-measure space-y-10">
          <div>
            <h2 className="text-h3 font-bold">Éditeur du site</h2>
            <ul className="mt-3 space-y-1 text-ink-soft">
              <li>Nom commercial : {site.name}</li>
              <li>Éditeur : {legal.editor}, en {legal.legalForm}</li>
              <li>Directeur de la publication : {legal.publicationDirector}</li>
              <li>Adresse : {legal.address}</li>
              <li>E-mail : <a className="link-underline" href={`mailto:${site.email}`}>{site.email}</a></li>
              <li>Téléphone et WhatsApp : <a className="link-underline" href={site.phoneHref}>{site.phoneDisplay}</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Hébergement</h2>
            <p className="mt-3 text-ink-soft">
              Le site est hébergé par {legal.host.name}, {legal.host.address} (<a className="link-underline" href={legal.host.url} target="_blank" rel="noopener noreferrer">vercel.com</a>).
            </p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Propriété intellectuelle</h2>
            <p className="mt-3 text-ink-soft">
              Les textes, la mise en page, le logo et les illustrations de ce site sont la propriété de l'éditeur, sauf mention contraire. Toute reproduction ou réutilisation sans autorisation écrite est interdite.
            </p>
            <p className="mt-3 text-ink-soft">
              Les sites, marques et noms de clients présentés dans les réalisations appartiennent à leurs propriétaires respectifs. Ils sont présentés avec leur accord.
            </p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Responsabilité</h2>
            <p className="mt-3 text-ink-soft">
              Les informations du site sont fournies à titre indicatif et peuvent évoluer. Les résultats de visibilité sur les moteurs de recherche, les réseaux sociaux ou les plateformes publicitaires dépendent de nombreux facteurs extérieurs et ne sont pas garantis.
            </p>
            <p className="mt-3 text-ink-soft">
              Le site contient des liens vers des sites tiers (par exemple ComeUp ou les sites de clients). L'éditeur n'est pas responsable de leur contenu.
            </p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Données personnelles</h2>
            <p className="mt-3 text-ink-soft">
              Le traitement des données saisies sur le site est décrit dans la <Link className="link-underline" href="/politique-de-confidentialite">politique de confidentialité</Link>.
            </p>
          </div>
          <p className="text-sm text-ink-soft">Dernière mise à jour : {legal.updated}.</p>
        </div>
      </section>
    </>
  );
}
