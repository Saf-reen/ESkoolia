import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "@/components/layout/PublicLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";
import HomePage from "@/pages/HomePage";
import FeaturesPage from "@/pages/FeaturesPage";
import PricingPage from "@/pages/PricingPage";
import BusinessPage from "@/pages/BusinessPage";
import DocsPage from "@/pages/DocsPage";
import ContactPage from "@/pages/ContactPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import TermsPage from "@/pages/TermsPage";
import PrivacyPage from "@/pages/PrivacyPage";
import RefundPolicyPage from "@/pages/RefundPolicyPage";
import SupportPolicyPage from "@/pages/SupportPolicyPage";
import DeletionPolicyPage from "@/pages/DeletionPolicyPage";
import DashboardOverview from "@/pages/dashboard/DashboardOverview";
import DashboardPlaceholder from "@/pages/dashboard/DashboardPlaceholder";
import ModulesPage from "@/pages/ModulesPage";
import FAQPage from "@/pages/FAQPage";
import NotFound from "@/pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public pages */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/docs/:slug" element={<DocsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/modules" element={<ModulesPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/support-policy" element={<SupportPolicyPage />} />
            <Route path="/deletion-policy" element={<DeletionPolicyPage />} />
          </Route>

          {/* Auth pages (no layout) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="students" element={<DashboardPlaceholder />} />
            <Route path="teachers" element={<DashboardPlaceholder />} />
            <Route path="attendance" element={<DashboardPlaceholder />} />
            <Route path="exams" element={<DashboardPlaceholder />} />
            <Route path="fees" element={<DashboardPlaceholder />} />
            <Route path="accounting" element={<DashboardPlaceholder />} />
            <Route path="hr" element={<DashboardPlaceholder />} />
            <Route path="library" element={<DashboardPlaceholder />} />
            <Route path="transport" element={<DashboardPlaceholder />} />
            <Route path="hostel" element={<DashboardPlaceholder />} />
            <Route path="notices" element={<DashboardPlaceholder />} />
            <Route path="events" element={<DashboardPlaceholder />} />
            <Route path="reports" element={<DashboardPlaceholder />} />
            <Route path="branches" element={<DashboardPlaceholder />} />
            <Route path="settings" element={<DashboardPlaceholder />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
