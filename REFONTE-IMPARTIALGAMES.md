# Refonte ImpartialGames — Brief de design

> Prompt de refonte complète pour Claude Code, à lancer depuis la racine du projet (code source local extrait du GitHub).

---

Fais une refonte complète du design de ce site de studio de développement web. Le code source complet est dans ce dossier — c'est le site impartialgames.com.

## Phase 1 — Exploration de la codebase (avant d'écrire la moindre ligne)

Commence par explorer le projet : identifie la stack et le framework utilisés, la structure des dossiers, le système de styles en place (CSS, Tailwind, modules...), et inventorie toutes les pages et composants existants (accueil, services, projets/études de cas, à propos, contact, mentions légales, et toute autre page présente). Liste-moi ce que tu as trouvé avant de commencer la refonte.

## Périmètre — Refonte intégrale, toutes les pages

La refonte s'applique à l'intégralité du site : chaque page et chaque composant doivent être repris avec la nouvelle direction artistique, la nouvelle typographie et le nouveau langage de formes définis ci-dessous. Aucune page ne doit conserver l'ancien design — la cohérence visuelle entre toutes les pages est une exigence absolue.

**IMPORTANT :** conserve la stack, le framework, le routing et les URLs existants. C'est une refonte design, pas une migration technique. Conserve également le contenu réel des pages (textes, projets, clients) — retravaille légèrement les formulations si besoin, mais ne réinvente pas le contenu.

Construis le design comme un vrai design system (variables CSS centralisées pour couleurs, typographies, espacements, rayons, transitions ; composants réutilisables : header, footer, boutons, cartes projet, lignes de service, blocs témoignage) puis décline-le sur chaque page. Supprime les anciens styles devenus obsolètes au fur et à mesure — pas de CSS mort qui traîne.

## Contexte de marque

ImpartialGames : studio digital premium basé à Montréal et Paris. Sites web, apps mobiles et produits SaaS sur-mesure. 30+ clients accompagnés. Signature : « On construit ce que tes concurrents n'ont pas encore. » Ton direct et confiant, tutoiement assumé.

- **Ce que je veux garder :** la base claire, le positionnement premium, le ton, la double implantation Montréal/Paris, et le contenu existant des pages.
- **Ce que je veux :** un rendu nettement plus haut de gamme, épuré et personnel — moins « agence web générique », plus « studio de création que l'on recommande entre fondateurs ». Si le site du studio est impeccable, c'est la meilleure preuve de son savoir-faire.

## Direction artistique — Claire, racée, éditoriale (commune à toutes les pages)

- Fond principal : blanc cassé chaud (#F7F5F1), jamais de blanc pur — avec un grain très subtil pour éviter l'aplat numérique
- Fond secondaire : une nuance à peine plus soutenue (#EFECE6) pour les cartes et sections alternées
- Une seule section sombre par page maximum (noir violacé #0E0B14, clin d'œil à l'identité actuelle) utilisée comme moment fort : le manifeste sur l'accueil, le hero sur les pages projets par exemple
- Accent : un seul accent fort — violet électrique désaturé (#6D5BD0) ou cuivre chaud (#B07D48), à choisir et tenir sur tout le site. Utilisé avec parcimonie : liens, soulignements, détails, jamais en aplats massifs
- Texte : noir doux (#1A1721) pour les titres, gris chaud (#6E6A75) pour les textes secondaires
- Le luxe vient de la retenue : énormément d'espace négatif, jamais plus de 3-4 éléments par écran, zéro gradient criard, zéro glassmorphism générique

## Typographie (élément central de l'identité, identique sur toutes les pages)

- Titres : une serif éditoriale de caractère (Editorial, GT Sectra, ou à défaut Fraunces / Playfair en italique pour certains mots) en très grandes tailles — les titres sont le principal élément graphique du site
- Mélange typographique signature : dans les grands titres, certains mots-clés passent en italique serif ou en couleur accent pour créer du rythme
- Corps : sans-serif neutre et précise (Inter, Söhne ou General Sans), petites tailles maîtrisées, interlignage généreux
- Détails techniques en monospace (JetBrains Mono) : numéros de section, labels, métadonnées de projets (« 01 — SaaS », « 2024 », « React / Node ») — c'est le clin d'œil au code qui ancre l'identité studio de développement
- Hiérarchie stricte sur toutes les pages : sur-titre monospace en capitales espacées → H2 serif géant → paragraphe court

## Langage de formes (commun à toutes les pages)

- Esthétique plus anguleuse que la moyenne : coins à peine arrondis (4-8px max), fines bordures 1px (rgba noir 8-12%) pour délimiter les cartes plutôt que des ombres portées
- Lignes horizontales fines pour structurer les sections, façon grille éditoriale
- Grands numéros de section en monospace (01, 02, 03...) discrets en marge
- Images de projets dans des cadres nets avec fine bordure, légère perspective ou mockups d'écrans propres
- Curseur personnalisé discret optionnel (point qui s'agrandit sur les liens)
- Aucune icône décorative inutile : si une icône n'apporte pas d'information, elle saute

## Page d'accueil — 7 sections, pas une de plus

1. **HERO** : fond clair, sur-titre monospace (« Studio digital — Montréal · Paris »), H1 serif immense sur 2-3 lignes reprenant la signature (« On construit ce que tes concurrents n'ont pas encore »), un mot en italique ou en accent. Une phrase de positionnement. Un seul CTA (« Discutons de ton projet »). En bas du hero : ligne fine avec 3 métadonnées monospace (30+ clients · Web, App, SaaS · Depuis [année]).

2. **PROJETS** (le cœur du site, placé tôt) : 3-4 projets maximum, présentés en grand format alterné gauche/droite sur fond clair. Pour chaque projet : visuel soigné (mockup d'écran), nom, une ligne de contexte, métadonnées monospace (année, stack, type). Au survol : le visuel glisse légèrement, le titre se souligne. Chaque projet renvoie vers sa page détaillée. Pas de grille dense de 12 vignettes — peu de projets, montrés magnifiquement.

3. **SERVICES** : 3 offres claires (Sites web / Apps mobiles / Produits SaaS), présentées en lignes horizontales fines plutôt qu'en cartes — chaque ligne : numéro monospace, titre serif, description d'une phrase, qui se déplie au clic ou au survol pour révéler le détail.

4. **MANIFESTE / APPROCHE** : la section sombre de l'accueil (#0E0B14), le moment fort du scroll. Un texte court et personnel en très grande serif blanc cassé (3-4 phrases maximum) sur la philosophie du studio : design premium, code solide, pas de bullshit. C'est la section « voix » — elle doit donner l'impression d'entendre les fondateurs parler.

5. **PREUVE** : retour au fond clair. Une ligne de logos clients en monochrome + un seul témoignage fort en grand format (citation serif, nom, entreprise). Pas de slider, pas de notes étoilées.

6. **ÉQUIPE / STUDIO** : présentation courte et personnelle des fondateurs ou de l'équipe — photos sobres en noir et blanc, nom, rôle, une ligne chacun. C'est ce qui rend le studio humain et « personnel » face aux agences anonymes.

7. **CONTACT + FOOTER** : H2 serif géant (« Un projet en tête ? »), email cliquable en très grand, CTA principal. Footer minimal sur une ligne : logo, Montréal · Paris, réseaux, mentions légales. Heure locale des deux villes affichée en monospace (détail signature).

## Pages intérieures (déclinaison du design system)

- Toutes les pages partagent le même header et footer que l'accueil
- Chaque page intérieure s'ouvre sur un hero typographique sobre : sur-titre monospace + H1 serif géant + une phrase, pas de bannière image générique
- Pages projets / études de cas : grand visuel d'ouverture, métadonnées monospace en colonne (client, année, stack, services), contenu éditorial aéré, navigation projet précédent/suivant en bas de page
- Page services (si existante) : même principe de lignes horizontales dépliables que sur l'accueil, en version détaillée
- Page à propos : portraits noir et blanc, texte manifeste, possibilité d'y placer la section sombre de la page
- Page contact : H1 géant, email et formulaire minimal (3 champs max), heures locales Montréal · Paris
- Mentions légales et pages secondaires : même typographie et grille, version sobre

## Animations (précises, jamais gratuites, cohérentes sur tout le site)

- Apparitions au scroll : fade + translateY court (20px), cascade discrète, Intersection Observer
- Reveal de titres ligne par ligne (clip-path ou overflow hidden) sur les H1/H2 — l'effet signature du site, présent sur toutes les pages
- Survol projets : translation douce du visuel + soulignement animé du titre
- Transition de fond fluide à l'entrée et à la sortie des sections sombres
- Marquee lent et discret possible sur la ligne de logos clients
- Transitions 0.4-0.8s, courbes ease-out, 60fps — tout doit paraître calme et maîtrisé
- Respecter prefers-reduced-motion

## Specs techniques

- Conserver la stack et le framework existants du projet — performance irréprochable, c'est la vitrine technique du studio
- Design system centralisé : variables CSS (couleurs, typos, espacements, rayons, transitions) et composants partagés entre toutes les pages — aucune valeur en dur dupliquée
- Lighthouse 95+ sur tous les scores et sur toutes les pages : c'est un argument commercial en soi
- Responsive impeccable mobile-first sur l'ensemble des pages
- Réutiliser les visuels existants du repo ; placeholders propres uniquement là où il manque des images
- Accessibilité : contrastes AA minimum, focus states visibles, alt partout
- SEO : conserver et améliorer les balises meta de chaque page (title, description, og uniques par page) orientées « studio web premium Montréal Paris », URLs propres conservées
- Textes en français, ton direct et confiant du site actuel (tutoiement), phrases courtes, zéro jargon marketing creux

## Objectif final

Un site entièrement cohérent, de la page d'accueil aux mentions légales, qui fait dire au visiteur : « si leur propre site est à ce niveau, je veux le même pour moi. » Lumineux, épuré, élégant, racé, personnel — la démonstration silencieuse du savoir-faire du studio.
