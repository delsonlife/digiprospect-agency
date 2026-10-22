import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { FeatureCards } from "@/components/FeatureCards";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { acquisition as a } from "@/content/acquisition";
import { pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ title: a.title, description: a.description, path: a.path, absoluteTitle: true });

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: a.name, href: a.path }]} title={a.h1} intro={a.intro} image={a.image}>
        <Link href={`/contact?service=${a.slug}`} className="btn btn-primary">{a.quoteLabel}</Link>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:gap-20">
          <div>
            <h2 className="text-h2">{a.stakeTitle}</h2>
            <p className="prose-measure mt-5 text-lg text-ink-soft">{a.stakeText}</p>
            <p className="prose-measure mt-6 border-l-4 border-orange pl-5 text-ink-soft">{a.stakeNote}</p>
          </div>
          <FeatureCards items={a.stake} cols={2} compact />
        </div>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="container-page section">
          <div className="max-w-3xl">
            <h2 className="text-h2">{a.leversTitle}</h2>
            <p className="prose-measure mt-5 text-lg text-ink-soft">{a.leversIntro}</p>
          </div>
          <div className="mt-10"><FeatureCards items={a.levers} cols={3} /></div>
          <p className="prose-measure mt-8 text-ink-soft">{a.leversNote}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-h2">{a.fitTitle}</h2>
            <div className="prose-measure mt-5 space-y-4 text-lg text-ink-soft">
              {a.fitText.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
            <p className="prose-measure mt-6 border-l-4 border-green pl-5 text-ink-soft">{a.fitHonesty}</p>
          </div>
          <div className="self-center rounded-3xl bg-mist p-8 sm:p-10">
            <h3 className="text-h3 font-bold">{a.fitListTitle}</h3>
            <ul className="mt-5 space-y-4">
              {a.fitList.map((i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange text-ink"><Icon name="check" size={16} strokeWidth={3} /></span>
                  <span className="text-lg">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="container-page section">
          <h2 className="text-h2">{a.includesTitle}</h2>
          <div className="mt-10"><FeatureCards items={a.includes} cols={3} /></div>
          <p className="prose-measure mt-6 text-sm text-ink-soft">{a.includesNote}</p>
          <div className="mt-8 rounded-2xl border-l-4 border-orange bg-white p-6">
            <h3 className="text-lg font-bold">{a.budgetTitle}</h3>
            <p className="prose-measure mt-2 text-ink-soft">{a.budgetText}</p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-page section">
          <h2 className="max-w-2xl text-h2">{a.stepsTitle}</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            {a.steps.map((s, i) => (
              <li key={s.title} className={`border-t-4 pt-5 ${i % 2 === 0 ? "border-orange" : "border-green"}`}>
                <p className="font-display text-4xl font-bold text-white/30" aria-hidden="true">{i + 1}</p>
                <h3 className="mt-2 text-h3 font-bold">{s.title}</h3>
                <p className="mt-3 text-white/75">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="text-h2">{a.neededTitle}</h2>
          <div className="mt-10"><FeatureCards items={a.needed} cols={3} compact /></div>
          <p className="prose-measure mt-6 text-sm text-ink-soft">{a.neededNote}</p>
        </div>
      </section>

      <section className="border-t border-line bg-mist">
        <div className="container-page section grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
          <h2 className="text-h2">{a.faqTitle}</h2>
          <Faq items={a.faq} />
        </div>
      </section>

      <CtaBand
        title={a.ctaTitle}
        text={a.ctaText}
        waMessage={a.waMessage}
        primaryLabel={a.quoteLabel}
        primaryHref={`/contact?service=${a.slug}`}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: a.name,
          description: a.description,
          url: `${SITE_URL}${a.path}`,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "Country", name: "Côte d'Ivoire" },
          serviceType: a.name,
        }}
      />
    </>
  );
}
