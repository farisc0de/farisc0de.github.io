
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
//    {
//      name: "Sarah Johnson",
//      role: "Senior Frontend Developer at TechCorp",
//      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
//      content: "An exceptional colleague who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.",
//      initials: "SJ"
//    }
//   {
//     name: "Michael Chen",
//     role: "Tech Lead at InnovateSoft",
//     image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
//     content: "Working together on several projects has shown me their incredible ability to tackle complex challenges while maintaining clean, efficient code.",
//     initials: "MC"
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Product Manager at StartupX",
//     image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
//     content: "A fantastic developer who not only writes great code but also understands the bigger picture of product development. Always a pleasure to work with.",
//     initials: "ER"
//   }
];

export const TestimonialsSection = () => {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-12" id="testimonials">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter gradient-text">What People Say</h2>
        <p className="text-muted-foreground">Feedback from colleagues and clients</p>
      </div>

      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="glass-card">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <Avatar className="h-16 w-16 border-2 border-primary/20">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                  </div>
                  <blockquote className="text-lg italic text-muted-foreground">
                    "{testimonial.content}"
                  </blockquote>
                  <footer className="mt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </footer>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious variant="ghost" className="absolute -left-12 hover:bg-background/80" />
          <CarouselNext variant="ghost" className="absolute -right-12 hover:bg-background/80" />
        </div>
      </Carousel>
    </section>
  );
};