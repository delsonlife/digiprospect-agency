import Link from "next/link";
import { Icon } from "./Icon";
import { comeup } from "@/content/comeup";
import { site } from "@/lib/site";

export function ComeupSection({ showAboutLink = true }: { showAboutLink?: boolean }) {
  return (
    <section className="section">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:gap-20">
        <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white sm:p-10">
          <div className="tricolor absolute inset-x-0 top-0" />
          <p className="font-display text-[clamp(3.5rem,9vw,6rem)] font-bold leading-none">{comeup.figure}</p>
          <p className="mt-4 text-lg text-white/75">{comeup.figureLabel}</p>
          <p className="mt-6 border-t border-white/15 pt-5 text-sm text-white/60">
            Des services variés : la création de sites web n'en représente qu'une partie.
          </p>
        </div>
        <div>
          <h2 className="text-h2">{comeup.title}</h2>
          <div className="prose-measure mt-5 space-y-4 text-lg text-ink-soft">
            {comeup.text.map((t) => <p key={t.slice(0, 20)}>{t}</p>)}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {site.comeup && (
              <a href={site.comeup} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Icon name="link" size={20} /> Voir le profil ComeUp<span className="sr-only"> (nouvel onglet)</span>
              </a>
            )}
            {showAboutLink && <Link href="/a-propos" className="btn btn-secondary">Découvrir l'agence</Link>}
          </div>
        </div>
      </div>
    </section>
  );
}
