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
    <section id="services" className="relative py-24 md:py-32 bg-[#FBFAF7] overflow-hidden">
      {/* Halos */}
      <span className="prisme-halo-rose" style={{ top: "5%", right: "-10%" }} />
      <span className="prisme-halo-violet" style={{ bottom: "10%", left: "-12%" }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="section-label justify-center mb-6">Services</div>
          <h2 className="font-serif text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-[#0E0B14] mb-6">
            L'ensemble de la{" "}
            <span className="prisme-italic-grad">chaîne digitale.</span>
          </h2>
          <p className="text-[#6F6580] text-base md:text-lg leading-relaxed">
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
                className="group relative flex flex-col h-full p-9 rounded-[28px] bg-white/85 border border-[#EEEAF4] shadow-[0_12px_40px_-15px_rgba(124,58,237,0.10)] hover:shadow-[0_28px_60px_-20px_rgba(124,58,237,0.22)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                {/* Numéro en filigrane */}
                <span
                  className="absolute top-5 right-7 font-serif text-[56px] leading-none font-light select-none pointer-events-none"
                  style={{
                    background: "var(--prisme-gradient)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: 0.12,
                  }}
                >
                  {s.number}
                </span>

                {/* Icône */}
                <div className="w-12 h-12 rounded-2xl bg-[#F3EEFB] flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="h-5 w-5 text-[#7C3AED]" />
                </div>

                <h3 className="font-serif text-[22px] md:text-[26px] text-[#0E0B14] mb-3 leading-tight tracking-tight">
                  {s.title}
                </h3>
                <p className="text-[15px] text-[#6F6580] leading-relaxed flex-1 mb-6">
                  {s.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {s.tags.map((t) => (
                    <span key={t} className="prisme-pill px-3 py-1 rounded-full text-[11px] font-medium tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#7C3AED] group-hover:gap-3 transition-all duration-300">
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
