import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const principes = [
  { number: "01", title: "Lisibilité",    titleEn: "Clarity",       description: "Clarté absolue. Chaque élément a sa raison d'être.",  descriptionEn: "Absolute clarity. Every element earns its place." },
  { number: "02", title: "Finition",      titleEn: "Polish",        description: "Le diable est dans les détails. Nous les soignons.", descriptionEn: "The devil is in the details. We sweat them." },
  { number: "03", title: "Performance",   titleEn: "Performance",   description: "Sites rapides à charger, fluides à naviguer.",       descriptionEn: "Fast to load, smooth to navigate." },
  { number: "04", title: "Motion",        titleEn: "Motion",        description: "Animations premium et haut de gamme.",               descriptionEn: "Premium, high-end animations." },
  { number: "05", title: "Accessibilité", titleEn: "Accessibility", description: "Utilisable par tous, sur tous les appareils.",       descriptionEn: "Usable by everyone, on every device." },
];

export function PrincipesSection() {
  const { t } = useLang();

  return (
    <section className="relative py-24 md:py-32 bg-[#0A0E1A] overflow-hidden">
      {/* Halos prisme */}
      <span className="prisme-halo-violet" style={{ top: "-5%", left: "-10%" }} />
      <span className="prisme-halo-peach"  style={{ top: "-5%", right: "-10%" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="section-label justify-center mb-6">Standards</div>
          <h2 className="font-serif text-[34px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-white/90 mb-6">
            <span className="block">{t("Ce qui fait", "What makes")}</span>
            <span className="block prisme-italic-grad">{t("la différence.", "the difference.")}</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            {t(
              "Des principes non-négociables qui guident chacune de nos réalisations.",
              "Non-negotiable principles that guide everything we ship."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {principes.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative h-full p-7 rounded-[28px] bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_12px_40px_-15px_rgba(99,102,241,0.10)] hover:shadow-[0_24px_56px_-20px_rgba(99,102,241,0.22)] hover:-translate-y-1 transition-all duration-500">

                {/* Numéro filigrane */}
                <span
                  className="absolute top-4 right-5 font-serif text-[52px] leading-none select-none pointer-events-none"
                  aria-hidden
                  style={{
                    background: "var(--prisme-gradient)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: 0.13,
                  }}
                >
                  {p.number}
                </span>

                <h3 className="font-serif text-[18px] text-white/90 mb-2.5 leading-tight">{t(p.title, p.titleEn)}</h3>
                <p className="text-[13px] text-white/60 leading-relaxed">{t(p.description, p.descriptionEn)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
