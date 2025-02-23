import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrintableResume from "./pages/PrintableResume";

// Prevent theme flash by adding script to document head
const themeScript = `
  let isDark;
  try {
    isDark = localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  } catch (e) {
    isDark = false;
  }
  document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
`;

const scriptElement = document.createElement('script');
scriptElement.textContent = themeScript;
document.head.appendChild(scriptElement);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider 
      defaultTheme="system" 
      enableSystem={true}
      attribute="class"
      disableTransitionOnChange
    >
      <TooltipProvider>
        <DarkModeToggle />
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/printable-resume" element={<PrintableResume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;