
import { GitHubActivity } from "@/components/GitHubActivity";

export const GitHubSection = () => {
  return (
    <section className="space-y-8 animate-fade-in">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight gradient-text">
          GitHub Activity
        </h2>
        <p className="text-muted-foreground">
          Recent contributions and featured repositories
        </p>
      </div>
      <GitHubActivity />
    </section>
  );
};
