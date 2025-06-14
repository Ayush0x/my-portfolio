/**
 * ThemeProvider component
 *
 * @description
 * Provides a theme context to the entire application,
 * allowing components to access the current theme
 * and to switch between light and dark modes.
 *
 * @example
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 */
"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    // Set initial theme based on system preference
    setTheme(mediaQuery.matches ? "dark" : "light")

    // Listen for future system theme changes
    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light")
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
