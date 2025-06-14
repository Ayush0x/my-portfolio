"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const tools = [
    "Java",
    "Python",
    "Spring Boot",
    "Spring MVC",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "Git",
    "Postman",
    "Flyway",
    "JUnit",
    "Mockito",
    "REST APIs",
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
    <section id="about" ref={sectionRef} className="about">
      <div className="container">
        <div className={`about-content ${isVisible ? "fade-in" : ""}`}>
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a recent MCA graduate with a passion for building robust, scalable backend systems. My journey in
                software development has been driven by curiosity and a commitment to continuous learning.
              </p>
              <p>
                With hands-on experience in freelance backend development, I've developed a deep understanding of system
                architecture, database optimization, and API design. I thrive on solving complex problems and turning
                ideas into efficient, maintainable code.
              </p>
              <p>
                My expertise lies in creating scalable system designs that can handle growth and adapt to changing
                business needs. I believe in writing clean, well-documented code that stands the test of time.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community.
              </p>
            </div>
            <div className="tools-section">
              <h3>Key Tools & Technologies</h3>
              <div className="tools-grid">
                {tools.map((tool, index) => (
                  <span key={tool} className="tool-tag" style={{ animationDelay: `${index * 0.1}s` }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
  .about {
    padding: 6rem 0;
    background: var(--bg-secondary);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .about-content {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .about-content.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-primary);
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
    background: var(--accent-gradient);
    border-radius: 2px;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .about-text {
    transition: transform 0.3s ease;
  }

  .about-text:hover {
    transform: translateY(-5px);
  }

  .tools-section {
    transition: transform 0.3s ease;
  }

  .tools-section:hover {
    transform: translateY(-5px);
  }

  .about-text p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    transition: color 0.3s ease;
  }

  .about-text p:hover {
    color: var(--text-primary);
  }

  .tools-section h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }

  .tools-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .tool-tag {
    background: var(--bg-primary);
    color: var(--accent-primary);
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 2px solid var(--border-color);
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
    animation: slideInUp 0.6s ease forwards;
  }

  .tool-tag:hover {
    background: var(--accent-primary);
    color: var(--bg-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }

  @keyframes slideInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .about {
      padding: 4rem 0;
    }

    .section-title {
      font-size: 2rem;
    }

    .about-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .about-text p {
      font-size: 1rem;
    }
  }
`}</style>
    </section>
  )
}
