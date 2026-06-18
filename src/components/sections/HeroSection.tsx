import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CalendlyQuiz } from "@/components/CalendlyQuiz";
import { MagneticButton } from "@/components/wow/MagneticButton";
import { useLang } from "@/contexts/LanguageContext";
import { HeroOrbs } from "./HeroOrbs";
import { HeroDevWidget } from "./HeroDevWidget";

function LineReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <span className="block">{children}</span>;

  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  const [quizOpen, setQuizOpen] = useState(false);
  const { t } = useLang();

  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: "7rem", paddingBottom: "5rem", backgroundColor: "var(--ig-bg)" }}
      aria-label="Accueil — ImpartialGames Studio"
    >
      {/* Orbs ambiants */}
      <HeroOrbs />

      <div className="ig-container relative z-10">
        <div className="grid lg:grid-cols-[1fr_420px] items-center gap-16 xl:gap-28">

          {/* ── Colonne gauche — texte ── */}
          <div>
            <FadeIn delay={0.05}>
              <p className="ig-label mb-8" style={{ letterSpacing: "0.12em" }}>
                {t("Studio digital · Montréal · Paris", "Digital studio · Montréal · Paris")}
              </p>
            </FadeIn>

            <h1
              className="font-display"
              style={{
                fontSize: "var(--text-hero)",
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
                color: "var(--ig-ink)",
              }}
            >
              <LineReveal delay={0.1}>{t("On construit", "We build")}</LineReveal>
              <LineReveal delay={0.2}>{t("ce que tes", "what your")}</LineReveal>
              <LineReveal delay={0.3}>{t("concurrents n'ont", "competitors don't")}</LineReveal>
              <LineReveal delay={0.4}>
                <em className="font-display" style={{ fontStyle: "italic", color: "var(--ig-accent)" }}>
                  {t("pas encore.", "have yet.")}
                </em>
              </LineReveal>
            </h1>

            <FadeIn delay={0.65}>
              <p
                className="mt-8 text-[1.0625rem] leading-[1.7]"
                style={{ color: "var(--ig-ink-muted)", maxWidth: "52ch" }}
              >
                {t(
                  "Sites web, apps mobiles et SaaS sur-mesure. Design premium, code solide. Plus de 30 clients accompagnés.",
                  "Custom websites, mobile apps, and SaaS. Premium design, solid code. 30+ clients."
                )}
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="mt-10 flex flex-wrap gap-3">
                <MagneticButton
                  onClick={() => setQuizOpen(true)}
                  className="btn-studio group flex items-center gap-2.5 text-[14px] px-7 py-3.5"
                  strength={0.35}
                >
                  {t("Discutons de ton projet", "Let's discuss your project")}
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  />
                </MagneticButton>
                <a
                  href="/portfolio"
                  className="btn-studio-outline text-[14px] px-7 py-3.5"
                >
                  {t("Voir nos projets", "View our projects")}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={1.0}>
              <div
                className="mt-16 pt-6 flex flex-wrap gap-8"
                style={{ borderTop: "1px solid var(--ig-border)" }}
              >
                {[
                  t("30+ clients", "30+ clients"),
                  t("Web · App · SaaS", "Web · App · SaaS"),
                  t("Depuis 2021", "Since 2021"),
                ].map((meta) => (
                  <span key={meta} className="ig-label" style={{ letterSpacing: "0.08em" }}>
                    {meta}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* ── Colonne droite — widget dev (desktop uniquement) ── */}
          <div className="hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeroDevWidget />
            </motion.div>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {quizOpen && <CalendlyQuiz onClose={() => setQuizOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
