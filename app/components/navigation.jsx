/**
 * Navigation Component
 *
 * This component represents a responsive navigation bar for the portfolio application.
 *
 * Features:
 * - Smooth scrolling to sections
 * - Active section highlighting
 * - Mobile-responsive menu
 *
 * State:
 * - `isScrolled`: Boolean state to track if the page has been scrolled.
 * - `isMobileMenuOpen`: Boolean state to track if the mobile menu is open.
 *
 * Effects:
 * - Sets up an event listener to handle scroll events for updating the `isScrolled` state.
 *
 * Methods:
 * - `scrollToSection`: Scrolls smoothly to a specific section by its ID and closes the mobile menu.
 *
 * Usage:
 * This component should be used as a part of the main page layout to provide navigation functionality.
 */
"use client"

import { useState, useEffect } from "react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span>AS</span>
          </div>

          <div className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="nav-link">
                {item.label}
              </button>
            ))}
          </div>

          <div className="nav-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <style jsx>{`
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    z-index: 1000;
    border-bottom: 1px solid var(--border-color);
  }

  [data-theme="dark"] .navbar {
    background: rgba(15, 23, 42, 0.95);
  }

  .navbar.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: var(--shadow-md);
  }

  [data-theme="dark"] .navbar.scrolled {
    background: rgba(15, 23, 42, 0.98);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-logo span {
    font-size: 1.8rem;
    font-weight: 800;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .nav-menu {
    display: flex;
    gap: 2.5rem;
  }

  .nav-link {
    background: none;
    border: none;
    color: var(--text-secondary);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    font-size: 0.95rem;
  }

  .nav-link:hover {
    color: var(--accent-primary);
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-gradient);
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .nav-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }

  .nav-toggle span {
    width: 25px;
    height: 3px;
    background: var(--text-secondary);
    margin: 3px 0;
    transition: 0.3s;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    .nav-menu {
      position: fixed;
      left: -100%;
      top: 70px;
      flex-direction: column;
      background: var(--bg-primary);
      width: 100%;
      text-align: center;
      transition: 0.3s;
      box-shadow: var(--shadow-md);
      padding: 2rem 0;
      gap: 1.5rem;
    }

    .nav-menu.active {
      left: 0;
    }

    .nav-toggle {
      display: flex;
    }
  }
`}</style>
    </>
  )
}
