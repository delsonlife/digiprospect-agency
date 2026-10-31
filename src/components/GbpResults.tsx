import { gbpResults, gbpResultsIntro, gbpResultsNote, gbpResultsTitle } from "@/content/gbp-realisations";

const positionLabel = { 1: "1re position", 2: "2e position", 3: "3e position" } as const;

/** Fiches Google optimisées : capture de la recherche, mot-clé et place dans le top 3. */
export function GbpResults({ mist = false, id }: { mist?: boolean; id?: string }) {
  if (gbpResults.length === 0) return null;
  return (
    <section id={id} className={mist ? "border-y border-line bg-mist" : ""}>
      <div className="container-page section">
        <div className="max-w-3xl">
          <h2 className="text-h2">{gbpResultsTitle}</h2>
          <p className="prose-measure mt-5 text-lg text-ink-soft">{gbpResultsIntro}</p>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gbpResults.map((r) => (
            <li key={r.slug} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.image}
                alt={r.imageAlt}
                width={522}
                height={566}
                loading="lazy"
                decoding="async"
                className="aspect-[10/11] w-full border-b border-line bg-ink object-cover object-top"
              />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="inline-flex w-fit items-center gap-2 rounded-full bg-orange/10 px-3 py-1 text-sm font-semibold text-orange-deep">
                  Top&nbsp;3 : {positionLabel[r.position]}
                </p>
                <h3 className="mt-3 text-xl font-bold">{r.business}</h3>
                <p className="mt-1 text-ink-soft">{r.activity} · {r.place}</p>
                <p className="mt-4 border-t border-line pt-3 text-[1.05rem]">
                  <span className="font-semibold">Recherche :</span> «&nbsp;{r.keyword}&nbsp;»
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="prose-measure mt-8 text-sm text-ink-soft">{gbpResultsNote}</p>
      </div>
    </section>
  );
}
