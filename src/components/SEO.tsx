import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  ogImage?: string;
  schemaJson?: object;
}

const DOMAIN = "https://impartialgames.com";
const SUFFIX = " | IMPARTIAL Studio";

export function SEO({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = "/og-image.jpg",
  schemaJson,
}: SEOProps) {
  const fullTitle = title + SUFFIX;
  const fullUrl = DOMAIN + canonical;
  const fullImage = DOMAIN + ogImage;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullImage} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      {schemaJson && (
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      )}
    </Helmet>
  );
}
