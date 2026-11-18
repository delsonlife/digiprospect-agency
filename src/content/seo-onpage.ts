import type { Feature } from "@/components/FeatureCards";

/** SEO on-page inclus dans chaque création de site web (pas une option payante ni un abonnement). */
export const seoOnPage = {
  title: "SEO on-page inclus dans chaque site",
  intro:
    "Chaque site conçu par DigiProspect Agency est optimisé pour les moteurs de recherche dès sa conception. Ce travail est inclus dans la création du site : ce n'est ni une option payante, ni un abonnement.",
  items: [
    { icon: "search", title: "Mots-clés principaux", text: "Recherche et intégration des mots-clés pertinents pour votre activité." },
    { icon: "tag", title: "Title et Meta Description", text: "Le titre et le résumé de chaque page, affichés dans les résultats Google, uniques pour chaque page." },
    { icon: "grid", title: "Titres H1, H2 et H3", text: "Les titres et sous-titres de chaque page, organisés clairement pour les lecteurs et pour Google." },
    { icon: "link", title: "URLs", text: "Les adresses des pages : courtes, descriptives et stables." },
    { icon: "image", title: "Images", text: "Noms de fichiers descriptifs et texte alternatif (ALT) qui décrit chaque image à Google et aux personnes malvoyantes." },
    { icon: "text", title: "Contenus et maillage interne", text: "Des textes utiles et des liens entre vos pages pour guider les visiteurs." },
    { icon: "phone", title: "Adaptation mobile", text: "Un site lisible et agréable sur téléphone." },
    { icon: "gauge", title: "Performances", text: "Optimisation du temps de chargement." },
    { icon: "sliders", title: "Éléments techniques essentiels", text: "Les réglages techniques de base utiles au référencement." },
    { icon: "browser", title: "Sitemap XML et robots.txt", text: "Le plan du site et les consignes données aux robots de Google, configurés lorsque c'est pertinent." },
    { icon: "target", title: "Préparation à l'indexation", text: "Le site est prêt à être découvert et enregistré par Google (indexation)." },
  ] as Feature[],
  note:
    "L'objectif est de livrer un site techniquement propre et bien structuré. Aucune position sur Google n'est garantie.",
  followText:
    "Après la mise en ligne, un accompagnement SEO local mensuel peut être proposé en complément. C'est une prestation distincte de la création du site.",
  followLabel: "Découvrir l'accompagnement SEO local",
  followHref: "/seo-referencement-local#accompagnement-mensuel",
};
