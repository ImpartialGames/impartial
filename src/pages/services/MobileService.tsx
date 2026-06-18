import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/sections/PageHero";
import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    title: "iOS & Android natifs",
    description: "React Native ou Swift/Kotlin selon le besoin. Une codebase, deux plateformes — ou deux codebases natives quand la performance l'exige.",
  },
  {
    title: "UX pensée mobile-first",
    description: "Gestures, haptics, navigation native. On conçoit pour les vrais utilisateurs, pas pour les démos d'investisseurs.",
  },
  {
    title: "Backend & API",
    description: "Architecture backend solide (Node.js, Supabase, Firebase). Authentification, notifications push, sync hors-ligne.",
  },
  {
    title: "Publication & Stores",
    description: "On s'occupe du déploiement sur App Store et Google Play : screenshots, métadonnées, review process.",
  },
  {
    title: "Animations fluides",
    description: "React Native Reanimated pour des transitions 60fps. L'app se sent premium dès la première interaction.",
  },
];

const stack = [
  "React Native", "Expo", "TypeScript", "Reanimated", "Node.js",
  "Supabase", "Firebase", "App Store", "Google Play",
];

const MobileService = () => {
  const reduced = useReducedMotion();

  return (
    <Layout>
      <SEO
        title="Développement Apps Mobiles"
        description="Apps iOS & Android premium. React Native, UX native, publication sur stores. Studio Montréal + Paris."
        canonical="/services/mobile"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Développement Apps Mobiles",
          "provider": { "@type": "Organization", "name": "ImpartialGames", "url": "https://impartialgames.com" },
          "serviceType": "Mobile App Development",
        }}
      />

      <PageHero
        eyebrow="SERVICES — MOBILE"
        title="Des apps que tes"
        titleEm="utilisateurs aiment."
        subtitle="iOS & Android. UX native, animations fluides, backend solide. Du brief à l'App Store."
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
          <p className="ig-label mb-6">Ton app mobile</p>
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
            Une idée en tête{" "}
            <em style={{ fontStyle: "italic", color: "var(--ig-accent)" }}>?</em>
          </h2>
          <Link to="/contact" className="btn-studio">
            Discutons de ton projet
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default MobileService;
