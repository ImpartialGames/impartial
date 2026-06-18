import { motion, useReducedMotion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleEm?: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, titleEm, subtitle }: PageHeroProps) {
  const reduced = useReducedMotion();

  return (
    <section
      style={{
        backgroundColor: "var(--ig-bg)",
        paddingTop: "clamp(6rem, 12vw, 9rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
      }}
    >
      <div className="ig-container">
        <div style={{ borderTop: "1px solid var(--ig-border)", marginBottom: "2rem" }} />

        <motion.p
          className="ig-label mb-6"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {eyebrow}
        </motion.p>

        <div className="overflow-hidden mb-6">
          <motion.h1
            className="font-display"
            style={{
              fontSize: "var(--text-display)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "var(--ig-ink)",
              maxWidth: "22ch",
            }}
            initial={reduced ? false : { y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
            {titleEm && (
              <>
                {" "}
                <em style={{ fontStyle: "italic", color: "var(--ig-accent)" }}>
                  {titleEm}
                </em>
              </>
            )}
          </motion.h1>
        </div>

        {subtitle && (
          <motion.p
            className="text-[1rem] leading-[1.75]"
            style={{ color: "var(--ig-ink-muted)", maxWidth: "58ch" }}
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {subtitle}
          </motion.p>
        )}

        <div style={{ borderTop: "1px solid var(--ig-border)", marginTop: "2.5rem" }} />
      </div>
    </section>
  );
}
