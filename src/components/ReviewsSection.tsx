import { Icon } from "./Icon";
import { reviews, type Review } from "@/content/projects";
import { comeup } from "@/content/comeup";

const dateFormat = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

// Largeurs alternées (7/5 puis 5/7) pour un rythme éditorial, empilées sur mobile.
const spans = ["lg:col-span-7", "lg:col-span-5 lg:self-start", "lg:col-span-7", "lg:col-span-5 lg:self-start"];
const accents = ["border-orange", "border-green", "border-orange", "border-green"];

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const featured = index === 0;
  return (
    <figure className={`flex flex-col rounded-2xl border-l-4 bg-mist p-7 sm:p-8 ${spans[index % 4]} ${accents[index % 4]}`}>
      <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor" aria-hidden="true" className="text-orange">
        <path d="M9.6 5C6.2 6.4 4 9.5 4 13.2V19h6.4v-6.4H7.1c.1-2 1.2-3.5 3.3-4.5L9.6 5zm10 0c-3.4 1.4-5.6 4.5-5.6 8.2V19h6.4v-6.4h-3.3c.1-2 1.2-3.5 3.3-4.5L19.6 5z" />
      </svg>
      <blockquote className={`mt-4 flex-1 text-ink ${featured ? "text-xl leading-relaxed sm:text-[1.4rem]" : "text-lg leading-relaxed"}`}>
        &laquo;&nbsp;{review.text}{review.excerpt ? " […]" : ""}&nbsp;&raquo;
      </blockquote>
      <figcaption className="mt-6 border-t border-line pt-4">
        <span className="block font-display text-lg font-bold">{review.author}</span>
        <span className="mt-1 block text-sm text-ink-soft">
          Avis publié sur {review.source}
          {review.date && (
            <>
              {" "}le <time dateTime={review.date}>{dateFormat.format(new Date(review.date))}</time>
            </>
          )}
          {review.excerpt && " (extrait)"}
        </span>
      </figcaption>
    </figure>
  );
}

export function ReviewsSection() {
  if (reviews.length === 0) return null;
  return (
    <section className="border-t border-line section">
      <div className="container-page">
        <div className="max-w-3xl">
          <h2 className="text-h2">Ce que disent les clients</h2>
          <p className="prose-measure mt-5 text-lg text-ink-soft">
            La qualité d'une collaboration se mesure aussi à l'expérience de ceux qui confient leurs projets. Voici quelques avis laissés par des clients sur le profil ComeUp, reproduits tels qu'ils y apparaissent.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {reviews.slice(0, 4).map((r, i) => <ReviewCard key={r.author} review={r} index={i} />)}
        </div>
        <div className="mt-10">
          <a href={comeup.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">
            <Icon name="link" size={20} /> Voir tous les avis sur ComeUp<span className="sr-only"> (nouvel onglet)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
