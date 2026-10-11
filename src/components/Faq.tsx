import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import type { Faq as FaqItem } from "@/content/services";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <>
      <div className="divide-y divide-line border-y border-line">
        {items.map((item) => (
          <details key={item.q} className="group py-1">
            <summary className="flex min-h-14 items-center justify-between gap-6 py-4 text-lg font-semibold">
              <span>{item.q}</span>
              <Icon name="plus" className="faq-icon shrink-0 text-orange-deep" />
            </summary>
            <p className="prose-measure pb-5 pr-10 text-ink-soft">{item.a}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((i) => ({
            "@type": "Question",
            name: i.q,
            acceptedAnswer: { "@type": "Answer", text: i.a },
          })),
        }}
      />
    </>
  );
}
