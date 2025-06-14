"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? "fade-in" : ""}`}>
          <h2 className="hero-name">Ayush Sharma</h2>
          <p className="hero-tagline">Backend Developer | Java + Spring Boot | Learning daily, scaling boldly.</p>
          <p className="hero-description">
            I'm a backend developer with strong expertise in Java, Spring Boot, REST APIs, and database design. I
            specialize in building scalable, efficient systems that power modern applications and drive business growth.
          </p>
          <a href="/resume.pdf" download className="cta-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>
        <div className={`hero-visual ${isVisible ? "slide-in" : ""}`}>
          <div className="code-window">
            <div className="window-header">
              <div className="window-controls">
                <span className="control close"></span>
                <span className="control minimize"></span>
                <span className="control maximize"></span>
              </div>
              <div className="window-title">BackendDeveloper.java</div>
            </div>
            <div className="code-content">
              <div className="line-numbers">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
              </div>
              <div className="code-text">
                <div>
                  <span className="keyword">public class</span> <span className="class-name">BackendDeveloper</span>{" "}
                  {"{"}
                </div>
                <div className="indent">
                  <span className="keyword">private String</span> name = <span className="string">"Ayush Sharma"</span>;
                </div>
                <div className="indent">
                  <span className="keyword">private String[]</span> skills = {"{"}
                </div>
                <div className="indent2">
                  <span className="string">"Java"</span>, <span className="string">"Spring Boot"</span>,
                </div>
                <div className="indent2">
                  <span className="string">"REST APIs"</span>, <span className="string">"PostgreSQL"</span>
                </div>
                <div className="indent2">
                  <span className="string">"Problem Solving"</span>, <span className="string">"System Design"</span>
                </div>
                <div className="indent">{"}"};</div>
                <div className="indent">
                  <span className="keyword">private boolean</span> passionate = <span className="boolean">true</span>;
                </div>
                <div className="indent">
                  <span className="keyword">private String</span> motto ={" "}
                  <span className="string">"Learning daily, scaling boldly"</span>;
                </div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .hero-content.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-name {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #fff, #e0f2fe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
        }

        .hero-tagline {
          font-size: 1.3rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          font-style: italic;
          opacity: 0.95;
          color: #e0f2fe;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          opacity: 0.9;
          color: #f0f9ff;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.15);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          font-size: 1rem;
        }

        .cta-button:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .hero-visual {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease 0.3s;
        }

        .hero-visual.slide-in {
          opacity: 1;
          transform: translateX(0);
        }

        .code-window {
          background: #1e293b;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .window-header {
          background: #334155;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .window-controls {
          display: flex;
          gap: 0.5rem;
        }

        .control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .control.close { background: #ef4444; }
        .control.minimize { background: #f59e0b; }
        .control.maximize { background: #10b981; }

        .window-title {
          color: #e2e8f0;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .code-content {
          padding: 1.5rem;
          font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.6;
          display: flex;
          gap: 1rem;
        }

        .line-numbers {
          display: flex;
          flex-direction: column;
          color: #64748b;
          font-size: 0.8rem;
          user-select: none;
        }

        .code-text {
          flex: 1;
        }

        .indent { padding-left: 2rem; }
        .indent2 { padding-left: 4rem; }

        .keyword { color: #f472b6; }
        .class-name { color: #60a5fa; }
        .string { color: #34d399; }
        .boolean { color: #fbbf24; }

        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-name {
            font-size: 2.5rem;
          }

          .hero-tagline {
            font-size: 1.1rem;
          }

          .code-content {
            font-size: 0.8rem;
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  )
}
