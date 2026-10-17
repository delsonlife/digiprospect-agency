import type { Metadata } from "next";
import { site } from "./site";

type Options = {
  title: string;
  description: string;
  path: string;
  /** true : le titre est utilisé tel quel, sans le suffixe « | DigiProspect Agency ». */
  absoluteTitle?: boolean;
  noindex?: boolean;
};

const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: "DigiProspect Agency : agence web à Abidjan" };

/**
 * Métadonnées complètes d'une page : titre, description, canonical, Open Graph (WhatsApp, Facebook) et Twitter.
 * Chaque page déclare son propre og:title, og:url et og:image pour que le partage affiche la bonne carte.
 */
export function pageMetadata({ title, description, path, absoluteTitle = false, noindex = false }: Options): Metadata {
  const shareTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: site.name,
      url: path,
      title: shareTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title: shareTitle, description, images: [OG_IMAGE.url] },
  };
}
