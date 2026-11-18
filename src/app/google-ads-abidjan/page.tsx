import type { Metadata } from "next";
import Link from "next/link";
import { CheckList } from "@/components/CheckList";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { FeatureCards } from "@/components/FeatureCards";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { googleAds as g } from "@/content/google-ads";
import { pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ title: g.title, description: g.description, path: g.path, absoluteTitle: true });

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: g.name, href: g.path }]} title={g.h1} intro={g.intro} image={g.image}>
        <Link href="/contact?service=google-ads" className="btn btn-primary">{g.primaryCta}</Link>
        <Link href="/contact?service=google-ads-gestion" className="btn btn-secondary">{g.secondaryCta}</Link>
      </PageHero>

      <section className="section">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="text-h2">{g.levelsTitle}</h2>
            <p className="prose-measure mt-5 text-lg text-ink-soft">{g.levelsIntro}</p>
          </div>
          <div className="mt-10"><FeatureCards items={g.levels} cols={3} /></div>
        </div>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="container-page section">
          <div className="max-w-3xl">
            <h2 className="text-h2">{g.accountTitle}</h2>
            <p className="prose-measure mt-5 text-lg text-ink-soft">{g.accountIntro}</p>
          </div>
          <div className="mt-10"><FeatureCards items={g.account} cols={3} compact /></div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-page section">
          <div className="max-w-3xl">
            <h2 className="text-h2">{g.trackingTitle}</h2>
            <p className="prose-measure mt-5 text-lg text-white/75">{g.trackingIntro}</p>
          </div>
          <div className="mt-10"><FeatureCards items={g.tracking} cols={3} compact /></div>
          <p className="prose-measure mt-6 border-l-4 border-orange pl-5 text-white/80">{g.trackingNote}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="text-h2">{g.launchTitle}</h2>
            <p className="prose-measure mt-5 text-lg text-ink-soft">{g.launchIntro}</p>
          </div>
          <div className="mt-8 rounded-2xl border border-line bg-mist p-6 sm:p-8"><CheckList items={g.launch} /></div>
          <h3 className="mt-12 text-h3 font-bold">{g.formatsTitle}</h3>
          <div className="mt-6"><FeatureCards items={g.formats} cols={2} /></div>
          <p className="prose-measure mt-6 text-ink-soft">{g.formatsNote}</p>
        </div>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="container-page section">
          <div className="max-w-3xl">
            <p className="inline-flex w-fit items-center rounded-full bg-green/10 px-3 py-1 text-sm font-semibold text-green-deep">{g.monthlyBadge}</p>
            <h2 className="mt-4 text-h2">{g.monthlyTitle}</h2>
            <p className="prose-measure mt-5 text-lg text-ink-soft">{g.monthlyIntro}</p>
          </div>
          <div className="mt-8 rounded-2xl border border-line bg-white p-6 sm:p-8"><CheckList items={g.monthly} /></div>
          <p className="prose-measure mt-6 text-sm text-ink-soft">{g.monthlyNote}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="text-h2">{g.glossaryTitle}</h2>
          <dl className="mt-8 grid gap-x-10 gap-y-5 md:grid-cols-2">
            {g.glossary.map((t) => (
              <div key={t.term} className="border-b border-line pb-4">
                <dt className="font-display text-lg font-bold">{t.term}</dt>
                <dd className="mt-1 text-ink-soft">{t.meaning}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="rounded-2xl border-l-4 border-orange bg-mist p-6 sm:p-8">
            <h2 className="text-h3 font-bold">{g.budgetTitle}</h2>
            <p className="mt-3 text-ink-soft">{g.budgetText}</p>
          </div>
          <div className="self-center">
            <p className="text-lg text-ink-soft">Les prestations sont proposées sur devis, selon votre activité, vos objectifs et le niveau d'accompagnement choisi.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?service=google-ads" className="btn btn-primary">{g.primaryCta}</Link>
              <Link href="/contact?service=google-ads-gestion" className="btn btn-secondary">{g.secondaryCta}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-mist">
        <div className="container-page section grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
          <h2 className="text-h2">{g.faqTitle}</h2>
          <Faq items={g.faq} />
        </div>
      </section>

      <CtaBand title={g.ctaTitle} text={g.ctaText} waMessage={g.waMessage} primaryLabel={g.primaryCta} primaryHref="/contact?service=google-ads" />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Gestion de campagnes Google Ads",
          description: g.description,
          url: `${SITE_URL}${g.path}`,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "Country", name: "Côte d'Ivoire" },
          serviceType: "Google Ads",
        }}
      />
    </>
  );
}
