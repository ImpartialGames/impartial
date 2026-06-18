import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendlyQuiz } from "@/components/CalendlyQuiz";
import { MagneticButton } from "@/components/wow/MagneticButton";
import { useLang } from "@/contexts/LanguageContext";
import { HeroOrbs } from "./HeroOrbs";

export function CTAFinal() {
  const [quizOpen, setQuizOpen] = useState(false);
  const { t } = useLang();
  const reduced = useReducedMotion();

  return (
    <section
      id="contact"
      className="ig-section relative overflow-hidden"
      style={{ backgroundColor: "var(--ig-bg-alt)" }}
    >
      <HeroOrbs />
      <div className="ig-container relative z-10">
        {/* Top rule */}
        <div style={{ borderTop: "1px solid var(--ig-border)", marginBottom: "4rem" }} />

        {/* Label */}
        <p className="ig-label mb-8">{t("Travaillons ensemble", "Let's work together")}</p>

        {/* H2 géant */}
        <motion.h2
          className="font-display"
          style={{
            fontSize: "var(--text-display)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: "var(--ig-ink)",
            maxWidth: "18ch",
            marginBottom: "3rem",
          }}
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {t("Un projet en tête", "A project in mind")}
          {" "}
          <em style={{ fontStyle: "italic", color: "var(--ig-accent)" }}>
            ?
          </em>
        </motion.h2>

        {/* Email lien Gloock grand format */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <a
            href="mailto:studio@impartialgames.com"
            className="font-display block transition-colors duration-200 hover:opacity-70"
            style={{
              fontSize: "clamp(1.375rem, 3.5vw, 2.5rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "var(--ig-ink)",
              textDecoration: "none",
            }}
          >
            studio@impartialgames.com
          </a>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            onClick={() => setQuizOpen(true)}
            className="btn-studio"
            strength={0.3}
          >
            {t("Planifier un appel", "Book a call")}
          </MagneticButton>

          <p
            className="text-[0.9375rem]"
            style={{ color: "var(--ig-ink-muted)" }}
          >
            {t("Réponse sous 24h", "Reply within 24h")}
          </p>
        </motion.div>

        {/* Bottom metadata */}
        <div
          className="mt-16 pt-8 flex flex-wrap gap-8"
          style={{ borderTop: "1px solid var(--ig-border)" }}
        >
          <span className="ig-label">{t("Montréal · EST", "Montreal · EST")}</span>
          <span className="ig-label">{t("Paris · CET", "Paris · CET")}</span>
          <span className="ig-label">{t("Projets sur-mesure uniquement", "Custom projects only")}</span>
        </div>
      </div>

      <AnimatePresence>
        {quizOpen && <CalendlyQuiz onClose={() => setQuizOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
