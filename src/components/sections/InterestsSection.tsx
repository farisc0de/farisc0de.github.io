
const interests = [
  "Web Development",
  "DevOps",
  "Software Engineering",
  "Open Source",
  "Problem Solving",
  "New Technologies"
];

export const InterestsSection = () => {
  return (
    <section className="space-y-8 animate-fade-in">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight gradient-text">Interests</h2>
        <p className="text-muted-foreground">
          Here are some of the things I'm passionate about
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {interests.map((interest) => (
          <span
            key={interest}
            className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-primary shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
};
