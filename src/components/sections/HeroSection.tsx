
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const HeroSection = () => {
  return (
    <section className="space-y-8 text-center animate-fade-in">
      <div className="flex flex-col items-center space-y-6">
        <Avatar className="h-32 w-32 border-2 border-primary/20 shadow-lg shadow-primary/10">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/76238196"
            alt="Profile picture"
          />
          <AvatarFallback>FA</AvatarFallback>
        </Avatar>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-accent">Hello, I'm </span>
            <span className="gradient-text">Faris Alotaibi</span>
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground text-balance">
            I am a Senior Software Engineer, Back-End Web Developer, and DevOps Engineer, I also make cool Open-Source projects 😁
          </p>
        </div>
      </div>
    </section>
  );
};
