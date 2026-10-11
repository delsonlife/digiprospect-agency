import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={project.image} alt={project.imageAlt ?? `Aperçu du projet ${project.name}`} loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover" />
      ) : (
        <div className="aspect-[16/10] w-full bg-mist" aria-hidden="true" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-orange-deep">{project.type}</p>
        <h3 className="mt-1 text-h3 font-bold">{project.name}</h3>
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
