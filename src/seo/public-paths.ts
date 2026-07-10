import { ressourcesArticles } from "@/data/ressources";

export interface PublicPath {
  /** Chemin FR sans préfixe de langue. */
  path: string;
  /** Pas de variante /en (pages légales). */
  frOnly?: boolean;
  priority?: number;
  changefreq?: "weekly" | "monthly" | "yearly";
  lastmod?: string;
}

/**
 * Source de vérité des URL publiques : consommée par le prérendu,
 * le sitemap et llms.txt (via l'export de entry-server).
 * Toute nouvelle page publique doit être ajoutée ici.
 */
export const PUBLIC_PATHS: PublicPath[] = [
  { path: "/", priority: 1.0, changefreq: "monthly" },
  { path: "/studio", priority: 0.8, changefreq: "monthly" },
  { path: "/contact", priority: 0.9, changefreq: "monthly" },
  { path: "/services/web", priority: 0.9, changefreq: "monthly" },
  { path: "/services/mobile", priority: 0.9, changefreq: "monthly" },
  { path: "/services/backoffice", priority: 0.9, changefreq: "monthly" },
  { path: "/services/360", priority: 0.9, changefreq: "monthly" },
  { path: "/portfolio", priority: 0.8, changefreq: "monthly" },
  { path: "/portfolio/eclipsia", priority: 0.6, changefreq: "yearly" },
  { path: "/portfolio/weclose", priority: 0.6, changefreq: "yearly" },
  { path: "/portfolio/altarys", priority: 0.6, changefreq: "yearly" },
  { path: "/portfolio/prophecia", priority: 0.6, changefreq: "yearly" },
  { path: "/portfolio/umel", priority: 0.6, changefreq: "yearly" },
  { path: "/portfolio/fitbyval", priority: 0.6, changefreq: "yearly" },
  { path: "/portfolio/elev8", priority: 0.6, changefreq: "yearly" },
  { path: "/portfolio/valora", priority: 0.6, changefreq: "yearly" },
  { path: "/portfolio/mba", priority: 0.6, changefreq: "yearly" },
  { path: "/ressources", priority: 0.8, changefreq: "weekly" },
  ...ressourcesArticles.map((a) => ({
    path: `/ressources/${a.slug}`,
    priority: 0.7,
    changefreq: "monthly" as const,
    lastmod: a.updated ?? a.date,
  })),
  { path: "/mentions-legales", frOnly: true, priority: 0.2, changefreq: "yearly" },
  { path: "/politique-confidentialite", frOnly: true, priority: 0.2, changefreq: "yearly" },
  { path: "/cgu", frOnly: true, priority: 0.2, changefreq: "yearly" },
  { path: "/cgv", frOnly: true, priority: 0.2, changefreq: "yearly" },
  { path: "/cookies", frOnly: true, priority: 0.2, changefreq: "yearly" },
];
