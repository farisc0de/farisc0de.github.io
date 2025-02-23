
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Project One",
    description: "A brief description of your first project and its key features.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description: "Description of your second project highlighting its unique aspects.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description: "Overview of your third project showcasing your skills and expertise.",
    tags: ["Vue.js", "Express", "PostgreSQL"],
    link: "https://github.com/yourusername/project-three",
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
