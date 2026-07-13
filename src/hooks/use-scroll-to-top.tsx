import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      // Cible d'ancre (ex. /#offres depuis une autre page). La nouvelle page
      // n'est montée qu'après l'animation de sortie d'AnimatePresence
      // (mode="wait", ~0,6 s) : on re-tente jusqu'à ce que l'élément existe.
      const id = hash.slice(1);
      let attempts = 0;
      const timer = setInterval(() => {
        const el = document.getElementById(id);
        attempts += 1;
        if (el) {
          clearInterval(timer);
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts >= 25) {
          clearInterval(timer);
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
      }, 100);
      return () => clearInterval(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // `key` change à CHAQUE navigation (même URL identique) : re-clic sur
    // « Tarifs » alors qu'on est déjà sur /#offres re-déclenche le scroll.
  }, [pathname, hash, key]);
}
