import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { GbpResults } from "@/components/GbpResults";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Réalisations : sites web et fiches Google",
  description: "Sites web, boutiques en ligne et fiches Google optimisées pour des entreprises en Côte d'Ivoire et à l'international : YEDEI, Medilo, Mondial Tempo.",
  path: "/realisations",
});

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Réalisations", href: "/realisations" }]}
        title="Réalisations"
        intro="Une sélection de sites, de boutiques en ligne et de fiches Google optimisées, réalisés pour des entreprises et des structures de secteurs variés."
      />
      <section className="section">
        <div className="container-page">
          {projects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => <ProjectCard key={p.slug} project={p} headingLevel="h2" priority={i === 0} />)}
            </div>
          ) : (
            <div className="max-w-2xl">
              <h2 className="text-h3 font-bold">Les projets sont en cours de publication</h2>
              <p className="mt-4 text-lg text-ink-soft">
                Les réalisations de DigiProspect Agency proviennent de son activité sur ComeUp. Cette page présentera chaque projet avec sa capture, son type de mission et, lorsque le client l'accepte, le lien vers le site en ligne. En attendant, vous pouvez demander des exemples de travaux précis à votre secteur.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappLink("Bonjour, pouvez-vous me montrer des exemples de projets réalisés ?")} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <Icon name="whatsapp" size={22} /> Demander des exemples
                </a>
                {site.comeup && (
                  <a href={site.comeup} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Voir le profil ComeUp</a>
                )}
                <Link href="/contact" className="btn btn-secondary">Demander un devis</Link>
              </div>
            </div>
          )}
        </div>
      </section>
      <GbpResults mist id="fiches-google" />
      <CtaBand />
    </>
  );
}
