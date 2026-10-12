import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Demande de devis et contact",
  description: "Demandez un devis pour un site web, une boutique en ligne ou du référencement local, en Côte d'Ivoire ou à distance. Réponse par e-mail ou WhatsApp.",
  alternates: { canonical: "/contact" },
};

const preset: Record<string, string> = {
  "creation-site-web": "Création de site web",
  "creation-site-ecommerce": "Boutique en ligne",
  "seo-referencement-local": "SEO et référencement local",
};

export default async function Page({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", href: "/contact" }]}
        title="Demander un devis"
        intro="Décrivez votre activité et votre besoin en quelques lignes. Vous recevez une réponse précise sur la suite."
        image={{ src: "/images/contact-devis-digiprospect-whatsapp-formulaire.svg", alt: "Illustration d'un formulaire de devis et d'une conversation WhatsApp sur téléphone" }}
      />
      <section className="section">
        <div className="container-page grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <ContactForm defaultService={service ? preset[service] ?? "" : ""} />
          <aside className="space-y-10">
            <div>
              <h2 className="text-h3 font-bold">Plutôt par message ?</h2>
              <p className="mt-3 text-ink-soft">WhatsApp convient bien pour une première question ou pour envoyer des photos et un logo.</p>
              <a href={whatsappLink("Bonjour, je vous contacte depuis la page contact du site.")} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-5">
                <Icon name="whatsapp" size={22} /> Écrire sur WhatsApp
              </a>
              {site.email && (
                <p className="mt-5"><a href={`mailto:${site.email}`} className="link-underline font-semibold">{site.email}</a></p>
              )}
            </div>
            <div>
              <h2 className="text-h3 font-bold">Ce qui se passe ensuite</h2>
              <ol className="mt-4 space-y-3 text-ink-soft">
                <li>Votre demande est lue et les questions utiles sont préparées.</li>
                <li>Un échange a lieu par WhatsApp, téléphone ou rendez-vous, selon votre préférence.</li>
                <li>Vous recevez une proposition écrite que vous êtes libre d'accepter ou non.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
