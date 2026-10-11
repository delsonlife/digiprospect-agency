import Link from "next/link";

export const metadata = { title: "Page introuvable", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page max-w-2xl">
        <p className="font-display text-6xl font-bold text-orange-deep">404</p>
        <h1 className="mt-4 text-h2">Cette page n'existe pas ou a été déplacée</h1>
        <p className="mt-4 text-lg text-ink-soft">Retournez à l'accueil ou consultez directement l'un des services.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">Retour à l'accueil</Link>
          <Link href="/contact" className="btn btn-secondary">Demander un devis</Link>
        </div>
      </div>
    </section>
  );
}
