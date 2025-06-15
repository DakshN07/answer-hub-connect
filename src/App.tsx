
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import Topbar from "@/components/Topbar";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Faqs from "./pages/Faqs";
import AddFaq from "./pages/AddFaq";
import UnknownQuestions from "./pages/UnknownQuestions";
import Team from "./pages/Team";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex w-full min-h-screen">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <Topbar />
              <SidebarTrigger className="fixed top-4 left-2 z-40 md:left-3 bg-white border border-gray-200 rounded-xl shadow-lg" />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Navigate replace to="/dashboard" />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/faqs" element={<Faqs />} />
                  <Route path="/add-faq" element={<AddFaq />} />
                  <Route path="/unknowns" element={<UnknownQuestions />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
