import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton, RevealText } from "@/components/wow";
import { CalendlyQuiz } from "@/components/CalendlyQuiz";
import { HeroWavesBackground } from "@/components/sections/HeroWavesBackground";
import { useLang } from "@/contexts/LanguageContext";

export function HeroPremium() {
  const [quizOpen, setQuizOpen] = useState(false);
  const { t, lp } = useLang();

  const heroBadges = [
    t("Design premium", "Premium design"),
    t("Code solide", "Solid code"),
    "Mobile-first",
    t("Zéro compromis", "Zero compromise"),
  ];

  return (
    <section
      className="relative h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-8 md:pt-20 md:pb-8"
      style={{ backgroundColor: "#080410" }}
    >
      <HeroWavesBackground />

      {/* ─── Contenu principal ─── */}
      <div className="w-full px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.9fr] gap-10 lg:gap-12 items-center max-w-[1600px] mx-auto">
          {/* Colonne gauche */}
          <div>
            <h1 className="font-serif text-[34px] sm:text-[48px] lg:text-[72px] xl:text-[88px] 2xl:text-[100px] leading-[0.98] tracking-[-0.03em] text-white">
              <RevealText by="word" stagger={0.06}>
                {t("Des produits.", "Products.")}
              </RevealText>
              <span className="block">
                <span className="prisme-italic-grad prisme-shimmer">
                  {t("Pas des promesses.", "Not promises.")}
                </span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 text-[16px] md:text-[18px] text-white/50 leading-[1.6] max-w-2xl"
            >
              {t(
                "Développement web, mobile et logiciel sur-mesure. Plus de 30 clients accompagnés. 4 produits opérés par nos soins.",
                "Custom web, mobile & software. 30+ clients. 4 products we build and operate ourselves."
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-7 flex flex-col sm:flex-row gap-3"
            >
              <MagneticButton
                as="button"
                onClick={() => setQuizOpen(true)}
                className="btn-prisme group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium text-[15px]"
              >
                {t("Planifier un appel", "Book a call")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                as={Link}
                to={lp("/#offres")}
                onClick={(e: React.MouseEvent) => {
                  const el = document.getElementById("offres");
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 font-medium text-[15px] hover:bg-white/[0.07] hover:border-white/35 hover:text-white transition-all duration-300"
              >
                {t("Découvrir nos offres", "See our packages")}
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {heroBadges.map((b, i) => (
                <motion.span
                  key={b}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.05 + i * 0.07 }}
                  className="px-4 py-2 rounded-full text-[12px] font-medium tracking-wide bg-white/[0.06] border border-white/[0.11] text-white/55"
                >
                  {b}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Colonne droite — espace fragments */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* ─── Terminal typewriter ─── */}

      {/* ─── Dégradé bas vers SocialProofBand (dark) ─── */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-[5]"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #0d1120 100%)" }}
      />

      <AnimatePresence>
        {quizOpen && <CalendlyQuiz onClose={() => setQuizOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
