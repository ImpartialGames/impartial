import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";
import umelImg from "@/assets/portfolio/umel.webp";
import { useLang } from "@/contexts/LanguageContext";

const projectDetails = {
  title: "Umel Couture",
  subtitle: "Landing page premium pour une maison de couture sur-mesure",
  subtitleEn: "Premium landing page for a bespoke couture house",
  category: "Landing page",
  categoryEn: "Landing page",
  client: "Umel Couture",
  year: "2025",
  duration: "3 semaines",
  description: `Umel Couture est une maison de couture sur-mesure dont le savoir-faire artisanal méritait une présence digitale à la hauteur. La mission : concevoir une landing page qui reflète l'élégance de la marque, intègre les avis clients et convertit les visiteurs en prises de rendez-vous.

Nous avons développé une direction artistique couture — typographie serif raffinée, couleurs sobres et galerie immersive — pour que chaque visiteur ressente l'exigence du travail artisanal dès les premières secondes.`,
  descriptionEn: `Umel Couture is a bespoke couture house whose artisanal craftsmanship deserved a digital presence to match. The mission: design a landing page that reflects the brand's elegance, integrates client reviews and converts visitors into booked appointments.

We developed a couture-inspired art direction — refined serif typography, understated colors and an immersive gallery — so every visitor feels the rigor of the craftsmanship within the first few seconds.`,
  challenges: [
    "Traduire l'artisanat et l'élégance couture en expérience digitale",
    "Mettre en valeur des créations uniques avec un rendu visuel haut de gamme",
    "Intégrer les avis Google de façon naturelle et convaincante",
    "Générer des prises de rendez-vous depuis la page",
  ],
  challengesEn: [
    "Translate couture craftsmanship and elegance into a digital experience",
    "Showcase one-of-a-kind creations with a high-end visual finish",
    "Integrate Google reviews in a natural, convincing way",
    "Generate appointment bookings straight from the page",
  ],
  solutions: [
    "Direction artistique couture avec typographie serif et palette raffinée",
    "Galerie plein écran avec transitions fluides au scroll",
    "Bloc d'avis Google animé et intégré nativement dans la mise en page",
    "CTA personnalisé orienté prise de RDV, avec formulaire court",
  ],
  solutionsEn: [
    "Couture art direction with serif typography and a refined palette",
    "Full-screen gallery with smooth scroll transitions",
    "Animated Google reviews block natively embedded in the layout",
    "Custom appointment-focused CTA with a short form",
  ],
  technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  features: [
    "Landing page immersive et mémorable",
    "Direction artistique couture premium",
    "Galerie des créations plein écran",
    "Avis clients Google intégrés",
    "Formulaire de prise de rendez-vous",
    "Design entièrement responsive",
  ],
  featuresEn: [
    "Immersive, memorable landing page",
    "Premium couture art direction",
    "Full-screen gallery of creations",
    "Embedded Google client reviews",
    "Appointment booking form",
    "Fully responsive design",
  ],
  results: [
    { metric: "100%", label: "Identité visuelle forte", labelEn: "Strong visual identity" },
    { metric: "3s", label: "Temps de chargement", labelEn: "Load time" },
    { metric: "5★", label: "Avis Google affichés", labelEn: "Google reviews displayed" },
    { metric: "Mobile", label: "Experience optimisée", labelEn: "Optimized experience" },
  ],
};

export default function UmelProject() {
  const { t, lp } = useLang();
  return (
    <Layout>
      <SEO
        title="Umel Couture — Landing page premium"
        titleEn="Umel Couture — Premium Landing Page"
        description="Landing page premium pour Umel Couture, maison de couture sur-mesure. Direction artistique, galerie et prise de rendez-vous."
        descriptionEn="Premium landing page for Umel Couture, a bespoke couture house. Art direction, gallery and appointment booking."
        canonical="/portfolio/umel"
      />
      {/* Hero */}
      <section className="relative min-h-[50svh] sm:min-h-[60svh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to={lp("/portfolio")}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 sm:mb-12 text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("Retour au portfolio", "Back to portfolio")}
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {t(projectDetails.category, projectDetails.categoryEn)} · {projectDetails.year}
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {projectDetails.title}
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light mb-8 sm:mb-10 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t(projectDetails.subtitle, projectDetails.subtitleEn)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to={lp("/contact")}
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-wide uppercase overflow-hidden"
              >
                <span className="absolute inset-0 bg-white rounded-full" />
                <span className="absolute inset-0 bg-gradient-to-r from-neon-violet to-violet-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative text-background group-hover:text-white transition-colors duration-500">
                  {t("Démarrer un projet similaire", "Start a similar project")}
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-6 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img src={umelImg} alt="Umel Couture" loading="lazy" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t("À propos du", "About the")} <span className="font-medium text-gradient-neon">{t("projet", "project")}</span>
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t(projectDetails.description, projectDetails.descriptionEn)}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-light text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("Résultats", "Key")} <span className="font-medium text-gradient-neon">{t("obtenus", "results")}</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto">
            {projectDetails.results.map((result, index) => (
              <motion.div
                key={result.label}
                className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-light text-gradient-neon mb-1 sm:mb-2">{result.metric}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{t(result.label, result.labelEn)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg sm:text-xl font-light mb-4 sm:mb-6">{t("Défis", "Challenges")}</h3>
              <ul className="space-y-3 sm:space-y-4">
                {projectDetails.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                    <span className="text-xs font-medium text-foreground mt-0.5 sm:mt-1">{String(index + 1).padStart(2, "0")}</span>
                    <span>{t(challenge, projectDetails.challengesEn[index])}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg sm:text-xl font-light mb-4 sm:mb-6">Solutions</h3>
              <ul className="space-y-3 sm:space-y-4">
                {projectDetails.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                    <Check className="h-4 w-4 text-neon-violet mt-0.5 sm:mt-1 flex-shrink-0" />
                    <span>{t(solution, projectDetails.solutionsEn[index])}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-light text-center mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technologies <span className="font-medium text-gradient-neon">{t("utilisées", "used")}</span>
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {projectDetails.technologies.map((tech) => (
              <span key={tech} className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border border-white/10 bg-white/[0.02] text-muted-foreground">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-light text-center mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("Fonctionnalités", "Key")} <span className="font-medium text-gradient-neon">{t("clés", "features")}</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {projectDetails.features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/5 bg-white/[0.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Check className="h-4 w-4 text-neon-violet flex-shrink-0" />
                <span className="text-xs sm:text-sm">{t(feature, projectDetails.featuresEn[index])}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 sm:mb-6">{t("Votre projet", "Your project")}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6">
              {t("Un projet similaire en", "A similar project in")} <span className="font-medium text-gradient-neon">{t("tête ?", "mind?")}</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 px-2">
              {t(
                "Discutons ensemble de votre vision et donnons vie à votre image de marque.",
                "Let's talk about your vision and bring your brand image to life.",
              )}
            </p>
            <motion.a
              href={lp("/contact")}
              className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-wide uppercase overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-white rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-neon-violet to-violet-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-background group-hover:text-white transition-colors duration-500">{t("Démarrer un projet", "Start a project")}</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
