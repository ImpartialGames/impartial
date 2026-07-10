import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import { motion } from "framer-motion";
import wecloseImg from "@/assets/portfolio/weclose-logo.webp";
import { useLang } from "@/contexts/LanguageContext";
import { SEO } from "@/components/SEO";
const projectDetails = {
  title: "We Close Agency",
  subtitle: "Site vitrine premium pour une agence de closers et setters",
  subtitleEn: "Premium showcase website for an agency of closers and setters",
  category: "Site Web",
  categoryEn: "Website",
  client: "We Close Agency",
  year: "2025",
  duration: "6 semaines",
  url: "https://wecloseagency.fr/",
  description: `We Close Agency est une agence spécialisée dans la mise en relation entre entreprises et professionnels de la vente (closers et setters). Le site devait refléter le professionnalisme et l'efficacité de leurs services tout en offrant une expérience utilisateur immersive.

Nous avons conçu une interface moderne avec un thème sombre et des accents dorés, créant une atmosphère premium et professionnelle. Les animations fluides et les transitions soignées renforcent l'image haut de gamme de l'agence.`,
  descriptionEn: `We Close Agency is an agency specializing in connecting businesses with sales professionals (closers and setters). The website had to reflect the professionalism and efficiency of their services while delivering an immersive user experience.

We designed a modern interface with a dark theme and golden accents, creating a premium, professional atmosphere. Smooth animations and refined transitions reinforce the agency's high-end image.`,
  challenges: ["Créer une identité visuelle distinctive et mémorable", "Optimiser les performances malgré les nombreuses animations", "Assurer une navigation intuitive sur tous les appareils", "Intégrer un système de réservation de rendez-vous fluide"],
  challengesEn: ["Create a distinctive, memorable visual identity", "Keep performance high despite the many animations", "Ensure intuitive navigation on every device", "Integrate a seamless appointment booking system"],
  solutions: ["Design noir et or avec effets de glow subtils", "Animations optimisées avec Framer Motion et lazy loading", "Interface responsive avec navigation adaptative", "Intégration Calendly pour la prise de rendez-vous"],
  solutionsEn: ["Black and gold design with subtle glow effects", "Animations optimized with Framer Motion and lazy loading", "Responsive interface with adaptive navigation", "Calendly integration for appointment booking"],
  technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Vite"],
  features: ["Animations fluides et immersives", "Design responsive premium", "Système de réservation intégré", "Optimisation SEO complète", "Performances optimales", "Interface utilisateur intuitive"],
  featuresEn: ["Smooth, immersive animations", "Premium responsive design", "Built-in booking system", "Full SEO optimization", "Optimal performance", "Intuitive user interface"],
  results: [{
    metric: "+70%",
    label: "Taux de conversion",
    labelEn: "Conversion rate"
  }, {
    metric: "2.5s",
    label: "Temps de chargement",
    labelEn: "Load time"
  }, {
    metric: "98%",
    label: "Score Lighthouse",
    labelEn: "Lighthouse score"
  }, {
    metric: "+150%",
    label: "Leads générés",
    labelEn: "Leads generated"
  }]
};
export default function WeCloseProject() {
  const { t, lp } = useLang();
  return <Layout>
      <SEO
        title="We Close Agency — Site vitrine premium pour agence de closing"
        titleEn="We Close Agency — Premium website for a closing agency"
        description="Étude de cas : site vitrine noir et or pour We Close Agency, animations Framer Motion, réservation Calendly intégrée et SEO complet."
        descriptionEn="Case study: black-and-gold showcase website for We Close Agency, Framer Motion animations, built-in Calendly booking and full SEO."
        canonical="/portfolio/weclose"
      />
      {/* Hero Section - Refined */}
      <section className="relative min-h-[50svh] sm:min-h-[60svh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Back Link */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }}>
            <Link to={lp("/portfolio")} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 sm:mb-12 text-sm">
              <ArrowLeft className="h-4 w-4" />
              {t("Retour au portfolio", "Back to portfolio")}
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center">
            <motion.p className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-6 sm:mb-8" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.1
          }}>
              {t(projectDetails.category, projectDetails.categoryEn)} · {projectDetails.year}
            </motion.p>

            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 tracking-tight" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              {projectDetails.title}
            </motion.h1>

            <motion.p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light mb-8 sm:mb-10 px-2" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }}>
              {t(projectDetails.subtitle, projectDetails.subtitleEn)}
            </motion.p>

            <motion.a href={projectDetails.url} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-wide uppercase overflow-hidden" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }}>
              <span className="absolute inset-0 bg-white rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-neon-violet to-violet-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-background group-hover:text-white transition-colors duration-500">
                {t("Visiter le site", "Visit the website")}
              </span>
              <ExternalLink className="relative h-3.5 w-3.5 sm:h-4 sm:w-4 text-background group-hover:text-white transition-colors duration-500" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Project Image */}
      

      {/* Description */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }}>
              {t("À propos du", "About the")} <span className="font-medium text-gradient-neon">{t("projet", "project")}</span>
            </motion.h2>
            <motion.p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} viewport={{
            once: true
          }}>
              {t(projectDetails.description, projectDetails.descriptionEn)}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 className="text-xl sm:text-2xl md:text-3xl font-light text-center mb-8 sm:mb-12" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            {t("Résultats", "Key")} <span className="font-medium text-gradient-neon">{t("obtenus", "results")}</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto">
            {projectDetails.results.map((result, index) => <motion.div key={result.label} className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.02]" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-light text-gradient-neon mb-1 sm:mb-2">
                  {result.metric}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {t(result.label, result.labelEn)}
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
            {/* Challenges */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }}>
              <h3 className="text-lg sm:text-xl font-light mb-4 sm:mb-6">{t("Défis", "Challenges")}</h3>
              <ul className="space-y-3 sm:space-y-4">
                {projectDetails.challenges.map((challenge, index) => <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                    <span className="text-xs font-medium text-foreground mt-0.5 sm:mt-1">{String(index + 1).padStart(2, '0')}</span>
                    <span>{t(challenge, projectDetails.challengesEn[index])}</span>
                  </li>)}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }}>
              <h3 className="text-lg sm:text-xl font-light mb-4 sm:mb-6">Solutions</h3>
              <ul className="space-y-3 sm:space-y-4">
                {projectDetails.solutions.map((solution, index) => <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                    <Check className="h-4 w-4 text-neon-violet mt-0.5 sm:mt-1 flex-shrink-0" />
                    <span>{t(solution, projectDetails.solutionsEn[index])}</span>
                  </li>)}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 className="text-xl sm:text-2xl md:text-3xl font-light text-center mb-8 sm:mb-10" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            Technologies <span className="font-medium text-gradient-neon">{t("utilisées", "used")}</span>
          </motion.h2>

          <motion.div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} viewport={{
          once: true
        }}>
            {projectDetails.technologies.map(tech => <span key={tech} className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border border-white/10 bg-white/[0.02] text-muted-foreground">
                {tech}
              </span>)}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 className="text-xl sm:text-2xl md:text-3xl font-light text-center mb-8 sm:mb-10" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            {t("Fonctionnalités", "Key")} <span className="font-medium text-gradient-neon">{t("clés", "features")}</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {projectDetails.features.map((feature, index) => <motion.div key={feature} className="flex items-center gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/5 bg-white/[0.02]" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.05
          }} viewport={{
            once: true
          }}>
                <Check className="h-4 w-4 text-neon-violet flex-shrink-0" />
                <span className="text-xs sm:text-sm">{t(feature, projectDetails.featuresEn[index])}</span>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div className="text-center max-w-2xl mx-auto" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 sm:mb-6">{t("Votre projet", "Your project")}</p>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6">
              {t("Un projet similaire en", "A similar project in")} <span className="font-medium text-gradient-neon">{t("tête ?", "mind?")}</span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 px-2">
              {t(
                "Discutons ensemble de votre vision et créons votre site web premium.",
                "Let's talk about your vision and build your premium website.",
              )}
            </p>

            <motion.a href={lp("/contact")} className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-wide uppercase overflow-hidden" whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }}>
              <span className="absolute inset-0 bg-white rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-neon-violet to-violet-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-background group-hover:text-white transition-colors duration-500">
                {t("Démarrer un projet", "Start a project")}
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>;
}