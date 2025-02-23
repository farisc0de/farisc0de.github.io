
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Misk Foundation",
    period: "2022 - Present",
    description: "Full-stack development using TALL stack. Implemented key features for various client projects.",
    icon: Briefcase,
    type: "work"
  },
  {
    title: "Bachelor's in Computer Science",
    company: "Taif University",
    period: "2017 - 2022",
    description: "Dean's List. Founded the Web Development Club. Led multiple hackathon teams.",
    icon: GraduationCap,
    type: "education"
  }
];

export const ExperienceSection = () => {
  return (
    <section className="space-y-8 animate-fade-in">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight gradient-text">Experience Timeline</h2>
        <p className="text-muted-foreground">My professional journey and education</p>
      </div>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20" />
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative pl-12 group"
            >
              <div className="absolute left-[0.9rem] -translate-x-1/2 w-7 h-7 rounded-full border-2 border-primary bg-background flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <experience.icon className="w-4 h-4 text-primary" />
              </div>
              <div className="rounded-lg border bg-card p-6 hover:shadow-lg transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{experience.title}</h3>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {experience.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-primary">{experience.company}</p>
                <p className="text-sm text-muted-foreground">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
