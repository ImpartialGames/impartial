import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import propheciaLogo from "@/assets/portfolio/prophecia-logo.jpeg";

const project = {
  title: "Guardian Of Prophecia",
  subtitle: "Plateforme gaming avec système de rewards et communauté",
  category: "Écosystème 360°",
  client: "Guardian Of Prophecia",
  year: "2024",
  duration: "12 semaines",
  url: "https://goprophecia.gg?inviteCode=YANNI-DZ94",
  description: "Guardian Of Prophecia est une plateforme gaming qui combine communauté, rewards et expérience immersive. Le projet nécessitait un écosystème complet : site web, système d'invitation viral, gestion des récompenses et intégrations Web3. L'objectif était de créer une expérience qui engage les joueurs et les récompense pour leur participation active.",
  challenges: [
    "Créer une expérience gaming immersive sans sacrifier la performance",
    "Développer un système d'invitation et de rewards robuste et anti-fraude",
    "Intégrer des fonctionnalités Web3 accessibles pour tous les profils",
  ],
  solutions: [
    "Interface gaming avec animations ciblées et optimisées",
    "Architecture backend scalable avec Redis pour les classements temps réel",
    "Smart contracts simples pour les rewards, abstraits derrière une UX familière",
  ],
  stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Web3.js"],
};

const nav = {
  prev: { href: "/portfolio/altarys", label: "Altarys Group" },
  next: { href: "/portfolio/weclose", label: "We Close Agency" },
};

export default function PropheciaProject() {
  const reduced = useReducedMotion();

  return (
    <Layout>
      <SEO
        title="Guardian Of Prophecia — Gaming"
        description="Plateforme gaming avec système de rewards pour Guardian Of Prophecia. Expérience immersive et communauté engagée."
        canonical="/portfolio/prophecia"
      />

      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--ig-bg)",
          paddingTop: "clamp(6rem, 12vw, 9rem)",
          paddingBottom: "clamp(3rem, 6vw, 4rem)",
        }}
      >
        <div className="ig-container">
          <div style={{ borderTop: "1px solid var(--ig-border)", marginBottom: "2rem" }} />

          <Link
            to="/portfolio"
            className="ig-label inline-flex items-center gap-2 mb-8 transition-opacity duration-200 hover:opacity-60"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Tous les projets
          </Link>

          <p className="ig-label mb-5" style={{ letterSpacing: "0.1em" }}>
            PROJET — {project.category.toUpperCase()}
          </p>

          <div className="overflow-hidden mb-4">
            <motion.h1
              className="font-display"
              style={{
                fontSize: "var(--text-display)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "var(--ig-ink)",
              }}
              initial={reduced ? false : { y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              {project.title}
            </motion.h1>
          </div>

          <p className="text-[1rem] leading-[1.75]" style={{ color: "var(--ig-ink-muted)", maxWidth: "52ch" }}>
            {project.subtitle}
          </p>

          <div style={{ borderTop: "1px solid var(--ig-border)", marginTop: "2.5rem" }} />
        </div>
      </section>

      {/* Image */}
      <section style={{ backgroundColor: "var(--ig-bg-alt)" }}>
        <div className="ig-container py-10 lg:py-14">
          <div
            style={{
              border: "1px solid var(--ig-border)",
              borderRadius: "6px",
              overflow: "hidden",
              aspectRatio: "16 / 9",
              backgroundColor: "var(--ig-bg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={propheciaLogo}
              alt={`Projet ${project.title}`}
              className="max-h-full max-w-full object-contain"
              style={{ padding: "2rem" }}
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Métadonnées + description */}
      <section className="ig-section" style={{ backgroundColor: "var(--ig-bg)" }}>
        <div className="ig-container">
          <div
            className="flex flex-wrap gap-x-10 gap-y-4 mb-14 pb-10"
            style={{ borderBottom: "1px solid var(--ig-border)" }}
          >
            {[
              { label: "Client", value: project.client },
              { label: "Année", value: project.year },
              { label: "Durée", value: project.duration },
            ].map((meta) => (
              <div key={meta.label}>
                <p className="ig-label mb-1">{meta.label}</p>
                <p className="text-[0.9375rem]" style={{ color: "var(--ig-ink)", fontWeight: 500 }}>{meta.value}</p>
              </div>
            ))}
            <div>
              <p className="ig-label mb-1">Site</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[0.9375rem] transition-colors duration-200 hover:opacity-70"
                style={{ color: "var(--ig-accent)" }}
              >
                Visiter <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-[960px]">
            <div>
              <p className="ig-label mb-5">Le projet</p>
              <p className="text-[1rem] leading-[1.8]" style={{ color: "var(--ig-ink-muted)" }}>
                {project.description}
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <p className="ig-label mb-5">Défis</p>
                <ul className="flex flex-col gap-3">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="text-[0.9375rem] leading-[1.7] flex gap-3" style={{ color: "var(--ig-ink-muted)" }}>
                      <span style={{ color: "var(--ig-accent)", flexShrink: 0, paddingTop: "0.1rem" }}>—</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="ig-label mb-5">Solutions</p>
                <ul className="flex flex-col gap-3">
                  {project.solutions.map((s, i) => (
                    <li key={i} className="text-[0.9375rem] leading-[1.7] flex gap-3" style={{ color: "var(--ig-ink-muted)" }}>
                      <span style={{ color: "var(--ig-accent)", flexShrink: 0, paddingTop: "0.1rem" }}>—</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 pt-10 flex flex-wrap gap-2" style={{ borderTop: "1px solid var(--ig-border)" }}>
            <p className="ig-label mr-4 pt-1">Stack</p>
            {project.stack.map((tech) => (
              <span key={tech} className="prisme-pill">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section style={{ backgroundColor: "var(--ig-bg-alt)", padding: "3rem 0" }}>
        <div className="ig-container">
          <div style={{ borderTop: "1px solid var(--ig-border)", paddingTop: "2rem" }}>
            <div className="flex justify-between items-center">
              {nav.prev && (
                <Link to={nav.prev.href} className="ig-label inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-60">
                  <ArrowLeft className="h-3.5 w-3.5" /> {nav.prev.label}
                </Link>
              )}
              {nav.next && (
                <Link to={nav.next.href} className="ig-label inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-60">
                  {nav.next.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
