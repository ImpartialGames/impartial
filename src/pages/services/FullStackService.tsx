import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/sections/PageHero";
import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    title: "Site web + app mobile",
    description: "On couvre les deux canaux. Une marque cohérente sur web et mobile, sans devoir gérer deux prestataires.",
  },
  {
    title: "Backend unifié",
    description: "Une seule API, une seule base de données, une seule source de vérité. Moins de complexité, plus de fiabilité.",
  },
  {
    title: "Design system partagé",
    description: "Composants, tokens, styles. Tout est cohérent entre le web et le mobile. Le design évolue une fois, se répercute partout.",
  },
  {
    title: "Stratégie produit",
    description: "On ne fait pas qu'exécuter. On pense avec toi au parcours utilisateur, à la monetisation, à la croissance.",
  },
  {
    title: "Maintenance & évolution",
    description: "On reste disponibles après la livraison. Nouvelles features, corrections, montées de version. On est ton équipe tech.",
  },
];

const stack = [
  "React", "React Native", "Next.js", "TypeScript", "Node.js",
  "PostgreSQL", "Supabase", "Stripe", "Vercel", "Figma",
];

const FullStackService = () => {
  const reduced = useReducedMotion();

  return (
    <Layout>
      <SEO
        title="Écosystème Digital 360°"
        description="Web, mobile, backend, SaaS. On gère toute la chaîne digitale. Studio Montréal + Paris."
        canonical="/services/360"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Écosystème Digital 360°",
          "provider": { "@type": "Organization", "name": "ImpartialGames", "url": "https://impartialgames.com" },
          "serviceType": "Full-Stack Development",
        }}
      />

      <PageHero
        eyebrow="SERVICES — 360°"
        title="Toute la chaîne,"
        titleEm="un seul studio."
        subtitle="Site, app, backend, SaaS. On gère l'ensemble de ton écosystème digital avec une cohérence que tu ne peux pas avoir avec plusieurs prestataires."
      />

      {/* Features */}
      <section className="ig-section" style={{ backgroundColor: "var(--ig-bg)" }}>
        <div className="ig-container">
          <div>
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="py-8"
                style={{ borderTop: "1px solid var(--ig-border)" }}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-16">
                  <h3
                    className="font-display flex-shrink-0 sm:w-[280px]"
                    style={{
                      fontSize: "var(--text-h3)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.015em",
                      color: "var(--ig-ink)",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-[0.9375rem] leading-[1.7]"
                    style={{ color: "var(--ig-ink-muted)", maxWidth: "52ch" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: "1px solid var(--ig-border)" }} />
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="ig-section" style={{ backgroundColor: "var(--ig-bg-alt)" }}>
        <div className="ig-container">
          <p className="ig-label mb-8">Technologies utilisées</p>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span key={tech} className="prisme-pill">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ig-section" style={{ backgroundColor: "var(--ig-bg)" }}>
        <div className="ig-container">
          <div style={{ borderTop: "1px solid var(--ig-border)", marginBottom: "3rem" }} />
          <p className="ig-label mb-6">Ton écosystème digital</p>
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
            On construit ce que tes concurrents{" "}
            <em style={{ fontStyle: "italic", color: "var(--ig-accent)" }}>n'ont pas encore.</em>
          </h2>
          <Link to="/contact" className="btn-studio">
            Discutons de ton projet
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FullStackService;
