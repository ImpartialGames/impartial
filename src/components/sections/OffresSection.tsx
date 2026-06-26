import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Clock } from "lucide-react";
import { MagneticButton } from "@/components/wow";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { useLang } from "@/contexts/LanguageContext";

interface Pack {
  name: string;
  tagline: string;
  description: string;
  price: string;
  priceCAD?: string;
  delay?: string;
  features: string[];
  recommended?: boolean;
}

const packs: Pack[] = [
  {
    name: "PACK LAUNCH",
    tagline: "Landing / One-page premium",
    description: "Lancer vite, marquer fort.",
    price: "À partir de 1 500 €",
    priceCAD: "2 500 $CA",
    delay: "2-3 semaines",
    features: [
      "Direction artistique + UI premium",
      "Copywriting (hero, preuve, CTA)",
      "Transition (micro-interactions)",
      "Optimisation performance",
      "Referencement de base",
    ],
  },
  {
    name: "PACK STUDIO",
    tagline: "Site multi-pages signature",
    description: "Une présence digitale complète et élégante.",
    price: "À partir de 3 000 €",
    priceCAD: "5 000 $CA",
    delay: "4-6 semaines",
    features: [
      "Design (typo, couleurs, composants)",
      "4 à 6 pages clés",
      "Animation premium",
      "Intégrations (formulaire, calendrier, analytics)",
      "Référencement renforcé",
    ],
    recommended: true,
  },
  {
    name: "PACK ELITE",
    tagline: "Application / Backoffice / Logiciel",
    description: "Un produit robuste, scalable, premium.",
    price: "À partir de 8 000 €",
    priceCAD: "12 000 $CA",
    delay: "8-12 semaines",
    features: [
      "UI complexe + états (empty/loading/error)",
      "Auth / dashboard / backoffice",
      "Intégrations (API, CRM, paiement)",
      "Publication sur les stores",
      "Suivi post-livraison (handover + itérations)",
    ],
  },
];

export function OffresSection() {
  const { t } = useLang();

  return (
    <section
      id="offres"
      className="relative py-24 md:py-32 bg-[#FBFAF7] overflow-hidden"
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
          <div className="section-label justify-center mb-6">Nos offres</div>
          <h2 className="text-[44px] md:text-[68px] leading-[1.05] tracking-[-0.02em] text-[#0E0B14] mb-6">
            <span className="block prisme-display">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.12}
                staggerFrom="first"
                transition={{ type: "spring", stiffness: 250, damping: 40, delay: 0.1 }}
              >
                Des prix clairs.
              </VerticalCutReveal>
            </span>
            <span className="block font-serif prisme-italic-grad">Un résultat premium.</span>
          </h2>
          <p className="text-[#6F6580] text-base md:text-lg leading-relaxed">
            Tu choisis le bon format. On livre un produit dont tu seras fier.
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
                    Recommandé
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
                    <CardContent pack={pack} t={t} />
                  </div>
                </div>
              ) : (
                <div className="relative h-full flex flex-col p-9 md:p-10 rounded-[28px] bg-white/85 backdrop-blur-md border border-[#EEEAF4] shadow-[0_12px_40px_-15px_rgba(124,58,237,0.12)] hover:shadow-[0_24px_60px_-20px_rgba(124,58,237,0.25)] hover:-translate-y-1 transition-all duration-500">
                  <CardContent pack={pack} t={t} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[12px] text-[#9F8FB0] mt-8">
          * Les prix sont variables selon le projet
        </p>
      </div>
    </section>
  );
}

function CardContent({
  pack,
  t,
}: {
  pack: Pack;
  t: (fr: string, en: string) => string;
}) {
  return (
    <>
      <div className="mb-7">
        <span className="prisme-pill inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase mb-5">
          {pack.name}
        </span>
        <h3
          className={`font-inter font-semibold text-[22px] md:text-[24px] mb-3 leading-tight tracking-tight ${
            pack.recommended ? "text-white" : "text-[#0E0B14]"
          }`}
        >
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.1}
            staggerFrom="first"
            transition={{ type: "spring", stiffness: 260, damping: 38, delay: 0.15 }}
          >
            {pack.tagline}
          </VerticalCutReveal>
        </h3>
        <p
          className={`text-[15px] leading-relaxed ${
            pack.recommended ? "text-[#B8A8D8]" : "text-[#6F6580]"
          }`}
        >
          {pack.description}
        </p>
      </div>

      <div
        className={`mb-8 flex-1 pt-6 border-t ${
          pack.recommended ? "border-white/15" : "border-[#EEEAF4]"
        }`}
      >
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.18em] mb-5 ${
            pack.recommended ? "text-[#A78BFA]" : "text-[#7C3AED]"
          }`}
        >
          Inclus
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
                  style={{ color: pack.recommended ? "#FFFFFF" : "#7C3AED" }}
                  strokeWidth={3}
                />
              </span>
              <span
                className={`text-[14.5px] leading-relaxed ${
                  pack.recommended ? "text-white" : "text-[#0E0B14]"
                }`}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`mb-6 pt-6 text-center border-t ${
          pack.recommended ? "border-white/15" : "border-[#EEEAF4]"
        }`}
      >
        <div className="inline-flex items-baseline gap-1 flex-wrap justify-center">
          <span
            className={`font-syne font-black text-[32px] sm:text-[38px] leading-none ${
              pack.recommended ? "text-[#C4B5FD]" : "text-[#7C3AED]"
            }`}
          >
            {pack.price}
          </span>
          <span
            className={`text-[18px] font-semibold leading-none mb-auto ${
              pack.recommended ? "text-[#C4B5FD]" : "text-[#7C3AED]"
            }`}
          >
            *
          </span>
        </div>
        {pack.priceCAD && (
          <p
            className={`mt-1 text-[12px] font-medium ${
              pack.recommended ? "text-[#B8A8D8]" : "text-[#6F6580]"
            }`}
          >
            ou {pack.priceCAD}
          </p>
        )}
        {pack.delay && (
          <p
            className={`mt-2 text-sm flex items-center justify-center gap-1.5 ${
              pack.recommended ? "text-[#B8A8D8]" : "text-[#6F6580]"
            }`}
          >
            <Clock className="h-3.5 w-3.5" />
            Délai indicatif : {pack.delay}
          </p>
        )}
      </div>

      <MagneticButton
        as={Link}
        to={`/contact?subject=Demande%20de%20proposition%20-%20${encodeURIComponent(pack.name)}`}
        className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all ${
          pack.recommended
            ? "btn-prisme text-white"
            : "bg-white border border-[#0E0B14] text-[#0E0B14] hover:bg-[#0E0B14] hover:text-[#FBFAF7]"
        }`}
      >
        {t("Planifier un appel", "Book a call")}
        <ArrowRight className="h-4 w-4" />
      </MagneticButton>
    </>
  );
}
