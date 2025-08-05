import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import StocksPage from "@/pages/stocks";
import BondsPage from "@/pages/bonds";
import NISAPage from "@/pages/nisa";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/stocks" component={StocksPage} />
      <Route path="/bonds" component={BondsPage} />
      <Route path="/nisa" component={NISAPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
