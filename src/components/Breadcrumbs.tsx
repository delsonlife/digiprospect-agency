import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { SITE_URL } from "@/lib/site";

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  const all = [{ name: "Accueil", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Fil d'Ariane" className="text-sm text-ink-soft">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((item, i) => (
            <li key={item.href} className="flex items-center gap-2">
              {i < all.length - 1 ? (
                <>
                  <Link href={item.href} className="hover:text-ink link-underline">{item.name}</Link>
                  <span aria-hidden="true">/</span>
                </>
              ) : (
                <span aria-current="page" className="text-ink">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: `${SITE_URL}${item.href === "/" ? "" : item.href}`,
          })),
        }}
      />
    </>
  );
}
