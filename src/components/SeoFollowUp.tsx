import Link from "next/link";
import { FeatureCards, type Feature } from "./FeatureCards";

const levels: Feature[] = [
  {
    icon: "browser",
    scope: "Prestation ponctuelle",
    title: "Création de site web",
    text: "Conception du site avec le SEO on-page inclus dès le départ.",
    href: "/creation-site-web-abidjan",
    cta: "Voir la création de sites",
  },
  {
    icon: "pin",
    scope: "Optimisation initiale",
    title: "Visibilité locale sur Google",
    text: "Optimisation de Google Business Profile et référencement local.",
    href: "/seo-referencement-local",
    cta: "Voir la fiche Google",
  },
  {
    icon: "refresh",
    scope: "Prestation récurrente",
    title: "Accompagnement SEO mensuel",
    text: "Suivi, analyse et amélioration continue de la visibilité.",
    href: "/seo-referencement-local#accompagnement-mensuel",
    cta: "Voir l'accompagnement",
  },
];

/** Accueil : accompagnement après la livraison du site (trois niveaux de service). */
export function SeoFollowUp() {
  return (
    <section className="border-y border-line bg-mist">
      <div className="container-page section">
        <div className="max-w-3xl">
          <h2 className="text-h2">Votre site est en ligne. Continuons à développer votre visibilité sur Google.</h2>
          <p className="prose-measure mt-5 text-lg text-ink-soft">
            La création de votre site internet est une première étape. Pour attirer durablement de nouveaux clients, DigiProspect Agency vous accompagne également dans le développement de votre visibilité locale grâce à l'optimisation de votre fiche Google Business Profile et à des actions de référencement local continues.
          </p>
        </div>
        <div className="mt-10"><FeatureCards items={levels} cols={3} /></div>
        <p className="prose-measure mt-6 text-ink-soft">
          Le référencement local peut aussi être proposé sans création de site, aux entreprises qui ont déjà le leur ou qui souhaitent simplement optimiser leur fiche Google.
        </p>
        <div className="mt-8">
          <Link href="/seo-referencement-local#accompagnement-mensuel" className="btn btn-primary">Découvrir notre accompagnement SEO local</Link>
        </div>
      </div>
    </section>
  );
}
