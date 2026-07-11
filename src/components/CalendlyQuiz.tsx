import { useState } from "react";
import { motion } from "framer-motion";
import { X, ArrowRight, CheckCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const CALENDLY_URL = "https://calendly.com/yannis-bezriche/impartial-games";

type Step = 1 | 2 | 3 | "disqualified" | "done";

interface Props {
  onClose: () => void;
}

export function CalendlyQuiz({ onClose }: Props) {
  const [step, setStep] = useState<Step>(1);
  const { t } = useLang();

  const projectTypes = [
    "Landing page",
    t("Site multi-pages", "Multi-page website"),
    t("App ou logiciel", "App or software"),
    t("Je ne sais pas encore", "Not sure yet"),
  ];

  const budgets = [
    { label: t("Moins de 1 500 € / 2 500 $CA", "Under 1,500 € / $2,500 CA"), qualified: false },
    { label: "1 500 – 3 000 € / 2 500 – 5 000 $CA", qualified: true },
    { label: "3 000 – 8 000 € / 5 000 – 12 000 $CA", qualified: true },
    { label: t("Plus de 8 000 € / 12 000 $CA", "Over 8,000 € / $12,000 CA"), qualified: true },
  ];

  const delays = [
    t("Urgent (moins de 4 semaines)", "Urgent (under 4 weeks)"),
    t("Normal (1 à 3 mois)", "Normal (1 to 3 months)"),
    t("Pas encore décidé", "Not decided yet"),
  ];

  function handleBudget(budget: (typeof budgets)[0]) {
    if (!budget.qualified) {
      setStep("disqualified");
    } else {
      setStep(3);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative bg-[#14101D]/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_16px_48px_rgba(0,0,0,0.5)] p-8 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/[0.06] transition-colors"
          aria-label={t("Fermer", "Close")}
        >
          <X className="h-4 w-4 text-white/60" />
        </button>

        {step === 1 && (
          <div>
            <h3 className="font-syne font-black text-[22px] text-white mb-2">
              {t("Quel type de projet ?", "What type of project?")}
            </h3>
            <p className="text-[13px] text-white/60 mb-6">
              {t("2 autres questions après celle-ci.", "2 more questions after this.")}
            </p>
            <div className="flex flex-col gap-2.5">
              {projectTypes.map((pt) => (
                <button
                  key={pt}
                  onClick={() => setStep(2)}
                  className="text-left px-5 py-3.5 rounded-xl border border-white/10 hover:border-[#A78BFA] hover:bg-[#7C3AED]/10 transition-all text-[14px] font-medium text-white"
                >
                  {pt}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="font-syne font-black text-[22px] text-white mb-2">
              {t("Quel est ton budget ?", "What's your budget?")}
            </h3>
            <p className="text-[13px] text-white/60 mb-6">
              {t("Nos packs partent à partir de 1 500 €.", "Our packages start at 1,500 €.")}
            </p>
            <div className="flex flex-col gap-2.5">
              {budgets.map((b) => (
                <button
                  key={b.label}
                  onClick={() => handleBudget(b)}
                  className="text-left px-5 py-3.5 rounded-xl border border-white/10 hover:border-[#A78BFA] hover:bg-[#7C3AED]/10 transition-all text-[14px] font-medium text-white"
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="font-syne font-black text-[22px] text-white mb-2">
              {t("Ton délai souhaité ?", "Your timeline?")}
            </h3>
            <p className="text-[13px] text-white/60 mb-6">
              {t(
                "Pour qu'on puisse mieux préparer l'appel.",
                "So we can better prepare for the call."
              )}
            </p>
            <div className="flex flex-col gap-2.5">
              {delays.map((d) => (
                <button
                  key={d}
                  onClick={() => setStep("done")}
                  className="text-left px-5 py-3.5 rounded-xl border border-white/10 hover:border-[#A78BFA] hover:bg-[#7C3AED]/10 transition-all text-[14px] font-medium text-white"
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === "disqualified" && (
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-white/[0.06] flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="font-syne font-black text-[20px] text-white mb-3">
              {t("On peut quand même trouver une solution", "We can still find a solution")}
            </h3>
            <p className="text-[14px] text-white/60 leading-relaxed mb-6">
              {t(
                "Notre pack d'entrée est à 1 500 € / 2 200 $CA. Écris-nous, on trouvera une solution adaptée.",
                "Our entry pack starts at 1,500 € / $2,200 CA. Write to us, we'll find something that works."
              )}
            </p>
            <a
              href="mailto:studio@impartialgames.com"
              className="btn-prisme inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium text-[14px]"
            >
              {t("Envoyer un message", "Send a message")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}

        {step === "done" && (
          <div className="text-center">
            <CheckCircle className="h-10 w-10 text-[#7C3AED] mx-auto mb-4" />
            <h3 className="font-syne font-black text-[20px] text-white mb-3">
              {t("Parfait, tu es qualifié !", "Great, you qualify!")}
            </h3>
            <p className="text-[14px] text-white/60 leading-relaxed mb-6">
              {t(
                "Choisis un créneau directement dans notre calendrier. On te répond sous 24-48h.",
                "Pick a slot directly in our calendar. We reply within 24–48h."
              )}
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="btn-prisme inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium text-[14px]"
            >
              {t("Réserver un appel", "Book a call")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
}
