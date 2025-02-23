
import { useState, useEffect } from "react";
import { Star, GitFork, Eye } from "lucide-react";

interface Repository {
  name: string;
  description: string;
  stars: number;
  forks: number;
  watchers: number;
  language: string;
  url: string;
}

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  Java: "bg-red-500",
  "C++": "bg-purple-500",
  PHP: "bg-indigo-500",
  HTML: "bg-orange-500",
  CSS: "bg-pink-500",
};

export const GitHubActivity = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const username = 'farisc0de';
        
        // Fetch all repositories to ensure we get the most starred ones
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=stars&direction=desc`);
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch GitHub repositories');
        }
        const repos = await reposResponse.json();
        
        // Sort repositories by stars and get top 6
        const sortedRepos = repos.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
        const topRepositories = sortedRepos
          .slice(0, 6)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description || 'No description available',
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            watchers: repo.watchers_count,
            language: repo.language || 'Unknown',
            url: repo.html_url
          }));

        setRepositories(topRepositories);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="h-[100px] flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Loading repositories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[100px] flex items-center justify-center">
        <p className="text-sm text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
      {repositories.map((repo) => (
        <a
          key={repo.name}
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border bg-card p-3 space-y-2 hover:shadow-md transition-all"
        >
          <div className="space-y-1">
            <h3 className="text-sm font-semibold hover:text-primary transition-colors truncate">
              {repo.name}
            </h3>
            <p className="text-xs text-muted-foreground line-clamp-1">
              {repo.description}
            </p>
          </div>
          
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3" />
              {repo.stars}
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="w-3 h-3" />
              {repo.forks}
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {repo.watchers}
            </div>
            <div className="flex items-center gap-1 ml-auto">
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  languageColors[repo.language as keyof typeof languageColors] || "bg-gray-500"
                }`}
              />
              <span className="text-xs">
                {repo.language}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
