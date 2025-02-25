import React from 'react';
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Use the VITE_BASE_URL environment variable for GitHub Pages
const base = import.meta.env.VITE_BASE_URL || '/';

// Configure router to use history-based navigation
const useHashLocation = () => {
  const [loc, setLoc] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handler = () => setLoc(window.location.pathname);
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  const navigate = React.useCallback((to: string) => {
    window.history.pushState(null, '', to);
    setLoc(to);
  }, []);

  return [loc, navigate];
};

function Router() {
  return (
    <WouterRouter hook={useHashLocation} base={base}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;