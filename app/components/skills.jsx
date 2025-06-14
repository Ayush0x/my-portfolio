"use client"

import { useEffect, useRef, useState } from "react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 70 },
        { name: "Python", level: 50 },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Spring Boot", level: 70 },
        { name: "Spring MVC", level: 75 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 75 },
        { name: "PostgreSQL", level: 75 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Docker", level: 70 },
        { name: "Git", level: 80 },
        { name: "Postman", level: 80 },
        { name: "Flyway", level: 70 },
      ],
    },
    {
      title: "Testing",
      skills: [
        { name: "JUnit", level: 80 },
        { name: "Mockito", level: 75 },
      ],
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
    <section id="skills" ref={sectionRef} className="skills">
      <div className="container">
        <div className={`skills-content ${isVisible ? "fade-in" : ""}`}>
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="skill-category"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="skill-item"
                      style={{ animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s` }}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills {
          padding: 6rem 0;
          background: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .skills-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .skills-content.fade-in {
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

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 15px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          animation: slideInUp 0.6s ease forwards;
        }

        .skill-category:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: var(--shadow-md);
          border-color: var(--border-hover);
        }

        .category-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1e3a8a;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skill-item {
          opacity: 0;
          transform: translateX(-20px);
          animation: slideInLeft 0.6s ease forwards;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-weight: 500;
          color: #334155;
          font-size: 0.95rem;
        }

        .skill-percentage {
          font-size: 0.85rem;
          color: #1e3a8a;
          font-weight: 600;
        }

        .skill-bar {
          height: 6px;
          background: #e2e8f0;
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          border-radius: 3px;
          transition: width 1s ease;
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .skills {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .skill-category {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}
