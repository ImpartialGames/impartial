import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const produits = [
  {
    name: "ELEV8",
    description: "SaaS coaching sportif",
    price: "À partir de 59 € / 87 $CA / mois",
    url: "https://myelev8.app",
    tag: "Live",
  },
  {
    name: "Prospectoss",
    description: "Lead Intel B2B",
    price: "À partir de 200 € / 293 $CA · Livraison 48h",
    url: "#",
    tag: "Live",
  },
  {
    name: "MBA",
    description: "Back-office TPE/PME",
    price: "À partir de 150 € / 220 $CA / mois · 20+ secteurs",
    url: "#",
    tag: "Live",
  },
  {
    name: "Guardian of Prophecia",
    description: "Jeu de stratégie Free-to-Play",
    price: "Bêta en cours",
    url: "https://goprophecia.gg",
    tag: "Bêta",
  },
];

export function EcosystemeSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#FBFAF7] dark:bg-[#120B24] overflow-hidden">
      <span className="prisme-halo-violet" style={{ top: "15%", right: "-10%" }} />
      <span className="prisme-halo-peach" style={{ bottom: "10%", left: "-8%" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="section-label justify-center mb-6">Nos produits</div>
          <h2 className="font-serif text-[38px] md:text-[58px] leading-[1.05] tracking-[-0.02em] text-[#0E0B14] dark:text-white/90 mb-6">
            <span className="block">On ne fait pas que builder.</span>
            <span className="block prisme-italic-grad">On opère.</span>
          </h2>
          <p className="text-[#6F6580] dark:text-white/60 text-base md:text-lg leading-relaxed">
            ELEV8, Prospectoss, MBA, Guardian of Prophecia. Quatre produits live, des milliers
            d&apos;utilisateurs. Ce qu&apos;on te construit, on sait exactement ce que ça coûte de
            le rater.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {produits.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url === "#" ? undefined : p.url}
              target={p.url !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group glass-card dark:!bg-white/5 dark:!border-white/10 p-6 rounded-2xl flex flex-col gap-3 transition-all ${
                p.url !== "#" ? "hover:shadow-lg cursor-pointer" : "cursor-default"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-syne font-black text-[15px] tracking-wide text-[#0E0B14] dark:text-white/90">
                  {p.name}
                </span>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20">
                  {p.tag}
                </span>
              </div>
              <p className="text-[13px] text-[#6F6580] dark:text-white/60 font-medium">{p.description}</p>
              <p className="text-[12px] text-[#0E0B14]/70 dark:text-white/50 leading-snug">{p.price}</p>
              {p.url !== "#" && (
                <div className="flex items-center gap-1 text-[11px] text-[#7C3AED] font-semibold mt-auto group-hover:gap-2 transition-all">
                  Voir le produit <ExternalLink className="h-3 w-3" />
                </div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
