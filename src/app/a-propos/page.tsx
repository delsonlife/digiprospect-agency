import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ComeupSection } from "@/components/ComeupSection";
import { FeatureCards, type Feature } from "@/components/FeatureCards";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "À propos de l'agence",
  description: "DigiProspect Agency accompagne les entreprises de Côte d'Ivoire et d'ailleurs : sites web, boutiques en ligne et fiche Google Business Profile.",
  path: "/a-propos",
});

const principles: Feature[] = [
  { icon: "check", title: "Dire ce qui est faisable", text: "Si un besoin sort du périmètre de l'agence ou si une promesse n'est pas tenable, DigiProspect Agency le précise avant de commencer." },
  { icon: "browser", title: "Construire pour le client final", text: "Un site, une annonce ou une fiche réussis sont d'abord clairs pour la personne qui les voit : que proposez-vous, et comment vous contacter." },
  { icon: "text", title: "Rester transparent", text: "Prix, contenus à fournir, étapes et limites sont écrits. Aucun résultat Google n'est garanti, car personne ne peut le faire." },
  { icon: "refresh", title: "Rester autonome", text: "Ce qui est mis en place doit pouvoir vivre après la livraison : vous savez le modifier, ou vous savez à qui le demander." },
];

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "À propos", href: "/a-propos" }]}
        title="Une agence web pensée pour les entreprises de Côte d'Ivoire et d'ailleurs"
        intro="DigiProspect Agency aide les entreprises à présenter clairement leur activité en ligne et à être contactées par les bons clients."
        image={{ src: "/images/a-propos-digiprospect-poste-de-travail.svg", alt: "Illustration d'un poste de travail avec ordinateur, liste de tâches et café" }}
      />
      <section className="section">
        <div className="container-page">
          <h2 className="text-h2">Pourquoi DigiProspect</h2>
          <div className="prose-measure mt-5 space-y-4 text-lg text-ink-soft">
            <p>
              Le nom dit l'objectif : un site utile se juge à ce qu'il apporte à l'entreprise, pas seulement à son apparence. Chaque projet commence par une question simple : qui doit vous trouver, et que doit-il faire ensuite ?
            </p>
            <p>
              {site.name} intervient à Abidjan et partout en Côte d'Ivoire, ainsi qu'à distance à l'international, sur quatre sujets : le site web, la boutique en ligne, la fiche Google Business Profile et l'acquisition de clients.
            </p>
          </div>
          {/* TODO : ajouter ici une courte présentation personnelle (parcours, spécialités) et une photo réelle. */}
        </div>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="container-page section">
          <h2 className="text-h2">Les principes de travail</h2>
          <div className="mt-10"><FeatureCards items={principles} cols={4} /></div>
        </div>
      </section>
      <ComeupSection />
      <CtaBand />
    </>
  );
}
