import type { Project } from "@/content/projects";

export function ProjectCard({ project, headingLevel = "h3", priority = false }: { project: Project; headingLevel?: "h2" | "h3"; priority?: boolean }) {
  const Heading = headingLevel;
  const small = project.image?.replace(/\.webp$/, "-640.webp");
  const medium = project.image?.replace(/\.webp$/, "-800.webp");
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={project.image} srcSet={`${small} 640w, ${medium} 800w, ${project.image} 1200w`} sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw" alt={project.imageAlt ?? `Aperçu du projet ${project.name}`} width={1200} height={560} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" className="aspect-[21/10] w-full border-b border-line object-cover object-left-top" />
      ) : (
        <div className="aspect-[21/10] w-full bg-mist" aria-hidden="true" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-orange-deep">{project.type}</p>
        <Heading className="mt-1 text-h3 font-bold">{project.name}</Heading>
        <p className="mt-3 text-ink-soft">{project.summary}</p>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="link-underline mt-5 font-semibold">
            Voir le site en ligne<span className="sr-only"> (nouvel onglet)</span>
          </a>
        )}
      </div>
    </article>
  );
}
