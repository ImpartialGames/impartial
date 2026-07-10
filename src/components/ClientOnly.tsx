import { useEffect, useState, type ReactNode } from "react";

/**
 * Ne rend ses enfants qu'après le montage côté navigateur.
 * Utilisé pour le chrome applicatif (toasts, curseur, bannière cookies…)
 * qui n'a aucune valeur SEO et ne doit pas participer au rendu serveur.
 */
export function ClientOnly({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : null;
}
