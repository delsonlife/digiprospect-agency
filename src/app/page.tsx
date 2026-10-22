import type { Metadata } from "next";
import Link from "next/link";
import { ComeupSection } from "@/components/ComeupSection";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { FeatureCards, type Feature } from "@/components/FeatureCards";
import { HeroLevers } from "@/components/HeroLevers";
import { type IconName } from "@/components/Icon";
import { ProjectCard } from "@/components/ProjectCard";
import { ReviewsSection } from "@/components/ReviewsSection";
import { projects } from "@/content/projects";
import { homeFaq, services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Agence web à Abidjan | Visibilité et acquisition de clients",
  description: "Agence web à Abidjan : site internet, fiche Google, publicité Facebook, Instagram et TikTok pour développer votre visibilité en Côte d'Ivoire.",
  path: "/",
  absoluteTitle: true,
});

const AUDIT_HREF = "/contact?service=audit";

const serviceIcons: Record<string, IconName> = {
  "creation-site-web": "browser",
  "creation-site-ecommerce": "cart",
  "seo-referencement-local": "pin",
  "acquisition-clients": "megaphone",
};

const levers = [
  "Comprendre l'activité, les produits ou les services et les objectifs.",
  "Identifier les canaux qui méritent d'être privilégiés.",
  "Définir les prochaines actions en tenant compte du budget et des priorités.",
];

const approach: Feature[] = [
  { icon: "search", title: "Comprendre votre activité", text: "Connaître les produits, les services et les clients visés." },
  { icon: "grid", title: "Choisir les bons leviers", text: "Privilégier les solutions cohérentes avec les objectifs et le budget." },
  { icon: "check", title: "Mettre en œuvre les actions utiles", text: "Réaliser les prestations retenues, sans ajouter des services inutiles." },
  { icon: "refresh", title: "Suivre et ajuster", text: "Examiner les données disponibles et apporter des améliorations lorsque cela est pertinent." },
];

const process = [
  { title: "Échange", text: "Discussion sur votre activité et compréhension de vos objectifs." },
  { title: "Analyse", text: "Analyse de vos besoins et recommandations." },
  { title: "Proposition", text: "Présentation des actions envisagées et validation de celles que vous retenez." },
  { title: "Mise en œuvre", text: "Réalisation des prestations convenues." },
  { title: "Suivi", text: "Suivi ou recommandations complémentaires, selon la formule." },
];

export default function HomePage() {
  const featured = projects.slice(0, 3);
  const serviceCards: Feature[] = services.map((s) => ({
    icon: serviceIcons[s.slug] ?? "check",
    title: s.name,
    text: s.short,
    href: s.path,
    cta: "Voir le détail",
  }));
  return (
    <>
      <section className="overflow-hidden">
        <div className="container-page grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <p className="flex items-center gap-3 text-[1.05rem] font-semibold text-ink-soft">
              <span className="tricolor-sm" aria-hidden="true" />
              Agence web à Abidjan et en Côte d'Ivoire
            </p>
            <h1 className="mt-6 text-hero">Développez votre visibilité et trouvez de nouveaux clients en Côte d'Ivoire</h1>
            <p className="prose-measure mt-6 text-lg text-ink-soft sm:text-xl">
              Site web, fiche Google, publicité sur Facebook, Instagram ou TikTok : chaque entreprise a des besoins différents. DigiProspect Agency vous aide à identifier les solutions adaptées à votre activité et à mettre en place une stratégie cohérente avec vos objectifs.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={AUDIT_HREF} className="btn btn-primary">Demander un audit découverte</Link>
              <Link href="#services" className="btn btn-secondary">Découvrir nos services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl bg-mist px-6 pb-8 pt-10 sm:px-10">
            <div className="tricolor absolute inset-x-0 top-0 rounded-t-3xl" />
            <HeroLevers />
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-line bg-mist">
        <div className="container-page section">
          <div className="max-w-3xl">
            <h2 className="text-h2">Les solutions adaptées à votre activité</h2>
            <p className="prose-measure mt-5 text-lg text-ink-soft">
              Nous sélectionnons les leviers les plus pertinents selon ce que vous proposez, les clients que vous souhaitez atteindre et vos objectifs commerciaux.
            </p>
          </div>
          <div className="mt-10"><FeatureCards items={serviceCards} cols={2} /></div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <h2 className="text-h2">Quels leviers pour développer votre activité ?</h2>
            <p className="prose-measure mt-5 text-lg text-ink-soft">
              Avant de vous recommander une prestation, nous cherchons à comprendre votre activité, votre clientèle et vos objectifs. Selon votre situation, la priorité peut être une fiche Google mieux optimisée, des campagnes publicitaires sur les réseaux sociaux, un site web ou une combinaison de plusieurs solutions.
            </p>
            <div className="mt-8">
              <Link href={AUDIT_HREF} className="btn btn-primary">Demander un audit découverte</Link>
            </div>
          </div>
          <ol className="space-y-5 self-center">
            {levers.map((t, i) => (
              <li key={t} className="flex gap-5 border-b border-line pb-5">
                <span className="w-9 shrink-0 font-display text-4xl font-bold text-orange-deep" aria-hidden="true">{i + 1}</span>
                <span className="text-lg">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="container-page section">
          <div className="max-w-3xl">
            <h2 className="text-h2">Une stratégie adaptée à votre réalité</h2>
            <p className="prose-measure mt-5 text-lg text-ink-soft">Une méthode de travail simple, quelle que soit la prestation.</p>
          </div>
          <div className="mt-10"><FeatureCards items={approach} cols={4} /></div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="section">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-h2">Réalisations</h2>
              <Link href="/realisations" className="link-underline font-semibold">Toutes les réalisations</Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {featured.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          </div>
        </section>
      )}

      <ComeupSection />

      <ReviewsSection />

      <section className="bg-ink text-white">
        <div className="container-page section">
          <h2 className="max-w-2xl text-h2">Comment se déroule l'accompagnement</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            {process.map((m, i) => (
              <li key={m.title} className={`border-t-4 pt-5 ${i % 2 === 0 ? "border-orange" : "border-green"}`}>
                <p className="font-display text-4xl font-bold text-white/30" aria-hidden="true">{i + 1}</p>
                <h3 className="mt-2 text-h3 font-bold">{m.title}</h3>
                <p className="mt-3 text-white/75">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="container-page section grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="text-h2">Des services accessibles où que se trouve votre entreprise</h2>
            <p className="prose-measure mt-5 text-ink-soft">
              DigiProspect Agency accompagne des entreprises à Abidjan, dans toutes les villes et régions du pays, et à distance pour celles situées à l'étranger.
            </p>
            <Link href="/zones-intervention" className="link-underline mt-6 inline-block font-semibold">Voir les zones d'intervention</Link>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {["Abidjan et toutes ses communes", "Les autres villes et régions de Côte d'Ivoire", "À distance, pour les entreprises hors du pays"].map((z, i) => (
              <li key={z} className="flex items-center gap-4 py-5 text-lg font-semibold">
                <span aria-hidden="true" className={`h-3 w-3 shrink-0 rounded-full ${i === 1 ? "bg-green" : i === 0 ? "bg-orange" : "bg-ink"}`} />
                {z}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
          <h2 className="text-h2">Questions fréquentes</h2>
          <Faq items={homeFaq} />
        </div>
      </section>

      <CtaBand
        title="Parlons de votre projet"
        text="Présentez votre activité et vos objectifs. Vous recevez une réponse claire sur les solutions possibles et sur la suite."
        waMessage="Bonjour, je souhaite un audit découverte pour développer ma visibilité et trouver de nouveaux clients."
        primaryLabel="Demander un audit découverte"
        primaryHref={AUDIT_HREF}
      />
    </>
  );
}
