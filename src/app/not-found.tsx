import Link from "next/link";

export const metadata = { title: "Page introuvable", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="font-display text-6xl font-bold text-orange-deep">404</p>
          <h1 className="mt-4 text-h2">Cette page n'existe pas ou a été déplacée</h1>
          <p className="mt-4 text-lg text-ink-soft">Retournez à l'accueil ou consultez directement l'un des services.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn btn-primary">Retour à l'accueil</Link>
            <Link href="/contact" className="btn btn-secondary">Demander un devis</Link>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/page-introuvable-404-lien-casse.svg"
          alt="Illustration d'une fenêtre de navigateur affichant une erreur 404"
          width={520}
          height={420}
          loading="lazy"
          decoding="async"
          className="mx-auto h-auto w-full max-w-[22rem]"
        />
      </div>
    </section>
  );
}
