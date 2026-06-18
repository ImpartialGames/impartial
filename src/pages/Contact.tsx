import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";
import { motion, useReducedMotion } from "framer-motion";
import { Loader2 } from "lucide-react";

function useLocalTime(timezone: string) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("fr-CA", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: timezone,
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30000);
    return () => clearInterval(id);
  }, [timezone]);
  return time;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.875rem 1rem",
  borderRadius: "4px",
  border: "1px solid var(--ig-border)",
  backgroundColor: "var(--ig-bg)",
  color: "var(--ig-ink)",
  fontSize: "0.9375rem",
  lineHeight: 1.6,
  outline: "none",
  transition: "border-color 0.2s",
};

export default function Contact() {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const reduced = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: searchParams.get("subject") ? `Sujet : ${decodeURIComponent(searchParams.get("subject")!)}` : "",
  });

  const [focused, setFocused] = useState<string | null>(null);

  const montrealTime = useLocalTime("America/Toronto");
  const parisTime = useLocalTime("Europe/Paris");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    toast({
      title: "Message envoyé",
      description: "On revient vers toi sous 24h.",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsLoading(false);
  };

  return (
    <Layout>
      <SEO
        title="Contact — ImpartialGames"
        description="Parlons de ton projet. Réponse sous 24h avec une proposition claire."
        canonical="/contact"
      />

      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--ig-bg)",
          paddingTop: "clamp(6rem, 12vw, 9rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
        }}
      >
        <div className="ig-container">
          <div style={{ borderTop: "1px solid var(--ig-border)", marginBottom: "2rem" }} />

          <p className="ig-label mb-6">Contact</p>

          <div className="overflow-hidden mb-4">
            <motion.h1
              className="font-display"
              style={{
                fontSize: "var(--text-hero)",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                color: "var(--ig-ink)",
              }}
              initial={reduced ? false : { y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              Parlons de{" "}
              <em style={{ fontStyle: "italic", color: "var(--ig-accent)" }}>ton projet.</em>
            </motion.h1>
          </div>

          <motion.div
            className="mt-8 flex flex-wrap gap-10"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <p className="ig-label mb-1">Montréal</p>
              <p
                className="font-mono text-[0.9375rem]"
                style={{ color: "var(--ig-ink)", fontFamily: "var(--font-mono)" }}
              >
                {montrealTime || "--:--"}
              </p>
            </div>
            <div>
              <p className="ig-label mb-1">Paris</p>
              <p
                className="font-mono text-[0.9375rem]"
                style={{ color: "var(--ig-ink)", fontFamily: "var(--font-mono)" }}
              >
                {parisTime || "--:--"}
              </p>
            </div>
            <div>
              <p className="ig-label mb-1">Email</p>
              <a
                href="mailto:studio@impartialgames.com"
                className="text-[0.9375rem] transition-colors duration-200 hover:opacity-70"
                style={{ color: "var(--ig-ink)" }}
              >
                studio@impartialgames.com
              </a>
            </div>
          </motion.div>

          <div style={{ borderTop: "1px solid var(--ig-border)", marginTop: "2.5rem" }} />
        </div>
      </section>

      {/* Formulaire */}
      <section className="ig-section" style={{ backgroundColor: "var(--ig-bg)" }}>
        <div className="ig-container">
          <div className="max-w-[640px]">
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-5">
                {/* Nom */}
                <div>
                  <label
                    htmlFor="name"
                    className="ig-label block mb-2"
                    style={{ letterSpacing: "0.08em" }}
                  >
                    Ton nom
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Dylan Rose"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...inputStyle,
                      borderColor: focused === "name" ? "var(--ig-accent)" : "var(--ig-border)",
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="ig-label block mb-2"
                    style={{ letterSpacing: "0.08em" }}
                  >
                    Ton email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="dylan@monentreprise.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...inputStyle,
                      borderColor: focused === "email" ? "var(--ig-accent)" : "var(--ig-border)",
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="ig-label block mb-2"
                    style={{ letterSpacing: "0.08em" }}
                  >
                    Ton projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Dis-nous ce que tu veux construire..."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      borderColor: focused === "message" ? "var(--ig-accent)" : "var(--ig-border)",
                    }}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-studio flex items-center gap-2"
                    style={{ opacity: isLoading ? 0.7 : 1 }}
                  >
                    {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                    {isLoading ? "Envoi..." : "Envoyer"}
                  </button>
                </div>
              </div>
            </form>

            <p
              className="mt-6 text-[0.875rem]"
              style={{ color: "var(--ig-ink-muted)" }}
            >
              Réponse sous 24h. Pas de relances commerciales.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
