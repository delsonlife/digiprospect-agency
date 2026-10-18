/** Schéma décoratif d'une page web bien construite. Ce n'est pas un projet client. */
export function HeroIllustration() {
  return (
    <figure className="relative mx-auto w-full max-w-[34rem]" aria-label="Schéma d'une page web : titre clair, bouton de devis, contact WhatsApp">
      <svg viewBox="0 0 520 470" className="hero-draw h-auto w-full" role="img" aria-label="Illustration schématique d'un site web sur ordinateur et sur téléphone">
        <rect x="6" y="6" width="400" height="380" rx="16" fill="#fff" stroke="#1f2326" strokeWidth="3" />
        <path d="M6 52h400" stroke="#1f2326" strokeWidth="3" />
        <circle cx="30" cy="29" r="6" fill="#f77f00" />
        <circle cx="52" cy="29" r="6" fill="#1f2326" />
        <circle cx="74" cy="29" r="6" fill="#009a44" />
        <rect x="110" y="18" width="230" height="22" rx="11" fill="#f5f6f4" />
        <rect x="34" y="84" width="230" height="16" rx="8" fill="#1f2326" />
        <rect x="34" y="112" width="170" height="16" rx="8" fill="#1f2326" />
        <rect x="34" y="148" width="250" height="8" rx="4" fill="#c9ccc8" />
        <rect x="34" y="166" width="210" height="8" rx="4" fill="#c9ccc8" />
        <rect x="34" y="198" width="124" height="38" rx="9" fill="#f77f00" />
        <rect x="170" y="198" width="96" height="38" rx="9" fill="none" stroke="#1f2326" strokeWidth="2.5" />
        <rect x="290" y="82" width="90" height="154" rx="10" fill="#f5f6f4" />
        <path d="M34 268h346" stroke="#e3e5e1" strokeWidth="2" />
        <rect x="34" y="290" width="104" height="72" rx="10" fill="#f5f6f4" />
        <rect x="152" y="290" width="104" height="72" rx="10" fill="#f5f6f4" />
        <rect x="270" y="290" width="110" height="72" rx="10" fill="#f5f6f4" />
        <rect x="34" y="290" width="104" height="5" rx="2.5" fill="#009a44" />

        <g className="hero-draw" transform="translate(344 150)">
          <rect x="0" y="0" width="156" height="300" rx="26" fill="#fff" stroke="#1f2326" strokeWidth="3" />
          <rect x="54" y="12" width="48" height="6" rx="3" fill="#1f2326" />
          <rect x="18" y="44" width="104" height="12" rx="6" fill="#1f2326" />
          <rect x="18" y="66" width="76" height="12" rx="6" fill="#1f2326" />
          <rect x="18" y="94" width="116" height="7" rx="3.5" fill="#c9ccc8" />
          <rect x="18" y="110" width="92" height="7" rx="3.5" fill="#c9ccc8" />
          <rect x="18" y="138" width="120" height="34" rx="9" fill="#f77f00" />
          <rect x="18" y="190" width="120" height="48" rx="9" fill="#f5f6f4" />
          <circle cx="126" cy="262" r="20" fill="#00763a" />
          <path d="M118 262l6 6 11-12" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
      <figcaption className="mt-6 grid gap-2 text-[1.05rem] text-ink-soft">
        <span className="flex gap-3"><i className="mt-2 h-2 w-5 shrink-0 rounded-full bg-orange" aria-hidden="true" />Une promesse lisible dès les premières secondes</span>
        <span className="flex gap-3"><i className="mt-2 h-2 w-5 shrink-0 rounded-full bg-ink" aria-hidden="true" />Un bouton de devis visible sur ordinateur comme sur mobile</span>
        <span className="flex gap-3"><i className="mt-2 h-2 w-5 shrink-0 rounded-full bg-green" aria-hidden="true" />Un contact WhatsApp à portée de pouce</span>
      </figcaption>
    </figure>
  );
}
