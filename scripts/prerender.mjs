/**
 * Prérendu statique des pages publiques (FR + /en) après le build Vite.
 * Génère aussi sitemap.xml et llms.txt dans dist/.
 * Le shell SPA vierge est préservé dans dist/spa.html pour les portails
 * admin/client (cf. vercel.json).
 */
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const DOMAIN = "https://impartialgames.com";

const { render, PUBLIC_PATHS, ressourcesArticles } = await import(
  join(root, "dist-ssr", "entry-server.js")
);

const template = readFileSync(join(dist, "index.html"), "utf8");
// Shell SPA intact pour les routes non prérendues (portails, 404 inconnues).
copyFileSync(join(dist, "index.html"), join(dist, "spa.html"));

/** URLs à prérendre : chemin FR + variante /en (sauf pages frOnly). */
const urls = PUBLIC_PATHS.flatMap((p) => {
  const list = [p.path];
  if (!p.frOnly) list.push(p.path === "/" ? "/en" : `/en${p.path}`);
  return list;
});

let count = 0;
for (const url of urls) {
  const { appHtml, helmet } = await render(url);

  if (!appHtml || appHtml.length < 2000) {
    throw new Error(`[prerender] rendu suspect pour ${url} (${appHtml?.length ?? 0} caractères)`);
  }

  const head = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join("\n    ");

  const htmlAttrs = helmet.htmlAttributes.toString();

  const html = template
    .replace(/<html[^>]*>/, `<html ${htmlAttrs} class="dark" data-theme="dark">`)
    // Le head Helmet remplace le titre/description de secours du shell.
    .replace(/\n?\s*<title>.*?<\/title>/s, "")
    .replace(/\n?\s*<meta name="description"[^>]*\/>/, "")
    .replace("<!--app-head-->", head)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outFile = url === "/" ? join(dist, "index.html") : join(dist, url.slice(1), "index.html");
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, html);
  count++;
}

/* ── sitemap.xml ─────────────────────────────────────────────── */
const urlEntry = (loc, p, lang) => {
  const alternates = p.frOnly
    ? ""
    : `\n    <xhtml:link rel="alternate" hreflang="fr" href="${DOMAIN}${p.path}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="en" href="${DOMAIN}${p.path === "/" ? "/en" : `/en${p.path}`}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN}${p.path}"/>`;
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    p.lastmod ? `    <lastmod>${p.lastmod}</lastmod>` : null,
    p.changefreq ? `    <changefreq>${p.changefreq}</changefreq>` : null,
    p.priority != null ? `    <priority>${p.priority.toFixed(1)}</priority>` : null,
    alternates || null,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
};

const sitemapEntries = PUBLIC_PATHS.flatMap((p) => {
  const entries = [urlEntry(`${DOMAIN}${p.path}`, p, "fr")];
  if (!p.frOnly) entries.push(urlEntry(`${DOMAIN}${p.path === "/" ? "/en" : `/en${p.path}`}`, p, "en"));
  return entries;
});

writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemapEntries.join("\n")}\n</urlset>\n`,
);

/* ── llms.txt ────────────────────────────────────────────────── */
const articleLinks = ressourcesArticles
  .map((a) => `- [${a.title.fr}](${DOMAIN}/ressources/${a.slug}): ${a.description.fr}`)
  .join("\n");

writeFileSync(
  join(dist, "llms.txt"),
  `# ImpartialGames

> Studio digital premium basé à Montréal et Paris. Conception de sites web,
> d'applications mobiles et de produits SaaS sur-mesure : design premium,
> code propriétaire livré au client, performance et SEO/GEO intégrés.
> Plus de 50 projets livrés. Site en français avec version anglaise sous /en.

Offres et prix publics : Pack Launch (landing page) à partir de 1 500 €,
Pack Studio (site complet) à partir de 3 000 €, Pack Elite (application/SaaS)
à partir de 8 000 €, abonnement Entretien & Évolution à 50 €/mois
(maintenance, sécurité, 5 modifications mensuelles).

## Pages principales

- [Accueil](${DOMAIN}/): présentation du studio, offres et réalisations
- [Services web](${DOMAIN}/services/web): création de sites web premium
- [Services mobile](${DOMAIN}/services/mobile): applications iOS et Android
- [Backoffice](${DOMAIN}/services/backoffice): outils métier et tableaux de bord
- [Offre 360°](${DOMAIN}/services/360): produit digital complet, du cadrage au lancement
- [Portfolio](${DOMAIN}/portfolio): études de cas clients
- [Studio](${DOMAIN}/studio): équipe et méthode
- [Contact](${DOMAIN}/contact): appel découverte gratuit

## Ressources

${articleLinks}

## English

- [Home (English)](${DOMAIN}/en): premium digital studio in Montréal & Paris
`,
);

console.log(`[prerender] ${count} pages prérendues, sitemap.xml (${sitemapEntries.length} URLs) et llms.txt générés.`);
