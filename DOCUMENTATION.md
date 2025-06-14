# Portfolio Application Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Component Documentation](#component-documentation)
4. [Styling System](#styling-system)
5. [State Management](#state-management)
6. [Theming](#theming)
7. [Performance Optimizations](#performance-optimizations)
8. [Environment Variables](#environment-variables)
9. [Deployment](#deployment)
10. [Testing](#testing)
11. [Troubleshooting](#troubleshooting)
12. [Contributing](#contributing)
13. [License](#license)

## Introduction

This documentation provides a comprehensive guide to the portfolio application built with Next.js and React. The application serves as a professional portfolio showcasing skills, projects, experience, and contact information.

## Project Structure

```
my-portfolio/
├── app/                    # Next.js App Router directory
│   ├── components/         # Reusable React components
│   │   ├── about.jsx       # About section component
│   │   ├── certifications.jsx # Certifications showcase
│   │   ├── contact.jsx     # Contact form component
│   │   ├── education.jsx   # Education history
│   │   ├── experience.jsx  # Work experience timeline
│   │   ├── footer.jsx      # Footer component
│   │   ├── hero.jsx        # Hero/landing section
│   │   ├── loading-screen.jsx # Loading animation
│   │   ├── navigation.jsx  # Navigation bar
│   │   ├── projects.jsx    # Projects showcase
│   │   ├── scroll-to-top.jsx # Scroll to top button
│   │   ├── skills.jsx      # Skills section
│   │   └── theme-provider.jsx # Theme context provider
│   ├── globals.css         # Global styles
│   ├── layout.jsx          # Root layout component
│   └── page.jsx            # Main page component
├── public/                 # Static assets
│   ├── images/             # Image assets
│   └── favicon.ico         # Favicon
├── .gitignore
├── package.json            # Dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
└── tailwind.config.js      # Tailwind CSS configuration
```

## Component Documentation

### 1. Root Components

#### `layout.jsx`
- **Purpose**: Root layout wrapper for the entire application
- **Features**:
  - Sets up HTML document structure
  - Wraps content with ThemeProvider for theme management
  - Applies global styles

#### `page.jsx`
- **Purpose**: Main page component that composes all sections
- **State**:
  - `isLoading`: Controls loading screen visibility
- **Lifecycle**:
  - Shows loading screen for 2.5 seconds on initial load
  - Renders all portfolio sections in order

### 2. Core Components

#### `Navigation.jsx`
- **Purpose**: Responsive navigation bar
- **Features**:
  - Smooth scrolling to sections
  - Active section highlighting
  - Mobile-responsive menu

#### `Hero.jsx`
- **Purpose**: Landing/intro section
- **Features**:
  - Animated introduction text
  - Call-to-action buttons
  - Social media links

#### `About.jsx`
- **Purpose**: Personal introduction and about section
- **Content**:
  - Personal bio
  - Professional summary
  - Key highlights

#### `Skills.jsx`
- **Purpose**: Skills and technologies showcase
- **Features**:
  - Categorized skills (e.g., Frontend, Backend, Tools)
  - Visual proficiency indicators
  - Interactive hover effects

#### `Projects.jsx`
- **Purpose**: Portfolio projects showcase
- **Features**:
  - Project cards with images
  - Tags for technologies used
  - Links to live demos and source code
  - Filtering by technology

#### `Experience.jsx` & `Education.jsx`
- **Purpose**: Professional background
- **Features**:
  - Timeline layout
  - Company/Institution details
  - Date ranges and descriptions
  - Responsive design

#### `Contact.jsx`
- **Purpose**: Contact form and information
- **Features**:
  - Form validation
  - Email integration
  - Alternative contact methods
  - Social media links

#### `ScrollToTop.jsx`
- **Purpose**: Scroll-to-top button
- **Behavior**:
  - Appears when scrolling down
  - Smooth scroll to top on click
  - Customizable appearance

## Styling System

The application uses Tailwind CSS for styling with the following approach:

### Design Tokens
- **Colors**: Defined in `tailwind.config.js`
- **Typography**: Custom font stack and sizing
- **Spacing**: Consistent spacing scale
- **Breakpoints**: Mobile-first responsive design

### CSS Architecture
- **Global Styles**: In `globals.css`
- **Component Styles**: Scoped using Tailwind's utility classes
- **Animations**: Using Tailwind's animation utilities and custom keyframes

## Theming

The application supports light and dark modes using a theme context:

### ThemeProvider
- **Location**: `components/theme-provider.jsx`
- **Features**:
  - Context-based theme management
  - System preference detection
  - Theme persistence using localStorage

### Theme Toggle
- **Implementation**: In Navigation component
- **Behavior**:
  - Toggles between light/dark/system
  - Updates in real-time
  - Persists user preference

## Performance Optimizations

1. **Code Splitting**:
   - Automatic with Next.js
   - Components are lazy-loaded

2. **Image Optimization**:
   - Next.js Image component
   - Proper sizing and formats

3. **Font Optimization**:
   - Using `next/font`
   - Font display strategies

4. **Bundle Analysis**:
   - `@next/bundle-analyzer`
   - Production build optimization

## Environment Variables

Create a `.env.local` file for environment-specific configurations:

```
# Contact Form
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (optional)
NEXT_PUBLIC_GA_TRACKING_ID=your_ga_id
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub/GitLab/Bitbucket
2. Import repository in Vercel
3. Configure environment variables
4. Deploy

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Testing

### Unit Tests
```bash
npm test
```

### Linting
```bash
npm run lint
```

## Troubleshooting

### Common Issues
1. **Theme not persisting**
   - Clear localStorage
   - Check theme provider implementation

2. **Form submission issues**
   - Verify EmailJS configuration
   - Check network requests in browser dev tools

3. **Performance problems**
   - Run production build
   - Check bundle size
   - Optimize images

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
