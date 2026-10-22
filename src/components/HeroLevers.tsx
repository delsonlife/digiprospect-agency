/** Schéma décoratif : l'activité au centre, plusieurs leviers possibles autour. Aucun chiffre ni résultat. */
const nodes = [
  { x: 105, y: 95, label: "Site web", path: "M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13ZM3 9h18M7 6h.01M10 6h.01" },
  { x: 415, y: 95, label: "Fiche Google", path: "M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11ZM12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" },
  { x: 105, y: 345, label: "Publicité sur les réseaux sociaux", path: "M3 10v4a1 1 0 0 0 1 1h2l6 4V5L6 9H4a1 1 0 0 0-1 1ZM16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12" },
  { x: 415, y: 345, label: "Marketplace et boutique", path: "M3 4h2.2l2.1 10.2a1.5 1.5 0 0 0 1.5 1.2h8.2a1.5 1.5 0 0 0 1.4-1l1.9-6.1H6.1M9.5 20h.01M17 20h.01" },
];

export function HeroLevers() {
  return (
    <figure className="mx-auto w-full max-w-[34rem]">
      <svg viewBox="0 0 520 440" className="hero-draw h-auto w-full" role="img" aria-label="Schéma : une entreprise au centre, reliée à plusieurs leviers d'acquisition de clients : site web, fiche Google, publicité sur les réseaux sociaux, Marketplace">
        <g stroke="#c9ccc8" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 9">
          {nodes.map((n) => <path key={n.label} d={`M260 220L${n.x} ${n.y}`} />)}
        </g>
        <circle cx="260" cy="220" r="74" fill="#f77f00" />
        <circle cx="260" cy="220" r="74" fill="none" stroke="#1f2326" strokeWidth="3" />
        <g transform="translate(224 184) scale(3)" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3M9 20v-5h6v5" />
        </g>
        {nodes.map((n, i) => (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r="50" fill="#fff" stroke="#1f2326" strokeWidth="3" />
            <circle cx={n.x} cy={n.y} r="38" fill="#1f2326" />
            <g transform={`translate(${n.x - 20} ${n.y - 20}) scale(1.67)`} stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <path d={n.path} />
            </g>
            <circle cx={n.x + 38} cy={n.y - 38} r="8" fill={i % 2 === 0 ? "#009a44" : "#f77f00"} />
          </g>
        ))}
      </svg>
      <figcaption className="mt-6 grid gap-2 text-[1.05rem] text-ink-soft">
        <span className="flex gap-3"><i className="mt-2.5 h-2 w-5 shrink-0 rounded-full bg-orange" aria-hidden="true" />Votre activité et vos clients au centre</span>
        <span className="flex gap-3"><i className="mt-2.5 h-2 w-5 shrink-0 rounded-full bg-ink" aria-hidden="true" />Des leviers choisis selon vos objectifs et votre budget</span>
        <span className="flex gap-3"><i className="mt-2.5 h-2 w-5 shrink-0 rounded-full bg-green" aria-hidden="true" />Des actions priorisées, puis ajustées</span>
      </figcaption>
    </figure>
  );
}
