import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ArrowLeft, ExternalLink, Check, Trophy, Gift, Users2 } from "lucide-react";
import { motion } from "framer-motion";

import propheciaLogo from "@/assets/portfolio/prophecia-logo.webp";
import { useLang } from "@/contexts/LanguageContext";

const projectDetails = {
  title: "Guardian Of Prophecia",
  subtitle: "Plateforme gaming complète avec système de rewards et communauté",
  subtitleEn: "Complete gaming platform with a rewards system and community",
  category: "Écosystème 360°",
  categoryEn: "360° ecosystem",
  client: "Guardian Of Prophecia",
  year: "2024",
  duration: "12 semaines",
  url: "https://goprophecia.gg?inviteCode=YANNI-DZ94",
  description: `Guardian Of Prophecia est une plateforme gaming innovante qui combine communauté, rewards et expérience immersive. Le projet nécessitait un écosystème complet incluant site web, système d'invitation, gestion des récompenses et intégrations Web3.

L'objectif était de créer une expérience gaming haut de gamme qui engage les joueurs et les récompense pour leur participation active à la communauté. L'interface devait être à la fois spectaculaire et fonctionnelle, avec des animations fluides et une navigation intuitive.`,
  descriptionEn: `Guardian Of Prophecia is an innovative gaming platform combining community, rewards and an immersive experience. The project required a complete ecosystem including a website, an invitation system, rewards management and Web3 integrations.

The goal was to create a high-end gaming experience that engages players and rewards them for actively taking part in the community. The interface had to be both spectacular and functional, with smooth animations and intuitive navigation.`,
  challenges: [
    "Créer une expérience gaming immersive et engageante",
    "Développer un système d'invitation et de rewards robuste",
    "Intégrer des fonctionnalités Web3 pour les récompenses",
    "Gérer une communauté active avec des fonctionnalités sociales",
  ],
  challengesEn: [
    "Create an immersive, engaging gaming experience",
    "Build a robust invitation and rewards system",
    "Integrate Web3 features for the rewards",
    "Manage an active community with social features",
  ],
  solutions: [
    "Interface gaming avec effets visuels premium",
    "Architecture backend scalable pour le système de points",
    "Smart contracts pour les rewards tokenisés",
    "Système de gamification avec leaderboards et achievements",
  ],
  solutionsEn: [
    "Gaming interface with premium visual effects",
    "Scalable backend architecture for the points system",
    "Smart contracts for tokenized rewards",
    "Gamification system with leaderboards and achievements",
  ],
  technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Web3.js", "Socket.io", "Redis"],
  features: [
    "Système d'invitation viral",
    "Programme de rewards",
    "Leaderboards temps réel",
    "Profils utilisateurs complets",
    "Intégration Web3",
    "Chat communautaire",
  ],
  featuresEn: [
    "Viral invitation system",
    "Rewards program",
    "Real-time leaderboards",
    "Complete user profiles",
    "Web3 integration",
    "Community chat",
  ],
  gamingFeatures: [
    { icon: Trophy, title: "Compétitions", titleEn: "Competitions", description: "Tournois et classements pour les meilleurs joueurs", descriptionEn: "Tournaments and rankings for top players" },
    { icon: Gift, title: "Rewards", titleEn: "Rewards", description: "Système de récompenses tokenisées et exclusives", descriptionEn: "Exclusive, tokenized rewards system" },
    { icon: Users2, title: "Communauté", titleEn: "Community", description: "Espaces sociaux pour connecter les joueurs", descriptionEn: "Social spaces to connect players" },
  ],
};

export default function PropheciaProject() {
  const { t, lp } = useLang();
  return (
    <Layout>
      <SEO
        title="Guardian of Prophecia — Gaming"
        titleEn="Guardian of Prophecia — Gaming"
        description="Plateforme gaming avec système de rewards pour Guardian Of Prophecia. Expérience immersive Web3 et communauté engagée."
        descriptionEn="Gaming platform with a rewards system for Guardian Of Prophecia. Immersive Web3 experience and an engaged community."
        canonical="/portfolio/prophecia"
      />
      {/* Hero Section - Refined */}
      <section className="relative min-h-[50svh] sm:min-h-[60svh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Back Link */}
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

            <motion.a
              href={projectDetails.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-wide uppercase overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-white rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-neon-violet to-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-background group-hover:text-white transition-colors duration-500">
                {t("Visiter la plateforme", "Visit the platform")}
              </span>
              <ExternalLink className="relative h-3.5 w-3.5 sm:h-4 sm:w-4 text-background group-hover:text-white transition-colors duration-500" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
              <img
                src={propheciaLogo}
                alt={projectDetails.title}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
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

      {/* Gaming Features */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-light text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("Expérience", "Gaming")} <span className="font-medium text-gradient-neon">{t("Gaming", "experience")}</span>
          </motion.h2>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {projectDetails.gamingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-neon-violet" />
                </div>
                <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">{t(feature.title, feature.titleEn)}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{t(feature.description, feature.descriptionEn)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
            {/* Challenges */}
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
                    <span className="text-xs font-medium text-foreground mt-0.5 sm:mt-1">{String(index + 1).padStart(2, '0')}</span>
                    <span>{t(challenge, projectDetails.challengesEn[index])}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
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
            {t("Stack", "Technical")} <span className="font-medium text-gradient-neon">{t("technique", "stack")}</span>
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {projectDetails.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border border-white/10 bg-white/[0.02] text-muted-foreground"
              >
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
              {t("Un projet", "A")} <span className="font-medium text-gradient-neon">gaming</span> {t("en vue ?", "project on the horizon?")}
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 px-2">
              {t(
                "Créons ensemble une expérience gaming immersive et engageante.",
                "Let's build an immersive, engaging gaming experience together.",
              )}
            </p>

            <motion.a
              href={lp("/contact")}
              className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-wide uppercase overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-white rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-neon-violet to-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-background group-hover:text-white transition-colors duration-500">
                {t("Démarrer un projet", "Start a project")}
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
