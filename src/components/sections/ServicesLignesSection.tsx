import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const services = [
  {
    number: "01",
    title: "Sites Web",
    description:
      "De la vitrine épurée au e-commerce : design premium, référencement optimisé, code performant.",
    detail:
      "Landing pages, sites vitrines, e-commerce — livrés avec un score Lighthouse 95+ et un design qui fait la différence.",
    href: "/services/web",
    tags: ["Landing", "E-commerce", "Motion"],
  },
  {
    number: "02",
    title: "Apps Mobiles",
    description:
      "Expériences natives iOS & Android, interfaces fluides, publication sur App Store et Google Play.",
    detail:
      "React Native ou natif selon le besoin. UX pensée pour les vrais utilisateurs, pas les démos.",
    href: "/services/mobile",
    tags: ["iOS", "Android", "React Native"],
  },
  {
    number: "03",
    title: "Produits SaaS",
    description:
      "Backoffices, dashboards et logiciels sur-mesure — scalable dès le premier jour.",
    detail:
      "On conçoit et développe des outils que les équipes adorent utiliser. Architecture propre, évolutive, documentée.",
    href: "/services/backoffice",
    tags: ["Dashboard", "Auth", "API"],
  },
];

function ServiceLine({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const { t } = useLang();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        className="w-full text-left py-8 flex items-start justify-between gap-4 group transition-colors duration-200"
        style={{ borderTop: "1px solid var(--ig-border)" }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`service-detail-${index}`}
      >
        <div className="flex items-start gap-6 flex-1 min-w-0">
          {/* Number */}
          <span className="ig-label flex-shrink-0 pt-1" style={{ letterSpacing: "0.1em" }}>
            {service.number}
          </span>

          {/* Title + description */}
          <div className="flex-1 min-w-0">
            <h3
              className="font-display mb-2 transition-colors duration-200 group-hover:text-[var(--ig-accent)]"
              style={{
                fontSize: "var(--text-h3)",
                lineHeight: 1.2,
                letterSpacing: "-0.015em",
                color: "var(--ig-ink)",
              }}
            >
              {service.title}
            </h3>
            <p
              className="text-[0.9375rem] leading-[1.65]"
              style={{ color: "var(--ig-ink-muted)", maxWidth: "60ch" }}
            >
              {service.description}
            </p>
          </div>
        </div>

        {/* Arrow */}
        <span
          className="flex-shrink-0 mt-1 transition-all duration-300"
          style={{ color: "var(--ig-accent)" }}
          aria-hidden
        >
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "block" }}
          >
            <ArrowRight className="h-5 w-5" />
          </motion.span>
        </span>
      </button>

      {/* Expandable detail */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`service-detail-${index}`}
            key="content"
            initial={reduced ? undefined : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="pb-8 pl-[calc(1.5rem+1.5rem)] flex items-start justify-between gap-8 flex-wrap"
            >
              <div>
                <p
                  className="text-[0.9375rem] leading-[1.7] mb-5"
                  style={{ color: "var(--ig-ink)", maxWidth: "52ch" }}
                >
                  {service.detail}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="prisme-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to={service.href}
                className="btn-studio-outline text-[13px] px-5 py-2.5 flex-shrink-0"
              >
                {t("En savoir plus", "Learn more")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ServicesLignesSection() {
  const { t } = useLang();

  return (
    <section
      id="services"
      className="ig-section"
      style={{ backgroundColor: "var(--ig-bg-alt)" }}
    >
      <div className="ig-container">
        {/* Header */}
        <div className="mb-14">
          <h2
            className="font-display max-w-[16ch]"
            style={{
              fontSize: "var(--text-display)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "var(--ig-ink)",
            }}
          >
            {t("L'ensemble de la chaîne digitale.", "The full digital stack.")}
          </h2>
        </div>

        {/* Service lines */}
        <div>
          {services.map((service, index) => (
            <ServiceLine key={service.title} service={service} index={index} />
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: "1px solid var(--ig-border)" }} />
        </div>

        {/* CTA footer */}
        <div className="mt-12 flex items-center justify-between flex-wrap gap-4">
          <p
            className="text-[0.9375rem]"
            style={{ color: "var(--ig-ink-muted)" }}
          >
            {t(
              "Besoin d'un service complet ? On gère tout.",
              "Need the full package? We handle everything."
            )}
          </p>
          <Link
            to="/services/360"
            className="ig-label transition-colors duration-200 hover:opacity-70"
            style={{ letterSpacing: "0.1em" }}
          >
            {t("Écosystème 360°", "360° ecosystem")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
