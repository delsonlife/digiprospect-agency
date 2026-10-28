import type { MetadataRoute } from "next";

/**
 * Manifeste d'application web (installation sur Android / Chrome).
 * `start_url` et `id` valent "/" : l'application installée s'ouvre toujours sur l'accueil,
 * quelle que soit la page affichée au moment de l'installation.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "DigiProspect Agency",
    short_name: "DigiProspect",
    description: "Visibilité et acquisition de clients en Côte d'Ivoire : sites web, fiche Google, publicité Facebook, Instagram et TikTok.",
    lang: "fr",
    dir: "ltr",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    categories: ["business"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
