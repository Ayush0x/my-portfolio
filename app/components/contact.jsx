/**
 * Contact Component
 *
 * The `Contact` component provides a form for users to send a message. It manages form state and handles input changes and form submission.
 *
 * State:
 * - `isVisible`: A boolean indicating if the component is visible on the page.
 * - `formData`: An object containing the form input values: `name`, `email`, and `message`.
 *
 * Functions:
 * - `handleInputChange`: Updates `formData` state when form inputs change.
 * - `handleSubmit`: Handles form submission, prevents default form behavior, logs form data, displays a thank-you alert, and resets the form.
 *
 * Usage:
 * Include this component within a page to provide users with a way to contact you. Ensure necessary styling and any additional logic for handling form submission is implemented as needed.
 */
"use client"

import { useEffect, useRef, useState } from "react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const sectionRef = useRef(null)

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" ref={sectionRef} className="contact">
      <div className="container">
        <div className={`contact-content ${isVisible ? "fade-in" : ""}`}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology and backend development. Let's connect!
          </p>

          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:ayush251299@gmail.com" className="contact-link">
                    ayush251299@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <h3>LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/ayush-sharma-script-sensei/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    linkedin.com/in/ayush-sharma
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <h3>GitHub</h3>
                  <a
                    href="https://github.com/Ayush0x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    github.com/ayush-sharma
                  </a>
                </div>
              </div>
            </div>

            <form
  className="contact-form"
  action="https://formspree.io/f/xeogbqyg"  // <-- replace with your actual endpoint
  method="POST"
>
  <div className="form-group">
    <input type="text" name="name" placeholder="Your Name" required />
  </div>
  <div className="form-group">
    <input type="email" name="email" placeholder="Your Email" required />
  </div>
  <div className="form-group">
    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
  </div>
  <button type="submit" className="submit-btn">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22,2 15,22 11,13 2,9 22,2" />
    </svg>
    Send Message
  </button>
</form>

          </div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          padding: 6rem 0;
          background: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .contact-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .contact-content.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
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

        .contact-subtitle {
          text-align: center;
          color: #475569;
          font-size: 1.1rem;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: white;
          border-radius: 15px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: var(--shadow-md);
          border-color: var(--border-hover);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .contact-item h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.3rem;
        }

        .contact-link {
          color: #1e3a8a;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: #3b82f6;
        }

        .contact-form {
          background: var(--bg-primary);
          padding: 2.5rem;
          border-radius: 15px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
        }

        .contact-form:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          background: #f8fafc;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #1e3a8a;
          background: white;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(30, 58, 138, 0.3);
        }

        @media (max-width: 768px) {
          .contact {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .contact-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-item {
            flex-direction: column;
            text-align: center;
          }

          .contact-form {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  )
}
