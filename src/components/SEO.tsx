import { Helmet } from "react-helmet-async";
import { useLang, pathForLang } from "@/contexts/LanguageContext";

interface SEOProps {
  /** Titre FR (sans suffixe). */
  title: string;
  description: string;
  /** Chemin FR canonique de la page, sans préfixe de langue ("/studio"). */
  canonical: string;
  /** Variantes anglaises — obligatoires pour toute page disponible en /en. */
  titleEn?: string;
  descriptionEn?: string;
  /** Page sans variante anglaise (pages légales) : canonical FR forcé, pas de hreflang en. */
  frOnly?: boolean;
  ogType?: string;
  ogImage?: string;
  schemaJson?: object | object[];
}

const DOMAIN = "https://impartialgames.com";
const SUFFIX = " | ImpartialGames";

export function SEO({
  title,
  description,
  canonical,
  titleEn,
  descriptionEn,
  frOnly = false,
  ogType = "website",
  ogImage = "/og-image.jpg",
  schemaJson,
}: SEOProps) {
  const { lang } = useLang();
  const effectiveLang = frOnly ? "fr" : lang;

  const fullTitle = (effectiveLang === "en" && titleEn ? titleEn : title) + SUFFIX;
  const desc = effectiveLang === "en" && descriptionEn ? descriptionEn : description;
  const canonicalUrl = DOMAIN + pathForLang(canonical, effectiveLang);
  const frUrl = DOMAIN + pathForLang(canonical, "fr");
  const enUrl = DOMAIN + pathForLang(canonical, "en");
  const fullImage = ogImage.startsWith("http") ? ogImage : DOMAIN + ogImage;
  const schemas = schemaJson ? (Array.isArray(schemaJson) ? schemaJson : [schemaJson]) : [];

  return (
    <Helmet htmlAttributes={{ lang: effectiveLang }}>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonicalUrl} />
      {!frOnly && <link rel="alternate" hrefLang="fr" href={frUrl} />}
      {!frOnly && <link rel="alternate" hrefLang="en" href={enUrl} />}
      {!frOnly && <link rel="alternate" hrefLang="x-default" href={frUrl} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="ImpartialGames" />
      <meta property="og:locale" content={effectiveLang === "fr" ? "fr_FR" : "en_US"} />
      {!frOnly && (
        <meta property="og:locale:alternate" content={effectiveLang === "fr" ? "en_US" : "fr_FR"} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={fullImage} />
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
