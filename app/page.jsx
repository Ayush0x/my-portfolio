/**
 * @file
 * @copyright 2023 Ayush Verma
 * @license MIT
 * @summary Portfolio application's main page
 * @description
 * This page composes all sections of the portfolio application.
 * It uses client-side rendering and Next.js's built-in
 * `useState` and `useEffect` hooks.
 */
"use client"

import { useState, useEffect } from "react"
import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Experience from "./components/experience"
import Education from "./components/education"
import Certifications from "./components/certifications"
import Contact from "./components/contact"
import Navigation from "./components/navigation"
import LoadingScreen from "./components/loading-screen"
import Footer from "./components/footer"
import ScrollToTop from "./components/scroll-to-top"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="portfolio">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
