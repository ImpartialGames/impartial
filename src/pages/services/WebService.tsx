import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/sections/PageHero";
import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    title: "Design éditorial UI/UX",
    description: "Chaque interface est pensée pour convertir et marquer les esprits. Typographie soignée, hiérarchie visuelle rigoureuse, micro-interactions intentionnelles.",
  },
  {
    title: "Performance & Vitesse",
    description: "Lighthouse 95+ garanti. Code optimisé, images compressées, déploiement CDN. Votre site charge vite sur tous les réseaux.",
  },
  {
    title: "Référencement naturel",
    description: "Structure sémantique, balises optimisées, sitemap, Schema.org. Votre site est prêt à être trouvé depuis le premier jour.",
  },
  {
    title: "E-commerce & Paiements",
    description: "Boutiques performantes avec tunnels de vente optimisés et intégrations Stripe, PayPal ou sur-mesure.",
  },
  {
    title: "Animations & Motion",
    description: "Transitions fluides pensées pour renforcer votre marque sans ralentir votre site. Framer Motion ou GSAP selon le besoin.",
  },
  {
    title: "Stack moderne & maintenable",
    description: "React, Next.js ou Vite, TypeScript, Tailwind. Code propre, documenté, que vous pouvez faire évoluer.",
  },
];

const stack = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Vite", "Vercel", "Supabase", "Stripe", "Figma",
];

const WebService = () => {
  const reduced = useReducedMotion();

  return (
    <Layout>
      <SEO
        title="Création de Sites Web"
        description="Design éditorial, performance A+ et animations maîtrisées. Vitrine, e-commerce ou sur-mesure. Studio Montréal + Paris."
        canonical="/services/web"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Création de Sites Web",
          "provider": { "@type": "Organization", "name": "ImpartialGames", "url": "https://impartialgames.com" },
          "serviceType": "Web Design & Development",
        }}
      />

      <PageHero
        eyebrow="SERVICES — WEB"
        title="Sites qui travaillent"
        titleEm="pour toi."
        subtitle="De la vitrine épurée au e-commerce complet. Design premium, code performant, livré dans les délais."
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
          <p className="ig-label mb-6">Ton projet web</p>
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
            Prêt à construire{" "}
            <em style={{ fontStyle: "italic", color: "var(--ig-accent)" }}>quelque chose ?</em>
          </h2>
          <Link to="/contact" className="btn-studio">
            Discutons de ton projet
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default WebService;
