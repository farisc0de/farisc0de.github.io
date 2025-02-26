
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrintableResume from "./pages/PrintableResume";

// Prevent theme flash by adding script to document head
const themeScript = `
  (function() {
    let isDark;
    try {
      isDark = localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
      document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {
      console.error('Error setting theme:', e);
    }
  })();
`;

if (!document.getElementById('theme-script')) {
  const scriptElement = document.createElement('script');
  scriptElement.id = 'theme-script';
  scriptElement.textContent = themeScript;
  document.head.insertBefore(scriptElement, document.head.firstChild);
}

const queryClient = new QueryClient();

// Wrapper component to conditionally render DarkModeToggle
const AppContent = () => {
  const location = useLocation();
  const showDarkModeToggle = location.pathname === '/';

  return (
    <TooltipProvider>
      {showDarkModeToggle && <DarkModeToggle />}
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/printable-resume" element={<PrintableResume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider 
      defaultTheme="system" 
      enableSystem={true}
      attribute="class"
      disableTransitionOnChange
      storageKey="theme"
    >
      <HashRouter>
        <AppContent />
      </HashRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
