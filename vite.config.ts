import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";

const PrerenderRoutes = [
  "/",
  "/studio",
  "/portfolio",
  "/contact",
  "/portfolio/eclipsia",
  "/portfolio/altarys",
  "/portfolio/prophecia",
  "/services/web",
  "/services/mobile",
  "/services/backoffice",
  "/services/360",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      vitePrerender({
        staticDir: path.join(__dirname, "dist"),
        routes: PrerenderRoutes,
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
