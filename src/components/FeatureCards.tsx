import Link from "next/link";
import { Icon, type IconName } from "./Icon";

export type Feature = {
  icon: IconName;
  title: string;
  text: string;
  /** Petite étiquette au-dessus du titre (type de prestation, de canal…). */
  scope?: string;
  /** Phrase de contexte affichée en bas de carte, après un filet. */
  hint?: string;
  /** Lien de la carte (page de service par exemple). */
  href?: string;
  cta?: string;
  /** Plusieurs liens en bas de carte (à la place de href/cta). */
  links?: { label: string; href: string }[];
};

const scopeStyle: Record<string, string> = {
  "Optimisation initiale": "text-orange-deep",
  Conseils: "text-ink-soft",
  "Prestation ponctuelle": "text-ink-soft",
  "Prestation récurrente": "text-green-deep",
  Suivi: "text-green-deep",
  Analyse: "text-orange-deep",
  Stratégie: "text-orange-deep",
  "Mise en place": "text-ink-soft",
  "Publicité payante": "text-orange-deep",
  "Canal de vente": "text-green-deep",
  "Visibilité locale": "text-green-deep",
  "Présence en ligne": "text-ink-soft",
};

const columns = {
  2: "md:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

/**
 * Grille de cartes avec icône, titre court et description. À utiliser sur fond clair (gris ou blanc).
 * `compact` : lignes plus basses (icône à gauche), pour des listes d'informations courtes.
 */
export function FeatureCards({ items, cols = 3, compact = false }: { items: Feature[]; cols?: 2 | 3 | 4; compact?: boolean }) {
  return (
    <ul className={`grid gap-4 ${columns[cols]}`}>
      {items.map((c) =>
        compact ? (
          <li key={c.title} className="flex items-start gap-4 rounded-xl border border-line bg-white p-4 text-ink">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-white"><Icon name={c.icon} size={20} /></span>
            <div>
              <h3 className="text-lg font-bold leading-snug">{c.title}</h3>
              <p className="mt-1 text-[length:var(--text-small)] leading-snug text-ink-soft">{c.text}</p>
            </div>
          </li>
        ) : (
          <li key={c.title} className="flex flex-col rounded-2xl border border-line bg-white p-5 sm:p-6 text-ink">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-white"><Icon name={c.icon} size={20} /></span>
              <div className="min-w-0">
                {c.scope && <p className={`text-sm font-semibold leading-tight ${scopeStyle[c.scope] ?? "text-ink-soft"}`}>{c.scope}</p>}
                <h3 className="text-lg font-bold leading-snug sm:text-xl">{c.title}</h3>
              </div>
            </div>
            <p className="mt-3 text-[length:var(--text-small)] leading-snug text-ink-soft">{c.text}</p>
            {c.hint && <p className="mt-4 border-t border-line pt-3 text-[length:var(--text-small)] leading-snug">{c.hint}</p>}
            {c.links && (
              <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-4">
                {c.links.map((l) => (
                  <Link key={l.href} href={l.href} className="link-underline inline-block font-semibold">{l.label}</Link>
                ))}
              </div>
            )}
            {c.href && (
              <Link href={c.href} className="link-underline mt-auto inline-block pt-4 font-semibold">{c.cta ?? "En savoir plus"}</Link>
            )}
          </li>
        ),
      )}
    </ul>
  );
}
