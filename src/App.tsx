
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import BackgroundValidation from "./pages/BackgroundValidation";
import ComplianceServices from "./pages/ComplianceServices";
import DueDiligence from "./pages/DueDiligence";
import KYC from "./pages/KYC";
import GlobalWatchlistScreening from "./pages/GlobalWatchlistScreening";
import UseCases from "./pages/UseCases";
import HRRecruitment from "./pages/HRRecruitment";
import FinancialServices from "./pages/FinancialServices";
import TenantScreening from "./pages/TenantScreening";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/background-validation" element={<BackgroundValidation />} />
          <Route path="/services/compliance" element={<ComplianceServices />} />
          <Route path="/services/due-diligence" element={<DueDiligence />} />
          <Route path="/services/kyc" element={<KYC />} />
          <Route path="/services/global-watchlist-screening" element={<GlobalWatchlistScreening />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/use-cases/hr-recruitment" element={<HRRecruitment />} />
          <Route path="/use-cases/financial-services" element={<FinancialServices />} />
          <Route path="/use-cases/tenant-screening" element={<TenantScreening />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
