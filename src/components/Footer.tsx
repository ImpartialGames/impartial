import { type ComponentProps, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Cookie,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

/* ─── Données ─────────────────────────────────────────────────── */

const sections = [
  {
    label: "Expertises",
    links: [
      { title: "Sites Web",        href: "/services/web",        internal: true },
      { title: "Apps Mobiles",     href: "/services/mobile",     internal: true },
      { title: "Backoffice",       href: "/services/backoffice", internal: true },
      { title: "Écosystème 360°",  href: "/services/360",        internal: true },
    ],
  },
  {
    label: "Studio",
    links: [
      { title: "Notre vision", href: "/studio",    internal: true },
      { title: "Portfolio",    href: "/portfolio", internal: true },
      { title: "Contact",      href: "/contact",   internal: true },
    ],
  },
  {
    label: "Légal",
    links: [
      { title: "Mentions légales", href: "/mentions-legales",           internal: true },
      { title: "Confidentialité",  href: "/politique-confidentialite",  internal: true },
      { title: "CGU",              href: "/cgu",                        internal: true },
      { title: "CGV",              href: "/cgv",                        internal: true },
    ],
  },
  {
    label: "Réseaux",
    links: [
      { title: "Instagram", href: "https://instagram.com/impartialgames", icon: Instagram, internal: false },
      { title: "LinkedIn",  href: "https://linkedin.com/company/impartial-games", icon: Linkedin, internal: false },
      { title: "Twitter",   href: "https://twitter.com/impartialgames", icon: Twitter, internal: false },
    ],
  },
];

/* ─── AnimatedContainer (pattern du template) ─────────────────── */

type AnimatedContainerProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Footer ──────────────────────────────────────────────────── */

export function Footer() {
  const openCookieSettings = () => {
    localStorage.removeItem("cookie-consent");
    window.location.reload();
  };

  return (
    <footer className="relative w-full bg-[#1C0E42] text-[#9B8EC4] overflow-hidden rounded-t-[40px] md:rounded-t-[56px]">

      {/* Radial glow top — pattern du template adapté Prisme */}
      <div
        className="absolute top-0 left-0 right-0 h-[320px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 180px at 50% 0%, rgba(124,58,237,0.14) 0%, transparent 100%)",
        }}
      />

      {/* Blur line top — pattern du template */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/3 rounded-full blur-sm pointer-events-none"
        style={{ background: "var(--prisme-gradient)", opacity: 0.5 }}
      />
      {/* Hard gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "var(--prisme-gradient)", opacity: 0.25 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-10">

        {/* Grille principale : brand (1/3) + liens (2/3) */}
        <div className="grid gap-10 md:gap-12 xl:grid-cols-3 xl:gap-8">

          {/* Colonne marque */}
          <AnimatedContainer className="space-y-5" delay={0.05}>
            <Link to="/" className="inline-block">
              <span className="font-syne font-bold text-xl text-white tracking-tight">
                IMPARTIAL
              </span>
            </Link>
            <p className="text-[14px] leading-relaxed text-[#9B8EC4] max-w-xs">
              Studio digital spécialisé dans la création d'expériences web et mobiles immersives pour les marques ambitieuses.
            </p>
            <p className="text-[12px] text-[#7B6AAD]">Delaware, États-Unis</p>
            <a
              href="mailto:studio@impartialgames.com"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-[#A78BFA] hover:text-white hover:gap-3 transition-all duration-200"
            >
              studio@impartialgames.com
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </AnimatedContainer>

          {/* Colonnes liens */}
          <div className="xl:col-span-2 grid grid-cols-2 gap-8 md:grid-cols-4">
            {sections.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.08}>
                <div>
                  <h4 className="text-[10px] font-semibold mb-5 text-[#A78BFA] uppercase tracking-[0.22em]">
                    {section.label}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        {"internal" in link && link.internal ? (
                          <Link
                            to={link.href}
                            className="inline-flex items-center gap-1.5 text-[13.5px] text-[#9B8EC4] hover:text-white transition-colors duration-200"
                          >
                            {"icon" in link && link.icon && (
                              <link.icon className="h-3.5 w-3.5 shrink-0" />
                            )}
                            {link.title}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[13.5px] text-[#9B8EC4] hover:text-white transition-colors duration-200"
                          >
                            {"icon" in link && link.icon && (
                              <link.icon className="h-3.5 w-3.5 shrink-0" />
                            )}
                            {link.title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>

        {/* Bas de page */}
        <div
          className="mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-[12px] text-[#7B6AAD]">
            © {new Date().getFullYear()} IMPARTIAL GAMES. Tous droits réservés.
          </p>
          <button
            onClick={openCookieSettings}
            className="inline-flex items-center gap-1.5 text-[12px] text-[#7B6AAD] hover:text-white transition-colors duration-200"
          >
            <Cookie className="h-3 w-3" />
            Préférences cookies
          </button>
        </div>
      </div>
    </footer>
  );
}
