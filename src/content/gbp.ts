import type { IconName } from "@/components/Icon";
import type { Faq } from "./services";

/** Contenu de la page « Optimisation de fiche Google Business Profile » (/seo-referencement-local). */
export const gbp = {
  path: "/seo-referencement-local",
  slug: "seo-referencement-local",
  name: "Optimisation de fiche Google Business Profile",
  short:
    "Optimisation initiale et suivi de la fiche Google pour améliorer sa qualité et renforcer les chances d'être découvert dans les recherches locales.",
  title: "SEO local Côte d'Ivoire : optimisation fiche Google",
  description:
    "SEO local en Côte d'Ivoire : optimisation et suivi de fiche Google Business Profile (Google My Business) pour mieux apparaître sur Google Maps.",
  h1: "Optimisation de fiche Google Business Profile",
  intro:
    "Votre fiche Google, anciennement Google My Business, est souvent le premier contact entre votre entreprise et un client proche. DigiProspect Agency l'examine, l'améliore et la suit dans la durée pour mieux présenter votre activité sur Google et Google Maps, et renforcer vos chances d'être trouvé par les clients de votre zone.",
  image: {
    src: "/images/optimisation-fiche-google-business-profile-google-maps.svg",
    alt: "Illustration d'une carte avec plusieurs repères de localisation et d'une fiche d'entreprise avec ses boutons d'action",
  },
  whyTitle: "Pourquoi votre fiche Google compte",
  why: [
    "Quand une personne cherche un restaurant, un garage, un salon ou un cabinet près de chez elle, Google affiche d'abord des fiches d'entreprises sur la carte et dans les résultats locaux. Cette fiche est souvent le premier contact avec votre activité, avant même votre site web.",
    "Une fiche incomplète, mal catégorisée ou jamais mise à jour peut décourager un client potentiel : horaires erronés, services absents, photos anciennes, avis sans réponse.",
  ],
  whyPoints: [
    "Présenter clairement votre activité, vos services et vos coordonnées.",
    "Donner aux clients proches les informations utiles pour vous contacter.",
    "Montrer une entreprise active, avec des informations fiables et à jour.",
  ],
  cardsTitle: "Ce que comprend la prestation",
  cards: [
    { icon: "search", scope: "Optimisation initiale", title: "Audit de la fiche", text: "État des lieux de votre fiche existante et liste des points à améliorer en priorité." },
    { icon: "tag", scope: "Optimisation initiale", title: "Nom et catégories", text: "Vérification du nom, de la catégorie principale et des catégories secondaires les plus pertinentes." },
    { icon: "text", scope: "Optimisation initiale", title: "Description", text: "Rédaction ou amélioration d'une description claire, fidèle à votre activité." },
    { icon: "grid", scope: "Optimisation initiale", title: "Services et produits", text: "Organisation et présentation de ce que vous proposez, pour qu'on le comprenne vite." },
    { icon: "clock", scope: "Optimisation initiale", title: "Informations pratiques", text: "Contrôle des horaires, des coordonnées et des liens affichés sur la fiche." },
    { icon: "image", scope: "Conseils", title: "Photos et publications", text: "Recommandations sur les photos, les publications et les informations à garder à jour." },
    { icon: "star", scope: "Conseils", title: "Avis clients", text: "Conseils pour obtenir des avis authentiques et y répondre de façon professionnelle." },
    { icon: "refresh", scope: "Suivi", title: "Suivi régulier", text: "Contrôle de la fiche, mises à jour et ajustements dans la durée, selon la formule choisie." },
  ] as { icon: IconName; scope: string; title: string; text: string }[],
  cardsNote:
    "Le contenu exact dépend de la formule choisie et est précisé dans le devis. L'éligibilité de l'entreprise à une fiche Google est vérifiée avant toute démarche.",
  followTitle: "Une fiche Google se travaille dans la durée",
  followText:
    "Optimiser une fiche une seule fois puis l'abandonner est rarement suffisant. Les informations changent, de nouvelles fonctionnalités apparaissent, des modifications non souhaitées peuvent être proposées et les attentes des clients évoluent.",
  followListTitle: "Un suivi régulier permet de :",
  followList: [
    "contrôler que les informations affichées sont exactes ;",
    "maintenir la fiche à jour : horaires, services, photos, publications ;",
    "repérer les modifications non souhaitées et les corriger ;",
    "examiner les évolutions disponibles et ajuster ce qui est pertinent pour votre activité.",
  ],
  followHonesty:
    "L'objectif est de renforcer progressivement la présence locale de l'entreprise. Aucune position particulière ni aucun délai de résultat n'est garanti : le classement local dépend notamment de la concurrence, de la proximité du client et de la pertinence de sa recherche.",
  stepsTitle: "Comment se déroule la prestation",
  steps: [
    { title: "Partage de votre fiche", text: "Vous envoyez le lien de votre fiche, ou vous expliquez votre situation si elle n'existe pas encore." },
    { title: "Examen", text: "La fiche est examinée pour identifier les améliorations prioritaires." },
    { title: "Optimisation", text: "Les optimisations convenues sont réalisées." },
    { title: "Recommandations et suivi", text: "Des recommandations ou un suivi sont proposés, selon la formule choisie." },
  ],
  needed: {
    title: "Pour démarrer, il faut",
    items: [
      "Le lien de votre fiche, ou le nom et la zone de votre activité",
      "La liste de vos services ou produits",
      "Un accès de gestionnaire à la fiche : Google permet d'en ajouter un sans partager votre mot de passe",
      "Vos photos, si vous en avez",
    ],
  },
  special: {
    title: "Fiche non validée, suspendue ou en doublon ?",
    text: "Ces situations demandent d'abord une étude : la cause est analysée pour déterminer les démarches adaptées auprès de Google. Aucune réactivation n'est garantie, car la décision appartient à Google.",
  },
  sectorsTitle: "Des exemples d'activités concernées",
  sectorsIntro:
    "Toute entreprise éligible à une fiche Google peut en tirer parti. Voici quelques exemples d'activités pour lesquelles une fiche soignée est particulièrement utile :",
  sectors: [
    "Restaurants et cafés",
    "Hôtels, résidences et maisons d'hôtes",
    "Salons de coiffure et instituts de beauté",
    "Cabinets médicaux, dentaires et paramédicaux",
    "Pharmacies et opticiens",
    "Garages et services automobiles",
    "Boutiques et commerces de détail",
    "Écoles et centres de formation",
    "Artisans et prestataires à domicile",
    "Agences immobilières",
    "Cabinets de conseil, juridiques et comptables",
    "Salles de sport et centres de loisirs",
  ],
  sectorsNote:
    "Les règles de Google varient selon l'activité et la manière dont elle est exercée : l'éligibilité est vérifiée au cas par cas.",
  siteTitle: "Et votre site web ?",
  siteText:
    "Un site web clair peut compléter la fiche en donnant plus de détails à vos visiteurs. C'est un complément possible, pas un préalable à l'optimisation de votre fiche.",
  quoteLabel: "Faire optimiser ma fiche Google",
  ctaText:
    "Partagez le lien de votre fiche ou décrivez votre situation. Vous recevez ensuite une proposition adaptée à votre activité.",
  faqTitle: "Questions sur la fiche Google",
  faq: [
    {
      q: "Pouvez-vous me garantir une place dans le top 3 de Google Maps ?",
      a: "Non. Le classement local dépend notamment de la concurrence, de la proximité du client et de la pertinence de sa recherche. Le travail porte sur la qualité, la pertinence et la complétude de la fiche, qui renforcent vos chances d'être mieux visible.",
    },
    {
      q: "Combien de temps faut-il pour voir des résultats ?",
      a: "Aucun délai ne peut être garanti honnêtement : cela dépend de l'état de la fiche et de la concurrence dans votre zone. C'est un travail progressif, d'où l'intérêt d'un suivi.",
    },
    {
      q: "Je n'ai pas encore de fiche Google, pouvez-vous m'aider ?",
      a: "Cela dépend de l'éligibilité de votre entreprise, que Google apprécie selon la manière dont vous recevez ou servez vos clients. La situation est étudiée avant toute démarche.",
    },
    {
      q: "Ma fiche est suspendue ou en doublon, que se passe-t-il ?",
      a: "Une étude est nécessaire pour comprendre la cause et choisir les démarches adaptées. Aucune réactivation n'est garantie : la décision revient à Google.",
    },
    {
      q: "Peut-on obtenir des avis rapidement ?",
      a: "Seuls des avis authentiques, laissés par de vrais clients, ont leur place sur une fiche. Des conseils sont donnés pour en obtenir de façon légitime et y répondre, mais aucun avis n'est acheté ni fabriqué.",
    },
    {
      q: "Ai-je besoin d'un site web ?",
      a: "Pas obligatoirement. Un site peut compléter la fiche, mais l'optimisation de la fiche reste utile même sans site.",
    },
    {
      q: "Intervenez-vous en dehors d'Abidjan ?",
      a: "Oui. L'optimisation d'une fiche se fait à distance, pour des entreprises situées à Abidjan, ailleurs en Côte d'Ivoire ou à l'étranger.",
    },
  ] as Faq[],
};
