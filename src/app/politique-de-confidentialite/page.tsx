import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { legal, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Politique de confidentialité",
  description: "Données collectées par le formulaire de devis de digiprospectagency.com et leur usage.",
  path: "/politique-de-confidentialite",
  // Les pages légales restent hors de l'index tant que l'immatriculation de l'éditeur n'est pas indiquée.
  noindex: true,
});

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Confidentialité", href: "/politique-de-confidentialite" }]}
        title="Politique de confidentialité"
        image={{ src: "/images/politique-confidentialite-donnees-protegees.svg", alt: "Illustration d'un bouclier avec cadenas symbolisant la protection des données" }}
      />
      <section className="section">
        <div className="container-page prose-measure space-y-10">
          <div>
            <h2 className="text-h3 font-bold">Responsable du traitement</h2>
            <p className="mt-3 text-ink-soft">
              {legal.editor}, en {legal.legalForm} (nom commercial {site.name}), {legal.address}. Contact : <a className="link-underline" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Données collectées</h2>
            <p className="mt-3 text-ink-soft">
              Lorsque vous envoyez une demande de devis ou d'audit, le site reçoit : votre nom, votre entreprise (facultatif), votre e-mail ou votre numéro, le service souhaité, les prestations Google Ads cochées le cas échéant, votre message et, si vous l'indiquez, un budget indicatif. Si vous écrivez sur WhatsApp ou par e-mail, l'éditeur reçoit les informations que vous transmettez.
            </p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Finalité</h2>
            <p className="mt-3 text-ink-soft">
              Ces informations servent uniquement à répondre à votre demande et à établir une proposition. Elles ne sont ni vendues, ni utilisées pour de la prospection sans votre accord.
            </p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Prestataires techniques</h2>
            <p className="mt-3 text-ink-soft">
              Le site est hébergé par {legal.host.name}. L'envoi du formulaire passe par le service d'e-mail Resend. La carte de la page Contact est fournie par Google Maps. Le bouton WhatsApp ouvre l'application WhatsApp (Meta), dont les conditions d'utilisation s'appliquent aux échanges qui s'y déroulent. Ces prestataires peuvent traiter des données en dehors de la Côte d'Ivoire, notamment aux États-Unis.
            </p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Durée de conservation</h2>
            <p className="mt-3 text-ink-soft">Vos données sont conservées {legal.retention}.</p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Vos droits</h2>
            <p className="mt-3 text-ink-soft">
              Vous pouvez demander l'accès à vos données, leur rectification, leur suppression ou vous opposer à leur traitement en écrivant à <a className="link-underline" href={`mailto:${site.email}`}>{site.email}</a>. Vous pouvez aussi vous adresser à l'autorité de protection des données compétente.
            </p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Cookies et mesure d'audience</h2>
            <p className="mt-3 text-ink-soft">
              Le site n'utilise aucun cookie publicitaire et n'installe aucun outil de mesure d'audience ni pixel de suivi. Le contenu Google Maps de la page Contact peut toutefois déposer ses propres cookies. Si des outils de mesure ou de publicité sont ajoutés plus tard, cette page sera mise à jour et votre consentement sera demandé lorsque c'est nécessaire.
            </p>
          </div>
          <p className="text-sm text-ink-soft">Dernière mise à jour : {legal.updated}.</p>
        </div>
      </section>
    </>
  );
}
