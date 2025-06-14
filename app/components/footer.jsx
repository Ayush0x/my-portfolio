/**### `Footer` Component

- **Purpose**:
  - The `Footer` component is designed to provide a consistent footer section across the application, displaying essential contact and social media links.

- **Features**:
  - Displays copyright information.
  - Provides links to email, LinkedIn, and GitHub profiles.
  - Contains responsive styling to ensure the footer looks good on all devices.

- **Structure**:
  - The component is wrapped in a `<footer>` tag with a class name `footer`.
  - Contains a main `<div>` with a class name `container` to center the content and provide padding.
  - Inside the container, there is another `<div>` with a class name `footer-content` that uses flexbox to layout the text and links.
  - Links are styled with hover effects for smooth transitions.

- **Styling**:
  - The footer has a dark background with white text for contrast.
  - Flexbox is used to align items horizontally and ensure proper spacing between elements.
  - The links have a transition effect to change opacity on hover for a visual cue.

- **Usage**:
  - Import and use the `Footer` component at the bottom of the main page or layout to ensure it is displayed on all pages.
  - Customize the links and text as needed to reflect the correct contact information and branding.*/
"use client"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">© 2025 Ayush Sharma. 💻 </p>
          <div className="footer-links">
            <a href="mailto:ayush251299@gmail.com" className="footer-link">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-sharma-script-sensei/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a href="https://github.com/Ayush0x" target="_blank" rel="noopener noreferrer" className="footer-link">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #1e293b;
          color: white;
          padding: 2rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-text {
          margin: 0;
          opacity: 0.9;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-link {
          color: white;
          text-decoration: none;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .footer-link:hover {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .footer-links {
            gap: 1.5rem;
          }
        }
      `}</style>
    </footer>
  )
}
