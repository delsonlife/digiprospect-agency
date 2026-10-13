import { Icon } from "./Icon";
import { comeup } from "@/content/comeup";

export function ComeupSection() {
  return (
    <section className="section">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:gap-20">
        <div>
          <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white sm:p-10">
            <div className="tricolor absolute inset-x-0 top-0" />
            <p className="font-display text-[clamp(3.5rem,9vw,6rem)] font-bold leading-none">{comeup.figure}</p>
            <p className="mt-4 text-lg text-white/75">{comeup.figureLabel}</p>
            <dl className="mt-8 border-t border-white/15 pt-6">
              {comeup.stats.map((s) => (
                <div key={s.label}>
                  <dd className="font-display text-3xl font-bold">{s.value}</dd>
                  <dt className="mt-1 text-sm text-white/65">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-4 text-sm text-ink-soft">{comeup.source}</p>
        </div>
        <div>
          <h2 className="text-h2">{comeup.title}</h2>
          <div className="prose-measure mt-5 space-y-4 text-lg text-ink-soft">
            {comeup.text.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
          </div>
          <a href={comeup.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8 w-full sm:w-auto">
            <Icon name="link" size={20} /> {comeup.button}<span className="sr-only"> (nouvel onglet)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
