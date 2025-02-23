
import { BlogCard } from "@/components/BlogCard";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

interface MediumPost {
  title: string;
  description: string;
  pubDate: string;
  link: string;
  categories: string[];
}

const fetchMediumPosts = async (): Promise<MediumPost[]> => {
  const mediumRssFeed = `https://medium.com/feed/@fariscode`;
  
  // We need to use a CORS proxy since Medium's RSS feed doesn't support CORS
  const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(mediumRssFeed)}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch Medium posts');
  }
  
  const data = await response.json();
  return data.items.map((item: any) => ({
    title: item.title,
    description: item.description.replace(/<[^>]*>?/gm, '').slice(0, 200) + '...',
    pubDate: new Date(item.pubDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    link: item.link,
    categories: item.categories || ['Blog']
  }));
};

const estimateReadingTime = (text: string): string => {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

export const BlogSection = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['medium-posts'],
    queryFn: fetchMediumPosts,
  });

  if (isLoading) {
    return (
      <section className="space-y-8 animate-fade-in text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight gradient-text">Blog</h2>
          <div className="flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="space-y-8 animate-fade-in">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight gradient-text">Blog</h2>
          <p className="text-muted-foreground">
            Failed to load blog posts. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8 animate-fade-in">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight gradient-text">Blog</h2>
        <p className="text-muted-foreground">
          Thoughts, experiences, and insights about web development and technology.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <BlogCard
            key={post.link}
            title={post.title}
            description={post.description}
            date={post.pubDate}
            readingTime={estimateReadingTime(post.description)}
            categories={post.categories}
            tags={post.categories}
            slug={post.link}
          />
        ))}
      </div>
    </section>
  );
};
