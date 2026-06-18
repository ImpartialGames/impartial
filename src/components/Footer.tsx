import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";

function useLocalTime(timezone: string) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: timezone,
        }).format(new Date())
      );
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, [timezone]);

  return time;
}

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/politique-confidentialite" },
  { label: "CGU", href: "/cgu" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/impartial-games" },
  { label: "Instagram", href: "https://instagram.com/impartialgames" },
];

export function Footer() {
  const { t } = useLang();
  const timeMontreal = useLocalTime("America/Toronto");
  const timeParis = useLocalTime("Europe/Paris");

  const openCookieSettings = () => {
    localStorage.removeItem("cookie-consent");
    window.location.reload();
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--ig-border)",
        backgroundColor: "var(--ig-bg)",
        color: "var(--ig-ink-muted)",
      }}
    >
      {/* Top band — email + CTA */}
      <div
        className="ig-container py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        style={{ borderBottom: "1px solid var(--ig-border)" }}
      >
        <div>
          <p className="ig-label mb-3">
            {t("Un projet ? On t'écoute.", "Got a project? We're listening.")}
          </p>
          <a
            href="mailto:studio@impartialgames.com"
            className="font-display text-[clamp(1.5rem,4vw,2.75rem)] leading-tight tracking-[-0.02em] transition-colors duration-200 hover:opacity-70"
            style={{ color: "var(--ig-ink)" }}
          >
            studio@impartialgames.com
          </a>
        </div>

        {/* Local times */}
        <div className="flex gap-8 flex-shrink-0">
          <div>
            <p className="ig-label mb-1">Montréal</p>
            <p
              className="font-mono text-[1.1rem] font-medium tabular-nums"
              style={{ color: "var(--ig-ink)" }}
              aria-live="polite"
            >
              {timeMontreal}
            </p>
          </div>
          <div>
            <p className="ig-label mb-1">Paris</p>
            <p
              className="font-mono text-[1.1rem] font-medium tabular-nums"
              style={{ color: "var(--ig-ink)" }}
              aria-live="polite"
            >
              {timeParis}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom band — minimal */}
      <div className="ig-container py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-6 flex-wrap">
          <Link
            to="/"
            className="font-display text-[15px] tracking-[-0.02em] transition-colors duration-200 hover:opacity-60"
            style={{ color: "var(--ig-ink)" }}
            aria-label="ImpartialGames — Accueil"
          >
            Impartial
          </Link>
          <span className="ig-label" aria-hidden>·</span>
          <span className="ig-label">Montréal · Paris</span>
          <span className="ig-label" aria-hidden>·</span>
          <span className="ig-label">
            © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-6 flex-wrap">
          {socialLinks.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ig-label transition-colors duration-200 hover:opacity-70"
              style={{ letterSpacing: "0.06em" }}
            >
              {s.label}
            </a>
          ))}
          {legalLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="ig-label transition-colors duration-200 hover:opacity-70"
              style={{ letterSpacing: "0.06em" }}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={openCookieSettings}
            className="ig-label transition-colors duration-200 hover:opacity-70"
            style={{ letterSpacing: "0.06em" }}
          >
            {t("Cookies", "Cookies")}
          </button>
        </div>
      </div>
    </footer>
  );
}
