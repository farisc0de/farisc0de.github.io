
import { Trophy, Code, Award, Star } from "lucide-react";

const achievements = [
  {
    icon: Code,
    metric: "50+",
    title: "Projects Completed",
    description: "Successfully delivered across various domains"
  },
  {
    icon: Trophy,
    metric: "5+",
    title: "Awards Won",
    description: "Recognition for technical excellence"
  },
  {
    icon: Award,
    metric: "3",
    title: "Certifications",
    description: "Professional certifications in key technologies"
  },
  {
    icon: Star,
    metric: "100+",
    title: "Github Stars",
    description: "Across open source contributions"
  }
];

export const AchievementsSection = () => {
  return (
    <section className="space-y-8 animate-fade-in">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight gradient-text">Achievements</h2>
        <p className="text-muted-foreground">Key milestones in my professional journey</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-lg transition-all hover:bg-secondary/50"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <achievement.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-bold text-primary">
                  {achievement.metric}
                </h3>
                <p className="font-medium">{achievement.title}</p>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
