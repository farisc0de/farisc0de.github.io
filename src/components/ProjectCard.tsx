
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group transition-transform duration-300 hover:-translate-y-1"
    >
      <Card className="h-full overflow-hidden border bg-card shadow-lg hover:shadow-xl transition-all hover:bg-secondary/50">
        <CardHeader>
          <CardTitle className="text-lg font-semibold tracking-tight text-primary">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-foreground/80">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-background/50 border-primary/20 text-xs font-medium text-primary shadow-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
