import type { Feature } from "@/components/FeatureCards";
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
  includes: Feature[];
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
    title: "Création de site internet à Abidjan | Vitrine, refonte",
    description:
      "Création de site internet à Abidjan et en Côte d'Ivoire : site vitrine, refonte, adapté au mobile et prêt pour Google. Demandez un devis.",
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
      { icon: "browser", title: "Site vitrine sur mesure", text: "Site multi-pages ou page unique, selon votre activité et vos objectifs." },
      { icon: "refresh", title: "Refonte de site existant", text: "Reprise des contenus utiles et amélioration de la présentation." },
      { icon: "grid", title: "Design sur mesure", text: "Mise en page cohérente avec votre identité, lisible sur téléphone comme sur ordinateur." },
      { icon: "mail", title: "Formulaire de contact", text: "Les demandes de vos visiteurs vous parviennent directement par e-mail." },
      { icon: "whatsapp", title: "Contact et pages légales", text: "Bouton WhatsApp, liens de contact visibles, mentions légales et politique de confidentialité." },
      { icon: "search", title: "Bases du référencement", text: "Titres, descriptions et plan du site, déclaration à Google, puis mise en ligne." },
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
    title: "Création de boutique en ligne à Abidjan | E-commerce",
    description:
      "Création de boutique en ligne en Côte d'Ivoire : catalogue produits, commande simple, version mobile soignée. Devis sur demande.",
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
      { icon: "grid", title: "Catalogue et catégories", text: "Pages produits et catégories claires, pour que vos clients trouvent ce qu'ils cherchent." },
      { icon: "cart", title: "Parcours de commande", text: "Panier, commande et récapitulatif simples à suivre, y compris sur téléphone." },
      { icon: "card", title: "Paiement et livraison", text: "Options définies avec vous, selon votre activité et la solution retenue." },
      { icon: "phone", title: "Version mobile soignée", text: "Une boutique agréable à utiliser pour les achats depuis un téléphone." },
      { icon: "whatsapp", title: "WhatsApp avant achat", text: "Un bouton pour poser une question avant de commander." },
      { icon: "plus", title: "Prise en main", text: "Explications pour ajouter et modifier vos produits vous-même." },
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
    includes: gbp.cards,
    steps: gbp.steps,
    needed: gbp.needed.items,
    faq: gbp.faq,
    quoteLabel: gbp.quoteLabel,
  },
  {
    slug: "acquisition-clients",
    path: "/acquisition-clients",
    name: "Publicité en ligne et acquisition de clients",
    short: "Publicité Facebook et TikTok, Facebook Marketplace et audit découverte pour trouver les sources de clients adaptées à votre activité.",
    title: "Publicité Facebook et TikTok à Abidjan | Acquisition clients",
    description: "Publicité Facebook Ads, TikTok Ads et Facebook Marketplace en Côte d'Ivoire : un audit découverte pour choisir les bonnes sources de clients.",
    h1: "Publicité Facebook, TikTok et Marketplace : trouver des clients là où ils sont",
    image: { src: "/images/publicite-facebook-tiktok-marketplace-acquisition-clients.svg", alt: "Illustration d'un téléphone affichant des publicités, avec un mégaphone, un panier et une bulle de message" },
    intro: "Toutes les entreprises n'ont pas besoin d'un site web pour trouver des clients. Selon votre activité, votre niche et votre clientèle, DigiProspect Agency commence par un audit découverte, puis recommande les sources d'acquisition les plus adaptées : publicité Facebook, publicité TikTok, vente sur Facebook Marketplace, fiche Google ou site web.",
    problem: "Beaucoup d'entreprises publient sur les réseaux sociaux sans méthode : des publications sans objectif, des publicités lancées sans ciblage clair, des annonces qui passent inaperçues. Les messages arrivent peu, et il est difficile de savoir quoi améliorer.",
    benefits: [
      "Une recommandation fondée sur votre activité et votre clientèle, pas une solution toute faite.",
      "Des campagnes construites autour d'un objectif précis : messages, appels, visites ou commandes.",
      "Des annonces Marketplace mieux présentées : photos, titres et descriptions.",
      "Une lecture claire de ce qui fonctionne, expliquée simplement.",
    ],
    includes: [
      { icon: "search", title: "Audit découverte", text: "Échange pour comprendre votre domaine, votre clientèle et vos objectifs, puis recommandation des sources adaptées." },
      { icon: "megaphone", title: "Publicité Facebook", text: "Création et gestion de campagnes Facebook Ads selon votre objectif." },
      { icon: "phone", title: "Publicité TikTok", text: "Création et gestion de campagnes TikTok Ads pour toucher l'audience de la plateforme." },
      { icon: "cart", title: "Facebook Marketplace", text: "Mise en valeur de vos produits sur Marketplace : annonces, photos et descriptions." },
      { icon: "pin", title: "Fiche Google", text: "Optimisation de votre fiche Google Business Profile lorsque votre activité s'y prête." },
      { icon: "refresh", title: "Suivi et ajustements", text: "Lecture des résultats avec vous et ajustements, selon la formule choisie." },
    ],
    steps: [
      { title: "Audit découverte", text: "Échange sur votre activité, votre niche, votre clientèle et vos objectifs." },
      { title: "Recommandation", text: "Proposition des sources d'acquisition les plus adaptées à votre cas, avec les priorités." },
      { title: "Mise en place", text: "Création des campagnes, des annonces ou des pages retenues." },
      { title: "Lancement", text: "Mise en ligne et vérification du suivi des résultats." },
      { title: "Suivi", text: "Lecture des résultats et ajustements, selon la formule choisie." },
    ],
    needed: [
      "Votre activité, vos produits ou vos services",
      "Votre clientèle cible et votre zone",
      "Vos photos et visuels existants, si vous en avez",
      "L'accès à votre page Facebook ou à votre compte TikTok, ou leur création avec vous",
      "Un budget publicitaire indicatif, si vous prévoyez de la publicité",
    ],
    faq: [
      { q: "Ai-je besoin d'un site web pour faire de la publicité ?", a: "Pas toujours. Selon votre activité, des messages WhatsApp, une page Facebook ou des annonces Marketplace peuvent suffire pour commencer. L'audit découverte sert justement à choisir la bonne solution." },
      { q: "Qu'est-ce que l'audit découverte ?", a: "Un échange pour comprendre votre domaine, votre clientèle et vos objectifs, suivi d'une recommandation des sources d'acquisition adaptées. Les modalités sont précisées lors de votre demande." },
      { q: "Le budget publicitaire est-il compris ?", a: "Le budget diffusé sur Facebook ou TikTok est payé à la plateforme et s'ajoute au prix de la prestation. Un montant indicatif est défini avec vous avant le lancement." },
      { q: "Garantissez-vous des ventes ou un nombre de clients ?", a: "Non. Les résultats dépendent de votre offre, de votre marché et du budget. Le travail porte sur la qualité de la mise en place et du suivi." },
      { q: "Intervenez-vous en dehors d'Abidjan ?", a: "Oui. Ces prestations se font à distance, pour des entreprises situées à Abidjan, ailleurs en Côte d'Ivoire ou à l'étranger." },
    ],
    quoteLabel: "Demander un audit découverte",
  },
];

export const homeFaq: Faq[] = [
  {
    q: "Mon entreprise a-t-elle forcément besoin d'un site web ?",
    a: "Pas toujours. Selon votre activité, d'autres sources de clients peuvent être plus adaptées : publicité Facebook ou TikTok, Facebook Marketplace, fiche Google. Un audit découverte permet de choisir ce qui convient à votre cas.",
  },
  {
    q: "Intervenez-vous en dehors d'Abidjan ?",
    a: "Oui. DigiProspect Agency accompagne des entreprises à Abidjan comme dans le reste de la Côte d'Ivoire. Pour une entreprise située à l'étranger, le projet se mène à distance.",
  },
  {
    q: "Quels types de projets prenez-vous en charge ?",
    a: "Création et refonte de sites vitrines, boutiques en ligne, optimisation de fiche Google, publicité Facebook et TikTok. Si votre besoin sort de ce cadre, l'agence le précise avant de commencer.",
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
