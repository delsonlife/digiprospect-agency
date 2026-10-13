import type { Metadata } from "next";
import { ComeupSection } from "@/components/ComeupSection";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos de DigiProspect Agency",
  description: "DigiProspect Agency accompagne les entreprises de Côte d'Ivoire et d'ailleurs dans leur visibilité en ligne : sites web, boutiques en ligne et référencement local.",
  alternates: { canonical: "/a-propos" },
};

const principles = [
  { title: "Dire ce qui est faisable", text: "Si un besoin sort du périmètre de l'agence ou si une promesse n'est pas tenable, DigiProspect Agency le précise avant de commencer." },
  { title: "Construire pour le client final", text: "Un site réussi est d'abord clair pour la personne qui le visite : que proposez-vous, et comment vous contacter." },
  { title: "Rester transparent", text: "Prix, contenus à fournir, étapes et limites sont écrits. Aucun résultat Google n'est garanti, car personne ne peut le faire." },
  { title: "Laisser le site à jour", text: "Le site doit pouvoir vivre après la livraison : vous savez le modifier, ou vous savez à qui le demander." },
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
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="text-h2">Pourquoi DigiProspect</h2>
            <p className="prose-measure mt-5 text-lg text-ink-soft">
              Le nom dit l'objectif : un site utile se juge à ce qu'il apporte à l'entreprise, pas seulement à son apparence. Chaque projet commence par une question simple : qui doit vous trouver, et que doit-il faire ensuite ?
            </p>
            <p className="prose-measure mt-4 text-lg text-ink-soft">
              {site.name} intervient à Abidjan et partout en Côte d'Ivoire, ainsi qu'à distance à l'international, sur trois sujets : le site web, la boutique en ligne et le référencement local.
            </p>
            {/* TODO : ajouter ici une courte présentation personnelle (parcours, spécialités) et une photo réelle. */}
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {principles.map((p) => (
              <li key={p.title} className="py-6">
                <h3 className="text-h3 font-bold">{p.title}</h3>
                <p className="mt-2 text-ink-soft">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ComeupSection />
      <CtaBand />
    </>
  );
}
