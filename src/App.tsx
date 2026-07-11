import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { CookieBanner } from "@/components/CookieBanner";
import { AnimatedRoutes } from "@/components/AnimatedRoutes";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ClientOnly } from "@/components/ClientOnly";
import { DemoAuthProvider } from "@/contexts/DemoAuthContext";
import { DemoDataProvider } from "@/contexts/DemoDataContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SpeedInsights } from "@vercel/speed-insights/react";

const queryClient = new QueryClient();

/**
 * Arbre applicatif complet, sans le Router : partagé entre le client
 * (BrowserRouter, cf. App) et le prérendu serveur (StaticRouter, cf. entry-server).
 */
export function AppInner() {
  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">
      <TooltipProvider>
        <LanguageProvider>
          <DemoAuthProvider>
            <DemoDataProvider>
              <AnimatedRoutes />
              <ClientOnly>
                <Toaster />
                <Sonner />
                <SpeedInsights />
                <CustomCursor />
                <CookieBanner />
                <ScrollToTop />
              </ClientOnly>
            </DemoDataProvider>
          </DemoAuthProvider>
        </LanguageProvider>
      </TooltipProvider>
      </MotionConfig>
    </QueryClientProvider>
  );
}

const App = () => (
  <BrowserRouter>
    <AppInner />
  </BrowserRouter>
);

export default App;
