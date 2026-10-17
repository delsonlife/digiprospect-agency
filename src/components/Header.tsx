"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); buttonRef.current?.focus(); }
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        const items = [buttonRef.current, ...Array.from(f)].filter(Boolean) as HTMLElement[];
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", onKey); };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-[55] border-b border-line bg-white">
      <div className="tricolor" />
      <div className="container-page flex h-[4.25rem] items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}
              className={`py-2 text-[0.95rem] font-semibold hover:text-orange-deep ${isActive(item.href) ? "text-ink link-underline" : "text-ink-soft"}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn btn-primary hidden !min-h-11 !px-5 !py-2 text-[0.95rem] sm:inline-flex">Demander un devis</Link>
          <button ref={buttonRef} type="button" onClick={() => setOpen((v) => !v)}
            aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="relative z-50 flex h-12 w-12 items-center justify-center rounded-lg border border-line lg:hidden">
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" ref={panelRef} role="dialog" aria-modal="true" aria-label="Menu"
          className="fixed inset-x-0 bottom-0 top-[calc(4.25rem+4px)] z-40 overflow-y-auto bg-white lg:hidden">
          <nav aria-label="Navigation mobile" className="container-page flex flex-col py-4">
            {[{ href: "/", label: "Accueil" }, ...nav, { href: "/zones-intervention", label: "Zones d'intervention" }].map((item) => (
              <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}
                className="flex min-h-14 items-center justify-between border-b border-line font-display text-xl font-semibold">
                {item.label}
                <Icon name="chevron" size={20} className="text-orange-deep" />
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary mt-6">Demander un devis</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
