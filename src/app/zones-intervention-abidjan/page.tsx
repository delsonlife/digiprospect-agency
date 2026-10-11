import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { communes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zones desservies à Abidjan",
  description: "DigiProspect Agency accompagne les entreprises des communes d'Abidjan : Cocody, Marcory, Yopougon, Plateau, Abobo et les autres communes du district.",
  alternates: { canonical: "/zones-intervention-abidjan" },
};

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Zones desservies", href: "/zones-intervention-abidjan" }]}
        title="Entreprises accompagnées dans les communes d'Abidjan"
        intro="Le service est le même quelle que soit la commune où se trouve votre entreprise. Voici les communes du district d'Abidjan concernées."
      />
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="text-h2">Communes concernées</h2>
            <ul className="mt-8 grid grid-cols-2 gap-x-8 sm:grid-cols-3">
              {communes.map((c) => (
                <li key={c} className="border-b border-line py-3 font-semibold">{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Pourquoi une seule page pour toutes les communes</h2>
            <p className="prose-measure mt-4 text-ink-soft">
              Créer une page presque identique par commune n'aiderait ni les visiteurs ni le référencement. Une page locale n'a de sens que si elle apporte des informations propres à la zone, et elle sera ajoutée le jour où ce sera le cas.
            </p>
            <p className="prose-measure mt-4 text-ink-soft">
              Pour votre entreprise, ce qui compte est la clientèle que vous voulez toucher : c'est ce que nous définissons ensemble lors du cadrage d'un site ou d'une démarche de <Link href="/seo-referencement-local" className="link-underline">référencement local</Link>.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
