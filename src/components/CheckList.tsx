import { Icon } from "./Icon";

/** Liste à puces vertes, sur une ou deux colonnes. */
export function CheckList({ items, twoCols = true }: { items: string[]; twoCols?: boolean }) {
  return (
    <ul className={`grid gap-x-10 gap-y-3 ${twoCols ? "md:grid-cols-2" : ""}`}>
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <Icon name="check" size={18} strokeWidth={3} className="mt-1.5 shrink-0 text-green-deep" />
          <span className="text-[length:var(--text-small)] leading-snug">{i}</span>
        </li>
      ))}
    </ul>
  );
}
