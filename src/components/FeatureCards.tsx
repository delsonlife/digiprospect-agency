import { Icon, type IconName } from "./Icon";

export type Feature = { icon: IconName; title: string; text: string; scope?: string };

const scopeStyle: Record<string, string> = {
  "Optimisation initiale": "text-orange-deep",
  Conseils: "text-ink-soft",
  Suivi: "text-green-deep",
};

const columns = {
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

/** Grille de cartes avec icône, titre court et description. À utiliser sur fond clair (gris ou blanc). */
export function FeatureCards({ items, cols = 3 }: { items: Feature[]; cols?: 3 | 4 }) {
  return (
    <ul className={`grid gap-5 ${columns[cols]}`}>
      {items.map((c) => (
        <li key={c.title} className="flex flex-col rounded-2xl border border-line bg-white p-6">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white"><Icon name={c.icon} /></span>
          {c.scope && <p className={`mt-5 text-sm font-semibold ${scopeStyle[c.scope] ?? "text-ink-soft"}`}>{c.scope}</p>}
          <h3 className={`${c.scope ? "mt-1" : "mt-5"} text-xl font-bold`}>{c.title}</h3>
          <p className="mt-3 text-[1.05rem] text-ink-soft">{c.text}</p>
        </li>
      ))}
    </ul>
  );
}
