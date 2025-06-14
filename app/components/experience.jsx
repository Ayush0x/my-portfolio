/**
 * Experience Component
 *
 * The `Experience` component provides a timeline of work experience.
 *
 * State:
 * - `isVisible`: A boolean indicating if the component is visible on the page.
 *
 * Functions:
 * - `handleScroll`: Handles scroll event, sets `isVisible` state when component is in view, and logs the event.
 *
 * Usage:
 * Include this component within a page to provide users with information about your work experience.
 * Ensure necessary styling and any additional logic for handling scroll event is implemented as needed.
 */
"use client"

import { useEffect, useRef, useState } from "react"

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Mere Nearby",
      period: "January 2024 - June 2024",
      location: "Remote",
      description:
        "Developed and maintained backend services using Java and Spring Boot. Collaborated with cross-functional teams to deliver scalable solutions for location-based services.",
      achievements: [
        "Built RESTful APIs serving 10,000+ daily requests",
        "Optimized database queries reducing response time by 40%",
        "Implemented JWT authentication and authorization",
        "Collaborated with frontend team for seamless integration",
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "Git"],
    },
    {
      title: "Freelance Backend Developer",
      company: "Self-Employed",
      period: "January 2025 - February 2025",
      location: "Remote",
      description:
        "Provided backend development services for various clients, focusing on building robust APIs, database design, and system architecture for small to medium-scale applications.",
      achievements: [
        "Delivered 3 complete backend systems on time",
        "Designed scalable database schemas for client projects",
        "Implemented secure authentication systems",
        "Provided technical consultation and code reviews",
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "AWS"],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="experience">
      <div className="container">
        <div className={`experience-content ${isVisible ? "fade-in" : ""}`}>
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className="timeline-item"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">{exp.title}</h3>
                      <h4 className="experience-company">{exp.company}</h4>
                    </div>
                    <div className="experience-meta">
                      <span className="experience-period">{exp.period}</span>
                      <span className="experience-location">{exp.location}</span>
                    </div>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  <div className="experience-achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="experience-technologies">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience {
          padding: 6rem 0;
          background: white;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .experience-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .experience-content.fade-in {
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

        .timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateX(-30px);
          animation: slideInLeft 0.6s ease forwards;
        }

        .timeline-marker {
          position: absolute;
          left: -2rem;
          top: 0.5rem;
          width: 1rem;
          height: 1rem;
          background: white;
          border: 3px solid #1e3a8a;
          border-radius: 50%;
          z-index: 1;
        }

        .timeline-content {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 15px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: var(--shadow-md);
          border-color: var(--border-hover);
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .experience-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.3rem;
        }

        .experience-company {
          font-size: 1.1rem;
          font-weight: 500;
          color: #1e3a8a;
        }

        .experience-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.2rem;
        }

        .experience-period {
          font-size: 0.9rem;
          font-weight: 500;
          color: #475569;
          background: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          border: 1px solid #e2e8f0;
        }

        .experience-location {
          font-size: 0.8rem;
          color: #64748b;
        }

        .experience-description {
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .experience-achievements h5 {
          color: #1e293b;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
        }

        .experience-achievements ul {
          list-style: none;
          padding: 0;
          margin-bottom: 1.5rem;
        }

        .experience-achievements li {
          color: #475569;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          position: relative;
          padding-left: 1.2rem;
        }

        .experience-achievements li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: #1e3a8a;
          font-weight: bold;
        }

        .experience-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: white;
          color: #1e3a8a;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid #bae6fd;
        }

        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .experience {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .timeline {
            padding-left: 1.5rem;
          }

          .timeline-marker {
            left: -1.5rem;
          }

          .experience-header {
            flex-direction: column;
            gap: 1rem;
          }

          .experience-meta {
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  )
}
