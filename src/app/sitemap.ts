import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const pages: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/creation-site-web-abidjan", priority: 0.9 },
  { path: "/creation-site-ecommerce", priority: 0.8 },
  { path: "/seo-referencement-local", priority: 0.9 },
  { path: "/realisations", priority: 0.7 },
  { path: "/a-propos", priority: 0.5 },
  { path: "/zones-intervention-abidjan", priority: 0.5 },
  { path: "/contact", priority: 0.8 },
];

// Les pages légales sont en noindex tant qu'elles ne sont pas complétées : elles ne figurent pas ici.
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({ url: `${SITE_URL}${p.path}`, priority: p.priority }));
}
