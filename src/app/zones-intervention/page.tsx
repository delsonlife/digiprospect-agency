import type { Metadata } from "next";
import Link from "next/link";
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
        title="Un service ouvert à toute la Côte d'Ivoire et à l'international"
        intro="Les projets se mènent à Abidjan et partout en Côte d'Ivoire, et à distance pour les entreprises situées à l'étranger."
        image={{ src: "/images/zones-intervention-schema-reseau.svg", alt: "Schéma abstrait de points reliés représentant des zones d'intervention, sans valeur cartographique" }}
      />
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-3 lg:gap-14">
          <div>
            <h2 className="text-h3 font-bold">À Abidjan</h2>
            <p className="mt-3 text-ink-soft">Toutes les communes du district sont concernées :</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6">
              {communes.map((c) => (
                <li key={c} className="border-b border-line py-2 font-semibold">{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Dans le reste de la Côte d'Ivoire</h2>
            <p className="mt-3 text-ink-soft">
              Toutes les villes et régions du pays peuvent être accompagnées. Les échanges se planifient selon votre disponibilité, par WhatsApp, par téléphone ou en rendez-vous lorsque cela est utile.
            </p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">À distance, à l'international</h2>
            <p className="mt-3 text-ink-soft">
              Une entreprise située hors de Côte d'Ivoire peut aussi confier son site, sa boutique ou son référencement. Le projet se déroule alors à distance, avec les mêmes étapes et la même exigence.
            </p>
          </div>
        </div>
      </section>
      <section className="border-t border-line bg-mist">
        <div className="container-page section grid gap-8 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
          <h2 className="text-h2">Pourquoi une seule page pour toutes les zones</h2>
          <div>
            <p className="prose-measure text-ink-soft">
              Créer une page presque identique par ville ou par commune n'aiderait ni les visiteurs ni le référencement. Une page locale n'a de sens que si elle apporte des informations propres à la zone, et elle sera ajoutée le jour où ce sera le cas.
            </p>
            <p className="prose-measure mt-4 text-ink-soft">
              Pour votre entreprise, ce qui compte est la clientèle que vous voulez toucher : c'est ce que définit le cadrage d'un site ou d'une démarche de <Link href="/seo-referencement-local" className="link-underline">référencement local</Link>.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
