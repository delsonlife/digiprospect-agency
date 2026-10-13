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

export const projects: Project[] = [
  {
    slug: "yedei",
    name: "YEDEI",
    type: "Boutique en ligne",
    summary: "Boutique de vêtements pour bébés, enfants, femmes et hommes, avec collections par univers et panier.",
    image: "/projets/realisation-yedei-boutique-vetements-enfants.webp",
    imageAlt: "Page d'accueil de la boutique en ligne YEDEI, vêtements pour bébés et enfants",
    url: "https://yedei.bj/",
  },
  {
    slug: "medilo",
    name: "Medilo",
    type: "Site vitrine",
    summary: "Site d'un centre d'auriculothérapie laser en Suisse : présentation de la méthode, du centre et prise de rendez-vous.",
    image: "/projets/realisation-medilo-site-auriculotherapie-laser.webp",
    imageAlt: "Page d'accueil du site Medilo, centre d'auriculothérapie laser",
    url: "https://medilo.ch/",
  },
  {
    slug: "nexoria-game",
    name: "Nexoria Game",
    type: "Boutique en ligne",
    summary: "Boutique spécialisée en gaming : consoles, accessoires, jeux et univers PC.",
    image: "/projets/realisation-nexoria-game-boutique-gaming.webp",
    imageAlt: "Page d'accueil de la boutique en ligne Nexoria Game, consoles et accessoires gaming",
    url: "https://nexoriagame.com/",
  },
  {
    slug: "happy-guest-house",
    name: "Happy Guest House",
    type: "Site vitrine",
    summary: "Site d'une maison d'hôtes à Abomey-Calavi (Bénin) : services, galerie, localisation et contact.",
    image: "/projets/realisation-happy-guest-house-maison-hotes.webp",
    imageAlt: "Page d'accueil du site Happy Guest House, maison d'hôtes à Abomey-Calavi",
    url: "https://happyguesthouse.bj/",
  },
  {
    slug: "cryptozoologia",
    name: "Cryptozoologia",
    type: "Site éditorial",
    summary: "Site consacré à la cryptozoologie : activités, bibliothèque, publications, blog et espace membre.",
    image: "/projets/realisation-cryptozoologia-site-editorial.webp",
    imageAlt: "Page d'accueil du site Cryptozoologia, illustration d'exploration de créatures mystérieuses",
    url: "https://www.cryptozoologia.eu/",
  },
  {
    slug: "agapao-services",
    name: "AGAPAO Services",
    type: "Site de présentation",
    summary: "Site d'une structure de formation, d'accompagnement et d'insertion professionnelle, avec événements et inscription.",
    image: "/projets/realisation-agapao-services-formation-insertion.webp",
    imageAlt: "Page d'accueil du site AGAPAO Services, formation et accompagnement",
    url: "https://agapaoservices.fr/",
  },
  {
    slug: "mondial-tempo",
    name: "Mondial Tempo Assurance",
    type: "Site web",
    summary: "Site d'une société d'assurance auto temporaire, avec création de compte et coordonnées de contact.",
    image: "/projets/realisation-mondial-tempo-site-assurance.webp",
    imageAlt: "Page d'accueil du site Mondial Tempo Assurance, assurance auto temporaire",
    url: "https://mondialtempo.com/",
  },
];

/**
 * Avis clients authentiques (profil ComeUp ou autre source vérifiable).
 * Laisser vide tant qu'aucun avis réel n'est disponible.
 */
export type Review = { author: string; text: string; source: string; sourceUrl?: string };
export const reviews: Review[] = [];
