import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { useLang } from "@/contexts/LanguageContext";
import { ressourcesArticles, type Bi } from "@/data/ressources";

const MONTHS_FR = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const MONTHS_EN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function formatDate(iso: string, lang: "fr" | "en"): string {
  const [y, m, d] = iso.split("-").map(Number);
  return lang === "fr" ? `${d} ${MONTHS_FR[m - 1]} ${y}` : `${MONTHS_EN[m - 1]} ${d}, ${y}`;
}

const Ressources = () => {
  const { lang, t, lp } = useLang();
  const pick = (bi: Bi) => bi[lang];

  return (
    <Layout>
      <SEO
        title="Ressources — Guides et prix réels d'un studio digital"
        titleEn="Resources — Guides and real prices from a digital studio"
        description="Guides concrets sur les prix, délais et méthodes d'un studio digital premium : ce que coûte vraiment un site, une app ou un SaaS en 2026."
        descriptionEn="Concrete guides on the prices, timelines and methods of a premium digital studio: what a website, app or SaaS really costs in 2026."
        canonical="/ressources"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: lang === "fr" ? "Ressources ImpartialGames" : "ImpartialGames Resources",
          url: `https://impartialgames.com${lp("/ressources")}`,
          inLanguage: lang === "fr" ? "fr-FR" : "en-US",
        }}
      />

      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-violet/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#818CF8] mb-5">
              {t("Ressources", "Resources")}
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              {t("Des réponses claires, des chiffres réels.", "Clear answers, real numbers.")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              {t(
                "Prix, délais, méthode : ce que les studios n'écrivent nulle part, publié ici sans détour.",
                "Prices, timelines, process: what studios never write down, published here plainly.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Liste d'articles */}
      <section className="pb-28 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            {ressourcesArticles.map((a) => (
              <Link
                key={a.slug}
                to={lp(`/ressources/${a.slug}`)}
                className="group block rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#818CF8]/40 transition-all duration-300 p-7 md:p-9"
              >
                <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#818CF8] mb-4">
                  <span>{pick(a.category)}</span>
                  <span className="text-white/25">·</span>
                  <time dateTime={a.date} className="text-white/40 normal-case tracking-normal font-medium">
                    {formatDate(a.updated ?? a.date, lang)}
                  </time>
                  <span className="text-white/25">·</span>
                  <span className="inline-flex items-center gap-1 text-white/40 normal-case tracking-normal font-medium">
                    <Clock className="h-3 w-3" />
                    {a.readingMinutes} min
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold leading-snug mb-3 group-hover:text-[#C7D2FE] transition-colors">
                  {pick(a.title)}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{pick(a.description)}</p>
                <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#818CF8]">
                  {t("Lire le guide", "Read the guide")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ressources;
