import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Clock } from "lucide-react";
import { MagneticButton } from "@/components/wow";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { useLang } from "@/contexts/LanguageContext";

interface Pack {
  name: string;
  tagline: string;
  taglineEn: string;
  description: string;
  descriptionEn: string;
  price: string;
  priceEn: string;
  delay?: string;
  delayEn?: string;
  features: string[];
  featuresEn: string[];
  recommended?: boolean;
}

const packs: Pack[] = [
  {
    name: "PACK LAUNCH",
    tagline: "Landing / One-page premium",
    taglineEn: "Premium landing / one-pager",
    description: "Lancer vite, marquer fort.",
    descriptionEn: "Launch fast, make it count.",
    price: "1 500 €",
    priceEn: "1 500 €",
    delay: "2-3 semaines",
    delayEn: "2-3 weeks",
    features: [
      "Direction artistique + UI premium",
      "Copywriting (hero, preuve, CTA)",
      "Transition (micro-interactions)",
      "Optimisation performance",
      "Referencement de base",
    ],
    featuresEn: [
      "Art direction + premium UI",
      "Copywriting (hero, proof, CTA)",
      "Transitions (micro-interactions)",
      "Performance optimization",
      "Essential SEO",
    ],
  },
  {
    name: "PACK STUDIO",
    tagline: "Site multi-pages signature",
    taglineEn: "Signature multi-page website",
    description: "Une présence digitale complète et élégante.",
    descriptionEn: "A complete, elegant digital presence.",
    price: "3 000 €",
    priceEn: "3 000 €",
    delay: "4-6 semaines",
    delayEn: "4-6 weeks",
    features: [
      "Design (typo, couleurs, composants)",
      "4 à 6 pages clés",
      "Animation premium",
      "Intégrations (formulaire, calendrier, analytics)",
      "Référencement renforcé",
    ],
    featuresEn: [
      "Design (type, colors, components)",
      "4 to 6 key pages",
      "Premium animation",
      "Integrations (forms, calendar, analytics)",
      "Advanced SEO",
    ],
    recommended: true,
  },
  {
    name: "PACK ELITE",
    tagline: "Application / Backoffice / Logiciel",
    taglineEn: "App / Back office / Software",
    description: "Un produit robuste, scalable, premium.",
    descriptionEn: "A robust, scalable, premium product.",
    price: "8 000 €",
    priceEn: "8 000 €",
    delay: "8-12 semaines",
    delayEn: "8-12 weeks",
    features: [
      "UI complexe + états (empty/loading/error)",
      "Auth / dashboard / backoffice",
      "Intégrations (API, CRM, paiement)",
      "Publication sur les stores",
      "Suivi post-livraison (handover + itérations)",
    ],
    featuresEn: [
      "Complex UI + states (empty/loading/error)",
      "Auth / dashboard / back office",
      "Integrations (API, CRM, payments)",
      "App store publishing",
      "Post-launch support (handover + iterations)",
    ],
  },
];

export function OffresSection() {
  const { t, lp } = useLang();

  return (
    <section
      id="offres"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Circuit board SVG pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.042]"
        aria-hidden
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0 40 H28 M52 40 H80" stroke="#7C3AED" strokeWidth="0.8" fill="none" />
            <path d="M40 0 V28 M40 52 V80" stroke="#7C3AED" strokeWidth="0.8" fill="none" />
            <circle cx="40" cy="40" r="4" fill="none" stroke="#7C3AED" strokeWidth="0.8" />
            <circle cx="0" cy="40" r="2" fill="#7C3AED" />
            <circle cx="80" cy="40" r="2" fill="#7C3AED" />
            <circle cx="40" cy="0" r="2" fill="#7C3AED" />
            <circle cx="40" cy="80" r="2" fill="#7C3AED" />
            <path d="M28 40 V16 H64" stroke="#7C3AED" strokeWidth="0.5" fill="none" opacity="0.55" />
            <path d="M52 40 V64 H16" stroke="#7C3AED" strokeWidth="0.5" fill="none" opacity="0.55" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Halos */}
      <span className="prisme-halo-violet" style={{ top: "10%", left: "-15%" }} />
      <span className="prisme-halo-peach" style={{ bottom: "5%", right: "-12%" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="section-label justify-center mb-6">{t("Nos offres", "Our packages")}</div>
          <h2 className="text-[44px] md:text-[68px] leading-[1.05] tracking-[-0.02em] text-white mb-6">
            <span className="block prisme-display">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.12}
                staggerFrom="first"
                transition={{ type: "spring", stiffness: 250, damping: 40, delay: 0.1 }}
              >
                {t("Des prix clairs.", "Clear pricing.")}
              </VerticalCutReveal>
            </span>
            <span className="block font-serif prisme-italic-grad">{t("Un résultat premium.", "A premium result.")}</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            {t(
              "Tu choisis le bon format. On livre un produit dont tu seras fier.",
              "You pick the right format. We deliver a product you'll be proud of."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto items-stretch">
          {packs.map((pack, i) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`relative h-full ${
                pack.recommended ? "md:-translate-y-2 lg:-translate-y-4" : ""
              }`}
            >
              {/* Badge "Recommandé" */}
              {pack.recommended && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -top-5 left-1/2 -translate-x-1/2 z-20"
                >
                  <span className="prisme-pill-grad inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.12em] uppercase">
                    <Star className="h-3 w-3 fill-current" />
                    {t("Recommandé", "Recommended")}
                  </span>
                </motion.div>
              )}

              {pack.recommended ? (
                /* ── Animated border wrapper pour Pack Studio ── */
                <div
                  className="relative rounded-[30px] overflow-hidden h-full"
                  style={{ padding: "1.5px", isolation: "isolate" }}
                >
                  {/* Gradient conic rotatif */}
                  <div
                    aria-hidden
                    className="animate-border-spin absolute pointer-events-none"
                    style={{
                      width: "200%",
                      height: "200%",
                      top: "-50%",
                      left: "-50%",
                      background:
                        "conic-gradient(transparent 0deg, transparent 195deg, #7C3AED 225deg, #A78BFA 268deg, #F0AFC8 292deg, transparent 312deg)",
                    }}
                  />
                  {/* Carte intérieure */}
                  <div className="relative z-10 h-full flex flex-col p-9 md:p-10 rounded-[28px] bg-gradient-to-br from-[#1C0E42] via-[#2D1065] to-[#1C0E42] shadow-[0_30px_70px_-20px_rgba(124,58,237,0.5)]">
                    <CardContent pack={pack} t={t} lp={lp} />
                  </div>
                </div>
              ) : (
                <div className="relative h-full flex flex-col p-9 md:p-10 rounded-[28px] bg-white/[0.05] backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.4)] hover:shadow-[0_24px_60px_-20px_rgba(124,58,237,0.35)] hover:-translate-y-1 transition-all duration-500">
                  <CardContent pack={pack} t={t} lp={lp} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[12px] text-white/50 mt-8">
          {t("* Les prix sont variables selon le projet", "* Pricing varies by project")}
        </p>
      </div>
    </section>
  );
}

function CardContent({
  pack,
  t,
  lp,
}: {
  pack: Pack;
  t: (fr: string, en: string) => string;
  lp: (path: string) => string;
}) {
  return (
    <>
      <div className="mb-7">
        <span className="prisme-pill inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase mb-5">
          {pack.name}
        </span>
        <h3 className="font-inter font-semibold text-[22px] md:text-[24px] mb-3 leading-tight tracking-tight text-white">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.1}
            staggerFrom="first"
            transition={{ type: "spring", stiffness: 260, damping: 38, delay: 0.15 }}
          >
            {t(pack.tagline, pack.taglineEn)}
          </VerticalCutReveal>
        </h3>
        <p
          className={`text-[15px] leading-relaxed ${
            pack.recommended ? "text-[#B8A8D8]" : "text-white/60"
          }`}
        >
          {t(pack.description, pack.descriptionEn)}
        </p>
      </div>

      <div
        className={`mb-8 flex-1 pt-6 border-t ${
          pack.recommended ? "border-white/15" : "border-white/10"
        }`}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-5 text-[#A78BFA]">
          {t("Inclus", "What's included")}
        </p>
        <ul className="space-y-3.5">
          {pack.features.map((f, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span
                className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full flex items-center justify-center"
                style={{
                  background: pack.recommended
                    ? "var(--prisme-gradient)"
                    : "rgba(124, 58, 237, 0.1)",
                }}
              >
                <Check
                  className="h-3 w-3"
                  style={{ color: pack.recommended ? "#FFFFFF" : "#A78BFA" }}
                  strokeWidth={3}
                />
              </span>
              <span
                className="text-[14.5px] leading-relaxed text-white"
              >
                {t(f, pack.featuresEn[idx])}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`mb-6 pt-6 text-center border-t ${
          pack.recommended ? "border-white/15" : "border-white/10"
        }`}
      >
        <p
          className={`mb-1.5 text-[13px] font-medium ${
            pack.recommended ? "text-[#B8A8D8]" : "text-white/60"
          }`}
        >
          {t("À partir de", "From")}
        </p>
        <div className="inline-flex items-baseline gap-1 justify-center">
          <span
            className={`font-display font-bold text-[34px] sm:text-[40px] leading-none whitespace-nowrap ${
              pack.recommended ? "text-[#C4B5FD]" : "text-[#A78BFA]"
            }`}
          >
            {t(pack.price, pack.priceEn)}
          </span>
          <span
            className={`text-[18px] font-semibold leading-none mb-auto ${
              pack.recommended ? "text-[#C4B5FD]" : "text-[#A78BFA]"
            }`}
          >
            *
          </span>
        </div>
        {pack.delay && (
          <p
            className={`mt-2 text-sm flex items-center justify-center gap-1.5 ${
              pack.recommended ? "text-[#B8A8D8]" : "text-white/60"
            }`}
          >
            <Clock className="h-3.5 w-3.5" />
            {t("Délai indicatif :", "Typical timeline:")} {t(pack.delay, pack.delayEn ?? pack.delay)}
          </p>
        )}
      </div>

      <MagneticButton
        as={Link}
        to={lp(`/contact?subject=${encodeURIComponent(`${t("Demande de proposition", "Proposal request")} - ${pack.name}`)}`)}
        className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all ${
          pack.recommended
            ? "btn-prisme text-white"
            : "bg-white/[0.05] backdrop-blur-xl border border-white/20 text-white hover:bg-white/[0.06] hover:border-white/50"
        }`}
      >
        {t("Planifier un appel", "Book a call")}
        <ArrowRight className="h-4 w-4" />
      </MagneticButton>
    </>
  );
}
