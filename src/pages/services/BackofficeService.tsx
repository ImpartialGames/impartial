import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/sections/PageHero";
import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    title: "Dashboards & Analytics",
    description: "Visualisations de données en temps réel, tableaux de bord configurables, exports. Conçu pour des équipes qui prennent des décisions basées sur des données.",
  },
  {
    title: "Gestion des utilisateurs",
    description: "Rôles, permissions, invitations. Authentification sécurisée (OAuth, 2FA). Multi-tenant si besoin.",
  },
  {
    title: "Architecture scalable",
    description: "Code modulaire, bien documenté. Pas de dette technique dès le départ. Évolutif dès le premier déploiement.",
  },
  {
    title: "Intégrations API",
    description: "Stripe pour la facturation, Resend/Mailgun pour les emails, webhooks personnalisés. On connecte tout ce dont tu as besoin.",
  },
  {
    title: "Performance & Sécurité",
    description: "Rate limiting, validation des entrées, protection CSRF. Un SaaS solide qui tient en prod.",
  },
];

const stack = [
  "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL",
  "Supabase", "Stripe", "shadcn/ui", "Framer Motion",
];

const BackofficeService = () => {
  const reduced = useReducedMotion();

  return (
    <Layout>
      <SEO
        title="Développement SaaS & Dashboards"
        description="Backoffices, dashboards et logiciels sur-mesure. Architecture propre, scalable, documentée. Studio Montréal + Paris."
        canonical="/services/backoffice"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Développement SaaS & Dashboards",
          "provider": { "@type": "Organization", "name": "ImpartialGames", "url": "https://impartialgames.com" },
          "serviceType": "SaaS Development",
        }}
      />

      <PageHero
        eyebrow="SERVICES — SAAS"
        title="Des outils que tes"
        titleEm="équipes adorent."
        subtitle="Backoffices, dashboards et SaaS sur-mesure. Scalable dès le premier jour, sans dette technique."
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
          <p className="ig-label mb-6">Ton produit SaaS</p>
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
            On construit{" "}
            <em style={{ fontStyle: "italic", color: "var(--ig-accent)" }}>avec toi.</em>
          </h2>
          <Link to="/contact" className="btn-studio">
            Discutons de ton projet
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BackofficeService;
