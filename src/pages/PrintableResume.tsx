import { useEffect } from "react";

// Personal Information
const personalInfo = {
  name: "Faris AL-Otaibi",
  title: "Sr. DevOps Engineer",
  location: "Riyadh, Saudi Arabia",
  email: "f.m-alotaibi@outlook.sa",
  phone: "+966547677046",
  github: "github.com/farisc0de",
  summary:
    "DevOps Engineer with over two years of experience specializing in automation for scalable infrastructure at Misk Foundation; led the design of an automated DevOps infrastructure achieving a 100% deployment success rate while boosting system reliability by 90%. Recognized with the Misk Values Award for mentoring three interns and enhancing operational workflows through Ansible scripting that reduced manual intervention time by 85%.",
};

// Experience
const experience = [
  {
    title: "Sr. DevOps Engineer",
    company: "Misk Foundation",
    period: "Nov 2022 - Present",
    achievements: [
      "Led the design and implementation of an automated DevOps infrastructure using Azure DevOps, achieving a 100% deployment success rate",
      "Collaborated with the team to integrate Autoscaling on Oracle OCI, enhancing infrastructure scalability and boosting system reliability and performance by 90% during peak traffic",
      "Developed scripts leveraging Ansible aimed at enhancing operational workflows; decreased average manual intervention times per task from two hours down to just thirty minutes",
      "Developed and deployed Docker containers for a WordPress site using Docker Swarm with Traefik load balancing, achieving a 30% improvement in website performance",
      "Standardized and reconfigured infrastructure versions and configurations, achieving a 40% increase in compliance with security controls",
      "Introduced K6 load testing tools to Misk infrastructure, enhancing load testing capabilities and supporting performance optimization efforts",
      "Mentored and guided 3 interns, providing technical training and career advice",
      "Executed the migration of Misk Foundation's critical servers to CIS Level 2 Compliance on Red Hat OS, resulting in a 90% increase in security compliance",
    ],
  },
];

// Education
const education = [
  {
    degree: "B.Sc. in Computer Science",
    school: "Taif University",
    period: "Sep 2017 - Jun 2022",
  },
];

// Skills
const skills = {
  devopsCloud: [
    "Azure DevOps, Oracle OCI",
    "Docker, OpenShift",
    "Ansible, Terraform",
    "CI/CD, Shell Scripting (Bash)",
  ],
  monitoringDev: [
    "Grafana (Loki & LogQL)",
    "ELK Stack, Cloudflare",
    "PHP, MySQL, MongoDB",
    "Linux Administration",
  ],
};

// Projects
const projects = [
  {
    title: "Migration of Misk Infrastructure to Red Hat OS",
    period: "Jan 2025 - Present",
    description: "",
  },
  {
    title: "Misk Global Forum V-Platform Infrastructure",
    period: "Sep 2024 - Nov 2024",
    description:
      "Enhanced platform infrastructure by integrating CDN caching and optimizing MySQL configurations, resulting in a 60% improvement in loading speeds while maintaining support for over 10,000 concurrent users.",
  },
  {
    title: "Server & Application Configuration Standardization",
    period: "Sep 2024 - Oct 2024",
    description:
      "Led a project to standardize configurations across 20 servers and 25 applications, achieving 95% alignment across environments, reducing deployment time by 40%, and enhancing security by 25%.",
  },
  {
    title: "Infrastructure Automation, Ansible Adaptation",
    period: "Jan 2024 - Oct 2024",
    description:
      "Deployed Ansible automation alongside a comprehensive security playbook, resulting in enhanced infrastructure management efficiency, yielding an operational time savings of 30 hours monthly across the IT team.",
  },
  {
    title: "DevOps Implementation, Azure DevOps",
    period: "Jul 2024 - Oct 2024",
    description:
      "Planned, designed, and implemented DevOps process using Azure DevOps, tested across environments, and achieved a 100% success rate in deploying the new infrastructure on all Misk websites.",
  },
];

// Professional Development
const professionalDevelopment = {
  columnOne: [
    "Grafana Loki, KodeKloud (Aug 2024)",
    "The 7 Habits of Highly Effective People 4.0, FranklinCovey (May 2024)",
    "The 5 Choices to Extraordinary Productivity®, FranklinCovey (Jan 2024)",
    "Kubernetes for the Absolute Beginners, KodeKloud (Jan 2024)",
    "Software Development: Better Requirements Gathering Skills (Mar 2023)",
  ],
  columnTwo: [
    "Cloud Computing with Microsoft Azure Virtual Experience (Aug 2022)",
    "Linux Redhat Certified Administrator (RHCSA 8) (May 2022)",
    "APIs in PHP: from Basic to Advanced (Jan 2022)",
    "AWS Cloud Technical Essentials (Jan 2022)",
    "Git from Basics to Advanced: Practical Guide for Developers (Feb 2021)",
  ],
};

// Certifications
const certifications = [
  "STEP (Score: 91/100)",
  "ITIL® v4 - Axelos",
  "Microsoft Azure Fundamentals - Microsoft",
  "English Proficiency: B2 (EnglishScore)",
];

// Awards & Achievements
const awards = [
  {
    title: "Misk Values Award",
    description:
      "Recognition for mentoring three interns and enhancing operational workflows",
  },
  {
    title: "DevOps Excellence",
    description:
      "Achieved 100% deployment success rate in automated DevOps infrastructure",
  },
  {
    title: "System Reliability Achievement",
    description:
      "Improved system reliability by 90% through infrastructure optimization",
  },
  {
    title: "Automation Excellence",
    description:
      "Reduced manual intervention time by 85% through Ansible scripting",
  },
];

const PrintableResume = () => {
  useEffect(() => {
    window.print();
  }, []);

  return (
    <div className="print:!bg-white print:!text-black min-h-screen">
      <style>
        {`
          @media print {
            #lovable-badge,
            .fixed.top-4.right-4,
             {
              display: none !important;
            }
            
            html {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            html.dark {
              color-scheme: light !important;
            }

            html.dark * {
              color: black !important;
              background-color: transparent !important;
              border-color: #ddd !important;
            }

            @page {
              size: A4;
              margin: 0;
            }

            body {
              background: none !important;
              padding: 0 !important;
              margin: 0 !important;
              width: 210mm;
              height: 297mm;
            }
          }
        `}
      </style>

      <div className="max-w-[210mm] mx-auto p-8 print:p-[15mm] print:mx-0 print:shadow-none bg-white min-h-[297mm]">
        {/* Personal Information */}
        <div className="space-y-2 text-center mb-8 print:mb-6">
          <h1 className="text-4xl font-bold print:text-3xl text-gray-900">
            {personalInfo.name}
          </h1>
          <p className="text-xl text-gray-600 print:text-lg">
            {personalInfo.title}
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-600 mt-2 print:text-xs">
            <span>{personalInfo.location}</span>
            <span>•</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-primary print:text-gray-600 print:no-underline"
            >
              {personalInfo.email}
            </a>
            <span>•</span>
            <a
              href={`tel:${personalInfo.phone}`}
              className="hover:text-primary print:text-gray-600 print:no-underline"
            >
              {personalInfo.phone}
            </a>
            <span>•</span>
            <a
              href={`https://${personalInfo.github}`}
              className="hover:text-primary print:text-gray-600 print:no-underline"
            >
              {personalInfo.github}
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-4 max-w-3xl mx-auto print:text-xs print:mt-2 leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>

        {/* Experience (Priority 1) */}
        <section className="mb-6 print:mb-4">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 mb-4 pb-2 print:text-lg print:mb-2">
            Professional Experience
          </h2>
          <div className="space-y-4 print:space-y-2">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900 print:text-base">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 print:text-sm">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 print:text-xs">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-600 pl-4 space-y-1 print:text-xs print:space-y-0.5">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Awards & Achievements (Priority 2) */}
        <section className="mb-6 print:mb-4">
          <h2 className="text-xl font-bold text-gray-900 border-b mb-4 pb-1 print:text-lg print:mb-2">
            Awards & Achievements
          </h2>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 print:text-xs print:space-y-0.5">
            {awards.map((award, index) => (
              <li key={index}>
                <span className="font-medium">{award.title}:</span>{" "}
                {award.description}
              </li>
            ))}
          </ul>
        </section>

        {/* Skills (Priority 3) */}
        <section className="mb-6 print:mb-4">
          <h2 className="text-xl font-bold text-gray-900 border-b mb-4 pb-1 print:text-lg print:mb-2">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm print:gap-2">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 print:text-sm print:mb-1">
                DevOps & Cloud
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 print:text-xs print:space-y-0.5">
                {skills.devopsCloud.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 print:text-sm print:mb-1">
                Monitoring & Development
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 print:text-xs print:space-y-0.5">
                {skills.monitoringDev.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projects (Priority 4) */}
        <section className="mb-6 print:mb-4">
          <h2 className="text-xl font-bold text-gray-900 border-b mb-4 pb-1 print:text-lg print:mb-2">
            Projects
          </h2>
          <div className="space-y-4 print:space-y-2">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900 print:text-base">
                      {project.title}
                    </h3>
                    {project.description && (
                      <p className="text-sm text-gray-600 print:text-xs">
                        {project.description}
                      </p>
                    )}
                  </div>
                  <span className="text-sm text-gray-500 print:text-xs whitespace-nowrap ml-4">
                    {project.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Development (Priority 5) */}
        <section className="mb-6 print:mb-4">
          <h2 className="text-xl font-bold text-gray-900 border-b mb-4 pb-1 print:text-lg print:mb-2">
            Professional Development
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm print:gap-2">
            <ul className="list-disc list-inside text-gray-600 space-y-1 print:text-xs print:space-y-0.5">
              {professionalDevelopment.columnOne.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
            <ul className="list-disc list-inside text-gray-600 space-y-1 print:text-xs print:space-y-0.5">
              {professionalDevelopment.columnTwo.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Certifications (Priority 6) */}
        <section className="mb-6 print:mb-4">
          <h2 className="text-xl font-bold text-gray-900 border-b mb-4 pb-1 print:text-lg print:mb-2">
            Certifications
          </h2>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 print:text-xs print:space-y-0.5">
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>

        {/* Education (Priority 7) */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 border-b mb-4 pb-1 print:text-lg print:mb-2">
            Education
          </h2>
          <div className="space-y-4 print:space-y-2">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900 print:text-base">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 print:text-sm">{edu.school}</p>
                  </div>
                  <span className="text-sm text-gray-500 print:text-xs">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrintableResume;
