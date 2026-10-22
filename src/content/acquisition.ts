import type { Feature } from "@/components/FeatureCards";
import type { Faq } from "./services";

/** Contenu de la page « Acquisition de clients » (/acquisition-clients). */
export const acquisition = {
  slug: "acquisition-clients",
  path: "/acquisition-clients",
  name: "Acquisition de clients",
  short: "Publicité Facebook, Instagram et TikTok, accompagnement sur Facebook Marketplace et recommandations adaptées à l'activité.",
  title: "Acquisition de clients à Abidjan | Facebook, Instagram, TikTok",
  description:
    "Acquisition de clients en Côte d'Ivoire : analyse de votre activité, publicité Facebook, Instagram et TikTok, Marketplace. Demandez un audit découverte.",
  h1: "Acquisition de clients et publicité sur les réseaux sociaux : choisir les bons leviers",
  intro:
    "DigiProspect Agency aide les entreprises à choisir et à mettre en place les moyens adaptés pour attirer des prospects et développer leurs ventes : publicité sur Facebook, Instagram ou TikTok, Facebook Marketplace, fiche Google ou site web. Vous n'avez pas besoin de toutes ces solutions : l'analyse de votre activité permet de retenir celles qui ont du sens pour vous.",
  image: {
    src: "/images/publicite-facebook-tiktok-marketplace-acquisition-clients.svg",
    alt: "Illustration d'un téléphone affichant des publicités, avec un mégaphone, un panier et une bulle de message",
  },
  quoteLabel: "Demander un audit découverte",
  waMessage: "Bonjour, je souhaite un audit découverte pour trouver les meilleures sources de clients pour mon activité.",

  stakeTitle: "Le véritable enjeu : choisir avant de dépenser",
  stakeText:
    "Publier sur les réseaux sociaux ou lancer une campagne sans objectif clair ne suffit pas nécessairement à obtenir des résultats. Les difficultés rencontrées sont souvent les mêmes :",
  stake: [
    { icon: "target", title: "Une clientèle mal identifiée", text: "On s'adresse à tout le monde, donc à personne en particulier." },
    { icon: "text", title: "Une offre mal présentée", text: "Le visiteur ne comprend pas assez vite ce qui lui est proposé." },
    { icon: "grid", title: "Un canal inadapté", text: "Une solution choisie par habitude plutôt que selon la clientèle visée." },
    { icon: "card", title: "Un budget mal réparti", text: "Des dépenses dispersées, sans priorité claire." },
    { icon: "refresh", title: "Pas de suivi des résultats", text: "Impossible de savoir ce qui fonctionne et ce qu'il faut ajuster." },
  ] as Feature[],
  stakeNote: "Examiner ces points avant d'agir aide à faire des choix plus éclairés.",

  leversTitle: "Les leviers d'acquisition possibles",
  leversIntro: "Chaque canal répond à un besoin différent. Voici à quoi ils servent et dans quels cas ils peuvent être intéressants.",
  levers: [
    { icon: "megaphone", scope: "Publicité payante", title: "Facebook Ads", text: "Campagnes payantes diffusées sur Facebook pour présenter une offre à une audience choisie : zone, âge, centres d'intérêt.", hint: "Intéressant lorsque votre clientèle utilise Facebook et que votre offre se comprend rapidement." },
    { icon: "image", scope: "Publicité payante", title: "Instagram Ads", text: "Campagnes payantes diffusées sur Instagram, un réseau très visuel, avec des images ou de courtes vidéos.", hint: "Intéressant lorsque vos produits ou votre univers se prêtent bien aux visuels." },
    { icon: "phone", scope: "Publicité payante", title: "TikTok Ads", text: "Campagnes publicitaires diffusées sur TikTok, principalement sous forme de vidéos.", hint: "Intéressant lorsque votre cible est présente sur la plateforme et que des contenus vidéo peuvent être préparés." },
    { icon: "cart", scope: "Canal de vente", title: "Facebook Marketplace", text: "Espace de présentation et de vente de produits, où les acheteurs d'une zone recherchent un article précis. Ce n'est pas, en soi, une campagne publicitaire payante.", hint: "Intéressant lorsque vous vendez des produits à des acheteurs locaux." },
    { icon: "pin", scope: "Visibilité locale", title: "Google Business Profile", text: "Fiche d'entreprise visible sur Google Maps et dans les recherches locales : horaires, services, photos, avis.", hint: "Intéressant lorsque des clients vous cherchent près de chez eux, si votre activité est éligible." },
    { icon: "browser", scope: "Présence en ligne", title: "Site web ou boutique en ligne", text: "Un espace que vous maîtrisez pour présenter l'activité, rassurer et transformer les visiteurs en demandes ou en commandes.", hint: "Intéressant lorsque vos clients ont besoin d'informations détaillées, de preuves ou de paiement en ligne." },
  ] as Feature[],
  leversNote: "Aucun de ces leviers n'est obligatoire. La recommandation dépend de votre activité, de votre clientèle et de vos objectifs.",

  fitTitle: "Un accompagnement adapté à votre activité",
  fitText: [
    "L'analyse préalable sert à fixer les priorités. Elle tient compte de ce que vous vendez, de vos clients, de l'endroit où ils se trouvent, de la façon dont ils achètent et des moyens que vous pouvez y consacrer.",
    "Un site web ou une fiche Google ne vous est recommandé que lorsque cela a du sens pour votre parcours client.",
  ],
  fitListTitle: "Selon votre situation, le plus pertinent peut être :",
  fitList: [
    "des campagnes publicitaires uniquement ;",
    "un accompagnement sur Marketplace uniquement ;",
    "une fiche Google mieux optimisée ;",
    "une combinaison de plusieurs canaux.",
  ],
  fitHonesty:
    "L'audit ne permet pas de connaître avec certitude le canal qui produira les meilleurs résultats. Il sert à formuler une recommandation raisonnée, qui pourra ensuite être évaluée grâce aux données disponibles.",

  includesTitle: "Ce que comprend la prestation",
  includes: [
    { icon: "search", scope: "Analyse", title: "Analyse initiale", text: "Compréhension de votre activité, de votre clientèle et de vos objectifs." },
    { icon: "target", scope: "Stratégie", title: "Stratégie et recommandations", text: "Choix des canaux à privilégier et des priorités, selon votre budget." },
    { icon: "sliders", scope: "Mise en place", title: "Création des campagnes", text: "Création et configuration des campagnes retenues sur Facebook, Instagram ou TikTok." },
    { icon: "image", scope: "Mise en place", title: "Annonces et contenus", text: "Préparation des annonces, des textes et des visuels nécessaires aux actions retenues." },
    { icon: "check", scope: "Mise en place", title: "Mise en ligne et vérifications", text: "Lancement des actions retenues et contrôle de leur bon fonctionnement." },
    { icon: "refresh", scope: "Suivi", title: "Suivi et ajustements", text: "Lecture des résultats et ajustements, selon la formule retenue." },
  ] as Feature[],
  includesNote: "Toutes ces étapes ne sont pas incluses dans chaque formule : le périmètre exact est précisé dans le devis.",
  budgetTitle: "Budget publicitaire et honoraires",
  budgetText:
    "Le budget publicitaire, c'est-à-dire les sommes diffusées sur Facebook, Instagram ou TikTok, est distinct des honoraires de la prestation. Son montant est défini avec vous.",

  stepsTitle: "Comment se déroule l'accompagnement",
  steps: [
    { title: "Échange", text: "Discussion sur votre activité et vos objectifs." },
    { title: "Analyse", text: "Analyse de vos besoins et recommandations." },
    { title: "Choix des actions", text: "Sélection des actions à mener et validation du devis." },
    { title: "Mise en place", text: "Réalisation des actions retenues." },
    { title: "Suivi", text: "Suivi et ajustements, selon la prestation convenue." },
  ],

  neededTitle: "Les informations nécessaires pour démarrer",
  needed: [
    { icon: "tag", title: "Votre activité", text: "Ce que vous faites, vos produits ou vos services." },
    { icon: "target", title: "Votre clientèle cible", text: "Les personnes que vous souhaitez atteindre." },
    { icon: "pin", title: "Votre zone géographique", text: "L'endroit où se trouvent vos clients." },
    { icon: "card", title: "Un budget indicatif", text: "Pour retenir des actions réalistes." },
    { icon: "image", title: "Vos visuels disponibles", text: "Photos, vidéos, logo, si vous en avez." },
    { icon: "lock", title: "Les accès nécessaires", text: "Vos pages et comptes professionnels." },
  ] as Feature[],
  neededNote:
    "Les accès sont fournis de manière sécurisée, par exemple en ajoutant l'agence comme gestionnaire ou partenaire sur votre page ou votre compte publicitaire. Les actions sont réalisées avec votre autorisation. Aucun mot de passe personnel n'est demandé.",

  faqTitle: "Questions fréquentes",
  faq: [
    { q: "Ai-je besoin d'un site web pour faire de la publicité ?", a: "Pas toujours. Selon l'activité et le parcours client, une page Facebook, des conversations WhatsApp ou des annonces Marketplace peuvent suffire pour commencer. Un site devient utile lorsque les clients ont besoin d'informations détaillées, de preuves ou de paiement en ligne. Cela se décide après analyse." },
    { q: "Qu'est-ce que l'audit découverte ?", a: "Un échange suivi d'une analyse pour comprendre votre activité, votre clientèle et vos objectifs, puis une recommandation des canaux à privilégier et des prochaines actions. Il ne garantit pas quel canal donnera les meilleurs résultats : il aide à décider de façon raisonnée. Les modalités sont précisées lors de votre demande." },
    { q: "Le budget publicitaire est-il compris dans la prestation ?", a: "Non. Le budget publicitaire, c'est-à-dire les sommes diffusées sur Facebook, Instagram ou TikTok, est distinct des honoraires de la prestation. Son montant est défini avec vous." },
    { q: "Peut-on commencer avec un budget limité ?", a: "Oui, il est possible de commencer modestement, mais un budget limité réduit le volume de diffusion et ce qu'on peut observer. L'analyse sert aussi à choisir des actions réalistes, certaines ne reposant pas forcément sur un budget publicitaire, comme Marketplace ou la fiche Google." },
    { q: "Garantissez-vous des ventes ou un nombre de clients ?", a: "Non. Ni les ventes, ni le nombre de prospects, ni la rentabilité ne peuvent être garantis : ils dépendent de votre offre, de votre marché, de votre budget et de la concurrence." },
    { q: "Intervenez-vous en dehors d'Abidjan ?", a: "Oui. Ces prestations se font à distance, pour des entreprises situées à Abidjan, ailleurs en Côte d'Ivoire ou à l'étranger." },
  ] as Faq[],

  ctaTitle: "Identifions les solutions adaptées à votre activité",
  ctaText:
    "Présentez-nous votre entreprise, vos objectifs et les difficultés que vous rencontrez. Nous pourrons examiner les pistes pertinentes et définir les prochaines étapes.",
};
