import { useState } from "react";
import { Mail, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLang } from "@/contexts/LanguageContext";

interface NewsletterProps {
  variant?: "inline" | "card";
}

export function Newsletter({ variant = "card" }: NewsletterProps) {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: t("Email invalide", "Invalid email"),
        description: t("Veuillez entrer une adresse email valide.", "Please enter a valid email address."),
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubscribed(true);
    toast({
      title: t("Inscription réussie !", "You're subscribed!"),
      description: t("Vous recevrez bientôt nos dernières actualités.", "You'll receive our latest news soon."),
    });
    setEmail("");
    setIsLoading(false);
  };

  if (variant === "inline") {
    return (
      <div className="space-y-3">
        <h4 className="font-semibold text-[#818CF8] flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#818CF8] shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
          Newsletter
        </h4>
        <p className="text-sm text-muted-foreground">
          {t("Recevez nos dernières actualités et conseils.", "Get our latest news and tips.")}
        </p>
        {isSubscribed ? (
          <div className="flex items-center gap-2 text-emerald-400 text-sm">
            <CheckCircle className="h-4 w-4" />
            {t("Merci pour votre inscription !", "Thanks for subscribing!")}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("votre@email.com", "your@email.com")}
              className="flex-1 px-4 py-2 text-sm rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/35 focus:border-[#818CF8] focus:outline-none focus:ring-1 focus:ring-[#818CF8] transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-[#6366F1]/20 border border-[#818CF8]/40 text-[#818CF8] rounded-xl hover:bg-[#6366F1]/30 transition-all disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="p-8 glass-surface glass-noise rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 via-transparent to-neon-violet/10 rounded-[inherit]" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-[#6366F1]/20 border border-[#818CF8]/30">
            <Mail className="h-6 w-6 text-[#818CF8]" />
          </div>
          <div>
            <h3 className="text-xl font-light">{t("Restez informé", "Stay in the loop")}</h3>
            <p className="text-sm text-muted-foreground font-light">{t("Inscrivez-vous à notre newsletter", "Subscribe to our newsletter")}</p>
          </div>
        </div>

        <p className="text-muted-foreground font-light mb-6">
          {t(
            "Recevez nos dernières actualités, conseils et tendances du digital directement dans votre boîte mail.",
            "Get our latest news, tips and digital trends delivered straight to your inbox."
          )}
        </p>

        {isSubscribed ? (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <CheckCircle className="h-5 w-5" />
            <span>{t("Merci ! Vous êtes maintenant inscrit à notre newsletter.", "Thank you! You're now subscribed to our newsletter.")}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("votre@email.com", "your@email.com")}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/35 focus:border-[#818CF8] focus:outline-none focus:ring-1 focus:ring-[#818CF8] focus:shadow-[0_0_20px_rgba(99,102,241,0.25)] transition-all"
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="group px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  {t("Inscription...", "Subscribing...")}
                </>
              ) : (
                <>
                  {t("S'inscrire", "Subscribe")}
                  <Mail className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        )}

        <p className="text-xs text-muted-foreground mt-4">
          {t(
            "En vous inscrivant, vous acceptez notre politique de confidentialité. Désabonnement possible à tout moment.",
            "By subscribing, you agree to our privacy policy. You can unsubscribe at any time."
          )}
        </p>
      </div>
    </div>
  );
}
