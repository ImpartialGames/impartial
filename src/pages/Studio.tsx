import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/sections/PageHero";

const timeline = [
  {
    year: "2021",
    title: "Fondation",
    description: "Dylan et Yanni fondent le studio à Montréal avec une conviction : un produit digital bien fait change tout pour une marque.",
  },
  {
    year: "2022",
    title: "Premiers clients, premières preuves",
    description: "Les premiers projets arrivent. Des clients satisfaits, des résultats mesurables, une réputation qui se construit par le travail.",
  },
  {
    year: "2023",
    title: "Extension Paris",
    description: "Ouverture d'une présence à Paris. Le studio travaille désormais avec des clients des deux côtés de l'Atlantique.",
  },
  {
    year: "2024",
    title: "30+ clients, 40+ projets",
    description: "Sites, apps mobiles, SaaS. Le studio livre des produits complets, du brief au déploiement.",
  },
  {
    year: "2025 —",
    title: "Produits propres",
    description: "Lancement d'ELEV8, première app propriétaire du studio. La preuve qu'on mange notre propre cuisine.",
  },
];

const approach = [
  {
    title: "Pas de templates",
    description: "Chaque projet commence par une page blanche. Ce qu'on construit est fait pour toi, pas pour le prochain client.",
  },
  {
    title: "Du brief au livrable",
    description: "Tu travailles directement avec Dylan et Yanni. Pas d'account manager, pas de sous-traitance. Les fondateurs font le travail.",
  },
  {
    title: "Code qui dure",
    description: "Architecture propre, documentation, tests. Ce qu'on livre, tu peux le maintenir et le faire évoluer.",
  },
  {
    title: "Design qui convertit",
    description: "Un beau site qui ne convertit pas est un échec. On optimise pour les deux en même temps.",
  },
];

export default function Studio() {
  const reduced = useReducedMotion();

  return (
    <Layout>
      <SEO
        title="Le Studio — ImpartialGames"
        description="Studio digital fondé à Montréal en 2021. Design premium, code solide, produits sur-mesure. Présents à Montréal et Paris."
        canonical="/studio"
      />

      <PageHero
        eyebrow="STUDIO — MONTRÉAL · PARIS"
        title="Deux fondateurs,"
        titleEm="une obsession."
        subtitle="Pas un template, pas un intermédiaire. Dylan et Yanni font le travail du brief au livrable."
      />

      {/* Approche — lignes horizontales */}
      <section className="ig-section" style={{ backgroundColor: "var(--ig-bg)" }}>
        <div className="ig-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 max-w-[960px]">
            {approach.map((item, i) => (
              <motion.div
                key={item.title}
                className="py-8"
                style={{ borderTop: "1px solid var(--ig-border)" }}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3
                  className="font-display mb-3"
                  style={{
                    fontSize: "var(--text-h3)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.015em",
                    color: "var(--ig-ink)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[0.9375rem] leading-[1.7]"
                  style={{ color: "var(--ig-ink-muted)" }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section sombre — manifeste studio */}
      <section
        className="ig-section"
        style={{ backgroundColor: "var(--ig-dark)" }}
        aria-label="Positionnement"
      >
        <div className="ig-container">
          <div className="max-w-[720px]">
            <motion.p
              className="ig-label mb-10"
              style={{ color: "rgba(243, 241, 249, 0.4)" }}
              initial={reduced ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Pourquoi nous
            </motion.p>

            {[
              { text: "Le marché est saturé de studios qui livrent des sites identiques.", accent: false },
              { text: "On ne compete pas sur le prix. On compete sur la qualité.", accent: false },
              { text: "Nos clients reviennent parce que ça marche.", accent: true },
            ].map((line, i) => (
              <motion.div
                key={i}
                className="overflow-hidden"
                initial={reduced ? false : { clipPath: "inset(0 0 100% 0)" }}
                whileInView={{ clipPath: "inset(0 0 0% 0)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.75, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <p
                  className="font-display mb-4"
                  style={{
                    fontSize: "var(--text-h2)",
                    lineHeight: 1.25,
                    letterSpacing: "-0.025em",
                    color: line.accent ? "var(--ig-accent)" : "var(--ig-dark-ink)",
                    fontStyle: line.accent ? "italic" : "normal",
                    opacity: line.accent ? 1 : 0.88,
                  }}
                >
                  {line.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="ig-section" style={{ backgroundColor: "var(--ig-bg-alt)" }}>
        <div className="ig-container">
          <p className="ig-label mb-14">Chronologie</p>

          <div className="max-w-[680px]">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="flex gap-10 pb-10"
                style={{ borderTop: "1px solid var(--ig-border)", paddingTop: "2rem" }}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <span
                  className="ig-label flex-shrink-0 w-14"
                  style={{ letterSpacing: "0.08em", paddingTop: "0.2rem" }}
                >
                  {item.year}
                </span>
                <div>
                  <h3
                    className="font-display mb-2"
                    style={{
                      fontSize: "1.25rem",
                      lineHeight: 1.2,
                      letterSpacing: "-0.015em",
                      color: "var(--ig-ink)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[0.9375rem] leading-[1.7]"
                    style={{ color: "var(--ig-ink-muted)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ig-section" style={{ backgroundColor: "var(--ig-bg)" }}>
        <div className="ig-container">
          <div style={{ borderTop: "1px solid var(--ig-border)", marginBottom: "3rem" }} />
          <p className="ig-label mb-6">Travailler avec nous</p>
          <h2
            className="font-display mb-8"
            style={{
              fontSize: "var(--text-display)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "var(--ig-ink)",
              maxWidth: "18ch",
            }}
          >
            Un projet en tête{" "}
            <em style={{ fontStyle: "italic", color: "var(--ig-accent)" }}>?</em>
          </h2>
          <Link to="/contact" className="btn-studio">
            Discutons
          </Link>
        </div>
      </section>
    </Layout>
  );
}
