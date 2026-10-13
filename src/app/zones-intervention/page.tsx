import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { communes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zones d'intervention : Côte d'Ivoire et à distance",
  description:
    "DigiProspect Agency accompagne les entreprises d'Abidjan et de toute la Côte d'Ivoire et, à distance, les entreprises situées à l'étranger.",
  alternates: { canonical: "/zones-intervention" },
};

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Zones d'intervention", href: "/zones-intervention" }]}
        title="Des services web accessibles où que se trouve votre entreprise"
        intro="Que votre entreprise soit située à Abidjan, ailleurs en Côte d'Ivoire ou à l'étranger, DigiProspect Agency peut vous accompagner dans vos projets de création de sites web, de boutiques en ligne et de référencement. Selon vos besoins, les échanges et le suivi peuvent se faire à distance ou lors de rendez-vous convenus à l'avance."
        image={{ src: "/images/zones-intervention-schema-reseau.svg", alt: "Schéma abstrait de points reliés représentant des zones d'intervention, sans valeur cartographique" }}
      />
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-3 lg:gap-14">
          <div>
            <h2 className="text-h3 font-bold">À Abidjan</h2>
            <p className="mt-3 text-ink-soft">Les entreprises des différentes communes peuvent demander un accompagnement :</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6">
              {communes.map((c) => (
                <li key={c} className="border-b border-line py-2 font-semibold">{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Partout en Côte d'Ivoire</h2>
            <p className="mt-3 text-ink-soft">
              Les entreprises situées dans les autres villes et régions peuvent également être accompagnées, principalement à distance, avec des échanges organisés selon les besoins du projet.
            </p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">À l'international</h2>
            <p className="mt-3 text-ink-soft">
              Les entreprises situées hors de Côte d'Ivoire peuvent aussi solliciter les services de DigiProspect Agency. Le projet peut être suivi à distance.
            </p>
          </div>
        </div>
        <div className="container-page mt-12">
          <p className="prose-measure border-t border-line pt-6 text-ink-soft">
            Les modalités d'échange dépendent de votre localisation et sont convenues avec vous avant le début du projet.
          </p>
        </div>
      </section>
      <CtaBand
        title="Un projet en tête ? Parlons-en."
        text="Présentez votre activité et votre besoin. Nous pourrons échanger sur votre projet, les solutions envisageables et les prochaines étapes."
        waMessage="Bonjour, je souhaite échanger sur un projet de site web ou de visibilité en ligne."
      />
    </>
  );
}
