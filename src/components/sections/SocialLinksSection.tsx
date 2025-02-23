
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Instagram, Link } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/farisc0de",
    color: "text-gray-900"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/farisc0de",
    color: "text-[#0A66C2]"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/fariscode",
    color: "text-[#E4405F]"
  },
  {
    name: "Dev.to",
    icon: Link,
    url: "https://dev.to/fariscode",
    color: "text-gray-800"
  }
];

export const SocialLinksSection = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex justify-center gap-4">
        {socialLinks.map((social) => (
          <Button
            key={social.name}
            variant="outline"
            size="icon"
            asChild
            className={`${social.color} hover:scale-110 transition-transform duration-200`}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5" />
            </a>
          </Button>
        ))}
      </div>
      <Button variant="default" size="lg" asChild className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
        <a href="mailto:your.email@example.com" className="gap-2">
          <Mail className="h-4 w-4" />
          Contact Me
        </a>
      </Button>
    </div>
  );
};
