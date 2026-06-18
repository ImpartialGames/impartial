import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { Hover3DCard } from "@/components/animations/Hover3DCard";

const team = [
  {
    name: "Dylan Rose",
    role: { fr: "Cofondateur · Design & Product", en: "Co-founder · Design & Product" },
    bio: {
      fr: "Directeur artistique et product designer. Il transforme les briefs complexes en produits simples et mémorables.",
      en: "Art director and product designer. Turns complex briefs into simple, memorable products.",
    },
    initials: "DR",
  },
  {
    name: "Yanni",
    role: { fr: "Cofondateur · Engineering", en: "Co-founder · Engineering" },
    bio: {
      fr: "Architecte fullstack. Il code vite, code propre, et ne livre que ce qu'il est fier de montrer.",
      en: "Fullstack architect. Codes fast, codes clean, and only ships what he's proud to show.",
    },
    initials: "Y",
  },
];

export function EquipeSection() {
  const { t } = useLang();
  const reduced = useReducedMotion();

  return (
    <section
      id="equipe"
      className="ig-section"
      style={{ backgroundColor: "var(--ig-bg-alt)" }}
    >
      <div className="ig-container">
        {/* Header */}
        <div
          className="mb-14 pb-8"
          style={{ borderBottom: "1px solid var(--ig-border)" }}
        >
          <h2
            className="font-display max-w-[20ch]"
            style={{
              fontSize: "var(--text-display)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "var(--ig-ink)",
            }}
          >
            {t("Deux fondateurs,", "Two founders,")}
            {" "}
            <em style={{ fontStyle: "italic", color: "var(--ig-accent)" }}>
              {t("une obsession.", "one obsession.")}
            </em>
          </h2>
        </div>

        {/* Team grid — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-[860px]">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
            <Hover3DCard rotateStrength={6} glareEnabled={false}>
              {/* Photo placeholder — grayscale circle */}
              <div
                className="mb-6"
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  backgroundColor: "var(--ig-bg)",
                  border: "1px solid var(--ig-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  filter: "grayscale(100%)",
                }}
                aria-hidden
              >
                <span
                  className="font-display text-[1.5rem] font-normal"
                  style={{ color: "var(--ig-ink-muted)", letterSpacing: "-0.02em" }}
                >
                  {member.initials}
                </span>
              </div>

              {/* Info */}
              <h3
                className="font-display mb-1"
                style={{
                  fontSize: "1.375rem",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "var(--ig-ink)",
                }}
              >
                {member.name}
              </h3>

              <p className="ig-label mb-4" style={{ letterSpacing: "0.08em" }}>
                {t(member.role.fr, member.role.en)}
              </p>

              <p
                className="text-[0.9375rem] leading-[1.7]"
                style={{ color: "var(--ig-ink-muted)", maxWidth: "38ch" }}
              >
                {t(member.bio.fr, member.bio.en)}
              </p>
            </Hover3DCard>
            </motion.div>
          ))}
        </div>

        {/* Studio note */}
        <motion.div
          className="mt-16 pt-8"
          style={{ borderTop: "1px solid var(--ig-border)" }}
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-[0.9375rem]"
            style={{ color: "var(--ig-ink-muted)", maxWidth: "58ch" }}
          >
            {t(
              "Basés à Montréal et Paris, on travaille avec des clients partout. Pas d'intermédiaire : tu travailles directement avec nous, du brief au livrable.",
              "Based in Montréal and Paris, we work with clients everywhere. No middleman: you work directly with us, from brief to delivery."
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
