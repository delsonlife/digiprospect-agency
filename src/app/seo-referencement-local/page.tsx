import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FeatureCards } from "@/components/FeatureCards";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { gbp } from "@/content/gbp";
import { SITE_URL, whatsappMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: gbp.title,
  description: gbp.description,
  alternates: { canonical: gbp.path },
  openGraph: { title: gbp.title, description: gbp.description, url: gbp.path },
};

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Fiche Google Business Profile", href: gbp.path }]} title={gbp.h1} intro={gbp.intro} image={gbp.image}>
        <Link href={`/contact?service=${gbp.slug}`} className="btn btn-primary">{gbp.quoteLabel}</Link>
        <Link href="/contact" className="btn btn-secondary">Demander un devis</Link>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <h2 className="text-h2">{gbp.whyTitle}</h2>
            <div className="prose-measure mt-5 space-y-4 text-lg text-ink-soft">
              {gbp.why.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
          </div>
          <ul className="space-y-4 self-center">
            {gbp.whyPoints.map((b) => (
              <li key={b} className="flex gap-4 border-b border-line pb-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-deep text-white"><Icon name="check" size={16} strokeWidth={3} /></span>
                <span className="text-lg">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="container-page section">
          <h2 className="text-h2">{gbp.cardsTitle}</h2>
          <div className="mt-10"><FeatureCards items={gbp.cards} cols={4} /></div>
          <p className="prose-measure mt-8 text-sm text-ink-soft">{gbp.cardsNote}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="text-h2">{gbp.followTitle}</h2>
            <p className="prose-measure mt-5 text-lg text-ink-soft">{gbp.followText}</p>
            <p className="prose-measure mt-6 border-l-4 border-orange pl-5 text-ink-soft">{gbp.followHonesty}</p>
          </div>
          <div className="rounded-3xl bg-mist p-8 sm:p-10">
            <h3 className="text-h3 font-bold">{gbp.followListTitle}</h3>
            <ul className="mt-5 space-y-4">
              {gbp.followList.map((i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange text-ink"><Icon name="check" size={16} strokeWidth={3} /></span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-page section">
          <h2 className="max-w-2xl text-h2">{gbp.stepsTitle}</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {gbp.steps.map((s, i) => (
              <li key={s.title} className={`border-t-4 pt-5 ${i % 2 === 0 ? "border-orange" : "border-green"}`}>
                <p className="font-display text-4xl font-bold text-white/30" aria-hidden="true">{i + 1}</p>
                <h3 className="mt-2 text-h3 font-bold">{s.title}</h3>
                <p className="mt-3 text-white/75">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/15 p-7">
              <h3 className="text-h3 font-bold">{gbp.needed.title}</h3>
              <ul className="mt-4 space-y-3 text-white/80">
                {gbp.needed.items.map((n) => (
                  <li key={n} className="flex gap-3"><Icon name="check" size={20} className="mt-1 shrink-0 text-orange" strokeWidth={3} /><span>{n}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/15 p-7">
              <h3 className="text-h3 font-bold">{gbp.special.title}</h3>
              <p className="mt-4 text-white/80">{gbp.special.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:gap-20">
          <div>
            <h2 className="text-h2">{gbp.sectorsTitle}</h2>
            <p className="prose-measure mt-5 text-ink-soft">{gbp.sectorsIntro}</p>
          </div>
          <div>
            <ul className="flex flex-wrap gap-3">
              {gbp.sectors.map((s) => (
                <li key={s} className="rounded-full border-2 border-ink/15 bg-white px-5 py-2 font-semibold">{s}</li>
              ))}
            </ul>
            <p className="prose-measure mt-6 text-sm text-ink-soft">{gbp.sectorsNote}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="container-page grid gap-6 py-12 lg:grid-cols-[0.9fr_1.3fr] lg:items-center lg:gap-20">
          <h2 className="text-h3 font-bold">{gbp.siteTitle}</h2>
          <p className="prose-measure text-ink-soft">
            {gbp.siteText} <Link href="/creation-site-web-abidjan" className="link-underline font-semibold">Découvrir la création de sites web</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
          <h2 className="text-h2">{gbp.faqTitle}</h2>
          <Faq items={gbp.faq} />
        </div>
      </section>

      <CtaBand title={gbp.quoteLabel} text={gbp.ctaText} waMessage={whatsappMessages[gbp.path]} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: gbp.name,
          description: gbp.description,
          url: `${SITE_URL}${gbp.path}`,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "Country", name: "Côte d'Ivoire" },
          serviceType: gbp.name,
        }}
      />
    </>
  );
}
