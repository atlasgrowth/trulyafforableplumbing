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

// Configure wouter to use history-based routing
const useHashLocation = () => {
  const [loc, setLoc] = React.useState(window.location.pathname);

  React.useEffect(() => {
    // Update the location whenever navigation occurs
    const handler = () => {
      const path = window.location.pathname.replace(base, '') || '/';
      setLoc(path);
    };

    window.addEventListener('popstate', handler);
    handler(); // Handle initial location
    return () => window.removeEventListener('popstate', handler);
  }, []);

  const navigate = React.useCallback((to: string) => {
    const newPath = to === '/' ? base : `${base}${to}`;
    window.history.pushState(null, '', newPath);
    setLoc(to);
  }, []);

  return [loc, navigate] as const;
};

function Router() {
  return (
    <WouterRouter hook={useHashLocation}>
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