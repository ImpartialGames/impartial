import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Smartphone, Database, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Sites Web",
    description: "De la vitrine épurée au e-commerce, design premium, référencement optimisé et rendu performant.",
    href: "/services/web",
    tags: ["Landing", "E-commerce", "Motion"],
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Apps Mobiles",
    description: "Expériences natives iOS & Android, interfaces fluides, expérience intuitive, publication sur App Store et Google Store.",
    href: "/services/mobile",
    tags: ["iOS", "Android", "React Native"],
  },
  {
    icon: Database,
    number: "03",
    title: "Backoffice & Logiciel",
    description: "Dashboards et outils internes sur-mesure, UX pensée pour la productivité, scalable dès le premier jour.",
    href: "/services/backoffice",
    tags: ["Dashboard", "Auth", "API"],
  },
  {
    icon: Layers,
    number: "04",
    title: "Écosystème 360°",
    description: "Stratégie digitale complète, design system unifié, multi-plateformes, cohérence de bout en bout.",
    href: "/services/360",
    tags: ["Design System", "Multi-plateforme", "Stratégie"],
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#0E0B14" }}
    >
      {/* Dot grid background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(124,58,237,0.055) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Halos */}
      <span
        aria-hidden
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "-10%",
          right: "-15%",
          background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <span
        aria-hidden
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: "-5%",
          left: "-12%",
          background: "radial-gradient(circle, rgba(167,139,250,0.14) 0%, transparent 65%)",
          filter: "blur(55px)",
        }}
      />

      {/* Déco { } brackets */}
      <div
        aria-hidden
        className="absolute top-16 right-8 font-mono text-[140px] text-white/[0.025] select-none pointer-events-none leading-none hidden lg:block"
      >
        {"{"}
      </div>
      <div
        aria-hidden
        className="absolute bottom-14 left-6 font-mono text-[90px] text-white/[0.022] select-none pointer-events-none leading-none hidden lg:block"
      >
        {"}"}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="section-label-dark justify-center mb-6">Services</div>
          <h2 className="text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-white mb-6">
            <span className="block prisme-display">L'ensemble de la</span>
            <span className="block prisme-italic-grad">chaîne digitale.</span>
          </h2>
          <p className="text-white/55 text-base md:text-lg leading-relaxed">
            Du concept à la production, chaque discipline maîtrisée, pour des livrables à la hauteur de votre ambition.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={s.href}
                className="group relative flex flex-col h-full p-9 rounded-[28px] bg-white/[0.045] border border-white/[0.09] hover:border-[#7C3AED]/50 hover:bg-white/[0.07] hover:-translate-y-1 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_28px_60px_-20px_rgba(124,58,237,0.25)] transition-all duration-500 overflow-hidden"
              >
                {/* Numéro en filigrane */}
                <span
                  className="absolute top-5 right-7 font-serif text-[56px] leading-none font-light select-none pointer-events-none"
                  style={{
                    background: "var(--prisme-gradient)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: 0.18,
                  }}
                >
                  {s.number}
                </span>

                {/* Icône */}
                <div className="w-12 h-12 rounded-2xl bg-white/[0.08] flex items-center justify-center mb-7 group-hover:scale-110 group-hover:bg-[#7C3AED]/20 transition-all duration-300">
                  <s.icon className="h-5 w-5 text-[#A78BFA]" />
                </div>

                <h3 className="font-syne font-bold text-[22px] md:text-[26px] text-white mb-3 leading-tight tracking-tight">
                  {s.title}
                </h3>
                <p className="text-[15px] text-white/55 leading-relaxed flex-1 mb-6">
                  {s.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-white/[0.07] border border-white/[0.10] text-white/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#A78BFA] group-hover:gap-3 transition-all duration-300">
                  <span>Découvrir</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
