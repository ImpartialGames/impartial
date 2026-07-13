import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Clock, Mail, MapPin, Route } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MagneticButton } from "@/components/wow";
import { CalendlyQuiz } from "@/components/CalendlyQuiz";
import { useLang } from "@/contexts/LanguageContext";

/** CTA final — bannière dégradée pleine largeur + barre de confiance (maquette agence). */
export function CTAFinal() {
  const [quizOpen, setQuizOpen] = useState(false);
  const { t, lp } = useLang();

  const trust = [
    {
      icon: Clock,
      title: t("Réponse en 24-48h", "Reply within 24-48h"),
      sub: t("On vous répond rapidement", "We get back to you fast"),
    },
    {
      icon: BadgeCheck,
      title: t("Devis gratuit", "Free quote"),
      sub: t("Sans engagement", "No commitment"),
    },
    {
      icon: MapPin,
      title: t("Montréal & Paris", "Montreal & Paris"),
      sub: t("France et Canada", "France and Canada"),
    },
    {
      icon: Route,
      title: t("Accompagnement", "Full support"),
      sub: t("De A à Z et au-delà", "From A to Z and beyond"),
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#05060E] overflow-hidden">
      <div className="w-full px-6 lg:px-12 xl:px-16 relative z-10 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Bannière dégradée */}
          {/* indigo-600 → violet-600 : garde un contraste AA avec le texte blanc */}
          <div className="relative rounded-[28px] sm:rounded-[32px] px-6 py-12 sm:px-12 md:px-16 md:py-16 overflow-hidden shadow-[0_30px_80px_-25px_rgba(99,102,241,0.5)] bg-gradient-to-br from-indigo-600 to-violet-600">
            <Sparkles count={18} color="#FFFFFF" />

            {/* reflets */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 80% at 15% 0%, rgba(255,255,255,0.16) 0%, transparent 60%)" }}
            />
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 50% 60% at 90% 110%, rgba(5,6,14,0.25) 0%, transparent 70%)" }}
            />

            <div className="relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
              <div className="flex-1">
                <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-white">
                  {t("Prêt à faire décoller votre projet ?", "Ready to launch your project?")}
                </h2>
                <p className="mt-4 text-[15px] md:text-[16.5px] text-white leading-relaxed max-w-2xl">
                  {t(
                    "Réservez un appel gratuit avec l'un de nos experts et parlons de votre projet. Réponse sous 24-48h, proposition claire et sans engagement.",
                    "Book a free call with one of our experts and let's talk about your project. Reply within 24-48h, clear proposal, no commitment.",
                  )}
                </p>
                <a
                  href="mailto:studio@impartialgames.com"
                  className="mt-5 inline-flex items-center gap-2 text-[13.5px] text-white/90 hover:text-white transition-colors duration-200"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  studio@impartialgames.com
                </a>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <MagneticButton
                  as="button"
                  onClick={() => setQuizOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#1E1B4B] font-semibold text-[15px] shadow-[0_12px_32px_-8px_rgba(5,6,14,0.4)] hover:shadow-[0_18px_44px_-10px_rgba(5,6,14,0.55)] transition-shadow duration-300"
                >
                  {t("Réserver un appel gratuit", "Book a free call")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </MagneticButton>
                <MagneticButton
                  as={Link}
                  to={lp("/contact")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/40 text-white font-medium text-[15px] hover:bg-white/10 hover:border-white/70 transition-all duration-300"
                >
                  {t("Écrire un message", "Send a message")}
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Barre de confiance */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mt-12 px-2">
            {trust.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3.5"
                >
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-300 shrink-0">
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[14px] font-semibold text-white">{item.title}</span>
                    <span className="mt-0.5 text-[12.5px] text-white/55">{item.sub}</span>
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {quizOpen && <CalendlyQuiz onClose={() => setQuizOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
