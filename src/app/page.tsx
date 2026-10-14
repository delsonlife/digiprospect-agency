import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ComeupSection } from "@/components/ComeupSection";
import { Faq } from "@/components/Faq";
import { HeroIllustration } from "@/components/HeroIllustration";
import { Icon, type IconName } from "@/components/Icon";
import { ProjectCard } from "@/components/ProjectCard";
import { ReviewsSection } from "@/components/ReviewsSection";
import { projects } from "@/content/projects";
import { homeFaq, services } from "@/content/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Agence web à Abidjan et en Côte d'Ivoire | Sites, e-commerce, SEO" },
  description:
    "Agence web à Abidjan et en Côte d'Ivoire : création de site web, boutique en ligne et référencement local pour entreprises. Demandez un devis pour un site clair, rapide et adapté au mobile.",
  alternates: { canonical: "/" },
};

const serviceIcons: IconName[] = ["browser", "cart", "search"];

const method = [
  { title: "Échange et cadrage", text: "Vous décrivez votre activité et votre objectif. Le cadrage fixe ce qui est utile, et ce qui peut attendre." },
  { title: "Proposition écrite", text: "Pages, fonctionnalités, contenus à fournir et prix : tout est posé avant de commencer." },
  { title: "Réalisation et validation", text: "Vous voyez le travail avancer et validez chaque étape avant la mise en ligne." },
  { title: "Mise en ligne et suivi", text: "Mise en ligne, vérifications avant l'ouverture, déclaration du site à Google, puis ajustements." },
];

const included = [
  "Version mobile pensée en premier",
  "Titres, descriptions et structure prêts pour le référencement",
  "Formulaire de contact qui vous envoie les demandes par e-mail",
  "Bouton WhatsApp et liens de contact visibles",
  "Mentions légales et politique de confidentialité",
  "Aperçu soigné lors du partage du site et suivi de sa visibilité avec Google Search Console",
];

export default function HomePage() {
  const featured = projects.slice(0, 3);
  return (
    <>
      <section className="overflow-hidden">
        <div className="container-page grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <p className="hero-draw flex items-center gap-3 text-[0.95rem] font-semibold text-ink-soft">
              <span className="tricolor-sm" aria-hidden="true" />
              {site.name}
            </p>
            <h1 className="hero-draw mt-6 text-hero">
              Agence web à Abidjan et en Côte d'Ivoire : donnez à votre entreprise une présence en ligne qui inspire confiance
            </h1>
            <p className="hero-draw prose-measure mt-6 text-lg text-ink-soft sm:text-xl">
              Des sites web professionnels, des boutiques en ligne et du référencement local pour aider votre entreprise à mieux présenter ses services et à développer sa visibilité.
            </p>
            <div className="hero-draw mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">Demander un devis</Link>
              <Link href={featured.length ? "/realisations" : "#services"} className="btn btn-secondary">
                {featured.length ? "Voir les réalisations" : "Découvrir les services"}
              </Link>
            </div>
          </div>
          <div className="relative rounded-3xl bg-mist px-6 pb-8 pt-10 sm:px-10">
            <div className="tricolor absolute inset-x-0 top-0 rounded-t-3xl" />
            <HeroIllustration />
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-line bg-mist">
        <div className="container-page section grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-h2">Trois services, chacun avec un objectif précis</h2>
            <p className="prose-measure mt-5 text-ink-soft">
              Pas de catalogue interminable : seulement ce que l'agence peut réaliser et suivre sérieusement.
            </p>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link href={s.path} className="group grid gap-4 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white group-hover:bg-orange">
                    <Icon name={serviceIcons[i]} />
                  </span>
                  <span>
                    <span className="block font-display text-2xl font-bold group-hover:text-orange-deep">{s.name}</span>
                    <span className="prose-measure mt-2 block text-ink-soft">{s.short}</span>
                    <span className="link-underline mt-4 inline-block font-semibold">Voir le détail du service</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
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

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-h2">Chaque projet repose sur les mêmes bases</h2>
            <p className="prose-measure mt-5 text-ink-soft">
              Ce qui compte pour vos visiteurs et pour votre visibilité en ligne est prévu dès le départ, pas ajouté après coup. Le contenu exact de chaque projet est précisé dans le devis.
            </p>
          </div>
          <ul className="space-y-4">
            {included.map((item) => (
              <li key={item} className="flex gap-4 border-b border-line pb-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-deep text-white"><Icon name="check" size={16} strokeWidth={3} /></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-page section">
          <h2 className="max-w-2xl text-h2">Comment se déroule un projet</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {method.map((m, i) => (
              <li key={m.title} className="border-t-4 border-orange pt-5 odd:border-orange even:border-green">
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
            <h2 className="text-h2">Des services web accessibles où que se trouve votre entreprise</h2>
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

      <CtaBand />
    </>
  );
}
