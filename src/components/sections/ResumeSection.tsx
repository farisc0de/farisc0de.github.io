
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const ResumeSection = () => {
  const { toast } = useToast();

  const handlePrint = () => {
    toast({
      title: "Preparing PDF...",
      description: "Your resume will open in a new window for downloading.",
    });
    window.open("#/printable-resume", "_blank");
  };

  return (
    <section className="relative space-y-8 rounded-2xl border bg-card p-8 shadow-lg transition-all hover:shadow-xl">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent">
            Resume
          </span>
        </h2>
        <p className="text-muted-foreground">
          Get a comprehensive overview of my professional experience
        </p>
        <Button
          onClick={handlePrint}
          className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105"
        >
          <FileDown className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </div>
    </section>
  );
};
