import { motion } from "framer-motion";
import { MessageSquare, Palette, Code, Rocket } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery",
    titleEn: "Discovery",
    description: "Écoute active, analyse des besoins et définition de la stratégie.",
    descriptionEn: "Active listening, needs analysis and strategy definition.",
    deliverable: "Cahier des charges",
    deliverableEn: "Project brief",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design",
    titleEn: "Design",
    description: "Création des maquettes UI/UX et validation du design system.",
    descriptionEn: "UI/UX mockups and design system validation.",
    deliverable: "Maquettes Figma",
    deliverableEn: "Figma mockups",
  },
  {
    icon: Code,
    number: "03",
    title: "Développement",
    titleEn: "Development",
    description: "Code propre, tests rigoureux et itérations continues.",
    descriptionEn: "Clean code, rigorous testing and continuous iterations.",
    deliverable: "Version beta",
    deliverableEn: "Beta release",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Lancement",
    titleEn: "Launch",
    description: "Déploiement, optimisation et suivi des performances.",
    descriptionEn: "Deployment, optimization and performance monitoring.",
    deliverable: "Produit live",
    deliverableEn: "Live product",
  },
];

export function MethodeSection() {
  const { t } = useLang();

  return (
    <section id="methode" className="relative py-24 md:py-32 bg-[#0E0B14] overflow-hidden">
      {/* Halos */}
      <span className="prisme-halo-peach" style={{ top: "0%", right: "-10%" }} />
      <span className="prisme-halo-violet" style={{ bottom: "0%", left: "-10%" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="section-label justify-center mb-6">{t("Méthode", "Method")}</div>
          <h2 className="font-serif text-[34px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-white/90 mb-6">
            <span className="block">{t("Un processus", "A proven")}</span>
            <span className="block prisme-italic-grad">{t("éprouvé.", "process.")}</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            {t(
              "Quatre étapes structurées, aucune improvisation, des études au lancement, tout est maîtrisé.",
              "Four structured steps, zero improvisation — from scoping to launch, everything under control."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative h-full p-8 rounded-[28px] bg-white/5 border border-white/10 shadow-[0_12px_40px_-15px_rgba(124,58,237,0.10)] hover:shadow-[0_24px_56px_-20px_rgba(124,58,237,0.22)] hover:-translate-y-1 transition-all duration-500">

                {/* Numéro filigrane gradient */}
                <span
                  className="absolute top-4 right-6 font-serif text-[64px] leading-none select-none pointer-events-none"
                  aria-hidden
                  style={{
                    background: "var(--prisme-gradient)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: 0.13,
                  }}
                >
                  {step.number}
                </span>

                {/* Icône */}
                <div className="relative w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_0_4px_rgba(124,58,237,0.06)]">
                  <step.icon className="h-5 w-5 text-[#7C3AED]" />
                </div>

                <h3 className="font-serif text-[20px] text-white/90 mb-2.5 leading-tight">{t(step.title, step.titleEn)}</h3>
                <p className="text-[14px] text-white/60 mb-6 leading-relaxed">{t(step.description, step.descriptionEn)}</p>

                {/* Livrable */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10">
                  <span className="text-[10px] font-medium text-white/50 tracking-wide">{t("Livrable", "Deliverable")}</span>
                  <span className="w-px h-3 bg-white/20" />
                  <span className="text-[11px] font-semibold text-[#A78BFA]">{t(step.deliverable, step.deliverableEn)}</span>
                </div>
              </div>

              {/* Connecteur pointillé prisme */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 -translate-y-1/2"
                  style={{
                    backgroundImage: "linear-gradient(to right, #A78BFA 50%, transparent 50%)",
                    backgroundSize: "8px 2px",
                    backgroundRepeat: "repeat-x",
                    opacity: 0.6,
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
