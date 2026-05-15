import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, Smartphone, LayoutDashboard, Layers, Grid2X2, Users, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GlowMenu, GlowMenuItem } from "@/components/ui/glow-menu";
import logoHero from "@/assets/logo-hero.png";

const glowNavItems: GlowMenuItem[] = [
  {
    icon: Globe,
    label: "Web",
    href: "/services/web",
    gradient: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.06) 50%, transparent 100%)",
    iconColor: "text-[#7C3AED]",
  },
  {
    icon: Smartphone,
    label: "Mobile",
    href: "/services/mobile",
    gradient: "radial-gradient(circle, rgba(167,139,250,0.20) 0%, rgba(167,139,250,0.06) 50%, transparent 100%)",
    iconColor: "text-[#A78BFA]",
  },
  {
    icon: LayoutDashboard,
    label: "Backoffice",
    href: "/services/backoffice",
    gradient: "radial-gradient(circle, rgba(240,175,200,0.22) 0%, rgba(240,175,200,0.07) 50%, transparent 100%)",
    iconColor: "text-[#C084A0]",
  },
  {
    icon: Layers,
    label: "360°",
    href: "/services/360",
    gradient: "radial-gradient(circle, rgba(255,185,150,0.22) 0%, rgba(255,185,150,0.07) 50%, transparent 100%)",
    iconColor: "text-[#D97B4F]",
  },
  {
    icon: Grid2X2,
    label: "Portfolio",
    href: "/portfolio",
    gradient: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.06) 50%, transparent 100%)",
    iconColor: "text-[#7C3AED]",
  },
  {
    icon: Users,
    label: "Studio",
    href: "/studio",
    gradient: "radial-gradient(circle, rgba(167,139,250,0.20) 0%, rgba(167,139,250,0.06) 50%, transparent 100%)",
    iconColor: "text-[#A78BFA]",
  },
  {
    icon: Mail,
    label: "Contact",
    href: "/contact",
    gradient: "radial-gradient(circle, rgba(240,175,200,0.22) 0%, rgba(240,175,200,0.07) 50%, transparent 100%)",
    iconColor: "text-[#C084A0]",
  },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trouve le label de l'item actif depuis le pathname
  const activeLabel =
    glowNavItems.find((item) => item.href === location.pathname)?.label ?? "";

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-md border-b border-white/20"
          : "border-b border-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <nav className="flex items-center justify-between h-[72px] max-w-[1600px] mx-auto">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="flex-shrink-0 h-9 w-9 rounded-full bg-[#0E0B14] border border-[rgba(124,58,237,0.3)] flex items-center justify-center overflow-hidden shadow-[0_0_12px_rgba(124,58,237,0.2)]">
              <img
                src={logoHero}
                alt="Impartial"
                className="h-7 w-7 object-contain"
                style={{ filter: "saturate(1.4) brightness(1.05)" }}
              />
            </div>
            <div className="flex flex-col leading-none gap-[3px]">
              <span className="font-syne text-[16px] font-black tracking-[-0.03em] text-[#0E0B14]">
                IMPARTIAL
              </span>
              <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-[#7C3AED]">
                Games
              </span>
            </div>
          </Link>

          {/* GlowMenu — nav centre */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <GlowMenu items={glowNavItems} activeItem={activeLabel} />
          </div>

          {/* CTA droite */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="https://calendly.com/yannis-bezriche/impartial-games"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-prisme inline-flex items-center gap-2 text-[13px] font-medium text-white px-5 py-2.5 rounded-full"
            >
              Planifier un appel
            </a>
          </div>

          {/* Burger mobile */}
          <button
            className="lg:hidden p-2 rounded-xl border border-[#EEEAF4] bg-[#FBFAF7]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="h-5 w-5 text-[#0E0B14]" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="h-5 w-5 text-[#0E0B14]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* Menu mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden pb-6"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-[#FBFAF7] rounded-2xl p-4 mt-2 border border-[#EEEAF4] shadow-[0_8px_32px_rgba(124,58,237,0.08)]">
                <div className="px-4 py-2 text-[#7C3AED] text-[10px] font-semibold uppercase tracking-[0.2em]">
                  Services
                </div>
                {glowNavItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] transition-colors ${
                      location.pathname === item.href
                        ? "bg-[#F3EEFB] text-[#7C3AED] font-medium"
                        : "text-[#0E0B14] hover:bg-[#F3EEFB]"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                ))}
                <div className="h-px my-3 bg-[#EEEAF4]" />
                {glowNavItems.slice(4).map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] transition-colors ${
                      location.pathname === item.href
                        ? "bg-[#F3EEFB] text-[#7C3AED] font-medium"
                        : "text-[#0E0B14] hover:bg-[#F3EEFB]"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4">
                  <a
                    href="https://calendly.com/yannis-bezriche/impartial-games"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-prisme block py-3 rounded-full text-white font-medium text-center text-[14px]"
                  >
                    Planifier un appel
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
