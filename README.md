# Ayush's Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. This portfolio showcases my skills, projects, experience, and provides a way to get in touch.

## 🚀 Features

- **Responsive Design**: Looks great on all devices
- **Modern UI**: Clean and professional interface with smooth animations
- **Dark/Light Mode**: Toggle between light and dark themes
- **Sections**:
  - Hero section with introduction
  - About me
  - Skills & Technologies
  - Work Experience
  - Education
  - Projects
  - Certifications
  - Contact Form
- **Interactive Elements**: Smooth scrolling, animations, and hover effects
- **Performance Optimized**: Built with Next.js for optimal performance

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Animation**: Framer Motion
- **Form Handling**: React Hook Form
- **Type Safety**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ayush0x/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Project Structure

```
my-portfolio/
├── app/                    # App router directory
│   ├── components/         # Reusable components
│   │   ├── about.jsx       # About section
│   │   ├── certifications.jsx # Certifications section
│   │   ├── contact.jsx     # Contact form
│   │   ├── education.jsx   # Education section
│   │   ├── experience.jsx  # Work experience
│   │   ├── footer.jsx      # Footer component
│   │   ├── hero.jsx        # Hero section
│   │   ├── loading-screen.jsx # Loading animation
│   │   ├── navigation.jsx  # Navigation bar
│   │   ├── projects.jsx    # Projects showcase
│   │   ├── scroll-to-top.jsx # Scroll to top button
│   │   ├── skills.jsx      # Skills section
│   │   └── theme-provider.jsx # Theme context
│   ├── globals.css         # Global styles
│   ├── layout.jsx          # Root layout
│   └── page.jsx            # Main page component
├── public/                 # Static files
├── .gitignore
├── package.json
├── postcss.config.mjs
└── tailwind.config.js
```

## 🔧 Customization

1. **Update Personal Information**:
   - Edit the relevant sections in the component files under `app/components/`
   - Update the hero section in `hero.jsx`
   - Modify the about section in `about.jsx`

2. **Update Projects**:
   - Edit the `projects.jsx` file to add/remove projects
   - Update project images in the `public/` directory

3. **Update Experience & Education**:
   - Modify `experience.jsx` and `education.jsx` with your details

4. **Theming**:
   - Customize colors in `tailwind.config.js`
   - Update theme settings in `theme-provider.jsx`

## 🚀 Deployment

Deploy your portfolio to Vercel:

1. Push your code to a GitHub repository
2. Sign in to [Vercel](https://vercel.com/)
3. Click "New Project"
4. Import your GitHub repository
5. Configure project settings (if needed)
6. Click "Deploy"

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📬 Contact

- GitHub: [@Ayush0x](https://github.com/Ayush0x)
- Email: [ayush251299@gmail.com]
- Portfolio: [Your Portfolio URL]

---

