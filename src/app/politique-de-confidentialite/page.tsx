import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Données collectées par le formulaire de devis de digiprospectagency.com et leur usage.",
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: false, follow: true }, // passer à true une fois les informations complétées
};

const todo = "text-orange-deep font-semibold";

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Confidentialité", href: "/politique-de-confidentialite" }]} title="Politique de confidentialité" image={{ src: "/images/politique-confidentialite-donnees-protegees.svg", alt: "Illustration d'un bouclier avec cadenas symbolisant la protection des données" }} />
      <section className="section">
        <div className="container-page prose-measure space-y-10">
          {/* À FAIRE avant publication : renseigner les passages [À COMPLÉTER], faire relire par un professionnel du droit, puis passer robots.index à true. */}
          <div>
            <h2 className="text-h3 font-bold">Responsable du traitement</h2>
            <p className="mt-3 text-ink-soft">{site.name}, <span className={todo}>[À COMPLÉTER : identité de l'éditeur, voir mentions légales]</span>.</p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Données collectées</h2>
            <p className="mt-3 text-ink-soft">Lorsque vous envoyez une demande de devis, DigiProspect Agency reçoit : votre nom, votre entreprise (facultatif), votre e-mail ou numéro, le service souhaité, votre message et, si vous l'indiquez, un budget indicatif.</p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Finalité</h2>
            <p className="mt-3 text-ink-soft">Ces informations servent uniquement à répondre à votre demande et à établir une proposition. Elles ne sont ni vendues, ni utilisées pour de la prospection sans votre accord.</p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Prestataires techniques</h2>
            <p className="mt-3 text-ink-soft">L'envoi du formulaire utilise le service d'e-mail Resend. Le site est hébergé par Vercel. Le bouton WhatsApp ouvre l'application WhatsApp (Meta) : les échanges qui s'y déroulent relèvent de ses conditions d'utilisation.</p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Durée de conservation</h2>
            <p className="mt-3 text-ink-soft"><span className={todo}>[À COMPLÉTER : durée, par exemple la durée de la relation commerciale puis un délai défini]</span></p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Vos droits</h2>
            <p className="mt-3 text-ink-soft">Vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant via le <a className="link-underline" href="/contact">formulaire de contact</a>. <span className={todo}>[À COMPLÉTER : références légales applicables et autorité de protection compétente]</span></p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Cookies</h2>
            <p className="mt-3 text-ink-soft">Ce site n'utilise pas de cookies de suivi publicitaire. Si un outil de mesure d'audience est ajouté, cette page sera mise à jour.</p>
          </div>
        </div>
      </section>
    </>
  );
}
