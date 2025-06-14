"use client"

import { useEffect, useRef, useState } from "react"

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const certifications = [
    {
      title: "5-star Java Badge",
      issuer: "HackerRank",
      date: "2024",
      type: "Programming",
      description:
        "Achieved 5-star rating in Java programming challenges, demonstrating advanced proficiency in Java concepts and problem-solving.",
      icon: "⭐",
    },
    {
      title: "Java Certification",
      issuer: "HackerRank",
      date: "2024",
      type: "Programming",
      description:
        "Certified in Java programming fundamentals, object-oriented programming, and advanced Java concepts.",
      icon: "☕",
    },
    {
      title: "SQL Certification",
      issuer: "HackerRank",
      date: "2024",
      type: "Database",
      description:
        "Certified in SQL database management, complex queries, joins, and database optimization techniques.",
      icon: "🗄️",
    },
  ]

  const achievements = [
    {
      title: "Regional Science Quiz Competitor",
      description:
        "Participated in regional-level science quiz competitions, demonstrating strong analytical and problem-solving skills.",
      year: "2016-2017",
      icon: "🏆",
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
    <section id="certifications" ref={sectionRef} className="certifications">
      <div className="container">
        <div className={`certifications-content ${isVisible ? "fade-in" : ""}`}>
          <h2 className="section-title">Certifications & Achievements</h2>

          <div className="section-grid">
            <div className="certifications-section">
              <h3 className="subsection-title">Certifications</h3>
              <div className="cards-grid">
                {certifications.map((cert, index) => (
                  <div key={cert.title} className="cert-card" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="cert-icon">{cert.icon}</div>
                    <div className="cert-content">
                      <h4 className="cert-title">{cert.title}</h4>
                      <div className="cert-meta">
                        <span className="cert-issuer">{cert.issuer}</span>
                        <span className="cert-date">{cert.date}</span>
                      </div>
                      <span className="cert-type">{cert.type}</span>
                      <p className="cert-description">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="achievements-section">
              <h3 className="subsection-title">Achievements</h3>
              <div className="cards-grid">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    className="achievement-card"
                    style={{ animationDelay: `${(certifications.length + index) * 0.2}s` }}
                  >
                    <div className="achievement-icon">{achievement.icon}</div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">{achievement.title}</h4>
                      <span className="achievement-year">{achievement.year}</span>
                      <p className="achievement-description">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .certifications {
          padding: 6rem 0;
          background: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .certifications-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .certifications-content.fade-in {
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

        .section-grid {
          display: grid;
          gap: 3rem;
        }

        .subsection-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 2rem;
          text-align: center;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .cert-card, .achievement-card {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 15px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          animation: slideInUp 0.6s ease forwards;
        }

        .cert-card:hover, .achievement-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: var(--shadow-md);
          border-color: var(--border-hover);
        }

        .cert-icon, .achievement-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
          display: block;
        }

        .cert-title, .achievement-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .cert-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .cert-issuer {
          font-weight: 500;
          color: #1e3a8a;
        }

        .cert-date, .achievement-year {
          background: #e0f2fe;
          color: #0c4a6e;
          padding: 0.2rem 0.6rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .cert-type {
          background: #dcfce7;
          color: #166534;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .cert-description, .achievement-description {
          color: #475569;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .certifications {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
