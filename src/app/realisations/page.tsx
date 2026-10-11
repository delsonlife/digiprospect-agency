import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Réalisations : sites web et projets digitaux",
  description: "Projets réalisés par DigiProspect Agency : sites web, boutiques en ligne et missions de référencement pour des entreprises à Abidjan.",
  alternates: { canonical: "/realisations" },
};

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Réalisations", href: "/realisations" }]}
        title="Réalisations"
        intro="Des projets réels, présentés pour ce qu'ils sont : le travail effectué pour le client, sans chiffres inventés."
      />
      <section className="section">
        <div className="container-page">
          {projects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          ) : (
            <div className="max-w-2xl">
              <h2 className="text-h3 font-bold">Les projets sont en cours de publication</h2>
              <p className="mt-4 text-lg text-ink-soft">
                Cette page présentera chaque projet avec sa capture, son type de mission et, lorsque le client l'accepte, le lien vers le site en ligne. En attendant, vous pouvez demander des exemples de travaux précis à votre secteur.
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
      <CtaBand />
    </>
  );
}
