
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialLinksSection } from "@/components/sections/SocialLinksSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { InterestsSection } from "@/components/sections/InterestsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-24">
        <HeroSection />
        <SocialLinksSection />
        <AchievementsSection />
        <SkillsSection />
        <ExperienceSection />
        <GitHubSection />
        <InterestsSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
        <ResumeSection />
        
        <footer className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Faris Alotaibi. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
