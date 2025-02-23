
import { useEffect } from "react";

const PrintableResume = () => {
  useEffect(() => {
    window.print();
  }, []);

  return (
    <div className="max-w-[850px] mx-auto p-8 print:p-6 print:mx-0 print:shadow-none bg-white">
      {/* Personal Information */}
      <div className="space-y-2 text-center mb-8 print:mb-6 border-b pb-6">
        <h1 className="text-4xl font-bold text-gray-900 print:text-3xl">Faris AL-Otaibi</h1>
        <p className="text-xl text-gray-600 print:text-lg">Sr. DevOps Engineer</p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-600 mt-2 print:text-xs">
          <span>Riyadh, Saudi Arabia</span>
          <span className="print:inline">•</span>
          <a href="mailto:f.m-alotaibi@outlook.sa" className="hover:text-primary print:hover:text-current">
            f.m-alotaibi@outlook.sa
          </a>
          <span className="print:inline">•</span>
          <a href="tel:+966547677046" className="hover:text-primary print:hover:text-current">
            +966547677046
          </a>
          <span className="print:inline">•</span>
          <a href="https://github.com/farisc0de" className="hover:text-primary print:hover:text-current">
            github.com/farisc0de
          </a>
        </div>
        <p className="text-sm text-gray-600 mt-4 max-w-3xl mx-auto print:text-xs print:mt-2">
          DevOps Engineer with over two years of experience specializing in automation for scalable infrastructure at Misk Foundation; 
          led the design of an automated DevOps infrastructure achieving a 100% deployment success rate while boosting system reliability by 90%. 
          Recognized with the Misk Values Award for mentoring three interns and enhancing operational workflows through Ansible scripting that reduced manual intervention time by 85%.
        </p>
      </div>

      {/* Experience */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-xl font-bold text-gray-900 border-b mb-4 pb-1 print:text-lg print:mb-2">Professional Experience</h2>
        <div className="space-y-4 print:space-y-2">
          <div>
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-semibold text-gray-900 print:text-base">Sr. DevOps Engineer</h3>
                <p className="text-gray-600 print:text-sm">Misk Foundation</p>
              </div>
              <span className="text-sm text-gray-500 print:text-xs">Nov 2022 - Present</span>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-600 pl-4 space-y-1 print:text-xs print:space-y-0.5">
              <li>Led the design and implementation of an automated DevOps infrastructure using Azure DevOps, achieving a 100% deployment success rate</li>
              <li>Collaborated with the team to integrate Autoscaling on Oracle OCI, enhancing infrastructure scalability and boosting system reliability and performance by 90% during peak traffic</li>
              <li>Developed scripts leveraging Ansible aimed at enhancing operational workflows; decreased average manual intervention times per task from two hours down to just thirty minutes</li>
              <li>Developed and deployed Docker containers for a WordPress site using Docker Swarm with Traefik load balancing, achieving a 30% improvement in website performance</li>
              <li>Standardized and reconfigured infrastructure versions and configurations, achieving a 40% increase in compliance with security controls</li>
              <li>Introduced K6 load testing tools to Misk infrastructure, enhancing load testing capabilities and supporting performance optimization efforts</li>
              <li>Mentored and guided 3 interns, providing technical training and career advice</li>
              <li>Executed the migration of Misk Foundation's critical servers to CIS Level 2 Compliance on Red Hat OS, resulting in a 90% increase in security compliance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-xl font-bold text-gray-900 border-b mb-4 pb-1 print:text-lg print:mb-2">Education</h2>
        <div className="space-y-4 print:space-y-2">
          <div>
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-semibold text-gray-900 print:text-base">B.Sc. in Computer Science</h3>
                <p className="text-gray-600 print:text-sm">Taif University</p>
              </div>
              <span className="text-sm text-gray-500 print:text-xs">Sep 2017 - Jun 2022</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-xl font-bold text-gray-900 border-b mb-4 pb-1 print:text-lg print:mb-2">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-4 text-sm print:gap-2">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 print:text-sm print:mb-1">DevOps & Cloud</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 print:text-xs print:space-y-0.5">
              <li>Azure DevOps, Oracle OCI</li>
              <li>Docker, OpenShift</li>
              <li>Ansible, Terraform</li>
              <li>CI/CD, Shell Scripting (Bash)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 print:text-sm print:mb-1">Monitoring & Development</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 print:text-xs print:space-y-0.5">
              <li>Grafana (Loki & LogQL)</li>
              <li>ELK Stack, Cloudflare</li>
              <li>PHP, MySQL, MongoDB</li>
              <li>Linux Administration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-xl font-bold text-gray-900 border-b mb-4 pb-1 print:text-lg print:mb-2">Projects</h2>
        <div className="space-y-4 print:space-y-2">
          <div>
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-semibold text-gray-900 print:text-base">Migration of Misk Infrastructure to Red Hat OS</h3>
              </div>
              <span className="text-sm text-gray-500 print:text-xs whitespace-nowrap ml-4">Jan 2025 - Present</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-semibold text-gray-900 print:text-base">Misk Global Forum V-Platform Infrastructure</h3>
                <p className="text-sm text-gray-600 print:text-xs">Enhanced platform infrastructure by integrating CDN caching and optimizing MySQL configurations, resulting in a 60% improvement in loading speeds while maintaining support for over 10,000 concurrent users.</p>
              </div>
              <span className="text-sm text-gray-500 print:text-xs whitespace-nowrap ml-4">Sep 2024 - Nov 2024</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-semibold text-gray-900 print:text-base">Server & Application Configuration Standardization</h3>
                <p className="text-sm text-gray-600 print:text-xs">Led a project to standardize configurations across 20 servers and 25 applications, achieving 95% alignment across environments, reducing deployment time by 40%, and enhancing security by 25%.</p>
              </div>
              <span className="text-sm text-gray-500 print:text-xs whitespace-nowrap ml-4">Sep 2024 - Oct 2024</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-semibold text-gray-900 print:text-base">Infrastructure Automation, Ansible Adaptation</h3>
                <p className="text-sm text-gray-600 print:text-xs">Deployed Ansible automation alongside a comprehensive security playbook, resulting in enhanced infrastructure management efficiency, yielding an operational time savings of 30 hours monthly across the IT team.</p>
              </div>
              <span className="text-sm text-gray-500 print:text-xs whitespace-nowrap ml-4">Jan 2024 - Oct 2024</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-semibold text-gray-900 print:text-base">DevOps Implementation, Azure DevOps</h3>
                <p className="text-sm text-gray-600 print:text-xs">Planned, designed, and implemented DevOps process using Azure DevOps, tested across environments, and achieved a 100% success rate in deploying the new infrastructure on all Misk websites.</p>
              </div>
              <span className="text-sm text-gray-500 print:text-xs whitespace-nowrap ml-4">Jul 2024 - Oct 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-xl font-bold text-gray-900 border-b mb-4 pb-1 print:text-lg print:mb-2">Professional Development</h2>
        <div className="grid grid-cols-2 gap-4 text-sm print:gap-2">
          <ul className="list-disc list-inside text-gray-600 space-y-1 print:text-xs print:space-y-0.5">
            <li>Grafana Loki, KodeKloud (Aug 2024)</li>
            <li>The 7 Habits of Highly Effective People 4.0, FranklinCovey (May 2024)</li>
            <li>The 5 Choices to Extraordinary Productivity®, FranklinCovey (Jan 2024)</li>
            <li>Kubernetes for the Absolute Beginners, KodeKloud (Jan 2024)</li>
            <li>Software Development: Better Requirements Gathering Skills (Mar 2023)</li>
          </ul>
          <ul className="list-disc list-inside text-gray-600 space-y-1 print:text-xs print:space-y-0.5">
            <li>Cloud Computing with Microsoft Azure Virtual Experience (Aug 2022)</li>
            <li>Linux Redhat Certified Administrator (RHCSA 8) (May 2022)</li>
            <li>APIs in PHP: from Basic to Advanced (Jan 2022)</li>
            <li>AWS Cloud Technical Essentials (Jan 2022)</li>
            <li>Git from Basics to Advanced: Practical Guide for Developers (Feb 2021)</li>
          </ul>
        </div>
      </section>

      {/* Awards */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-xl font-bold text-gray-900 border-b mb-4 pb-1 print:text-lg print:mb-2">Awards</h2>
        <div className="space-y-2 print:space-y-1">
          <div>
            <h3 className="font-semibold text-gray-900 print:text-base">Misk Values Award</h3>
            <p className="text-sm text-gray-600 print:text-xs">The Misk Values Award is given to employees who exemplify the core values of the Misk Foundation.</p>
            <p className="text-sm text-gray-500 print:text-xs">Jan 2024</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 border-b mb-4 pb-1 print:text-lg print:mb-2">Certifications</h2>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 print:text-xs print:space-y-0.5">
          <li>STEP (Score: 91/100)</li>
          <li>ITIL® v4 - Axelos</li>
          <li>Microsoft Azure Fundamentals - Microsoft</li>
          <li>English Proficiency: B2 (EnglishScore)</li>
        </ul>
      </section>

      {/* Print styles */}
      <style type="text/css" media="print">
        {`
          @page {
            margin: 0.4in;
            size: letter;
          }
          
          @media print {
            html, body {
              height: 100%;
              margin: 0;
              padding: 0;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          }
        `}
      </style>
    </div>
  );
};

export default PrintableResume;