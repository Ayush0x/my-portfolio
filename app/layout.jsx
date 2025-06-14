/* <<<<<<<<<<<<<<  ✨ Windsurf Command ⭐ >>>>>>>>>>>>>>>> */
/**
 * RootLayout Component
 *
 * @component
 *
 * @description
 * The RootLayout component serves as the primary layout wrapper for the entire application.
    */
import { ThemeProvider } from "./components/theme-provider"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
