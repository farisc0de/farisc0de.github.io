
import { useEffect } from "react";

const PrintableResume = () => {
  useEffect(() => {
    // Automatically trigger print dialog when the page loads
    window.print();
  }, []);

  return (
    <div className="max-w-[850px] mx-auto p-8 print:p-6 print:mx-0 print:shadow-none bg-white">
      {/* Personal Information */}
      <div className="space-y-2 text-center mb-8 print:mb-6 border-b pb-6">
        <h1 className="text-4xl font-bold text-gray-900">Your Name</h1>
        <p className="text-xl text-gray-600">Frontend Developer</p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-600 mt-2">
          <a href="mailto:your.email@example.com" className="hover:text-primary print:hover:text-current">
            your.email@example.com
          </a>
          <span className="hidden print:inline">•</span>
          <a href="https://github.com/yourusername" className="hover:text-primary print:hover:text-current">
            github.com/yourusername
          </a>
          <span className="hidden print:inline">•</span>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-primary print:hover:text-current">
            linkedin.com/in/yourusername
          </a>
        </div>
      </div>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 border-b mb-4 pb-1">Professional Experience</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-semibold text-gray-900">Senior Frontend Developer</h3>
                <p className="text-gray-600">Tech Innovation Corp</p>
              </div>
              <span className="text-sm text-gray-500">2022 - Present</span>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-600 pl-4 space-y-1">
              <li>Led frontend development team in building modern web applications using React and TypeScript</li>
              <li>Improved application performance by 40% through code optimization and lazy loading</li>
              <li>Mentored junior developers and implemented code review processes</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-semibold text-gray-900">Software Engineer</h3>
                <p className="text-gray-600">Digital Solutions Inc</p>
              </div>
              <span className="text-sm text-gray-500">2020 - 2022</span>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-600 pl-4 space-y-1">
              <li>Developed and maintained multiple client projects using React, Node.js, and AWS</li>
              <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
              <li>Collaborated with UX team to improve user interface designs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 border-b mb-4 pb-1">Education</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-semibold text-gray-900">Master's in Computer Science</h3>
                <p className="text-gray-600">Tech University</p>
              </div>
              <span className="text-sm text-gray-500">2018 - 2020</span>
            </div>
            <p className="text-sm text-gray-600 pl-4">Specialized in Software Engineering and Distributed Systems</p>
          </div>
          <div>
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-semibold text-gray-900">Bachelor's in Computer Science</h3>
                <p className="text-gray-600">State University</p>
              </div>
              <span className="text-sm text-gray-500">2014 - 2018</span>
            </div>
            <p className="text-sm text-gray-600 pl-4">Dean's List. Founded the Web Development Club</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 border-b mb-4 pb-1">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Frontend Development</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>React, TypeScript, Next.js</li>
              <li>Tailwind CSS, CSS-in-JS</li>
              <li>Redux, React Query</li>
              <li>Jest, React Testing Library</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Backend & Tools</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Node.js, Express</li>
              <li>PostgreSQL, MongoDB</li>
              <li>AWS, Docker</li>
              <li>Git, CI/CD</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Print styles */}
      <style type="text/css" media="print">
        {`
          @page {
            margin: 0.5in;
            size: letter;
          }
        `}
      </style>
    </div>
  );
};

export default PrintableResume;
