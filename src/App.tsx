import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VapeDeliveryNairobi from "./pages/VapeDeliveryNairobi";
import VapeDeliveryKisumu from "./pages/VapeDeliveryKisumu";
import VapeDeliveryMombasa from "./pages/VapeDeliveryMombasa";
import VapeDeliveryNakuru from "./pages/VapeDeliveryNakuru";
import VapeDeliveryEldoret from "./pages/VapeDeliveryEldoret";
import VapeDeliveryThika from "./pages/VapeDeliveryThika";
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
          <Route path="/vape-delivery-nairobi" element={<VapeDeliveryNairobi />} />
          <Route path="/vape-delivery-kisumu" element={<VapeDeliveryKisumu />} />
          <Route path="/vape-delivery-mombasa" element={<VapeDeliveryMombasa />} />
          <Route path="/vape-delivery-nakuru" element={<VapeDeliveryNakuru />} />
          <Route path="/vape-delivery-eldoret" element={<VapeDeliveryEldoret />} />
          <Route path="/vape-delivery-thika" element={<VapeDeliveryThika />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
