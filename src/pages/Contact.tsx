import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Newsletter } from "@/components/Newsletter";
import { Mail, MapPin, Send, Loader2, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { MagneticButton, RevealText } from "@/components/wow";

/* ─── Variants ─────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Input styles ──────────────────────────────────────────── */

const inputClass =
  "w-full px-4 py-3.5 rounded-[14px] bg-white border border-[#EEEAF4] text-[#0E0B14] text-[14px] placeholder:text-[#B8A8D8] focus:border-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-[rgba(124,58,237,0.12)] transition-all duration-200";

/* ─── Page ──────────────────────────────────────────────────── */

const Contact = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const subject = searchParams.get("subject");
    if (subject) {
      setFormData(prev => ({ ...prev, subject: decodeURIComponent(subject) }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    setIsLoading(false);
  };

  return (
    <Layout>
      <SEO
        title="Contactez-nous"
        description="Parlons de votre projet. Réponse sous 24–48h avec une proposition claire et sans engagement."
        canonical="/contact"
      />

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[70svh] flex items-center overflow-hidden pt-24 pb-12 bg-[#FBFAF7]">
        <span className="prisme-halo-violet" style={{ top: "-10%", right: "-6%" }} />
        <span className="prisme-halo-rose"   style={{ bottom: "-8%", left: "8%" }} />

        <div className="w-full px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label justify-center mb-6"
            >
              Contact
            </motion.div>

            <h1 className="font-serif text-[32px] sm:text-[48px] lg:text-[66px] leading-[0.97] tracking-[-0.03em] text-[#0E0B14]">
              <RevealText by="word" stagger={0.06}>Parlons de votre</RevealText>
              <span className="block">
                <span className="prisme-italic-grad prisme-shimmer">projet.</span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6 text-[17px] md:text-[19px] text-[#6F6580] leading-[1.65] max-w-xl mx-auto"
            >
              Une idée ? Un besoin ? Contactez-nous et donnons vie ensemble à votre vision digitale.
            </motion.p>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-[5]"
          style={{ background: "linear-gradient(to bottom, transparent, #FBFAF7)" }}
        />
      </section>

      {/* ══════════════════════════════════════════
          2. FORMULAIRE + INFOS
      ══════════════════════════════════════════ */}
      <section className="relative py-16 md:py-24 bg-[#FBFAF7] overflow-hidden">
        <span className="prisme-halo-peach" style={{ top: "0%", right: "-8%" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

            {/* Infos */}
            <div className="lg:col-span-1 space-y-5">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A78BFA] mb-6"
              >
                Informations
              </motion.p>

              {[
                {
                  icon: Mail,
                  label: "Email",
                  content: (
                    <a href="mailto:studio@impartialgames.com"
                      className="text-[14px] text-[#0E0B14] hover:text-[#7C3AED] transition-colors duration-200">
                      studio@impartialgames.com
                    </a>
                  ),
                  delay: 0.1,
                },
                {
                  icon: MapPin,
                  label: "Localisation",
                  content: <p className="text-[14px] text-[#0E0B14]">Delaware, États-Unis</p>,
                  delay: 0.2,
                },
                {
                  icon: Clock,
                  label: "Horaires",
                  content: (
                    <div className="space-y-1">
                      <p className="text-[14px] text-[#0E0B14]">Lun – Ven : 9h00 – 18h00</p>
                      <p className="text-[13px] text-[#6F6580]">Weekend : Sur rendez-vous</p>
                    </div>
                  ),
                  delay: 0.3,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={item.delay * 10}
                    variants={fadeUp}
                  >
                    <div className="group p-6 rounded-[20px] bg-white border border-[#EEEAF4] hover:border-[rgba(124,58,237,0.28)] hover:shadow-[0_8px_24px_rgba(124,58,237,0.08)] transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#F3EEFB] border border-[#EEEAF4] flex items-center justify-center shrink-0 group-hover:bg-[rgba(124,58,237,0.10)] transition-colors duration-300">
                          <Icon className="h-4 w-4 text-[#7C3AED]" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A78BFA] mb-1">{item.label}</p>
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-[28px] bg-white border border-[#EEEAF4]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A78BFA] mb-8">
                    Envoyez-nous un message
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-[13px] font-medium text-[#6F6580] mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[13px] font-medium text-[#6F6580] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="company" className="block text-[13px] font-medium text-[#6F6580] mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Votre entreprise"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-[13px] font-medium text-[#6F6580] mb-2">
                        Sujet *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Votre projet"
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-[13px] font-medium text-[#6F6580] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={inputClass + " resize-none"}
                      placeholder="Décrivez votre projet, vos besoins, vos délais..."
                    />
                  </div>

                  <MagneticButton
                    as="button"
                    type="submit"
                    disabled={isLoading}
                    className="btn-prisme inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium text-[15px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Envoi en cours..." : "Envoyer le message"}
                    {isLoading
                      ? <Loader2 className="h-4 w-4 animate-spin" />
                      : <Send className="h-4 w-4" />
                    }
                  </MagneticButton>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. CALENDLY
      ══════════════════════════════════════════ */}
      <section className="relative py-16 md:py-24 bg-[#FBFAF7] overflow-hidden">
        <span className="prisme-halo-violet" style={{ bottom: "0%", left: "-8%" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12"
            >
              <div className="section-label justify-center mb-6">Rendez-vous</div>
              <h2 className="font-serif text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.02em] text-[#0E0B14]">
                Choisissez un créneau pour{" "}
                <span className="prisme-italic-grad">discuter.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-[28px] overflow-hidden border border-[#EEEAF4] bg-white">
                <iframe
                  src="https://calendly.com/yannis-bezriche/impartial-games"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Calendly"
                  className="bg-transparent min-h-[500px] md:min-h-[600px] lg:min-h-[700px] h-[600px] md:h-[700px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. NEWSLETTER
      ══════════════════════════════════════════ */}
      <section className="relative py-16 md:py-20 bg-[#FBFAF7] overflow-hidden">
        <span className="prisme-halo-peach" style={{ top: "-5%", right: "-8%" }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mx-auto"
          >
            <Newsletter variant="card" />
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;
