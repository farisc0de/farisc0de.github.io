
import { useEffect } from "react";

const PrintableResume = () => {
  useEffect(() => {
    // Automatically trigger print dialog when the page loads
    window.print();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8 print:p-4 print:mx-0 print:shadow-none">
      {/* Personal Information */}
      <div className="space-y-4 text-center mb-8 print:mb-4">
        <h1 className="text-4xl font-bold">Your Name</h1>
        <p className="text-muted-foreground">Frontend Developer</p>
        <div className="flex justify-center gap-4 text-sm">
          <span>your.email@example.com</span>
          <span>•</span>
          <span>github.com/yourusername</span>
          <span>•</span>
          <span>linkedin.com/in/yourusername</span>
        </div>
      </div>

      {/* Experience */}
      <section className="mb-8 print:mb-4">
        <h2 className="text-2xl font-semibold mb-4 print:mb-2">Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Senior Frontend Developer</h3>
            <p className="text-sm text-muted-foreground">Tech Innovation Corp • 2022 - Present</p>
            <p className="mt-2">Leading the frontend development team in building modern web applications using React and TypeScript.</p>
          </div>
          <div>
            <h3 className="font-semibold">Software Engineer</h3>
            <p className="text-sm text-muted-foreground">Digital Solutions Inc • 2020 - 2022</p>
            <p className="mt-2">Developed and maintained multiple client projects using React, Node.js, and AWS.</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8 print:mb-4">
        <h2 className="text-2xl font-semibold mb-4 print:mb-2">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Master's in Computer Science</h3>
            <p className="text-sm text-muted-foreground">Tech University • 2018 - 2020</p>
            <p className="mt-2">Specialized in Software Engineering and Distributed Systems.</p>
          </div>
          <div>
            <h3 className="font-semibold">Bachelor's in Computer Science</h3>
            <p className="text-sm text-muted-foreground">State University • 2014 - 2018</p>
            <p className="mt-2">Dean's List. Founded the Web Development Club.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="print:mb-4">
        <h2 className="text-2xl font-semibold mb-4 print:mb-2">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Frontend</h3>
            <p>React, TypeScript, Tailwind CSS, Next.js</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Backend</h3>
            <p>Node.js, Express, PostgreSQL, AWS</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrintableResume;
