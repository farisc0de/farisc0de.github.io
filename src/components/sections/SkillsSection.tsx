
const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 88 },
      { name: "TypeScript", level: 82 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "SQL", level: 78 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 70 }
    ]
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git", level: 88 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 72 },
      { name: "CI/CD", level: 78 },
      { name: "Testing", level: 80 }
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section className="space-y-8 animate-fade-in">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight gradient-text">Skills & Expertise</h2>
        <p className="text-muted-foreground">Technical proficiencies and competencies</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="rounded-lg border bg-card p-6 hover:shadow-lg transition-all"
          >
            <h3 className="text-lg font-semibold mb-4">{category.name}</h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
