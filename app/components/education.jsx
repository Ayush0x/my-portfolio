/**
 * Education Component
 *
 * The `Education` component provides a timeline of academic qualifications.
 *
 * State:
 * - `isVisible`: A boolean indicating if the component is visible on the page.
 *
 * Functions:
 * - `handleScroll`: Handles scroll event, sets `isVisible` state when component is in view, and logs the event.
 *
 * Usage:
 * Include this component within a page to provide users with information about your education.
 * Ensure necessary styling and any additional logic for handling scroll event is implemented as needed.
 */
"use client"

import { useEffect, useRef, useState } from "react"

export default function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "DIT University",
      period: "2023 - 2025",
      cgpa: "8.0",
      status: "Completed",
      description:
        "Specialized in software development, database management, and system design. Focused on backend technologies and enterprise application development.",
      subjects: ["Advanced Java", "Database Management", "Software Engineering", "System Design", "Web Technologies"],
    },
    {
      degree: "Bachelor of Science in Physics",
      institution: "DIT University",
      period: "2019 - 2022",
      cgpa: "7.0",
      status: "Completed",
      description:
        "Strong foundation in analytical thinking, problem-solving, and mathematical concepts that complement programming skills.",
      subjects: ["Mathematics", "Physics", "Statistics", "Computer Science", "Research Methodology"],
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
    <section id="education" ref={sectionRef} className="education">
      <div className="container">
        <div className={`education-content ${isVisible ? "fade-in" : ""}`}>
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={edu.degree} className="education-card" style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="education-header">
                  <div className="education-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div className="education-status">{edu.status}</div>
                </div>
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <div className="education-meta">
                  <span className="education-period">{edu.period}</span>
                  <span className="education-cgpa">CGPA: {edu.cgpa}</span>
                </div>
                <p className="education-description">{edu.description}</p>
                <div className="education-subjects">
                  <h5>Key Subjects:</h5>
                  <div className="subjects-list">
                    {edu.subjects.map((subject) => (
                      <span key={subject} className="subject-tag">
                        {subject}
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
        .education {
          padding: 6rem 0;
          background: #f8fafc;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .education-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .education-content.fade-in {
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

        .education-grid {
          display: grid;
          gap: 2rem;
        }

        .education-card {
          background: white;
          padding: 2.5rem;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
          animation: slideInUp 0.6s ease forwards;
        }

        .education-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: var(--shadow-lg);
          border-color: var(--border-hover);
        }

        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .education-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .education-status {
          background: #dcfce7;
          color: #166534;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid #bbf7d0;
        }

        .education-degree {
          font-size: 1.4rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .education-institution {
          font-size: 1.1rem;
          font-weight: 500;
          color: #1e3a8a;
          margin-bottom: 1rem;
        }

        .education-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .education-period {
          background: #f1f5f9;
          color: #475569;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid #e2e8f0;
        }

        .education-cgpa {
          background: #e0f2fe;
          color: #0c4a6e;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid #bae6fd;
        }

        .education-description {
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .education-subjects h5 {
          color: #1e293b;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
        }

        .subjects-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .subject-tag {
          background: #f1f5f9;
          color: #334155;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid #e2e8f0;
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .education {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .education-card {
            padding: 2rem;
          }

          .education-meta {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  )
}
