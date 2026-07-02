import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import HomePage from "@/pages/HomePage";
import EligibilityPage from "@/pages/EligibilityPage";
import ResultsPage from "@/pages/ResultsPage";
import SchemeDetailPage from "@/pages/SchemeDetailPage";
import SchemesPage from "@/pages/SchemesPage";
import DashboardPage from "@/pages/DashboardPage";
import HelpPage from "@/pages/HelpPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/eligibility" element={<EligibilityPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/scheme/:id" element={<SchemeDetailPage />} />
          <Route path="/schemes" element={<SchemesPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
