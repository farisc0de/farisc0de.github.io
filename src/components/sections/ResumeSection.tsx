
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
    window.open("/printable-resume", "_blank");
  };

  return (
    <section className="space-y-8">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight gradient-text">Resume</h2>
        <p className="text-muted-foreground">Download my resume in PDF format</p>
        <Button
          onClick={handlePrint}
          className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
        >
          <FileDown className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </div>
    </section>
  );
};
