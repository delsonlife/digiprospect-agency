export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://digiprospectagency.com").replace(/\/$/, "");

export const site = {
  name: "DigiProspect Agency",
  shortName: "DigiProspect",
  tagline: "Sites web, boutiques en ligne et référencement local en Côte d'Ivoire",
  locale: "fr_CI",
  city: "Abidjan",
  country: "Côte d'Ivoire",
  // Valeur provisoire : remplacer via NEXT_PUBLIC_WHATSAPP_NUMBER (voir .env.example)
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "225XXXXXXXXXX").replace(/[^0-9X]/g, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  comeup: process.env.NEXT_PUBLIC_COMEUP_URL || "",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/creation-site-web-abidjan", label: "Création de sites" },
  { href: "/creation-site-ecommerce", label: "Boutiques en ligne" },
  { href: "/seo-referencement-local", label: "Fiche Google" },
  { href: "/acquisition-clients", label: "Acquisition de clients" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
];

export const communes = [
  "Abobo", "Adjamé", "Anyama", "Attécoubé", "Bingerville", "Cocody", "Koumassi",
  "Marcory", "Plateau", "Port-Bouët", "Songon", "Treichville", "Yopougon",
];

export const whatsappMessages: Record<string, string> = {
  "/": "Bonjour, je souhaite un audit découverte pour développer ma visibilité et trouver de nouveaux clients.",
  "/creation-site-web-abidjan": "Bonjour, je souhaite un devis pour la création ou la refonte de mon site web.",
  "/creation-site-ecommerce": "Bonjour, je souhaite un devis pour une boutique en ligne.",
  "/acquisition-clients": "Bonjour, je souhaite un audit découverte pour trouver les meilleures sources de clients pour mon activité.",
  "/seo-referencement-local": "Bonjour, je souhaite en savoir plus sur l'optimisation de ma fiche Google Business Profile.",
  default: "Bonjour, je vous contacte depuis le site DigiProspect Agency.",
};
