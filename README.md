# DigiProspect Agency : site vitrine

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. Pas de base de données ni de CMS.

## Commandes

```bash
npm install          # installation
npm run dev          # développement : http://localhost:3000
npm run lint         # vérification TypeScript
npm run build        # build de production
npm start            # lancer le build en local
```

Copiez `.env.example` vers `.env.local` et renseignez les valeurs.

## Variables d'environnement

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL publique (sitemap, canonical, Open Graph). Défaut : `https://digiprospectagency.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Numéro WhatsApp, format `225` + numéro, sans « + » ni espaces. **Valeur provisoire `225XXXXXXXXXX` : à remplacer avant la mise en ligne.** Alimente le bouton flottant, le footer et la page contact |
| `NEXT_PUBLIC_CONTACT_EMAIL` | E-mail affiché (footer, contact). Vide = masqué |
| `NEXT_PUBLIC_COMEUP_URL` | Profil ComeUp. Vide = lien masqué |
| `RESEND_API_KEY` | Clé API Resend pour l'envoi du formulaire |
| `CONTACT_TO_EMAIL` | Adresse qui reçoit les demandes de devis |
| `CONTACT_FROM_EMAIL` | Expéditeur validé dans Resend, ex. `DigiProspect <devis@digiprospectagency.com>` |

Tant que les variables Resend sont absentes, le formulaire répond par une erreur claire (503) et **n'affiche jamais de succès sans envoi réel**.

### Configurer Resend
1. Créez un compte sur resend.com, ajoutez le domaine `digiprospectagency.com` et ajoutez les enregistrements DNS demandés (SPF, DKIM).
2. Créez une clé API, puis renseignez les trois variables ci-dessus.
3. Envoyez une demande de test depuis `/contact` et vérifiez la réception.

## Déploiement sur GitHub et Vercel

```bash
git init
git add .
git commit -m "Site DigiProspect Agency"
git branch -M main
git remote add origin https://github.com/VOTRE-COMPTE/digiprospect-agency.git
git push -u origin main
```

1. Sur vercel.com : **Add New, Project**, importez le dépôt GitHub (framework détecté : Next.js).
2. Dans **Settings, Environment Variables**, ajoutez toutes les variables du tableau (Production).
3. Lancez le déploiement.
4. **Settings, Domains** : ajoutez `digiprospectagency.com` et `www.digiprospectagency.com`, puis appliquez les enregistrements DNS indiqués par Vercel chez votre registrar. Choisissez un domaine principal et redirigez l'autre vers lui.
5. Après modification d'une variable, relancez un déploiement (les variables `NEXT_PUBLIC_*` sont intégrées au build).

## Après la mise en ligne
- Google Search Console : ajoutez la propriété du domaine, validez-la par DNS, soumettez `https://digiprospectagency.com/sitemap.xml`.
- Si l'ancien site avait des URL à conserver, ajoutez-les en redirections 301 dans `next.config.ts` (exemple commenté).
- Google Business Profile : à traiter séparément, après vérification de l'éligibilité.

## Où modifier le contenu
- Services, FAQ : `src/content/services.ts`
- Réalisations et avis : `src/content/projects.ts` (listes vides tant qu'aucun projet ou avis réel n'est ajouté ; les sections correspondantes de l'accueil sont alors masquées). Mettez les captures dans `public/projets/`.
- Coordonnées, communes, messages WhatsApp : `src/lib/site.ts`
- Mentions légales et confidentialité : `src/app/mentions-legales` et `src/app/politique-de-confidentialite` (passages `[À COMPLÉTER]`). Ces deux pages sont en `noindex` : passez `index` à `true` une fois complétées, et ajoutez-les au sitemap.

## À valider par vous avant publication
Certaines phrases décrivent une façon de travailler (proposition écrite avant démarrage, redirections lors d'une refonte, prise en main après livraison, échanges par rendez-vous). Vérifiez qu'elles correspondent à votre pratique réelle. Vérifiez aussi la liste des communes (noms et limites administratives).

## Images
Les illustrations des pages sont des SVG originaux dans `public/images/` (noms descriptifs, textes alternatifs définis dans chaque page ou dans `src/content/services.ts`). Pour les remplacer par de vraies photos, déposez le fichier dans `public/images/` et modifiez le `src` et le `alt` correspondants. La page Réalisations n'a volontairement pas d'image : ses visuels viendront de `src/content/projects.ts`.
