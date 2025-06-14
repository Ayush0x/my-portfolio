/**
 * ScrollToTop component
 * A client-side component that renders a "scroll to top" button
 * if the user has scrolled more than 300px from the top of the page.
 * Clicking the button will smoothly scroll the user back to the top of the page.
 */
"use client"

import { useState, useEffect } from "react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="18,15 12,9 6,15" />
          </svg>
        </button>
      )}

      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 50px;
          height: 50px;
          background: var(--accent-gradient);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
          z-index: 1000;
          animation: fadeInUp 0.3s ease;
        }

        .scroll-to-top:hover {
          transform: translateY(-3px) scale(1.1);
          box-shadow: var(--shadow-lg);
        }

        .scroll-to-top:active {
          transform: translateY(-1px) scale(1.05);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .scroll-to-top {
            bottom: 1.5rem;
            right: 1.5rem;
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </>
  )
}
