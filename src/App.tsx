import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { CookieBanner } from "@/components/CookieBanner";
import { AnimatedRoutes } from "@/components/AnimatedRoutes";
import { ScrollToTop } from "@/components/ScrollToTop";
import { DemoAuthProvider } from "@/contexts/DemoAuthContext";
import { DemoDataProvider } from "@/contexts/DemoDataContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SpeedInsights } from "@vercel/speed-insights/react";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
        <DemoAuthProvider>
          <DemoDataProvider>
            <Toaster />
            <Sonner />
            <SpeedInsights />
            <CustomCursor />
            <BrowserRouter>
              <AnimatedRoutes />
              <CookieBanner />
              <ScrollToTop />
            </BrowserRouter>
          </DemoDataProvider>
        </DemoAuthProvider>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
