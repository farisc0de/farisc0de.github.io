
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Uploady File Uploader",
    description: "A Full-Stack file uploader built with PHP",
    tags: ["PHP", "MySQL", "Bootstrap"],
    link: "https://github.com/farisc0de/uploady",
  },
  {
    title: "Maryam Blog",
    description: "WordPress Blog for personal use",
    tags: ["WordPress", "PHP", "MySQL"],
    link: "https://maryamfairouz.com",
  },
  {
    title: "DevOps Implementation",
    description: "CI/CD pipeline for Misk Foundation projects",
    tags: ["Azure DevOps", "Yaml", "Docker"],
    link: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="space-y-8 animate-fade-in">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight gradient-text">Projects</h2>
        <p className="text-muted-foreground">
          Here are some of my recent projects that showcase my skills and interests.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};
