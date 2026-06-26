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
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CustomCursor } from "@/components/ui/CustomCursor";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
        <LanguageProvider>
        <DemoAuthProvider>
          <DemoDataProvider>
            <Toaster />
            <Sonner />
            <CustomCursor />
            <BrowserRouter>
              <AnimatedRoutes />
              <CookieBanner />
              <ScrollToTop />
            </BrowserRouter>
          </DemoDataProvider>
        </DemoAuthProvider>
        </LanguageProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
