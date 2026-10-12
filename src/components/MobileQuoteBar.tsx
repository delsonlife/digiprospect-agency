"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Barre de devis fixe, visible seulement sur mobile. Le bouton WhatsApp flottant reste au-dessus. */
export function MobileQuoteBar() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 md:hidden">
      <Link href="/contact" className="btn btn-primary w-full !min-h-12">Demander un devis</Link>
    </div>
  );
}
