export const GOOGLE_ADS_SERVICE = "Google Ads – Création et gestion de campagnes" as const;

/** Prestations Google Ads sélectionnables lorsque le service Google Ads est choisi. */
export const googleAdsOptions = [
  "Création et configuration du compte",
  "Tracking et suivi des conversions",
  "Création et lancement de campagnes",
  "Gestion et optimisation mensuelle",
] as const;

export const serviceOptions = [
  "Création de site web",
  "Refonte de site existant",
  "Boutique en ligne",
  "Optimisation de fiche Google Business Profile",
  "Accompagnement SEO local mensuel",
  GOOGLE_ADS_SERVICE,
  "Audit découverte et acquisition de clients",
  "Autre besoin",
] as const;

export const budgetOptions = [
  "Je ne sais pas encore",
  "Moins de 200 000 FCFA",
  "200 000 à 500 000 FCFA",
  "500 000 à 1 000 000 FCFA",
  "Plus de 1 000 000 FCFA",
] as const;

export type ContactPayload = {
  name: string;
  company: string;
  contact: string;
  service: string;
  message: string;
  budget: string;
  /** Prestations Google Ads souhaitées (uniquement si le service Google Ads est choisi). */
  googleAds?: string[];
  website?: string; // champ piège anti-spam, doit rester vide
};

export type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

export function validate(p: ContactPayload): FieldErrors {
  const e: FieldErrors = {};
  if (p.name.trim().length < 2) e.name = "Indiquez votre nom.";
  if (p.name.length > 120) e.name = "Nom trop long.";
  const c = p.contact.trim();
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c);
  const digits = c.replace(/[^\d]/g, "");
  const isPhone = /^[+\d\s().-]{8,20}$/.test(c) && digits.length >= 8 && digits.length <= 15;
  if (!isEmail && !isPhone) e.contact = "Indiquez un e-mail valide ou un numéro (WhatsApp de préférence).";
  if (!(serviceOptions as readonly string[]).includes(p.service)) e.service = "Choisissez un service.";
  if (p.message.trim().length < 20) e.message = "Décrivez votre besoin en au moins 20 caractères.";
  if (p.message.length > 4000) e.message = "Message trop long (4000 caractères maximum).";
  if (p.googleAds && !p.googleAds.every((o) => (googleAdsOptions as readonly string[]).includes(o))) e.googleAds = "Sélection invalide.";
  if (p.company.length > 160) e.company = "Nom d'entreprise trop long.";
  return e;
}
