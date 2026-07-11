import { lazy, Suspense, type ReactNode } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransition3D } from "./PageTransition3D";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import Index from "@/pages/Index";

// Pages publiques (chunks séparés, chargés à la navigation)
const Studio = lazy(() => import("@/pages/Studio"));
const Contact = lazy(() => import("@/pages/Contact"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const WebService = lazy(() => import("@/pages/services/WebService"));
const MobileService = lazy(() => import("@/pages/services/MobileService"));
const BackofficeService = lazy(() => import("@/pages/services/BackofficeService"));
const FullStackService = lazy(() => import("@/pages/services/FullStackService"));
const Ressources = lazy(() => import("@/pages/ressources/Ressources"));
const RessourceArticle = lazy(() => import("@/pages/ressources/RessourceArticle"));
const CGU = lazy(() => import("@/pages/legal/CGU"));
const CGV = lazy(() => import("@/pages/legal/CGV"));
const Cookies = lazy(() => import("@/pages/legal/Cookies"));
const MentionsLegales = lazy(() => import("@/pages/legal/MentionsLegales"));
const PolitiqueConfidentialite = lazy(() => import("@/pages/legal/PolitiqueConfidentialite"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Pages projets portfolio
const EclipsiaProject = lazy(() => import("@/pages/portfolio/EclipsiaProject"));
const WeCloseProject = lazy(() => import("@/pages/portfolio/WeCloseProject"));
const AltarysProject = lazy(() => import("@/pages/portfolio/AltarysProject"));
const PropheciaProject = lazy(() => import("@/pages/portfolio/PropheciaProject"));
const UmelProject = lazy(() => import("@/pages/portfolio/UmelProject"));
const FitbyvalProject = lazy(() => import("@/pages/portfolio/FitbyvalProject"));
const Elev8Project = lazy(() => import("@/pages/portfolio/Elev8Project"));
const ValoraProject = lazy(() => import("@/pages/portfolio/ValoraProject"));
const MBAProject = lazy(() => import("@/pages/portfolio/MBAProject"));

// Auth
const AdminLogin = lazy(() => import("@/pages/admin/AdminLogin"));
const AdminOnlyLogin = lazy(() => import("@/pages/admin/AdminOnlyLogin"));
const ClientSignup = lazy(() => import("@/pages/admin/ClientSignup"));
const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"));
const ResetPassword = lazy(() => import("@/pages/ResetPassword"));

// Espace admin
const AdminDashboard = lazy(() => import("@/pages/admin/AdminDashboard"));
const AdminClients = lazy(() => import("@/pages/admin/AdminClients"));
const AdminDossiers = lazy(() => import("@/pages/admin/AdminDossiers"));
const AdminDossierDetail = lazy(() => import("@/pages/admin/AdminDossierDetail"));
const AdminMessaging = lazy(() => import("@/pages/admin/AdminMessaging"));
const AdminBilling = lazy(() => import("@/pages/admin/AdminBilling"));
const AdminReminders = lazy(() => import("@/pages/admin/AdminReminders"));
const AdminAnalytics = lazy(() => import("@/pages/admin/AdminAnalytics"));
const AdminSupport = lazy(() => import("@/pages/admin/AdminSupport"));
const AdminEmails = lazy(() => import("@/pages/admin/AdminEmails"));
const AdminSettings = lazy(() => import("@/pages/admin/AdminSettings"));
const AdminRendezVous = lazy(() => import("@/pages/admin/AdminRendezVous"));

// Espace client
const ClientDashboard = lazy(() => import("@/pages/client/ClientDashboard"));
const ClientDossiers = lazy(() => import("@/pages/client/ClientDossiers"));
const ClientDossierDetail = lazy(() => import("@/pages/client/ClientDossierDetail"));
const ClientDemandes = lazy(() => import("@/pages/client/ClientDemandes"));
const ClientDevis = lazy(() => import("@/pages/client/ClientDevis"));
const ClientFactures = lazy(() => import("@/pages/client/ClientFactures"));
const ClientMessaging = lazy(() => import("@/pages/client/ClientMessaging"));
const ClientProfile = lazy(() => import("@/pages/client/ClientProfile"));
const ClientSupport = lazy(() => import("@/pages/client/ClientSupport"));
const ClientPaiement = lazy(() => import("@/pages/client/ClientPaiement"));
const ClientSettings = lazy(() => import("@/pages/client/ClientSettings"));
const ClientRendezVous = lazy(() => import("@/pages/client/ClientRendezVous"));

const wrap = (page: ReactNode) => <PageTransition3D>{page}</PageTransition3D>;

/**
 * Routes publiques, montées à l'identique sous "/" (FR) et "/en" (EN).
 * La langue est déduite de l'URL par LanguageProvider.
 */
const publicChildren = (
  <>
    <Route index element={wrap(<Index />)} />
    <Route path="studio" element={wrap(<Studio />)} />
    <Route path="portfolio" element={wrap(<Portfolio />)} />
    <Route path="portfolio/eclipsia" element={wrap(<EclipsiaProject />)} />
    <Route path="portfolio/weclose" element={wrap(<WeCloseProject />)} />
    <Route path="portfolio/altarys" element={wrap(<AltarysProject />)} />
    <Route path="portfolio/prophecia" element={wrap(<PropheciaProject />)} />
    <Route path="portfolio/umel" element={wrap(<UmelProject />)} />
    <Route path="portfolio/fitbyval" element={wrap(<FitbyvalProject />)} />
    <Route path="portfolio/elev8" element={wrap(<Elev8Project />)} />
    <Route path="portfolio/valora" element={wrap(<ValoraProject />)} />
    <Route path="portfolio/mba" element={wrap(<MBAProject />)} />
    <Route path="contact" element={wrap(<Contact />)} />
    <Route path="services/web" element={wrap(<WebService />)} />
    <Route path="services/mobile" element={wrap(<MobileService />)} />
    <Route path="services/backoffice" element={wrap(<BackofficeService />)} />
    <Route path="services/360" element={wrap(<FullStackService />)} />
    <Route path="ressources" element={wrap(<Ressources />)} />
    <Route path="ressources/:slug" element={wrap(<RessourceArticle />)} />
  </>
);

export function AnimatedRoutes() {
  const location = useLocation();
  useScrollToTop();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="min-h-screen bg-[#0E0B14]" aria-hidden />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/">
            {publicChildren}
            {/* Pages légales : FR uniquement */}
            <Route path="cgu" element={wrap(<CGU />)} />
            <Route path="cgv" element={wrap(<CGV />)} />
            <Route path="cookies" element={wrap(<Cookies />)} />
            <Route path="mentions-legales" element={wrap(<MentionsLegales />)} />
            <Route path="politique-confidentialite" element={wrap(<PolitiqueConfidentialite />)} />
          </Route>

          <Route path="/en">
            {publicChildren}
            {/* Le légal n'existe qu'en français */}
            <Route path="cgu" element={<Navigate to="/cgu" replace />} />
            <Route path="cgv" element={<Navigate to="/cgv" replace />} />
            <Route path="cookies" element={<Navigate to="/cookies" replace />} />
            <Route path="mentions-legales" element={<Navigate to="/mentions-legales" replace />} />
            <Route path="politique-confidentialite" element={<Navigate to="/politique-confidentialite" replace />} />
          </Route>

          {/* Auth */}
          <Route path="/client/login" element={<AdminLogin />} />
          <Route path="/admin/access" element={<AdminOnlyLogin />} />
          <Route path="/signup" element={<ClientSignup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Espace admin */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/clients" element={<AdminClients />} />
          <Route path="/admin/dossiers" element={<AdminDossiers />} />
          <Route path="/admin/dossiers/:id" element={<AdminDossierDetail />} />
          <Route path="/admin/messagerie" element={<AdminMessaging />} />
          <Route path="/admin/facturation" element={<AdminBilling />} />
          <Route path="/admin/relances" element={<AdminReminders />} />
          <Route path="/admin/emails" element={<AdminEmails />} />
          <Route path="/admin/support" element={<AdminSupport />} />
          <Route path="/admin/rendez-vous" element={<AdminRendezVous />} />
          <Route path="/admin/analyse" element={<AdminAnalytics />} />
          <Route path="/admin/parametres" element={<AdminSettings />} />

          {/* Espace client */}
          <Route path="/client" element={<ClientDashboard />} />
          <Route path="/client/dossiers" element={<ClientDossiers />} />
          <Route path="/client/dossiers/:id" element={<ClientDossierDetail />} />
          <Route path="/client/demandes" element={<ClientDemandes />} />
          <Route path="/client/devis" element={<ClientDevis />} />
          <Route path="/client/factures" element={<ClientFactures />} />
          <Route path="/client/paiement/:factureId" element={<ClientPaiement />} />
          <Route path="/client/messagerie" element={<ClientMessaging />} />
          <Route path="/client/support" element={<ClientSupport />} />
          <Route path="/client/rendez-vous" element={<ClientRendezVous />} />
          <Route path="/client/profil" element={<ClientProfile />} />
          <Route path="/client/parametres" element={<ClientSettings />} />

          <Route path="*" element={wrap(<NotFound />)} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}
