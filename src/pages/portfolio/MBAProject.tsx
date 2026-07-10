import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";
import mbaImg from "@/assets/portfolio/mba.webp";
import { useLang } from "@/contexts/LanguageContext";

const projectDetails = {
  title: "MBA",
  subtitle: "Back-office SaaS pour TPE et PME, opéré par ImpartialGames",
  subtitleEn: "Back-office SaaS for small and medium businesses, operated by ImpartialGames",
  category: "Back-office SaaS",
  categoryEn: "Back-office SaaS",
  client: "ImpartialGames",
  year: "2024",
  duration: "5 mois",
  description: `MBA est un produit SaaS conçu, développé et opéré par ImpartialGames pour aider les TPE et PME à centraliser leur gestion opérationnelle : clients, facturation, planning et reporting — dans une seule interface pensée pour aller à l'essentiel.

Aujourd'hui disponible dans 20+ secteurs d'activité, MBA remplace des dizaines d'outils disparates (Excel, email, tableaux papier) par une plateforme unifiée, accessible depuis le bureau ou le mobile. Comme ELEV8, c'est un produit que nous exploitons nous-mêmes — avec toute la responsabilité que cela implique.`,
  descriptionEn: `MBA is a SaaS product designed, built and operated by ImpartialGames to help small and medium businesses centralize their day-to-day operations: clients, invoicing, scheduling and reporting — in a single interface built to keep things simple.

Now available across 20+ industries, MBA replaces dozens of scattered tools (Excel, email, paper charts) with a unified platform, accessible from desktop or mobile. Like ELEV8, it's a product we operate ourselves — with all the accountability that entails.`,
  challenges: [
    "Couvrir 20+ secteurs d'activité avec une seule interface cohérente",
    "Remplacer des outils disparates sans courbe d'apprentissage",
    "Garantir une prise en main rapide sans formation longue",
    "Construire un modèle économique SaaS pérenne dès le lancement",
  ],
  challengesEn: [
    "Cover 20+ industries with a single consistent interface",
    "Replace scattered tools without a learning curve",
    "Guarantee fast onboarding without lengthy training",
    "Build a sustainable SaaS business model from launch",
  ],
  solutions: [
    "Interface modulaire adaptable par secteur avec configuration sans code",
    "Onboarding guidé en moins de 15 minutes avec données de démonstration",
    "UX orientée efficacité : raccourcis, actions rapides, flux sans friction",
    "Modèle d'abonnement mensuel à 150€ / 220 $CA avec facturation Stripe automatisée",
  ],
  solutionsEn: [
    "Modular interface adaptable per industry with no-code configuration",
    "Guided onboarding in under 15 minutes with demo data",
    "Efficiency-driven UX: shortcuts, quick actions, frictionless flows",
    "Monthly subscription model at 150€ / 220 $CA with automated Stripe billing",
  ],
  technologies: ["React", "TypeScript", "Supabase", "Stripe", "Node.js", "Tailwind CSS", "Vercel"],
  features: [
    "Gestion clients et contacts",
    "Facturation et devis intégrés",
    "Planning et calendrier",
    "Reporting et statistiques",
    "Interface multi-secteurs",
    "Facturation Stripe automatisée",
  ],
  featuresEn: [
    "Client and contact management",
    "Built-in invoicing and quotes",
    "Scheduling and calendar",
    "Reporting and statistics",
    "Multi-industry interface",
    "Automated Stripe billing",
  ],
  results: [
    { metric: "Live", label: "En production depuis 2024", labelEn: "In production since 2024" },
    { metric: "150€", label: "À partir de / mois", labelEn: "Starting from / month" },
    { metric: "20+", label: "Secteurs couverts", labelEn: "Industries covered" },
    { metric: "SaaS", label: "Produit ImpartialGames", labelEn: "ImpartialGames product" },
  ],
};

export default function MBAProject() {
  const { t, lp } = useLang();
  return (
    <Layout>
      <SEO
        title="MBA — Back-office SaaS pour TPE & PME"
        titleEn="MBA — Back-office SaaS for SMBs"
        description="MBA, back-office SaaS conçu et opéré par ImpartialGames pour les TPE et PME. Gestion clients, facturation, planning. À partir de 150€/mois."
        descriptionEn="MBA, the back-office SaaS designed and operated by ImpartialGames for small and medium businesses. Client management, invoicing, scheduling. From 150€/month."
        canonical="/portfolio/mba"
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
              {t(projectDetails.category, projectDetails.categoryEn)} · {projectDetails.year} · {t("Produit ImpartialGames", "ImpartialGames product")}
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
            <img src={mbaImg} alt="MBA" loading="lazy" className="w-full h-auto object-cover" />
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
                "On a fait MBA. On peut faire votre back-office ou votre SaaS métier.",
                "We built MBA. We can build your back office or vertical SaaS too.",
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
