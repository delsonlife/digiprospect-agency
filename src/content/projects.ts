/**
 * Réalisations affichées sur le site.
 * Ajoutez ici UNIQUEMENT des projets réels. Tant que la liste est vide,
 * les sections « réalisations » de l'accueil sont masquées et la page
 * /realisations affiche un message neutre.
 *
 * Exemple (à décommenter et adapter) :
 * {
 *   slug: "nom-du-client",
 *   name: "Nom du client",
 *   type: "Site vitrine",
 *   summary: "Ce qui a été réalisé, sans chiffre inventé.",
 *   url: "https://exemple.com",          // facultatif
 *   image: "/projets/nom-du-client.webp", // capture réelle dans /public/projets
 *   imageAlt: "Page d'accueil du site de Nom du client",
 * }
 */
export type Project = {
  slug: string;
  name: string;
  type: string;
  summary: string;
  url?: string;
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [];

/**
 * Avis clients authentiques (profil ComeUp ou autre source vérifiable).
 * Laisser vide tant qu'aucun avis réel n'est disponible.
 */
export type Review = { author: string; text: string; source: string; sourceUrl?: string };
export const reviews: Review[] = [];
