import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { RevealText } from "@/components/wow/RevealText";

const clients = [
  "Eclipsia",
  "Altarys Group",
  "Guardian Of Prophecia",
  "Umel Couture",
  "Fitbyval",
  "ELEV8",
];

const testimonial = {
  quote: {
    fr: "ImpartialGames a transformé notre vision en un produit digital impeccable. Leur rigueur et leur sens du détail font toute la différence.",
    en: "ImpartialGames turned our vision into a flawless digital product. Their rigor and attention to detail make all the difference.",
  },
  author: "Dylan Rose",
  company: "ELEV8 · Coaching App",
};

function MarqueeLogos({ items }: { items: string[] }) {
  const reduced = useReducedMotion();
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden"
      style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      aria-hidden
    >
      <motion.div
        className="flex gap-16 items-center"
        animate={reduced ? undefined : { x: "-50%" }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: "max-content" }}
      >
        {doubled.map((client, i) => (
          <span
            key={`${client}-${i}`}
            className="ig-label whitespace-nowrap"
            style={{ letterSpacing: "0.12em", fontSize: "0.8125rem", opacity: 0.45 }}
          >
            {client}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function PreuveSection() {
  const { t } = useLang();
  const reduced = useReducedMotion();

  return (
    <section
      id="clients"
      className="ig-section"
      style={{ backgroundColor: "var(--ig-bg)" }}
    >
      <div className="ig-container">
        {/* Logo marquee */}
        <div className="mb-20">
          <MarqueeLogos items={clients} />
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--ig-border)", marginBottom: "4rem" }} />

        {/* Single testimonial */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[720px]"
        >
          {/* Quote mark */}
          <span
            className="block font-display text-[5rem] leading-none mb-4"
            style={{ color: "var(--ig-accent)", opacity: 0.25 }}
            aria-hidden
          >
            "
          </span>

          <blockquote>
            <div
              className="font-display"
              style={{
                fontSize: "var(--text-h3)",
                lineHeight: 1.4,
                letterSpacing: "-0.018em",
                color: "var(--ig-ink)",
                fontStyle: "italic",
                maxWidth: "60ch",
              }}
            >
              <RevealText by="word" stagger={0.04} delay={0.1} as="p">
                {t(testimonial.quote.fr, testimonial.quote.en)}
              </RevealText>
            </div>
            <footer className="mt-8 flex items-center gap-4">
              <div
                className="w-8 h-px"
                style={{ backgroundColor: "var(--ig-accent)" }}
                aria-hidden
              />
              <cite
                className="not-italic"
                style={{ color: "var(--ig-ink-muted)" }}
              >
                <span className="text-[0.9375rem] font-semibold" style={{ color: "var(--ig-ink)" }}>
                  {testimonial.author}
                </span>
                <span className="mx-2 ig-label">·</span>
                <span className="ig-label" style={{ letterSpacing: "0.08em" }}>
                  {testimonial.company}
                </span>
              </cite>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
