import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MagneticButton } from "@/components/wow";
import { CalendlyQuiz } from "@/components/CalendlyQuiz";
import { HeroWavesBackground } from "@/components/sections/HeroWavesBackground";
import { HeroComposite } from "@/components/sections/HeroComposite";
import { useLang } from "@/contexts/LanguageContext";

/** Hero « agence » — 2 colonnes : promesse + composite dashboard (2026-07). */
export function HeroAgency() {
  const [quizOpen, setQuizOpen] = useState(false);
  const { t, lp } = useLang();

  const benefits = [
    t("+ de clients", "More clients"),
    t("+ de visibilité", "More visibility"),
    t("+ de revenus", "More revenue"),
  ];

  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-24 lg:pt-24 lg:pb-16"
      style={{ backgroundColor: "#05060E" }}
    >
      <HeroWavesBackground />

      <div className="w-full px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center max-w-[1600px] mx-auto">
          {/* ─── Colonne gauche ─── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.11]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" aria-hidden />
              <span className="text-[12px] font-medium tracking-wide text-white/65">
                {t("Studio digital & logiciel sur-mesure — Montréal · Paris", "Custom digital & software studio — Montreal · Paris")}
              </span>
            </motion.div>

            {/* H1 animé en CSS pur : peint avant l'hydratation JS (LCP). */}
            <h1 className="mt-6 font-serif text-[38px] sm:text-[52px] lg:text-[64px] xl:text-[76px] leading-[1.02] tracking-[-0.03em] text-white">
              <span className="block animate-fade-in-up">
                {t("On crée vos outils.", "We build your tools.")}
              </span>
              <span
                className="block animate-fade-in-up"
                style={{ animationDelay: "0.15s", animationFillMode: "both" }}
              >
                <span className="prisme-italic-grad">
                  {t("Vous gagnez plus.", "You earn more.")}
                </span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-[16px] md:text-[18px] text-white/55 leading-[1.6] max-w-xl"
            >
              {t(
                "Sites web, applications et logiciels sur-mesure qui automatisent, convertissent et font grandir votre entreprise.",
                "Custom websites, apps and software that automate, convert and grow your business.",
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {benefits.map((b, i) => (
                <motion.span
                  key={b}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-medium bg-white/[0.06] border border-white/[0.11] text-white/70"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" aria-hidden />
                  {b}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <MagneticButton
                as="button"
                onClick={() => setQuizOpen(true)}
                className="btn-prisme group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium text-[15px]"
              >
                {t("Réserver un appel gratuit", "Book a free call")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                as={Link}
                to={lp("/portfolio")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 font-medium text-[15px] hover:bg-white/[0.07] hover:border-white/35 hover:text-white transition-all duration-300"
              >
                {t("Voir nos réalisations", "See our work")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
            </motion.div>

            {/* Ils nous font confiance — clients réels */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="mt-10"
            >
              <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/50">
                {t("Ils nous font confiance", "They trust us")}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
                {["Eclipsia", "Altarys Group", "We Close", "Umel Couture", "Fitbyval"].map((name) => (
                  <span
                    key={name}
                    className="font-syne font-semibold text-[14px] tracking-wide text-white/55 hover:text-white/85 transition duration-300"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ─── Colonne droite — composite dashboard ─── */}
          <HeroComposite />
        </div>
      </div>

      <AnimatePresence>
        {quizOpen && <CalendlyQuiz onClose={() => setQuizOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
