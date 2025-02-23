
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  readingTime: string;
  categories: string[];
  tags: string[];
  slug: string;
}

export const BlogCard = ({
  title,
  description,
  date,
  readingTime,
  categories,
  tags,
  slug,
}: BlogCardProps) => {
  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-lg">
      <Link to={`${slug}`} className="flex flex-col h-full">
        <CardHeader className="flex-none space-y-2">
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 2).map((category) => (
              <Badge key={category} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>
          <CardTitle className="line-clamp-2 text-lg sm:text-xl">{title}</CardTitle>
          <CardDescription className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
            <span className="flex items-center gap-1">
              <CalendarDays className="h-3 w-3 sm:h-4 sm:w-4" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
              {readingTime}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{description}</p>
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};
