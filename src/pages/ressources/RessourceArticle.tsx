import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { useLang, pathForLang } from "@/contexts/LanguageContext";
import { getArticle, type ArticleBlock, type Bi } from "@/data/ressources";
import { formatDate } from "./Ressources";

const DOMAIN = "https://impartialgames.com";

const RessourceArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t, lp } = useLang();
  const article = slug ? getArticle(slug) : undefined;

  if (!article) return <Navigate to={lp("/ressources")} replace />;

  const pick = (bi: Bi) => bi[lang];
  const path = `/ressources/${article.slug}`;
  const faqBlocks = article.blocks.filter((b): b is Extract<ArticleBlock, { type: "faq" }> => b.type === "faq");

  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: pick(article.title),
      description: pick(article.description),
      datePublished: article.date,
      dateModified: article.updated ?? article.date,
      inLanguage: lang === "fr" ? "fr-FR" : "en-US",
      mainEntityOfPage: `${DOMAIN}${pathForLang(path, lang)}`,
      author: { "@type": "Organization", name: "ImpartialGames", url: DOMAIN },
      publisher: {
        "@type": "Organization",
        name: "ImpartialGames",
        url: DOMAIN,
        logo: { "@type": "ImageObject", url: `${DOMAIN}/og-image.jpg` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("Ressources", "Resources"), item: `${DOMAIN}${lp("/ressources")}` },
        { "@type": "ListItem", position: 2, name: pick(article.title), item: `${DOMAIN}${pathForLang(path, lang)}` },
      ],
    },
    ...(faqBlocks.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqBlocks.flatMap((b) =>
              b.items.map((item) => ({
                "@type": "Question",
                name: pick(item.q),
                acceptedAnswer: { "@type": "Answer", text: pick(item.a) },
              })),
            ),
          },
        ]
      : []),
  ];

  const renderBlock = (block: ArticleBlock, i: number) => {
    switch (block.type) {
      case "h2":
        return (
          <h2 key={i} className="text-2xl md:text-3xl font-bold tracking-tight mt-14 mb-5">
            {pick(block.text)}
          </h2>
        );
      case "p":
        return (
          <p key={i} className="text-[16.5px] leading-[1.85] text-white/75 mb-6">
            {pick(block.text)}
          </p>
        );
      case "ul":
        return (
          <ul key={i} className="space-y-3 mb-8 list-none">
            {block.items.map((item, j) => (
              <li key={j} className="flex gap-3 text-[16px] leading-relaxed text-white/75">
                <span className="mt-[10px] h-[5px] w-[5px] rounded-full bg-[#818CF8] shrink-0" />
                <span>{pick(item)}</span>
              </li>
            ))}
          </ul>
        );
      case "table":
        return (
          <div key={i} className="overflow-x-auto mb-10 rounded-xl border border-white/10">
            <table className="w-full text-left text-[14.5px]">
              <caption className="sr-only">{pick(block.caption)}</caption>
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.04]">
                  {block.header.map((h, j) => (
                    <th key={j} className="px-4 py-3.5 font-semibold text-white whitespace-nowrap">
                      {pick(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, j) => (
                  <tr key={j} className="border-b border-white/5 last:border-0 align-top">
                    {row.map((cell, k) => (
                      <td key={k} className={`px-4 py-4 leading-relaxed ${k === 0 ? "font-semibold text-white whitespace-nowrap" : "text-white/70"}`}>
                        {pick(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "faq":
        return (
          <section key={i} className="mt-14">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
              {t("Questions fréquentes", "Frequently asked questions")}
            </h2>
            <div className="space-y-4">
              {block.items.map((item, j) => (
                <details key={j} className="group rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 open:bg-white/[0.05]">
                  <summary className="cursor-pointer list-none font-semibold text-white/90 flex items-center justify-between gap-4">
                    {pick(item.q)}
                    <span className="text-[#818CF8] transition-transform group-open:rotate-90">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="mt-3 text-white/70 leading-relaxed">{pick(item.a)}</p>
                </details>
              ))}
            </div>
          </section>
        );
    }
  };

  return (
    <Layout>
      <SEO
        title={article.title.fr}
        titleEn={article.title.en}
        description={article.description.fr}
        descriptionEn={article.description.en}
        canonical={path}
        ogType="article"
        schemaJson={schemas}
      />

      <article className="relative pt-36 pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-violet/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link
              to={lp("/ressources")}
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#818CF8] hover:text-[#C7D2FE] transition-colors mb-10"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("Toutes les ressources", "All resources")}
            </Link>

            <header className="mb-12">
              <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#818CF8] mb-5">
                <span>{pick(article.category)}</span>
                <span className="text-white/25">·</span>
                <time dateTime={article.updated ?? article.date} className="text-white/40 normal-case tracking-normal font-medium">
                  {formatDate(article.updated ?? article.date, lang)}
                </time>
                <span className="text-white/25">·</span>
                <span className="inline-flex items-center gap-1 text-white/40 normal-case tracking-normal font-medium">
                  <Clock className="h-3 w-3" />
                  {t(`${article.readingMinutes} min de lecture`, `${article.readingMinutes} min read`)}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.12] mb-5">
                {pick(article.title)}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{pick(article.description)}</p>
            </header>

            {article.blocks.map(renderBlock)}

            {/* CTA final */}
            <aside className="mt-16 rounded-2xl border border-[#818CF8]/30 bg-gradient-to-br from-[#6366F1]/15 to-transparent p-8 md:p-10">
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                {t("Un projet en tête ?", "Have a project in mind?")}
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                {t(
                  "Parlons-en 30 minutes : cadrage, fourchette de prix et planning, gratuitement et sans engagement.",
                  "Let's talk for 30 minutes: scoping, price range and schedule — free, no commitment.",
                )}
              </p>
              <Link
                to={lp("/contact")}
                className="btn-prisme inline-flex items-center gap-2 text-[14px] font-medium text-white px-6 py-3 rounded-full"
              >
                {t("Discutons de votre projet", "Let's discuss your project")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </aside>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default RessourceArticle;
