import type { Feature } from "@/components/FeatureCards";
import type { Faq } from "./services";

/** Contenu de la page « Google Ads » (/google-ads-abidjan). Aucun tarif, aucune promesse de résultat. */
export const googleAds = {
  slug: "google-ads",
  path: "/google-ads-abidjan",
  name: "Google Ads",
  short: "Création, configuration, lancement et gestion de campagnes Google Ads, avec un suivi des conversions fiable.",
  title: "Gestion Google Ads à Abidjan | Campagnes et tracking",
  description:
    "Gestion Google Ads à Abidjan et en Côte d'Ivoire : compte, tracking, création de campagnes et optimisation mensuelle. Devis sur demande.",
  h1: "Google Ads à Abidjan : créer, lancer et optimiser vos campagnes",
  intro:
    "DigiProspect Agency vous accompagne sur l'ensemble de votre parcours publicitaire Google Ads : ouverture et configuration du compte, mise en place du suivi des conversions, création et lancement des campagnes, puis gestion et optimisation dans la durée. Vous choisissez le niveau d'accompagnement dont vous avez besoin.",
  image: {
    src: "/images/google-ads-campagnes-recherche-conversions.svg",
    alt: "Illustration d'une page de résultats de recherche avec une annonce sponsorisée, un suivi de conversions et une cible",
  },
  primaryCta: "Demander un devis Google Ads",
  secondaryCta: "Être accompagné sur mes campagnes",
  waMessage: "Bonjour, je souhaite un devis pour mes campagnes Google Ads.",

  levelsTitle: "Trois niveaux d'accompagnement",
  levelsIntro: "Chaque niveau peut être demandé séparément. Votre besoin, votre site et vos objectifs déterminent ce qui est utile.",
  levels: [
    { icon: "sliders", scope: "Prestation ponctuelle", title: "1. Création et configuration du compte", text: "Ouverture ou reprise du compte Google Ads, facturation, accès et paramètres de départ." },
    { icon: "gauge", scope: "Prestation ponctuelle", title: "2. Tracking, création et lancement des campagnes", text: "Mesure des conversions, puis création, vérification et mise en ligne des campagnes." },
    { icon: "refresh", scope: "Prestation récurrente", title: "3. Gestion et optimisation mensuelle", text: "Suivi des campagnes après lancement, optimisations et rapports périodiques." },
  ] as Feature[],

  accountTitle: "Création et configuration du compte Google Ads",
  accountIntro: "Un compte bien configuré évite des erreurs de départ, notamment sur la facturation, les accès et les liaisons avec vos outils de mesure.",
  account: [
    { icon: "plus", title: "Création du compte", text: "Ouverture d'un compte Google Ads pour votre entreprise." },
    { icon: "sliders", title: "Compte existant", text: "Configuration ou reprise d'un compte que vous possédez déjà." },
    { icon: "card", title: "Facturation", text: "Paramétrage des informations de facturation." },
    { icon: "lock", title: "Accès et autorisations", text: "Configuration des accès, avec les bons niveaux de droits." },
    { icon: "grid", title: "Paramètres de départ", text: "Configuration initiale des campagnes et des paramètres du compte." },
    { icon: "link", title: "Liaison avec Google Analytics 4", text: "Lorsque nécessaire." },
    { icon: "tag", title: "Liaison avec Google Tag Manager", text: "Lorsque nécessaire." },
  ] as Feature[],

  trackingTitle: "Tracking et suivi des conversions",
  trackingIntro:
    "Sans mesure fiable, il est impossible de savoir quelles annonces apportent des demandes, des appels ou des ventes. Le suivi des conversions est un élément central de l'accompagnement : il permet de décider avec des données plutôt qu'au ressenti.",
  tracking: [
    { icon: "tag", title: "Google Tag Manager", text: "Un outil qui regroupe les codes de suivi de votre site. Installation et configuration." },
    { icon: "gauge", title: "Google Analytics 4", text: "L'outil de mesure d'audience de Google : visites, pages vues et actions. Configuration incluse." },
    { icon: "target", title: "Balise Google Ads", text: "Un petit code installé sur votre site pour indiquer à Google quand une action utile est réalisée." },
    { icon: "check", title: "Suivi des conversions", text: "Choix et configuration des actions utiles à mesurer : formulaire, appel, achat." },
    { icon: "mail", title: "Formulaires envoyés", text: "Suivi des demandes envoyées depuis votre site." },
    { icon: "phone", title: "Appels téléphoniques", text: "Suivi des appels lorsque c'est possible." },
    { icon: "whatsapp", title: "Clics sur WhatsApp", text: "Suivi des clics sur vos boutons WhatsApp lorsque c'est techniquement mesurable." },
    { icon: "cart", title: "Achats et chiffre d'affaires", text: "Pour les sites e-commerce : suivi des commandes et de leur montant." },
    { icon: "search", title: "Vérification et tests", text: "Contrôle du bon fonctionnement des événements et des conversions." },
    { icon: "refresh", title: "Conversions améliorées", text: "Une mesure plus fiable des actions, mise en place lorsque c'est pertinent et techniquement possible." },
  ] as Feature[],
  trackingNote:
    "Les configurations possibles dépendent de l'architecture de votre site, des accès disponibles et des exigences de consentement applicables.",

  launchTitle: "Création et lancement des campagnes",
  launchIntro: "Avant de lancer une campagne, le travail porte sur la compréhension de votre activité et de vos clients, puis sur une configuration soignée.",
  launch: [
    "Analyse de l'activité et des objectifs commerciaux",
    "Étude de la concurrence",
    "Recherche et sélection de mots-clés",
    "Identification des intentions de recherche (ce que les internautes veulent trouver)",
    "Organisation des groupes d'annonces",
    "Rédaction des annonces publicitaires",
    "Configuration des zones géographiques ciblées",
    "Paramétrage des audiences lorsque pertinent",
    "Définition du budget publicitaire",
    "Configuration des extensions et composants d'annonces (informations en plus du texte : appel, liens, précisions)",
    "Vérification des pages de destination",
    "Contrôle avant lancement et mise en ligne des campagnes",
  ],
  formatsTitle: "Les formats de campagnes selon vos besoins",
  formats: [
    { icon: "search", title: "Réseau de Recherche", text: "Des annonces affichées lorsque des internautes recherchent des termes liés à votre activité.", hint: "Souvent pertinent pour répondre à une demande déjà exprimée." },
    { icon: "image", title: "Display", text: "Des annonces visuelles diffusées sur des sites et applications partenaires de Google.", hint: "Utile pour se faire connaître ou pour relancer des visiteurs." },
    { icon: "gauge", title: "Performance Max", text: "Des campagnes qui diffusent vos annonces sur plusieurs espaces de Google à partir de vos éléments (textes, visuels, objectifs).", hint: "À envisager lorsque le suivi des conversions est bien en place." },
    { icon: "grid", title: "Autres formats", text: "D'autres formats existent selon vos objectifs et l'éligibilité de votre compte.", hint: "Évalués au cas par cas." },
  ] as Feature[],
  formatsNote: "Tous ces formats ne sont pas systématiquement nécessaires. Le choix dépend de votre projet, de vos objectifs et de votre budget.",

  monthlyBadge: "Prestation récurrente",
  monthlyTitle: "Suivi et optimisation mensuelle des campagnes",
  monthlyIntro:
    "Une campagne se pilote dans la durée. La gestion mensuelle commence après le lancement. C'est une prestation récurrente, distincte de la création et du lancement initial.",
  monthly: [
    "Surveillance des campagnes",
    "Analyse des impressions et des clics",
    "Analyse du taux de conversion",
    "Analyse du coût par clic et du coût par acquisition (ce que coûte un clic, puis un contact ou une vente)",
    "Optimisation des mots-clés",
    "Ajout de mots-clés négatifs (pour ne pas apparaître sur de mauvaises recherches)",
    "Amélioration des annonces",
    "Ajustement des enchères (le montant accepté par clic) et des budgets",
    "Optimisation des zones géographiques",
    "Analyse des performances des pages de destination",
    "Rapports périodiques",
    "Recommandations et actions d'amélioration",
  ],
  monthlyNote: "Le contenu exact varie selon la formule et le projet, et il est précisé dans le devis. Aucun résultat n'est garanti.",

  glossaryTitle: "En clair : les mots à connaître",
  glossary: [
    { term: "Conversion", meaning: "Une action utile réalisée par un visiteur : envoyer un formulaire, appeler, écrire sur WhatsApp ou acheter." },
    { term: "Tracking (suivi)", meaning: "La mesure de ces actions, pour savoir quelles annonces apportent des résultats." },
    { term: "Mot-clé", meaning: "Un mot ou une expression tapé dans Google par un internaute, par exemple « plombier Abidjan »." },
    { term: "Mot-clé négatif", meaning: "Un terme pour lequel vous ne voulez pas que votre annonce s'affiche." },
    { term: "Coût par clic", meaning: "Ce que vous payez à Google chaque fois qu'un internaute clique sur votre annonce." },
    { term: "Coût par acquisition", meaning: "Ce que coûte, en moyenne, l'obtention d'un contact ou d'une vente." },
    { term: "Page de destination", meaning: "La page sur laquelle arrive l'internaute après avoir cliqué sur votre annonce." },
    { term: "Performance Max", meaning: "Un type de campagne qui diffuse vos annonces sur plusieurs espaces de Google (recherche, YouTube, Maps…) à partir de vos textes et visuels." },
  ],

  budgetTitle: "Budget publicitaire et frais de prestation",
  budgetText:
    "Le budget publicitaire est payé directement par le client à Google. Il est distinct des frais de prestation et de gestion de DigiProspect Agency, et il ne leur est jamais ajouté ni mélangé. Son montant est défini avec vous, selon vos objectifs.",

  faqTitle: "Questions sur Google Ads",
  faq: [
    { q: "Le budget publicitaire est-il compris dans la prestation ?", a: "Non. Il est payé directement par le client à Google, et il est distinct des frais de prestation et de gestion." },
    { q: "Garantissez-vous des prospects ou des ventes ?", a: "Non. Ni le nombre de prospects, ni les ventes, ni la rentabilité ne peuvent être garantis. Ils dépendent de votre offre, de votre marché, de votre budget, de la concurrence et de votre site. Le travail porte sur la qualité de la configuration, du suivi et de l'optimisation." },
    { q: "Ai-je besoin d'un site web pour utiliser Google Ads ?", a: "Les annonces envoient généralement vers une page de destination, qui peut être un site ou une page dédiée. Sa qualité influence les résultats : elle fait partie des points vérifiés avant le lancement." },
    { q: "Pouvez-vous reprendre un compte Google Ads existant ?", a: "Oui. La configuration d'un compte existant fait partie des prestations. Un état des lieux permet de décider quoi conserver, corriger ou refaire." },
    { q: "Le suivi des appels et des clics WhatsApp est-il toujours possible ?", a: "Pas toujours. Cela dépend de l'architecture du site, des accès disponibles et des exigences de consentement. La faisabilité est vérifiée avant la configuration." },
    { q: "Quelle différence entre le lancement et la gestion mensuelle ?", a: "Le lancement est une prestation ponctuelle : compte, tracking, création des campagnes et mise en ligne. La gestion mensuelle est une prestation récurrente qui suit les campagnes après le lancement et les optimise régulièrement." },
    { q: "Intervenez-vous en dehors d'Abidjan ?", a: "Oui. Ces prestations se font à distance, pour des entreprises situées à Abidjan, ailleurs en Côte d'Ivoire ou à l'étranger." },
  ] as Faq[],

  ctaTitle: "Parlons de vos campagnes Google Ads",
  ctaText: "Présentez votre activité, vos objectifs et votre situation actuelle. Vous recevez une réponse claire sur les étapes utiles et sur la suite.",
};
