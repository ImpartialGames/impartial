# Refonte premium ImpartialGames — Cahier des charges validé

> Validé le 2026-07-10 avec Dylan. Remplace `REFONTE-IMPARTIALGAMES.md` (direction claire/éditoriale **abandonnée**).

## Décisions actées

| Sujet | Décision |
|---|---|
| Périmètre | **Site public uniquement** (accueil, 4 services, portfolio + 9 projets, studio, contact, 5 légales). Espaces client/admin : nettoyage de code seulement, pas de redesign. |
| Direction artistique | **Sombre 100 %** (palette violet/navy actuelle conservée comme base), **liquid glass** (verre translucide, reflets, profondeur, standard Apple adapté), layouts en **asymétrie maîtrisée** (décalages, alternances, respirations inégales — pas de chevauchements agressifs). |
| Mode clair | **Supprimé** (toggle + ThemeContext retirés, une seule identité). |
| Ancien brief | `REFONTE-IMPARTIALGAMES.md` obsolète → archivé dans `docs/archive/`. |
| Contenu FR | Retouches légères autorisées (ton, formulations). **Offres et prix intouchables** : Pack Launch 1 500 €, Pack Studio 3 000 €, Pack Elite 8 000 €, Abonnement 50 €/mois. |
| Langues | **FR + EN complet** : URLs `/en/*`, hreflang, traduction par Claude **validée par Dylan avant mise en ligne**. |
| SEO | Prerendering des pages publiques au build (HTML complet par URL), meta uniques/page, schema.org, sitemap FR/EN, Core Web Vitals. |
| GEO (IA) | Contenu lisible sans JS (prerendering = prérequis), schema.org complet, FAQ, `llms.txt`, section **Ressources** : structure + 1-2 pages pilotes citables. |
| SEO local | Non prioritaire (pas retenu). |
| Validation DA | Directement sur le site, itérations validées sur preview Vercel. |
| Git / déploiement | Repo existant `github.com/ImpartialGames/impartial`. Travail sur branche **`refonte-premium`** → previews Vercel. **Merge vers `main` (= production) uniquement sur feu vert explicite.** |

## Plan en 3 phases (ordre imposé)

### Phase 1 — Qualité de code
- Git : branche `refonte-premium`, comparaison avec `origin/main` avant tout push (ne rien écraser).
- Audit baseline : `tsc`, `eslint`, `vite build`, tailles de bundles.
- Suppression du code mort : 3 générations de design cohabitent (sections ancienne DA claire, doublons type `ProjetsSection 2.tsx`, composants wow/animations inutilisés).
- Thème sombre unique : retrait ThemeContext/toggle, `.dark` forcé à la racine (nettoyage des variantes `dark:` progressif en phase 3).
- Lazy loading par route : portails admin/client hors du bundle public.
- Optimisation assets : images lourdes (fond hero 5,8 Mo), vidéos logo, formats modernes.
- TypeScript resserré, lint vert.

### Phase 2 — SEO + GEO
- Prerendering build des routes publiques FR + EN.
- i18n complet : routes `/en/*`, sélecteur, hreflang, sitemap bilingue.
- Meta uniques par page, schema.org (Organization, Service, FAQPage, Article…), `llms.txt`, robots.txt corrigé, fix `geo.region` dupliqué dans index.html.
- Section Ressources : route, template article, 1-2 pages pilotes.

### Phase 3 — Design premium
- Design system centralisé : tokens CSS (couleurs, verre, espacements, rayons, transitions), composants glass réutilisables (nav, cartes, boutons, badges).
- Refonte page par page avec asymétrie maîtrisée, typographie identitaire, animations calmées et cohérentes (`prefers-reduced-motion` respecté).
- Accessibilité AA (contrastes sur verre = point de vigilance), focus states.
- Lighthouse ≥ 95 sur les pages publiques.

## Contraintes techniques
- Stack conservée : Vite + React 18 + TS + Tailwind + shadcn. Pas de migration framework.
- Supabase (auth portails) : ne pas casser les flux existants.
- ⚠️ Dossier local dans iCloud Desktop (fichiers dataless) : `node_modules` via symlink `.nosync` pour éviter la synchro.
