import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ArrowLeft, ExternalLink, Check, Database, LineChart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import altarysImg from "@/assets/portfolio/altarys-logo.webp";
import { useLang } from "@/contexts/LanguageContext";
const projectDetails = {
  title: "Altarys Group",
  subtitle: "Plateforme DeFi et RWA avec dashboard administratif complet",
  subtitleEn: "DeFi and RWA platform with a complete admin dashboard",
  category: "Backoffice",
  categoryEn: "Back office",
  client: "Altarys Group",
  year: "2025",
  duration: "8 semaines",
  url: "https://altarys-group.fr/",
  description: `Altarys Group accompagne les professionnels de la finance dans leur transition vers l'écosystème DeFi et les actifs tokenisés (RWA). Le projet nécessitait une plateforme complète combinant un site vitrine informatif et un dashboard de gestion avancé.

L'interface a été conçue pour simplifier des concepts financiers complexes tout en maintenant un niveau de professionnalisme adapté au secteur. Le dashboard offre une vue claire des opérations et permet une gestion fluide des différents services proposés.`,
  descriptionEn: `Altarys Group supports finance professionals in their transition to the DeFi ecosystem and tokenized real-world assets (RWA). The project required a complete platform combining an informative showcase website with an advanced management dashboard.

The interface was designed to simplify complex financial concepts while maintaining the level of professionalism the industry demands. The dashboard provides a clear view of operations and enables smooth management of the various services offered.`,
  challenges: ["Vulgariser des concepts DeFi complexes pour un public traditionnel", "Créer un dashboard intuitif pour la gestion multi-services", "Assurer la sécurité des données financières sensibles", "Intégrer des visualisations de données en temps réel"],
  challengesEn: ["Make complex DeFi concepts accessible to a traditional audience", "Create an intuitive dashboard for multi-service management", "Ensure the security of sensitive financial data", "Integrate real-time data visualizations"],
  solutions: ["Design épuré avec hiérarchie visuelle claire", "Architecture modulaire avec composants réutilisables", "Authentification sécurisée et gestion des rôles", "Graphiques interactifs avec mises à jour live"],
  solutionsEn: ["Clean design with a clear visual hierarchy", "Modular architecture with reusable components", "Secure authentication and role management", "Interactive charts with live updates"],
  technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Chart.js", "Framer Motion"],
  features: ["Dashboard administratif complet", "Gestion multi-utilisateurs", "Visualisation de données avancée", "Système de notifications", "Rapports automatisés", "Interface responsive"],
  featuresEn: ["Complete admin dashboard", "Multi-user management", "Advanced data visualization", "Notification system", "Automated reports", "Responsive interface"],
  results: [{
    metric: "+85%",
    label: "Efficacité opérationnelle",
    labelEn: "Operational efficiency"
  }, {
    metric: "50%",
    label: "Réduction temps admin",
    labelEn: "Less admin time"
  }, {
    metric: "99.9%",
    label: "Uptime garanti",
    labelEn: "Guaranteed uptime"
  }, {
    metric: "A+",
    label: "Score sécurité",
    labelEn: "Security score"
  }],
  dashboardFeatures: [{
    icon: Database,
    title: "Base de données",
    titleEn: "Database",
    description: "Gestion centralisée des données clients et transactions",
    descriptionEn: "Centralized management of client data and transactions"
  }, {
    icon: LineChart,
    title: "Analytics",
    titleEn: "Analytics",
    description: "Tableaux de bord avec métriques en temps réel",
    descriptionEn: "Dashboards with real-time metrics"
  }, {
    icon: Shield,
    title: "Sécurité",
    titleEn: "Security",
    description: "Authentification 2FA et chiffrement bout-en-bout",
    descriptionEn: "2FA authentication and end-to-end encryption"
  }]
};
export default function AltarysProject() {
  const { t, lp } = useLang();
  return <Layout>
      <SEO
        title="Altarys Group — Plateforme DeFi"
        titleEn="Altarys Group — DeFi Platform"
        description="Dashboard et plateforme DeFi pour Altarys Group. Interface intuitive, scalable et sécurisée."
        descriptionEn="DeFi platform and dashboard for Altarys Group. An intuitive, scalable and secure interface."
        canonical="/portfolio/altarys"
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
              <span className="absolute inset-0 bg-gradient-to-r from-neon-violet to-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

      {/* Dashboard Features */}
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
            {t("Fonctionnalités", "Back-office")} <span className="font-medium text-gradient-neon">{t("Backoffice", "features")}</span>
          </motion.h2>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {projectDetails.dashboardFeatures.map((feature, index) => <motion.div key={feature.title} className="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.02]" initial={{
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
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-neon-violet" />
                </div>
                <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">{t(feature.title, feature.titleEn)}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{t(feature.description, feature.descriptionEn)}</p>
              </motion.div>)}
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
              {t("Besoin d'un", "Need a")} <span className="font-medium text-gradient-neon">{t("backoffice", "tailor-made")}</span> {t("sur mesure ?", "back office?")}
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 px-2">
              {t(
                "Créons ensemble le dashboard parfait pour gérer votre activité.",
                "Let's build the perfect dashboard to manage your business.",
              )}
            </p>

            <motion.a href={lp("/contact")} className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-wide uppercase overflow-hidden" whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }}>
              <span className="absolute inset-0 bg-white rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-neon-violet to-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-background group-hover:text-white transition-colors duration-500">
                {t("Démarrer un projet", "Start a project")}
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>;
}