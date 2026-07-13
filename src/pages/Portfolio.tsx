import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { MagneticButton, RevealText } from "@/components/wow";
import { useLang } from "@/contexts/LanguageContext";

import eclipsiaImg  from "@/assets/portfolio/eclipsia.webp";
import altarysImg   from "@/assets/portfolio/altarys-logo.webp";
import propheciaImg from "@/assets/portfolio/prophecia-logo.webp";
import elev8Img     from "@/assets/portfolio/elev8.webp";
import mbaImg       from "@/assets/portfolio/mba.webp";
import fitbyvalImg  from "@/assets/portfolio/fitbyval.webp";
import umelImg      from "@/assets/portfolio/umel.webp";
import valoraImg    from "@/assets/portfolio/valora.webp";

/* ─── Données ─────────────────────────────────────────────── */

interface Project {
  id: number;
  title: string;
  category: "web" | "mobile" | "backoffice" | "360";
  description: string;
  descriptionEn: string;
  image: string;
  tags: string[];
  year: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Eclipsia",
    category: "web",
    description: "Site vitrine pour une agence de communication et marketing. Design percutant et image de marque forte.",
    descriptionEn: "Showcase website for a communication and marketing agency. Striking design and a strong brand image.",
    image: eclipsiaImg,
    tags: ["HTML/CSS", "JavaScript", "Communication"],
    year: "2026",
    url: "/portfolio/eclipsia",
  },
  {
    id: 2,
    title: "Altarys Group",
    category: "backoffice",
    description: "Plateforme DeFi et RWA avec dashboard administratif complet. Interface intuitive pour la gestion financière.",
    descriptionEn: "DeFi and RWA platform with a complete admin dashboard. Intuitive interface for financial management.",
    image: altarysImg,
    tags: ["Dashboard", "DeFi", "Finance", "TypeScript"],
    year: "2025",
    url: "/portfolio/altarys",
  },
  {
    id: 3,
    title: "Guardian Of Prophecia",
    category: "360",
    description: "Plateforme gaming complète avec système d'invitation, rewards et communauté. Expérience immersive Web3.",
    descriptionEn: "Complete gaming platform with invitation system, rewards and community. Immersive Web3 experience.",
    image: propheciaImg,
    tags: ["Gaming", "Web3", "Community", "Full Stack"],
    year: "2024",
    url: "/portfolio/prophecia",
  },
  {
    id: 4,
    title: "ELEV8",
    category: "mobile",
    description: "Application de coaching sportif opérée par le studio. Programmes, suivi des athlètes et abonnements, sur iOS et Android.",
    descriptionEn: "Sports coaching app operated by the studio. Programs, athlete tracking and subscriptions, on iOS and Android.",
    image: elev8Img,
    tags: ["SaaS", "iOS & Android", "Coaching"],
    year: "2026",
    url: "/portfolio/elev8",
  },
  {
    id: 5,
    title: "MBA",
    category: "backoffice",
    description: "Back-office tout-en-un pour TPE/PME. Facturation, gestion clients et pilotage d'activité pour plus de 20 secteurs.",
    descriptionEn: "All-in-one back office for small businesses. Invoicing, client management and business tracking across 20+ industries.",
    image: mbaImg,
    tags: ["Dashboard", "SaaS", "PME"],
    year: "2026",
    url: "/portfolio/mba",
  },
  {
    id: 6,
    title: "Fitbyval",
    category: "web",
    description: "Page de vente pour une coach sportive. Parcours de conversion optimisé : +60 % de réservations.",
    descriptionEn: "Sales page for a fitness coach. Optimized conversion funnel: +60% bookings.",
    image: fitbyvalImg,
    tags: ["Landing", "Conversion", "Sport"],
    year: "2026",
    url: "/portfolio/fitbyval",
  },
  {
    id: 7,
    title: "Umel Couture",
    category: "web",
    description: "Landing page éditoriale pour une maison de couture. Identité visuelle forte et avis Google intégrés.",
    descriptionEn: "Editorial landing page for a couture house. Strong visual identity with integrated Google reviews.",
    image: umelImg,
    tags: ["Landing", "Mode", "Éditorial"],
    year: "2026",
    url: "/portfolio/umel",
  },
  {
    id: 8,
    title: "Valora",
    category: "web",
    description: "Cercle privé en ligne, sur invitation uniquement. Application web sur-mesure, sécurisée et performante.",
    descriptionEn: "Invitation-only private members club. Custom web application, secure and high-performing.",
    image: valoraImg,
    tags: ["Cercle privé", "Web app", "Sécurité"],
    year: "2026",
    url: "/portfolio/valora",
  },
];

const categories = [
  { id: "all",       name: "Tous",       nameEn: "All" },
  { id: "web",       name: "Web",        nameEn: "Web" },
  { id: "mobile",    name: "Mobile",     nameEn: "Mobile" },
  { id: "backoffice",name: "Backoffice", nameEn: "Backoffice" },
  { id: "360",       name: "360°",       nameEn: "360°" },
];

const categoryLabel = (cat: string) =>
  cat === "360" ? "360°" : cat.charAt(0).toUpperCase() + cat.slice(1);

/* ─── Page ──────────────────────────────────────────────────── */

export default function Portfolio() {
  const { t, lp } = useLang();
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      <SEO
        title="Nos Réalisations"
        titleEn="Our Work"
        description="Découvrez nos projets web, mobile et logiciel pour des marques ambitieuses. Design intentionnel, résultats mesurables."
        descriptionEn="Explore our web, mobile and software projects for ambitious brands. Intentional design, measurable results."
        canonical="/portfolio"
      />

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[70svh] flex items-center overflow-hidden pt-24 pb-12">
        <span className="prisme-halo-violet" style={{ top: "-10%", right: "-6%" }} />
        <span className="prisme-halo-rose"   style={{ bottom: "-8%", left: "10%" }} />

        <div className="w-full px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label justify-center mb-6"
            >
              Portfolio
            </motion.div>

            <h1 className="font-serif text-[32px] sm:text-[48px] lg:text-[66px] leading-[0.97] tracking-[-0.03em] text-white">
              <RevealText by="word" stagger={0.06}>{t("Nos", "Our")}</RevealText>{" "}
              <span className="prisme-italic-grad prisme-shimmer">{t("réalisations.", "work.")}</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6 text-[17px] md:text-[19px] text-white/60 leading-[1.65] max-w-xl mx-auto"
            >
              {t(
                "Découvrez les projets que nous avons construits pour des marques ambitieuses, chaque réalisation une histoire de performance et de précision.",
                "Explore the projects we've built for ambitious brands, each one a story of performance and precision.",
              )}
            </motion.p>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-[5]"
          style={{ background: "linear-gradient(to bottom, transparent, #0A0E1A)" }}
        />
      </section>

      {/* ══════════════════════════════════════════
          2. FILTRES
      ══════════════════════════════════════════ */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#101433] text-white shadow-[0_4px_16px_rgba(99,102,241,0.25)]"
                    : "bg-white/[0.05] backdrop-blur-xl border border-white/10 text-white/60 hover:border-[rgba(99,102,241,0.35)] hover:text-[#818CF8]"
                }`}
              >
                {t(cat.name, cat.nameEn)}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. GRILLE PROJETS
      ══════════════════════════════════════════ */}
      <section className="relative py-10 md:py-16 overflow-hidden">
        <span className="prisme-halo-peach"  style={{ top: "0%", right: "-8%" }} />
        <span className="prisme-halo-violet" style={{ bottom: "0%", left: "-8%" }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={lp(project.url)}
                  className="block group"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="rounded-[24px] overflow-hidden bg-white/[0.05] backdrop-blur-xl border border-white/10 hover:border-[rgba(99,102,241,0.28)] hover:shadow-[0_12px_48px_-12px_rgba(99,102,241,0.35)] hover:-translate-y-1 transition-all duration-500">

                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#6366F1]/12">
                      <ImageWithSkeleton
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        containerClassName="w-full h-full"
                      />

                      {/* Overlay hover */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ background: "rgba(16,20,43,0.82)" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="flex items-center gap-2 text-[13px] font-medium text-white">
                          <Eye className="h-4 w-4" />
                          {t("Voir le projet", "View project")}
                        </div>
                      </motion.div>

                      {/* Badge catégorie */}
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide text-white"
                        style={{ background: "var(--prisme-gradient)" }}>
                        {categoryLabel(project.category)}
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-serif text-[18px] text-white leading-snug">{project.title}</h3>
                        <span className="text-[12px] text-[#9AA5D1] font-medium">{project.year}</span>
                      </div>

                      <p className="text-[13px] text-white/60 mb-4 line-clamp-2 leading-relaxed">
                        {t(project.description, project.descriptionEn)}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#6366F1]/12 text-[#818CF8] border border-[rgba(99,102,241,0.12)]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 text-[#9AA5D1]"
            >
              <p className="font-serif text-[22px] mb-2">{t("Aucun projet dans cette catégorie", "No projects in this category")}</p>
              <p className="text-sm">{t("Revenez bientôt, nous travaillons sur de nouvelles réalisations.", "Check back soon, we're working on new projects.")}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. CTA
      ══════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <span className="prisme-halo-violet" style={{ bottom: "-10%", left: "-8%" }} />
        <span className="prisme-halo-peach"  style={{ top: "-10%", right: "-8%" }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="relative bg-[#101433] rounded-[36px] p-12 md:p-20 text-center overflow-hidden">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 70% 50% at 20% 0%, rgba(99,102,241,0.30) 0%, transparent 70%)" }} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 40% at 85% 110%, rgba(240,175,200,0.18) 0%, transparent 70%)" }} />
              <div className="absolute inset-0 rounded-[36px] pointer-events-none"
                style={{
                  padding: "1.5px",
                  background: "var(--prisme-gradient)",
                  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  opacity: 0.5,
                }}
              />

              <div className="relative">
                <div className="section-label justify-center mb-8"
                  style={{ color: "#818CF8", borderColor: "rgba(99,102,241,0.25)", background: "rgba(99,102,241,0.12)" }}>
                  {t("Votre projet", "Your project")}
                </div>

                <h2 className="font-serif text-[28px] md:text-[46px] leading-[1.08] tracking-[-0.02em] text-white mb-5">
                  {t("Le prochain pourrait être", "The next one could be")}{" "}
                  <span className="prisme-italic-grad">{t("le vôtre.", "yours.")}</span>
                </h2>

                <p className="text-[#B4BCF5] text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                  {t(
                    "Discutons de votre vision et transformons-la en réalité digitale mémorable.",
                    "Let's talk about your vision and turn it into a memorable digital reality.",
                  )}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton
                    as="a"
                    href="https://calendly.com/yannis-bezriche/impartial-games"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-prisme inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium text-[15px]"
                  >
                    {t("Planifier un appel", "Book a call")}
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                  <MagneticButton
                    as={Link}
                    to={lp("/contact")}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 font-medium text-[15px] hover:border-white/50 hover:text-white transition-colors duration-200"
                  >
                    {t("Démarrer un projet", "Start a project")}
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
