import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="DigiProspect Agency, accueil" className="flex items-center gap-3">
      <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <path d="M6 4v16" stroke="#f77f00" strokeWidth="3" strokeLinecap="round" />
          <path d="M11 4h2.5a6 6 0 0 1 0 12H11" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <path d="M11 20h5" stroke="#009a44" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </span>
      <span className={`font-display text-[1.15rem] font-bold leading-none tracking-tight ${light ? "text-white" : "text-ink"}`}>
        DigiProspect
        <span className={`block text-[0.7rem] font-semibold tracking-wide ${light ? "text-white/70" : "text-ink-soft"}`}>Agency</span>
      </span>
    </Link>
  );
}
