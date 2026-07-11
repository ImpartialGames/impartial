import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const produits = [
  {
    name: "ELEV8",
    description: "SaaS coaching sportif",
    descriptionEn: "Fitness coaching SaaS",
    price: "À partir de 59 € / 87 $CA / mois",
    priceEn: "From 59 € / 87 $CA per month",
    url: "https://myelev8.app",
    tag: "Live",
    tagEn: "Live",
  },
  {
    name: "Prospectoss",
    description: "Lead Intel B2B",
    descriptionEn: "B2B lead intelligence",
    price: "À partir de 200 € / 293 $CA · Livraison 48h",
    priceEn: "From 200 € / 293 $CA · 48h delivery",
    url: "#",
    tag: "Live",
    tagEn: "Live",
  },
  {
    name: "MBA",
    description: "Back-office TPE/PME",
    descriptionEn: "Back office for SMBs",
    price: "À partir de 150 € / 220 $CA / mois · 20+ secteurs",
    priceEn: "From 150 € / 220 $CA per month · 20+ industries",
    url: "#",
    tag: "Live",
    tagEn: "Live",
  },
  {
    name: "Guardian of Prophecia",
    description: "Jeu de stratégie Free-to-Play",
    descriptionEn: "Free-to-play strategy game",
    price: "Bêta en cours",
    priceEn: "Now in beta",
    url: "https://goprophecia.gg",
    tag: "Bêta",
    tagEn: "Beta",
  },
];

export function EcosystemeSection() {
  const { t } = useLang();

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#0E0B14" }}
    >
      {/* Constellation SVG pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.055]"
        aria-hidden
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="constellation"
            x="0"
            y="0"
            width="220"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Étoiles / dots */}
            <circle cx="18"  cy="28"  r="1.2" fill="#A78BFA" />
            <circle cx="62"  cy="12"  r="1.5" fill="#A78BFA" />
            <circle cx="105" cy="42"  r="1.2" fill="#A78BFA" />
            <circle cx="155" cy="18"  r="1.8" fill="#A78BFA" />
            <circle cx="190" cy="55"  r="1.2" fill="#A78BFA" />
            <circle cx="142" cy="82"  r="1.5" fill="#A78BFA" />
            <circle cx="78"  cy="90"  r="1.2" fill="#A78BFA" />
            <circle cx="28"  cy="74"  r="1.8" fill="#A78BFA" />
            <circle cx="55"  cy="138" r="1.2" fill="#A78BFA" />
            <circle cx="118" cy="115" r="1.5" fill="#A78BFA" />
            <circle cx="172" cy="144" r="1.2" fill="#A78BFA" />
            <circle cx="38"  cy="168" r="1.2" fill="#A78BFA" />
            <circle cx="92"  cy="185" r="1.5" fill="#A78BFA" />
            <circle cx="162" cy="178" r="1.8" fill="#A78BFA" />
            <circle cx="210" cy="110" r="1.2" fill="#A78BFA" />
            {/* Lignes de constellation */}
            <line x1="18"  y1="28"  x2="62"  y2="12"  stroke="#A78BFA" strokeWidth="0.4" />
            <line x1="62"  y1="12"  x2="105" y2="42"  stroke="#A78BFA" strokeWidth="0.4" />
            <line x1="105" y1="42"  x2="155" y2="18"  stroke="#A78BFA" strokeWidth="0.4" />
            <line x1="155" y1="18"  x2="190" y2="55"  stroke="#A78BFA" strokeWidth="0.4" />
            <line x1="190" y1="55"  x2="142" y2="82"  stroke="#A78BFA" strokeWidth="0.4" />
            <line x1="142" y1="82"  x2="105" y2="42"  stroke="#A78BFA" strokeWidth="0.3" />
            <line x1="78"  y1="90"  x2="28"  y2="74"  stroke="#A78BFA" strokeWidth="0.4" />
            <line x1="28"  y1="74"  x2="18"  y2="28"  stroke="#A78BFA" strokeWidth="0.4" />
            <line x1="78"  y1="90"  x2="55"  y2="138" stroke="#A78BFA" strokeWidth="0.4" />
            <line x1="55"  y1="138" x2="38"  y2="168" stroke="#A78BFA" strokeWidth="0.4" />
            <line x1="55"  y1="138" x2="118" y2="115" stroke="#A78BFA" strokeWidth="0.4" />
            <line x1="118" y1="115" x2="172" y2="144" stroke="#A78BFA" strokeWidth="0.4" />
            <line x1="172" y1="144" x2="162" y2="178" stroke="#A78BFA" strokeWidth="0.4" />
            <line x1="92"  y1="185" x2="38"  y2="168" stroke="#A78BFA" strokeWidth="0.4" />
            <line x1="92"  y1="185" x2="162" y2="178" stroke="#A78BFA" strokeWidth="0.4" />
            <line x1="210" y1="110" x2="172" y2="144" stroke="#A78BFA" strokeWidth="0.4" />
            <line x1="210" y1="110" x2="190" y2="55"  stroke="#A78BFA" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#constellation)" />
      </svg>

      {/* Halos */}
      <span
        aria-hidden
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 650,
          height: 650,
          top: "5%",
          right: "-15%",
          background: "radial-gradient(circle, rgba(124,58,237,0.16) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />
      <span
        aria-hidden
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: "5%",
          left: "-10%",
          background: "radial-gradient(circle, rgba(240,175,200,0.12) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="section-label-dark justify-center mb-6">{t("Nos produits", "Our products")}</div>
          <h2 className="text-[38px] md:text-[58px] leading-[1.05] tracking-[-0.02em] text-white mb-6">
            <span className="block prisme-display">{t("On ne fait pas que builder.", "We don't just build.")}</span>
            <span className="block prisme-italic-grad">{t("On opère.", "We operate.")}</span>
          </h2>
          <p className="text-white/55 text-base md:text-lg leading-relaxed">
            {t(
              "ELEV8, Prospectoss, MBA, Guardian of Prophecia. Quatre produits live, des milliers d'utilisateurs. Ce qu'on te construit, on sait exactement ce que ça coûte de le rater.",
              "ELEV8, Prospectoss, MBA, Guardian of Prophecia. Four live products, thousands of users. Whatever we build for you, we know exactly what it costs to get it wrong."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {produits.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url === "#" ? undefined : p.url}
              target={p.url !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group p-6 rounded-2xl flex flex-col gap-3 bg-white/[0.05] border border-white/[0.09] transition-all duration-400 ${i % 2 === 1 ? "lg:mt-10 " : ""}${
                p.url !== "#"
                  ? "hover:border-[#7C3AED]/40 hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-[0_16px_48px_-16px_rgba(124,58,237,0.28)] cursor-pointer"
                  : "cursor-default"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-syne font-black text-[15px] tracking-wide text-white">
                  {p.name}
                </span>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#7C3AED]/15 text-[#A78BFA] border border-[#7C3AED]/25">
                  {t(p.tag, p.tagEn)}
                </span>
              </div>
              <p className="text-[13px] text-white/60 font-medium">{t(p.description, p.descriptionEn)}</p>
              <p className="text-[12px] text-white/40 leading-snug">{t(p.price, p.priceEn)}</p>
              {p.url !== "#" && (
                <div className="flex items-center gap-1 text-[11px] text-[#A78BFA] font-semibold mt-auto group-hover:gap-2 transition-all">
                  {t("Voir le produit", "View product")} <ExternalLink className="h-3 w-3" />
                </div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
