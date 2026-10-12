import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

export type HeroImage = { src: string; alt: string };

export function PageHero({
  crumbs, title, intro, image, children,
}: { crumbs: { name: string; href: string }[]; title: string; intro?: string; image?: HeroImage; children?: ReactNode }) {
  return (
    <header className="border-b border-line bg-mist">
      <div className={`container-page py-10 lg:py-16 ${image ? "grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16" : ""}`}>
        <div>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 max-w-4xl text-[clamp(2rem,4.6vw+0.4rem,3.6rem)]">{title}</h1>
          {intro && <p className="prose-measure mt-5 text-lg text-ink-soft sm:text-xl">{intro}</p>}
          {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
        </div>
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image.src}
            alt={image.alt}
            width={520}
            height={420}
            fetchPriority="high"
            decoding="async"
            className="mx-auto h-auto w-full max-w-[22rem] lg:max-w-[28rem]"
          />
        )}
      </div>
    </header>
  );
}
