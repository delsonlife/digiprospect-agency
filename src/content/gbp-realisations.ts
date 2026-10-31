/**
 * Fiches Google optimisées, présentées avec la recherche effectuée et la place affichée dans le top 3.
 * Captures recadrées ; les numéros de téléphone sont floutés. Ne rien ajouter qui ne soit pas vérifiable.
 */
export type GbpResult = {
  slug: string;
  business: string;
  activity: string;
  place: string;
  /** Recherche telle qu'elle a été saisie. */
  keyword: string;
  /** Place de la fiche dans le top 3 pour cette recherche. */
  position: 1 | 2 | 3;
  image: string;
  imageAlt: string;
};

export const gbpResults: GbpResult[] = [
  {
    slug: "polyligne-architecture",
    business: "Polyligne Architecture",
    activity: "Architecte",
    place: "Jemeppe-sur-Sambre, Belgique",
    keyword: "Architecte à Jemeppe-sur-Sambre",
    position: 1,
    image: "/projets/fiche-google-polyligne-architecture-architecte-jemeppe-sur-sambre.webp",
    imageAlt: "Résultats Google Maps pour « Architecte à Jemeppe-sur-Sambre » : la fiche Polyligne Architecture apparaît en première position",
  },
  {
    slug: "studio-tony-rapiteau",
    business: "Studio Tony Rapiteau",
    activity: "Photographe",
    place: "Le Plessis-Belleville, France",
    keyword: "photographe à Plessis-Belleville",
    position: 1,
    image: "/projets/fiche-google-studio-tony-rapiteau-photographe-plessis-belleville.webp",
    imageAlt: "Résultats Google Maps pour « photographe à Plessis-Belleville » : la fiche Studio Tony Rapiteau apparaît en première position",
  },
  {
    slug: "lalam-chakib",
    business: "Lalam chakib",
    activity: "Entreprise de déménagement",
    place: "Nanterre, France",
    keyword: "demenagement nanterre",
    position: 2,
    image: "/projets/fiche-google-lalam-chakib-demenagement-nanterre.webp",
    imageAlt: "Résultats Google Maps pour « demenagement nanterre » : la fiche Lalam chakib apparaît en deuxième position",
  },
];

export const gbpResultsTitle = "Fiches Google optimisées";
export const gbpResultsIntro =
  "Quelques fiches optimisées par DigiProspect Agency, avec la recherche effectuée et la place affichée dans le top\u00a03 de Google Maps.";
export const gbpResultsNote =
  "Résultats observés pour une recherche localisée dans la ville indiquée. Ils peuvent varier selon l'emplacement de l'internaute et le moment, et ne constituent pas une garantie. Les numéros de téléphone sont floutés.";
