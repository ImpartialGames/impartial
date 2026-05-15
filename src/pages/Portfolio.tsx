import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { MagneticButton, RevealText } from "@/components/wow";

import eclipsiaImg  from "@/assets/portfolio/eclipsia.png";
import altarysImg   from "@/assets/portfolio/altarys-logo.png";
import propheciaImg from "@/assets/portfolio/prophecia-logo.jpeg";

/* ─── Données ─────────────────────────────────────────────── */

interface Project {
  id: number;
  title: string;
  category: "web" | "mobile" | "backoffice" | "360";
  description: string;
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
    image: eclipsiaImg,
    tags: ["HTML/CSS", "JavaScript", "Communication"],
    year: "2025",
    url: "/portfolio/eclipsia",
  },
  {
    id: 2,
    title: "Altarys Group",
    category: "backoffice",
    description: "Plateforme DeFi et RWA avec dashboard administratif complet. Interface intuitive pour la gestion financière.",
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
    image: propheciaImg,
    tags: ["Gaming", "Web3", "Community", "Full Stack"],
    year: "2024",
    url: "/portfolio/prophecia",
  },
];

const categories = [
  { id: "all",       name: "Tous" },
  { id: "web",       name: "Web" },
  { id: "mobile",    name: "Mobile" },
  { id: "backoffice",name: "Backoffice" },
  { id: "360",       name: "360°" },
];

const categoryLabel = (cat: string) =>
  cat === "360" ? "360°" : cat.charAt(0).toUpperCase() + cat.slice(1);

/* ─── Page ──────────────────────────────────────────────────── */

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      <SEO
        title="Nos Réalisations"
        description="Découvrez nos projets web, mobile et logiciel pour des marques ambitieuses. Design intentionnel, résultats mesurables."
        canonical="/portfolio"
      />

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[70svh] flex items-center overflow-hidden pt-24 pb-12 bg-[#FBFAF7]">
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

            <h1 className="font-serif text-[32px] sm:text-[48px] lg:text-[66px] leading-[0.97] tracking-[-0.03em] text-[#0E0B14]">
              <RevealText by="word" stagger={0.06}>Nos</RevealText>{" "}
              <span className="prisme-italic-grad prisme-shimmer">réalisations.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6 text-[17px] md:text-[19px] text-[#6F6580] leading-[1.65] max-w-xl mx-auto"
            >
              Découvrez les projets que nous avons construits pour des marques ambitieuses, chaque réalisation une histoire de performance et de précision.
            </motion.p>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-[5]"
          style={{ background: "linear-gradient(to bottom, transparent, #FBFAF7)" }}
        />
      </section>

      {/* ══════════════════════════════════════════
          2. FILTRES
      ══════════════════════════════════════════ */}
      <section className="bg-[#FBFAF7] py-8">
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
                    ? "bg-[#1C0E42] text-white shadow-[0_4px_16px_rgba(124,58,237,0.25)]"
                    : "bg-white border border-[#EEEAF4] text-[#6F6580] hover:border-[rgba(124,58,237,0.35)] hover:text-[#7C3AED]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. GRILLE PROJETS
      ══════════════════════════════════════════ */}
      <section className="relative py-10 md:py-16 bg-[#FBFAF7] overflow-hidden">
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
                  to={project.url}
                  className="block group"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="rounded-[24px] overflow-hidden bg-white border border-[#EEEAF4] hover:border-[rgba(124,58,237,0.28)] hover:shadow-[0_12px_48px_rgba(124,58,237,0.10)] hover:-translate-y-1 transition-all duration-500">

                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#F3EEFB]">
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
                        style={{ background: "rgba(28,14,66,0.82)" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="flex items-center gap-2 text-[13px] font-medium text-white">
                          <Eye className="h-4 w-4" />
                          Voir le projet
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
                        <h3 className="font-serif text-[18px] text-[#0E0B14] leading-snug">{project.title}</h3>
                        <span className="text-[12px] text-[#9B8EC4] font-medium">{project.year}</span>
                      </div>

                      <p className="text-[13px] text-[#6F6580] mb-4 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#F3EEFB] text-[#7C3AED] border border-[rgba(124,58,237,0.12)]">
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
              className="text-center py-24 text-[#9B8EC4]"
            >
              <p className="font-serif text-[22px] mb-2">Aucun projet dans cette catégorie</p>
              <p className="text-sm">Revenez bientôt, nous travaillons sur de nouvelles réalisations.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. CTA
      ══════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-[#FBFAF7] overflow-hidden">
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
            <div className="relative bg-[#1C0E42] rounded-[36px] p-12 md:p-20 text-center overflow-hidden">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 70% 50% at 20% 0%, rgba(124,58,237,0.30) 0%, transparent 70%)" }} />
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
                  style={{ color: "#A78BFA", borderColor: "rgba(124,58,237,0.25)", background: "rgba(124,58,237,0.12)" }}>
                  Votre projet
                </div>

                <h2 className="font-serif text-[28px] md:text-[46px] leading-[1.08] tracking-[-0.02em] text-white mb-5">
                  Le prochain pourrait être{" "}
                  <span className="prisme-italic-grad">le vôtre.</span>
                </h2>

                <p className="text-[#B8A8D8] text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                  Discutons de votre vision et transformons-la en réalité digitale mémorable.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton
                    as="a"
                    href="https://calendly.com/yannis-bezriche/impartial-games"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-prisme inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium text-[15px]"
                  >
                    Planifier un appel
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                  <MagneticButton
                    as={Link}
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 font-medium text-[15px] hover:border-white/50 hover:text-white transition-colors duration-200"
                  >
                    Démarrer un projet
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
