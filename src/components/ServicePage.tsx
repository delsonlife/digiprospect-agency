import Link from "next/link";
import { CtaBand } from "./CtaBand";
import { FeatureCards } from "./FeatureCards";
import { Faq } from "./Faq";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { PageHero } from "./PageHero";
import type { Service } from "@/content/services";
import { SITE_URL, site, whatsappMessages } from "@/lib/site";

export function ServicePage({ service, related }: { service: Service; related: Service[] }) {
  return (
    <>
      <PageHero crumbs={[{ name: service.name, href: service.path }]} title={service.h1} intro={service.intro} image={service.image}>
        <Link href={`/contact?service=${service.slug}`} className="btn btn-primary">{service.quoteLabel}</Link>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="text-h2">Le problème que ce service résout</h2>
            <p className="prose-measure mt-5 text-lg text-ink-soft">{service.problem}</p>
          </div>
          <div>
            <h2 className="text-h3 font-bold">Ce que vous pouvez en attendre</h2>
            <ul className="mt-5 space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-deep text-white"><Icon name="check" size={16} strokeWidth={3} /></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="container-page section">
          <h2 className="text-h2">Ce que comprend la prestation</h2>
          <div className="mt-10"><FeatureCards items={service.includes} cols={3} /></div>
          <p className="mt-6 text-sm text-ink-soft">Le contenu exact est précisé dans le devis, selon votre activité et votre budget.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="text-h2">Les étapes de travail</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {service.steps.map((s, i) => (
              <li key={s.title} className="border-t-4 border-ink pt-4">
                <p className="font-display text-3xl font-bold text-orange-deep" aria-hidden="true">{i + 1}</p>
                <h3 className="mt-1 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-[0.97rem] text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-page section grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="text-h2">Pour démarrer, il faut</h2>
            <p className="prose-measure mt-4 text-white/75">Rien de tout cela n'est bloquant : ce qui manque se complète ensemble.</p>
          </div>
          <ul className="space-y-4">
            {service.needed.map((n) => (
              <li key={n} className="flex gap-4 border-b border-white/15 pb-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange text-ink"><Icon name="check" size={16} strokeWidth={3} /></span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
          <h2 className="text-h2">Questions sur ce service</h2>
          <Faq items={service.faq} />
        </div>
      </section>

      <section className="border-t border-line bg-mist">
        <div className="container-page py-12">
          <h2 className="text-h3 font-bold">Autres services</h2>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {related.map((r) => (
              <li key={r.slug}><Link href={r.path} className="link-underline py-1 font-semibold">{r.name}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={service.quoteLabel} waMessage={whatsappMessages[service.path] ?? whatsappMessages.default} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: `${SITE_URL}${service.path}`,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "Country", name: "Côte d'Ivoire" },
          serviceType: service.name,
        }}
      />
    </>
  );
}
