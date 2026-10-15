import { gbp } from "./gbp";

export type Faq = { q: string; a: string };

export type Service = {
  image: { src: string; alt: string };
  slug: string;
  path: string;
  name: string;
  short: string;
  title: string; // balise <title>
  description: string; // meta description
  h1: string;
  intro: string;
  problem: string;
  benefits: string[];
  includes: string[];
  steps: { title: string; text: string }[];
  needed: string[];
  faq: Faq[];
  quoteLabel: string;
};

export const services: Service[] = [
  {
    slug: "creation-site-web",
    image: { src: "/images/creation-site-web-abidjan-maquette-responsive.svg", alt: "Illustration d'un site web affiché sur ordinateur et sur téléphone, avec un bouton de contact" },
    path: "/creation-site-web-abidjan",
    name: "Création de sites web",
    short: "Sites vitrines, refontes et sites adaptés au mobile, pensés pour rassurer et générer des demandes.",
    title: "Création de site web à Abidjan et en Côte d'Ivoire : vitrine, refonte",
    description:
      "Création et refonte de site web professionnel à Abidjan et en Côte d'Ivoire : site vitrine adapté au mobile, rapide, pensé pour le référencement et la demande de devis. Devis sur demande.",
    h1: "Création de site web à Abidjan et partout en Côte d'Ivoire : être trouvé et contacté",
    intro:
      "Un site professionnel doit répondre vite à trois questions : que faites-vous, pour qui, et comment vous joindre. DigiProspect Agency conçoit des sites clairs, rapides sur téléphone, et construits pour que vos visiteurs passent à l'action.",
    problem:
      "Beaucoup d'entreprises ont un site qui existe, mais qui n'aide pas : texte flou, affichage difficile sur téléphone, aucun bouton pour demander un devis, pages introuvables sur Google. Le visiteur repart sans vous avoir contacté.",
    benefits: [
      "Une présentation claire de votre activité, qui inspire confiance dès la première page.",
      "Un affichage fiable sur téléphone, là où la majorité de vos visiteurs vous consultent.",
      "Des boutons de contact visibles (formulaire, WhatsApp) à chaque étape du parcours.",
      "Une base technique propre pour le référencement : titres, structure des pages, vitesse et plan du site.",
    ],
    includes: [
      "Site vitrine multi-pages ou page unique selon votre besoin",
      "Refonte d'un site existant, avec reprise des contenus utiles",
      "Design sur mesure, cohérent avec votre identité",
      "Formulaire de contact qui envoie les demandes par e-mail",
      "Bouton WhatsApp, liens de contact et pages légales",
      "Configuration de base du référencement et mise en ligne",
    ],
    steps: [
      { title: "Cadrage", text: "Définition de votre activité, de vos clients cibles, de vos pages et de l'objectif principal du site." },
      { title: "Structure et contenus", text: "Validation de l'arborescence, puis rédaction ou reprise des textes avec vos éléments." },
      { title: "Design et développement", text: "Création des pages, adaptation mobile, tests sur plusieurs tailles d'écran." },
      { title: "Relecture et corrections", text: "Vous testez le site, puis les textes, les visuels et les formulaires sont ajustés." },
      { title: "Mise en ligne", text: "Connexion du domaine, vérifications avant l'ouverture, déclaration du site à Google Search Console." },
    ],
    needed: [
      "Le nom de votre entreprise et une description de votre activité",
      "Votre logo et vos couleurs, s'ils existent",
      "Vos services ou produits à présenter",
      "Des photos réelles de votre travail, si vous en avez",
      "Les liens de votre site actuel, de vos réseaux sociaux et de vos concurrents que vous suivez",
    ],
    quoteLabel: "Demander un devis pour mon site",
    faq: [
      {
        q: "Puis-je refaire mon site sans perdre mes pages déjà connues de Google ?",
        a: "Oui, à condition de les identifier avant la refonte. Les anciennes adresses utiles sont redirigées vers les nouvelles pour éviter les pages introuvables.",
      },
      {
        q: "Mon site sera-t-il utilisable sur un petit téléphone Android ?",
        a: "C'est la base du travail : chaque page est conçue d'abord pour les petits écrans, puis adaptée aux tablettes et aux ordinateurs.",
      },
      {
        q: "Le site sera-t-il bien placé sur Google ?",
        a: "DigiProspect Agency construit une base technique et éditoriale propre, mais personne ne peut garantir une position sur Google. Le classement dépend aussi de la concurrence et du temps.",
      },
      {
        q: "Comment obtenir un prix ?",
        a: "Le prix dépend du nombre de pages, des fonctionnalités et des contenus à produire. Envoyez votre demande : un devis écrit vous est adressé.",
      },
    ],
  },
  {
    slug: "creation-site-ecommerce",
    image: { src: "/images/boutique-en-ligne-abidjan-catalogue-produits.svg", alt: "Illustration d'une boutique en ligne avec catalogue de produits et panier" },
    path: "/creation-site-ecommerce",
    name: "Boutiques en ligne",
    short: "Sites de vente en ligne : catalogue clair, parcours d'achat simple, adapté à vos moyens d'encaissement.",
    title: "Création de boutique en ligne à Abidjan et en Côte d'Ivoire",
    description:
      "Création de boutique en ligne pour commerçants en Côte d'Ivoire : catalogue produits, parcours de commande simple, version mobile soignée. Devis sur demande.",
    h1: "Créer une boutique en ligne à Abidjan et en Côte d'Ivoire, simple à gérer et agréable à utiliser",
    intro:
      "Vendre en ligne ne se résume pas à publier des photos. Il faut un catalogue lisible, un parcours de commande court et des informations qui rassurent l'acheteur. La boutique est conçue autour de votre façon de vendre.",
    problem:
      "Vendre uniquement par messages ou sur les réseaux sociaux oblige à répondre aux mêmes questions toute la journée : prix, disponibilité, livraison. Les commandes se perdent dans les conversations et le catalogue n'est jamais à jour.",
    benefits: [
      "Un catalogue organisé où le client trouve et compare vos produits seul.",
      "Une commande claire, avec les informations de livraison et de paiement visibles.",
      "Moins de messages répétitifs : l'essentiel est expliqué sur le site.",
      "Une boutique que vous pouvez mettre à jour vous-même après la livraison.",
    ],
    includes: [
      "Pages produits et catégories",
      "Parcours de commande et récapitulatif",
      "Options de paiement et de livraison à définir avec vous selon votre activité",
      "Version mobile soignée pour les achats depuis un téléphone",
      "Bouton WhatsApp pour les questions avant achat",
      "Prise en main pour ajouter et modifier vos produits",
    ],
    steps: [
      { title: "Analyse de votre vente", text: "Produits, zones de livraison, moyens d'encaissement, volume de commandes attendu." },
      { title: "Choix de la solution", text: "Choix de l'outil le plus adapté à votre budget et à votre niveau d'autonomie." },
      { title: "Mise en place du catalogue", text: "Structure des catégories, fiches produits, photos et descriptions." },
      { title: "Tests de commande", text: "Des commandes d'essai complètes sont passées avant l'ouverture." },
      { title: "Ouverture et accompagnement", text: "Mise en ligne, prise en main, premiers ajustements." },
    ],
    needed: [
      "La liste de vos produits avec prix et photos",
      "Vos conditions de livraison et de retrait",
      "Les moyens de paiement que vous souhaitez proposer",
      "Votre logo et vos couleurs, s'ils existent",
    ],
    quoteLabel: "Demander un devis pour ma boutique",
    faq: [
      {
        q: "Quels moyens de paiement peut-on proposer ?",
        a: "Cela dépend de la solution retenue et de vos accords avec les opérateurs de paiement. Cela se définit avec vous pendant le cadrage.",
      },
      {
        q: "Puis-je gérer mes produits moi-même ?",
        a: "Oui. La boutique est livrée avec une prise en main pour ajouter, modifier et retirer des produits sans passer par l'agence.",
      },
      {
        q: "Une boutique en ligne est-elle adaptée à une petite activité ?",
        a: "Si vos produits sont déjà demandés par message, c'est souvent un bon point de départ. Le plus simple est de commencer par le nécessaire, puis de faire évoluer la boutique.",
      },
    ],
  },
  {
    slug: gbp.slug,
    path: gbp.path,
    name: gbp.name,
    short: gbp.short,
    title: gbp.title,
    description: gbp.description,
    h1: gbp.h1,
    image: gbp.image,
    intro: gbp.intro,
    problem: gbp.why.join(" "),
    benefits: gbp.whyPoints,
    includes: gbp.cards.map((c) => c.title),
    steps: gbp.steps,
    needed: gbp.needed.items,
    faq: gbp.faq,
    quoteLabel: gbp.quoteLabel,
  },
];

export const homeFaq: Faq[] = [
  {
    q: "Intervenez-vous en dehors d'Abidjan ?",
    a: "Oui. DigiProspect Agency accompagne des entreprises à Abidjan comme dans le reste de la Côte d'Ivoire. Pour une entreprise située à l'étranger, le projet se mène à distance.",
  },
  {
    q: "Quels types de projets prenez-vous en charge ?",
    a: "Création et refonte de sites vitrines, boutiques en ligne, et optimisation et suivi de fiches Google Business Profile. Si votre besoin sort de ce cadre, l'agence le précise avant de commencer.",
  },
  {
    q: "Comment se passe une demande de devis ?",
    a: "Vous remplissez le formulaire ou écrivez sur WhatsApp en décrivant votre activité et votre besoin. DigiProspect Agency revient vers vous pour préciser les points utiles, puis envoie une proposition écrite.",
  },
  {
    q: "Que dois-je préparer avant de vous contacter ?",
    a: "Rien d'obligatoire. Une description de votre activité, vos services et, si vous en avez, votre logo, vos photos et l'adresse de votre site actuel suffisent pour démarrer.",
  },
  {
    q: "Garantissez-vous des résultats sur Google ou un nombre de clients ?",
    a: "Non. DigiProspect Agency s'engage sur le travail réalisé et sa qualité, pas sur un classement ou un volume de demandes, qui dépendent aussi du marché et de votre activité.",
  },
  {
    q: "Pouvez-vous reprendre mon site actuel ?",
    a: "Oui, après un premier regard sur ce qui existe : contenus à conserver, pages déjà connues de Google, éléments à corriger.",
  },
];
