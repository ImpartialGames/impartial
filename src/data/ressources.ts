/**
 * Contenus de la section Ressources (FR + EN).
 * Chaque article ajouté ici est automatiquement routé, prérendu,
 * ajouté au sitemap et à llms.txt via src/seo/public-paths.ts.
 */

export interface Bi {
  fr: string;
  en: string;
}

export type ArticleBlock =
  | { type: "p"; text: Bi }
  | { type: "h2"; text: Bi }
  | { type: "ul"; items: Bi[] }
  | { type: "table"; caption: Bi; header: Bi[]; rows: Bi[][] }
  | { type: "faq"; items: { q: Bi; a: Bi }[] };

export interface RessourceArticle {
  slug: string;
  date: string;
  updated?: string;
  category: Bi;
  readingMinutes: number;
  title: Bi;
  description: Bi;
  blocks: ArticleBlock[];
}

export const ressourcesArticles: RessourceArticle[] = [
  {
    slug: "prix-site-web-premium-2026",
    date: "2026-07-10",
    category: { fr: "Tarifs", en: "Pricing" },
    readingMinutes: 6,
    title: {
      fr: "Combien coûte un site web premium en 2026 ? Les prix réels d'un studio",
      en: "How much does a premium website cost in 2026? A studio's real prices",
    },
    description: {
      fr: "Landing page, site complet ou application SaaS : les tarifs réels pratiqués par ImpartialGames en 2026, ce qui fait varier le prix, et ce qui est inclus.",
      en: "Landing page, full website or SaaS application: the real 2026 prices at ImpartialGames, what moves the budget, and what's included.",
    },
    blocks: [
      {
        type: "p",
        text: {
          fr: "« Combien coûte un site ? » est la première question de tous nos appels découverte — et presque personne ne publie ses prix. Chez ImpartialGames, ils sont publics. Voici la grille que nous pratiquons réellement en 2026, et surtout ce qui fait qu'un projet se situe en haut ou en bas de la fourchette.",
          en: "\"How much does a website cost?\" is the first question in every discovery call we take — and almost nobody publishes their prices. At ImpartialGames, ours are public. Here is the exact pricing we work with in 2026, and more importantly, what pushes a project toward the top or bottom of each range.",
        },
      },
      {
        type: "h2",
        text: { fr: "Les prix ImpartialGames en 2026", en: "ImpartialGames pricing in 2026" },
      },
      {
        type: "table",
        caption: {
          fr: "Tarifs publics ImpartialGames — studio digital, Montréal & Paris",
          en: "ImpartialGames public pricing — digital studio, Montréal & Paris",
        },
        header: [
          { fr: "Offre", en: "Package" },
          { fr: "Pour quoi", en: "Best for" },
          { fr: "Prix", en: "Price" },
          { fr: "Inclus", en: "Included" },
        ],
        rows: [
          [
            { fr: "Pack Launch", en: "Launch Pack" },
            { fr: "Landing page", en: "Landing page" },
            { fr: "à partir de 1 500 €", en: "from €1,500" },
            {
              fr: "Design premium, développement sur-mesure, responsive, SEO de base, 5 modifications incluses",
              en: "Premium design, custom development, responsive, basic SEO, 5 revisions included",
            },
          ],
          [
            { fr: "Pack Studio", en: "Studio Pack" },
            { fr: "Site complet", en: "Full website" },
            { fr: "à partir de 3 000 €", en: "from €3,000" },
            {
              fr: "Architecture & UX/UI, développement complet, responsive, SEO avancé, 5 modifications incluses",
              en: "Architecture & UX/UI, full development, responsive, advanced SEO, 5 revisions included",
            },
          ],
          [
            { fr: "Pack Elite", en: "Elite Pack" },
            { fr: "Application / SaaS", en: "Application / SaaS" },
            { fr: "à partir de 8 000 €", en: "from €8,000" },
            {
              fr: "Produit sur-mesure, dashboard & API, performance optimale, sécurité avancée, 5 modifications incluses",
              en: "Custom product, dashboard & API, top performance, advanced security, 5 revisions included",
            },
          ],
          [
            { fr: "Abonnement Entretien & Évolution", en: "Care & Growth subscription" },
            { fr: "Maintenance continue", en: "Ongoing maintenance" },
            { fr: "50 € / mois", en: "€50 / month" },
            {
              fr: "Mises à jour techniques, sauvegardes & sécurité, surveillance & performance, 5 petites modifications par mois, support prioritaire",
              en: "Technical updates, backups & security, monitoring & performance, 5 small changes per month, priority support",
            },
          ],
        ],
      },
      {
        type: "h2",
        text: { fr: "Pourquoi « à partir de » ?", en: "Why \"from\"?" },
      },
      {
        type: "p",
        text: {
          fr: "Deux sites vitrines peuvent demander deux fois plus ou deux fois moins de travail selon le contenu et les fonctionnalités. Concrètement, quatre facteurs font varier le budget :",
          en: "Two seemingly similar websites can require twice as much — or half as much — work depending on content and features. In practice, four factors move the budget:",
        },
      },
      {
        type: "ul",
        items: [
          {
            fr: "Le nombre de pages et de gabarits réellement différents (5 pages ≠ 25 pages).",
            en: "The number of genuinely distinct pages and templates (5 pages ≠ 25 pages).",
          },
          {
            fr: "Les fonctionnalités : formulaire simple, prise de rendez-vous, paiement, espace membre, tableau de bord…",
            en: "Features: simple form, appointment booking, payments, member area, dashboard…",
          },
          {
            fr: "Le contenu : fourni et prêt, ou à écrire, traduire et illustrer avec vous.",
            en: "Content: delivered ready-to-use, or written, translated and illustrated with you.",
          },
          {
            fr: "Les intégrations : CRM, outils métier, API tierces, migration de données existantes.",
            en: "Integrations: CRM, business tools, third-party APIs, migrating existing data.",
          },
        ],
      },
      {
        type: "h2",
        text: {
          fr: "Ce que « premium » veut dire chez nous",
          en: "What \"premium\" actually means here",
        },
      },
      {
        type: "p",
        text: {
          fr: "Un site premium n'est pas un template acheté 60 € et personnalisé en deux jours. C'est un design dessiné pour votre marque, du code écrit à la main que vous possédez entièrement, des performances mesurables (Core Web Vitals au vert), et un référencement pensé dès l'architecture — y compris pour les moteurs IA comme ChatGPT ou Perplexity, qui recommandent aujourd'hui des prestataires à votre place.",
          en: "A premium website is not a €60 template customized in two days. It means design drawn for your brand, hand-written code you fully own, measurable performance (green Core Web Vitals), and search visibility built into the architecture — including for AI engines like ChatGPT or Perplexity, which now recommend providers on your behalf.",
        },
      },
      {
        type: "faq",
        items: [
          {
            q: {
              fr: "Combien coûte une landing page professionnelle en 2026 ?",
              en: "How much does a professional landing page cost in 2026?",
            },
            a: {
              fr: "Chez ImpartialGames, une landing page premium démarre à 1 500 € : design sur-mesure, développement responsive, SEO de base et 5 modifications incluses. Un site complet démarre à 3 000 € et une application SaaS à 8 000 €.",
              en: "At ImpartialGames, a premium landing page starts at €1,500: custom design, responsive development, basic SEO and 5 revisions included. A full website starts at €3,000 and a SaaS application at €8,000.",
            },
          },
          {
            q: {
              fr: "La maintenance d'un site coûte combien par mois ?",
              en: "How much does website maintenance cost per month?",
            },
            a: {
              fr: "Notre abonnement Entretien & Évolution est à 50 € par mois : mises à jour techniques, sauvegardes, sécurité, surveillance des performances et 5 petites modifications mensuelles avec support prioritaire.",
              en: "Our Care & Growth subscription is €50 per month: technical updates, backups, security, performance monitoring and 5 small monthly changes with priority support.",
            },
          },
          {
            q: {
              fr: "Le devis est-il gratuit et engageant ?",
              en: "Is the quote free and binding?",
            },
            a: {
              fr: "L'appel découverte et le devis sont gratuits et sans engagement. Le devis détaille le périmètre exact, le prix ferme et le planning — pas de surprise en cours de route.",
              en: "The discovery call and the quote are free with no commitment. The quote details the exact scope, a firm price and the schedule — no surprises along the way.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "delais-creation-site-app-saas",
    date: "2026-07-10",
    category: { fr: "Méthode", en: "Process" },
    readingMinutes: 5,
    title: {
      fr: "Quels délais pour créer un site, une app ou un SaaS ? Le déroulé réel",
      en: "How long to build a website, an app or a SaaS? The real timeline",
    },
    description: {
      fr: "De l'appel découverte à la mise en ligne : les 4 étapes de la méthode ImpartialGames, les délais typiques par type de projet et ce qui les fait déraper.",
      en: "From discovery call to launch: the 4 steps of the ImpartialGames method, typical timelines per project type, and what makes them slip.",
    },
    blocks: [
      {
        type: "p",
        text: {
          fr: "Un projet digital ne prend pas « entre deux semaines et six mois » : il suit des étapes précises, chacune avec un livrable. Voici notre déroulé réel, celui que suivent tous nos projets, du site vitrine au SaaS complet.",
          en: "A digital project doesn't take \"somewhere between two weeks and six months\": it follows precise steps, each with its own deliverable. Here is our actual process — the one every project follows, from a showcase website to a full SaaS.",
        },
      },
      {
        type: "h2",
        text: { fr: "Notre méthode en 4 étapes", en: "Our 4-step method" },
      },
      {
        type: "table",
        caption: {
          fr: "Le processus ImpartialGames, du cadrage au lancement",
          en: "The ImpartialGames process, from scoping to launch",
        },
        header: [
          { fr: "Étape", en: "Step" },
          { fr: "Ce qui s'y passe", en: "What happens" },
          { fr: "Livrable", en: "Deliverable" },
        ],
        rows: [
          [
            { fr: "01 — Discovery", en: "01 — Discovery" },
            {
              fr: "Écoute active, cadrage des besoins, objectifs mesurables",
              en: "Active listening, needs scoping, measurable goals",
            },
            { fr: "Cahier des charges", en: "Specification document" },
          ],
          [
            { fr: "02 — Design", en: "02 — Design" },
            {
              fr: "Maquettes UI/UX, design system, itérations avec vous",
              en: "UI/UX mockups, design system, iterations with you",
            },
            { fr: "Maquettes Figma validées", en: "Approved Figma mockups" },
          ],
          [
            { fr: "03 — Développement", en: "03 — Development" },
            {
              fr: "Code propre, itérations continues, points d'étape réguliers",
              en: "Clean code, continuous iterations, regular checkpoints",
            },
            { fr: "Version bêta testable", en: "Testable beta version" },
          ],
          [
            { fr: "04 — Lancement", en: "04 — Launch" },
            {
              fr: "Déploiement, optimisation performance & SEO, suivi",
              en: "Deployment, performance & SEO optimization, follow-up",
            },
            { fr: "Produit en ligne", en: "Live product" },
          ],
        ],
      },
      {
        type: "h2",
        text: { fr: "Les délais typiques par projet", en: "Typical timelines per project" },
      },
      {
        type: "ul",
        items: [
          {
            fr: "Landing page (Pack Launch) : comptez généralement 2 à 3 semaines entre le cahier des charges validé et la mise en ligne.",
            en: "Landing page (Launch Pack): typically 2 to 3 weeks between the approved spec and going live.",
          },
          {
            fr: "Site complet (Pack Studio) : généralement 4 à 8 semaines selon le nombre de pages et le contenu à produire.",
            en: "Full website (Studio Pack): usually 4 to 8 weeks depending on page count and content production.",
          },
          {
            fr: "Application / SaaS (Pack Elite) : à partir de 8 à 12 semaines pour une première version en production, puis des itérations continues.",
            en: "Application / SaaS (Elite Pack): from 8 to 12 weeks for a first production version, then continuous iterations.",
          },
        ],
      },
      {
        type: "p",
        text: {
          fr: "Chaque devis inclut un planning précis propre à votre projet : ces fourchettes sont des ordres de grandeur constatés, pas des promesses génériques.",
          en: "Every quote includes a precise schedule specific to your project: these ranges are observed orders of magnitude, not generic promises.",
        },
      },
      {
        type: "h2",
        text: {
          fr: "Ce qui fait vraiment déraper un planning",
          en: "What actually makes a schedule slip",
        },
      },
      {
        type: "ul",
        items: [
          {
            fr: "Le contenu qui arrive en retard (textes, photos, mentions légales) — la cause n°1, de loin.",
            en: "Late content (copy, photos, legal pages) — the #1 cause, by far.",
          },
          {
            fr: "Les validations qui traînent : chaque aller-retour de plus d'une semaine décale la suite.",
            en: "Slow approvals: every review loop longer than a week pushes everything back.",
          },
          {
            fr: "Le périmètre qui gonfle en cours de route sans re-planification explicite.",
            en: "Scope creep without an explicit re-plan.",
          },
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: {
              fr: "Peut-on accélérer un lancement pour une date impérative ?",
              en: "Can a launch be fast-tracked for a hard deadline?",
            },
            a: {
              fr: "Oui, si la date est connue dès le cadrage : on découpe alors le périmètre en une V1 essentielle livrée à temps, puis des itérations. C'est le levier le plus fiable — bien plus que de compresser les étapes.",
              en: "Yes — if the date is known at scoping time: we split the scope into an essential V1 delivered on time, followed by iterations. That's the most reliable lever — far better than compressing the steps.",
            },
          },
          {
            q: {
              fr: "Que se passe-t-il après la mise en ligne ?",
              en: "What happens after launch?",
            },
            a: {
              fr: "Vous gardez la propriété complète du code. L'abonnement Entretien & Évolution (50 €/mois) couvre mises à jour, sécurité, surveillance et 5 petites modifications mensuelles — ou vous reprenez la main en interne, au choix.",
              en: "You keep full ownership of the code. The Care & Growth subscription (€50/month) covers updates, security, monitoring and 5 small monthly changes — or your team takes over internally, your call.",
            },
          },
        ],
      },
    ],
  },
];

export const getArticle = (slug: string): RessourceArticle | undefined =>
  ressourcesArticles.find((a) => a.slug === slug);
