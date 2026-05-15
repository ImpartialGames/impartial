import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { TiltCard, MagneticButton } from "@/components/wow";
import eclipsiaImg from "@/assets/portfolio/eclipsia.png";
import altarysImg from "@/assets/portfolio/altarys-logo.png";
import propheciaImg from "@/assets/portfolio/prophecia-logo.jpeg";

const projects = [
  {
    title: "Eclipsia",
    objective: "Site vitrine pour une agence de communication et marketing",
    role: "Design & Développement",
    result: "Image de marque forte et engageante",
    image: eclipsiaImg,
    url: "/portfolio/eclipsia",
    externalUrl: "https://eclipsiagence.fr",
    tags: ["Design", "Développement", "Communication"],
  },
  {
    title: "Altarys Group",
    objective: "Plateforme DeFi avec dashboard admin",
    role: "UI/UX & Développement",
    result: "Interface intuitive et scalable",
    image: altarysImg,
    url: "/portfolio/altarys",
    externalUrl: "https://altarys-group.fr/",
    tags: ["UI/UX", "Développement", "DeFi"],
  },
  {
    title: "Guardian Of Prophecia",
    objective: "Plateforme gaming avec rewards",
    role: "Design & Développement",
    result: "Communauté engagée",
    image: propheciaImg,
    url: "/portfolio/prophecia",
    externalUrl: "https://goprophecia.gg?inviteCode=YANNI-DZ94",
    tags: ["Design", "Développement", "Gaming"],
  },
];

export function RealisationsSection() {
  return (
    <section id="realisations" className="relative py-24 md:py-32 bg-[#F3EEFB]/30 overflow-hidden">
      {/* Halos */}
      <span className="prisme-halo-peach" style={{ top: "0%", right: "-8%" }} />
      <span className="prisme-halo-violet" style={{ bottom: "5%", left: "-10%" }} />
      <span className="prisme-halo-rose" style={{ top: "50%", left: "45%", opacity: 0.4 }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="section-label justify-center mb-6">Réalisations</div>
          <h2 className="font-serif text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-[#0E0B14] mb-6">
            Quelques projets{" "}
            <span className="prisme-italic-grad">qui parlent d'eux-mêmes.</span>
          </h2>
          <p className="text-[#6F6580] text-base md:text-lg leading-relaxed">
            Chaque réalisation illustre notre approche : design intentionnel, code solide, résultats mesurables.
          </p>
        </div>

        {/* Grille projets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard max={6} className="h-full rounded-[28px]">
                <div className="group h-full bg-white/85 rounded-[28px] border border-[#EEEAF4] overflow-hidden shadow-[0_12px_40px_-15px_rgba(124,58,237,0.10)] hover:shadow-[0_28px_60px_-20px_rgba(124,58,237,0.24)] hover:-translate-y-1 transition-all duration-500">

                  {/* Image */}
                  <div className="relative h-36 sm:h-44 md:h-48 overflow-hidden bg-[#F3EEFB]">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    {/* Overlay gradient prisme */}
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "linear-gradient(to top, rgba(124,58,237,0.55) 0%, transparent 60%)",
                      }}
                    />
                    {/* Tags flottants sur l'image au hover */}
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30 tracking-wide"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-7">
                    {/* Tags statiques */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.tags.map((t) => (
                        <span key={t} className="prisme-pill px-3 py-1 rounded-full text-[10px] font-medium tracking-wide">
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif text-[22px] text-[#0E0B14] mb-5 leading-tight">{p.title}</h3>

                    <dl className="space-y-2.5 mb-6">
                      <div className="text-[13.5px]">
                        <dt className="text-[#6F6580] inline">Objectif : </dt>
                        <dd className="text-[#0E0B14] inline">{p.objective}</dd>
                      </div>
                      <div className="text-[13.5px]">
                        <dt className="text-[#6F6580] inline">Rôle : </dt>
                        <dd className="text-[#0E0B14] inline">{p.role}</dd>
                      </div>
                      <div className="text-[13.5px]">
                        <dt className="text-[#6F6580] inline">Résultat : </dt>
                        <dd className="text-[#7C3AED] font-medium inline">{p.result}</dd>
                      </div>
                    </dl>

                    <div className="flex items-center gap-4 pt-5 border-t border-[#EEEAF4]">
                      <Link
                        to={p.url}
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#7C3AED] hover:gap-2.5 transition-all duration-200"
                      >
                        Voir le projet
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <a
                        href={p.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-[#6F6580] hover:text-[#7C3AED] transition-colors"
                        aria-label={`Visiter ${p.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <MagneticButton
            as={Link}
            to="/portfolio"
            className="btn-prisme inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium text-[15px]"
          >
            Voir toutes nos réalisations
            <ArrowRight className="h-4 w-4" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
