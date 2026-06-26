import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const lines = [
  {
    fr: "Un beau site, c'est la meilleure carte de visite.",
    en: "A beautiful site is the best business card.",
  },
  {
    fr: "Un code solide, c'est ce qui dure dans le temps.",
    en: "Solid code is what stands the test of time.",
  },
  {
    fr: "Pas de bullshit, pas de templates, pas de compromis.",
    en: "No bullshit, no templates, no compromise.",
  },
  {
    fr: "On construit ce que tes concurrents n'ont pas encore.",
    en: "We build what your competitors don't have yet.",
    accent: true,
  },
];

function ManifestLine({
  text,
  accent = false,
  delay = 0,
}: {
  text: string;
  accent?: boolean;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <p
        className="font-display"
        style={{
          fontSize: "var(--text-h2)",
          lineHeight: 1.2,
          letterSpacing: "-0.025em",
          color: accent ? "var(--ig-accent)" : "var(--ig-dark-ink)",
          fontStyle: accent ? "italic" : "normal",
          opacity: accent ? 1 : 0.85,
        }}
      >
        {text}
      </p>
    );
  }

  return (
    <motion.div
      className="overflow-hidden"
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <p
        className="font-display"
        style={{
          fontSize: "var(--text-h2)",
          lineHeight: 1.25,
          letterSpacing: "-0.025em",
          color: accent ? "var(--ig-accent)" : "var(--ig-dark-ink)",
          fontStyle: accent ? "italic" : "normal",
          opacity: accent ? 1 : 0.88,
        }}
      >
        {text}
      </p>
    </motion.div>
  );
}

export function ManifestSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-100px", once: false });
  const reduced = useReducedMotion();
  const { t } = useLang();

  return (
    <section
      ref={ref}
      id="manifeste"
      className="ig-section"
      style={{ backgroundColor: "var(--ig-dark)" }}
      aria-label="Manifeste ImpartialGames"
    >
      {/* Background transition hint */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        initial={false}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ backgroundColor: "var(--ig-dark)" }}
      />

      <div className="ig-container relative z-10">
        <div className="max-w-[860px]">
          {/* Lines */}
          <div className="flex flex-col gap-5">
            {lines.map((line, i) => (
              <ManifestLine
                key={i}
                text={t(line.fr, line.en)}
                accent={line.accent}
                delay={i * 0.12}
              />
            ))}
          </div>

          {/* Bottom metadata */}
          <motion.div
            className="mt-16 pt-8 flex flex-wrap gap-10"
            style={{ borderTop: "1px solid rgba(243, 241, 249, 0.1)" }}
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { label: t("Fondé", "Founded"), value: "2021" },
              { label: t("Clients", "Clients"), value: "30+" },
              { label: t("Projets livrés", "Projects shipped"), value: "40+" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="ig-label mb-1"
                  style={{ color: "rgba(243, 241, 249, 0.4)" }}
                >
                  {stat.label}
                </p>
                <p
                  className="font-display text-[2rem] font-normal"
                  style={{ color: "var(--ig-dark-ink)", letterSpacing: "-0.02em" }}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
