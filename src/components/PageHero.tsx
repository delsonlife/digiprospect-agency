import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

export function PageHero({
  crumbs, title, intro, children,
}: { crumbs: { name: string; href: string }[]; title: string; intro?: string; children?: ReactNode }) {
  return (
    <header className="border-b border-line bg-mist">
      <div className="container-page py-10 lg:py-16">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-6 max-w-4xl text-[clamp(2rem,4.6vw+0.4rem,3.6rem)]">{title}</h1>
        {intro && <p className="prose-measure mt-5 text-lg text-ink-soft sm:text-xl">{intro}</p>}
        {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
      </div>
    </header>
  );
}
