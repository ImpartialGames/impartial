import { createContext, useCallback, useContext, useMemo, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type Lang = "fr" | "en";

/** Langue portée par l'URL : /en/* → en, tout le reste → fr. */
export const langFromPath = (pathname: string): Lang =>
  /^\/en(\/|$)/.test(pathname) ? "en" : "fr";

/** Chemin équivalent dans la langue demandée ("/studio" ↔ "/en/studio"). */
export const pathForLang = (pathname: string, lang: Lang): string => {
  const bare = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  if (lang === "fr") return bare;
  return bare === "/" ? "/en" : `/en${bare}`;
};

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (fr: string, en: string) => string;
  /** Localise un lien interne selon la langue courante : lp("/studio") → "/en/studio" en anglais. */
  lp: (path: string) => string;
}

const LangContext = createContext<LangCtx>({
  lang: "fr",
  setLang: () => {},
  t: (fr) => fr,
  lp: (p) => p,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const lang = langFromPath(location.pathname);

  const setLang = useCallback(
    (l: Lang) => {
      if (l !== langFromPath(location.pathname)) {
        navigate(pathForLang(location.pathname, l) + location.search + location.hash);
      }
    },
    [location.pathname, location.search, location.hash, navigate],
  );

  const value = useMemo<LangCtx>(
    () => ({
      lang,
      setLang,
      t: (fr, en) => (lang === "fr" ? fr : en),
      lp: (path) => pathForLang(path, lang),
    }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
