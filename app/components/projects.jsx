/**
 * The Projects component displays a list of projects I have worked on.
 * It makes use of the `isVisible` state and `sectionRef` to control the visibility of the section.
 *
 * @return {ReactElement} The Projects component.
 */
"use client"

import { useEffect, useRef, useState } from "react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const projects = [
    {
      title: "Coaching Management System",
      description:
        "A comprehensive Spring Boot application for managing coaching institutes with JWT authentication, role-based access control (RBAC), student enrollment, course management, and payment tracking.",
      technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Hibernate"],
      features: [
        "JWT Authentication",
        "Role-Based Access Control",
        "Student Management",
        "Course Scheduling",
        "Payment Integration",
      ],
      github: "https://github.com/Ayush0x/coachingmanagementsystem",
      type: "Backend System",
    },
    {
      title: "Syncwave",
      description:
        "A real-time data synchronization platform built with Spring Boot. Handles backend logic, API development, and real-time data processing for seamless data sync across multiple clients and systems.",
      technologies: ["Java", "Spring Boot", "WebSocket", "PostgreSQL", "Redis", "Docker"],
      features: ["Real-time Sync", "Multi-client Support", "Data Validation", "Conflict Resolution", "API Gateway"],
      github: "https://github.com/Ayush0x/Syncwave",
      type: "Real-time Platform",
    },
    {
      title: "Budget Tracker",
      description:
        "A desktop application built with Java Swing for personal finance management. Features offline data storage, expense categorization, budget planning, and detailed financial reporting.",
      technologies: ["Java", "Swing", "SQLite", "JFreeChart", "Maven"],
      features: ["Offline Storage", "Expense Categories", "Budget Planning", "Financial Reports", "Data Export"],
      github: "https://github.com/Ayush0x",
      type: "Desktop Application",
    },
    {
      title: "CRM Attendance Module",
      description:
        "A backend module for CRM system handling employee attendance tracking, leave management, and generating comprehensive reporting dashboards with analytics. I have completed and delivered my module to the employer. The overall project is still under development and awaiting deployment.",
      technologies: ["Java", "Spring Boot", "MySQL", "JasperReports", "REST APIs"],
      features: [
        "Attendance Tracking",
        "Leave Management",
        "Report Generation",
        "Analytics Dashboard",
        "API Integration",
      ],
      github: "#",
      type: "Freelance Module (Completed - Awaiting Deployment)",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="projects">
      <div className="container">
        <div className={`projects-content ${isVisible ? "fade-in" : ""}`}>
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.title} className="project-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="project-header">
                  <div className="project-type">{project.type}</div>
                  <div className="project-links">
                    {project.github !== "#" && (
                      <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .projects {
          padding: 6rem 0;
          background: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .projects-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .projects-content.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 3rem;
          text-align: center;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          border-radius: 2px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
          animation: slideInUp 0.6s ease forwards;
        }

        .project-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: var(--shadow-lg);
          border-color: var(--border-hover);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .project-type {
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          color: #1e3a8a;
          transition: color 0.3s ease;
        }

        .project-link:hover {
          color: #3b82f6;
        }

        .project-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .project-description {
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: #e0f2fe;
          color: #0c4a6e;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid #bae6fd;
        }

        .project-features h4 {
          color: #1e293b;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .project-features ul {
          list-style: none;
          padding: 0;
        }

        .project-features li {
          color: #475569;
          font-size: 0.9rem;
          margin-bottom: 0.3rem;
          position: relative;
          padding-left: 1rem;
        }

        .project-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #1e3a8a;
          font-weight: bold;
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .projects {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  )
}
