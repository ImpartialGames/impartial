import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import eclipsiaImg from "@/assets/portfolio/eclipsia.png";
import altarysImg from "@/assets/portfolio/altarys-logo.png";
import propheciaImg from "@/assets/portfolio/prophecia-logo.jpeg";

const projects = [
  {
    number: "01",
    title: "Eclipsia",
    context: "Agence de communication et marketing",
    stack: "Design · Développement",
    year: "2024",
    image: eclipsiaImg,
    url: "/portfolio/eclipsia",
    externalUrl: "https://eclipsiagence.fr",
  },
  {
    number: "02",
    title: "Altarys Group",
    context: "Plateforme DeFi avec dashboard admin",
    stack: "UI/UX · Développement",
    year: "2024",
    image: altarysImg,
    url: "/portfolio/altarys",
    externalUrl: "https://altarys-group.fr/",
  },
  {
    number: "03",
    title: "Guardian Of Prophecia",
    context: "Plateforme gaming avec système de rewards",
    stack: "Design · Développement",
    year: "2023",
    image: propheciaImg,
    url: "/portfolio/prophecia",
    externalUrl: "https://goprophecia.gg?inviteCode=YANNI-DZ94",
  },
  {
    number: "04",
    title: "ELEV8",
    context: "Application complète de coaching sportif",
    stack: "App mobile · SaaS",
    year: "2024",
    image: null,
    url: "/portfolio/elev8",
    externalUrl: "https://myelev8.app",
    badge: "Produit ImpartialGames",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const reduced = useReducedMotion();
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={project.url}
        className="group flex flex-col lg:flex-row items-start gap-0 lg:gap-16"
        style={{ flexDirection: isEven ? "row" : "row-reverse" }}
        aria-label={`Voir le projet ${project.title}`}
      >
        {/* Visual */}
        <div
          className="w-full lg:w-[55%] flex-shrink-0 overflow-hidden"
          style={{
            border: "1px solid var(--ig-border)",
            borderRadius: "6px",
            backgroundColor: "var(--ig-bg-alt)",
            aspectRatio: "16 / 10",
          }}
        >
          {project.image ? (
            <motion.img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover"
              whileHover={reduced ? undefined : { y: -4, scale: 1.01 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "block" }}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: "var(--ig-bg-alt)" }}
            >
              <span
                className="font-display text-[5rem] font-normal"
                style={{ color: "var(--ig-accent)", opacity: 0.18 }}
              >
                {project.title[0]}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center pt-6 lg:pt-0">
          {/* Number */}
          <p className="ig-label mb-5" style={{ letterSpacing: "0.1em" }}>
            {project.number}
          </p>

          {/* Title */}
          <h3
            className="font-display mb-4 transition-colors duration-200"
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--ig-ink)",
            }}
          >
            <span className="ig-link-hover group-hover:after:scale-x-100">
              {project.title}
            </span>
          </h3>

          {/* Context */}
          <p
            className="text-[0.9375rem] leading-[1.65] mb-6"
            style={{ color: "var(--ig-ink-muted)", maxWidth: "38ch" }}
          >
            {project.context}
          </p>

          {/* Metadata mono */}
          <div
            className="flex flex-wrap gap-x-6 gap-y-2 mb-8 pt-5"
            style={{ borderTop: "1px solid var(--ig-border)" }}
          >
            <span className="ig-label">{project.stack}</span>
            <span className="ig-label">{project.year}</span>
            {project.badge && (
              <span
                className="ig-label"
                style={{ color: "var(--ig-accent)" }}
              >
                {project.badge}
              </span>
            )}
          </div>

          {/* CTA */}
          <span
            className="inline-flex items-center gap-2 text-[13px] font-semibold transition-all duration-200 group-hover:gap-3"
            style={{ color: "var(--ig-accent)" }}
          >
            Voir le projet
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export function ProjetsSection() {
  return (
    <section
      id="projets"
      className="ig-section"
      style={{ backgroundColor: "var(--ig-bg)" }}
    >
      <div className="ig-container">
        {/* Section header */}
        <div className="mb-16" style={{ borderBottom: "1px solid var(--ig-border)", paddingBottom: "2rem" }}>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="ig-label mb-3">Réalisations</p>
              <h2
                className="font-display"
                style={{
                  fontSize: "var(--text-display)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  color: "var(--ig-ink)",
                }}
              >
                Ils nous ont{" "}
                <em style={{ fontStyle: "italic", color: "var(--ig-accent)" }}>
                  fait confiance.
                </em>
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="ig-label transition-colors duration-200 hover:opacity-70 flex-shrink-0"
              style={{ letterSpacing: "0.1em" }}
            >
              Voir tout →
            </Link>
          </div>
        </div>

        {/* Projects list — alternating */}
        <div className="flex flex-col gap-20 lg:gap-28">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
