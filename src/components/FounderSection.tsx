import Link from "next/link";

/** Présentation du fondateur (accueil). Texte fourni par le fondateur, à la première personne. */
export function FounderSection() {
  return (
    <section className="section border-b border-line">
      <div className="container-page grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div className="mx-auto w-full max-w-[22rem] md:max-w-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/portrait-fondateur-digiprospect-agency.webp"
            srcSet="/images/portrait-fondateur-digiprospect-agency-480.webp 480w, /images/portrait-fondateur-digiprospect-agency.webp 800w"
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 40vw, 352px"
            alt="Portrait du fondateur de DigiProspect Agency"
            width={800}
            height={1000}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
        </div>
        <div>
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-orange-deep">
            <span className="tricolor-sm" aria-hidden="true" />
            Le fondateur
          </p>
          <h2 className="mt-4 text-h2">Derrière DigiProspect Agency</h2>
          <div className="prose-measure mt-6 space-y-4 text-lg text-ink-soft">
            <p className="text-xl text-ink">
              Derrière DigiProspect Agency, une conviction : chaque entreprise mérite une stratégie digitale adaptée à son activité, à ses objectifs et à son budget.
            </p>
            <p>
              Mon expérience dans les prestations numériques, notamment à travers mon activité sur ComeUp depuis 2020, m'a permis d'accompagner différents projets et de développer une approche orientée vers les besoins concrets des professionnels.
            </p>
            <p>
              Je suis convaincu qu'il ne suffit pas d'être présent sur internet pour développer son activité. Il faut surtout identifier les bons leviers pour toucher sa clientèle et transformer sa visibilité en opportunités commerciales.
            </p>
            <p>
              Selon votre situation, cela peut passer par un site internet, une boutique en ligne, une fiche Google mieux optimisée, des campagnes publicitaires sur Facebook, Instagram ou TikTok, ou une combinaison de plusieurs solutions.
            </p>
            <p>Mon approche consiste donc à comprendre votre activité avant de vous recommander les actions les plus pertinentes.</p>
          </div>
          <div className="mt-8">
            <Link href="/a-propos" className="btn btn-secondary">En savoir plus sur notre approche</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
