# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Mauricio Lavilla's portfolio website built with Astro, React, TailwindCSS, and TypeScript. The project features a modern, dark-themed portfolio with bilingual support (Spanish/English), interactive effects, Firebase integration, and responsive design.

## Common Development Commands

### Development
- `npm run dev` or `npm start` - Start development server (runs on port 4321)
- `npm run build` - Build for production (includes Astro type checking)
- `npm run preview` - Preview production build locally
- `astro check` - Run Astro type checking

### Code Quality
- `prettier` - Code formatting (configured with prettier-plugin-astro)

### Important Notes
- Always run `astro check` before building to catch TypeScript errors
- The build command includes type checking (`astro check && astro build`)

## Architecture Overview

### Tech Stack
- **Framework**: Astro 5.3.0 (SSG with static output)
- **Styling**: TailwindCSS 3.4.14
- **React Integration**: @astrojs/react for interactive components
- **TypeScript**: Full TypeScript support throughout
- **Database**: Firebase Firestore
- **Analytics**: Google Analytics + Vercel Speed Insights
- **Deployment**: Vercel (site: https://mauriciolavilla.net)

### Project Structure
```
src/
├── components/          # Astro components (.astro files)
│   ├── nav.astro       # Navigation component
│   ├── home.astro      # Main hero section
│   ├── projects.astro  # Project showcase
│   ├── contact.astro   # Contact form
│   ├── footer.astro    # Footer with Spotify embed
│   └── ...
├── React/              # React components (.tsx files)
│   ├── LetterGlitch.tsx # Text glitch effect component
│   ├── LikeButton.tsx   # Interactive like button
│   └── SkillsList.tsx   # Skills display component
├── layouts/
│   └── Layout.astro    # Main layout with SEO, analytics, Matrix effects
├── pages/
│   ├── index.astro     # Homepage
│   └── recfis.astro    # Additional page
├── translations.ts     # Bilingual content (ES/EN)
└── firebase.ts         # Firebase configuration
```

### Key Architectural Patterns

#### Component Architecture
- **Astro Components**: Used for static/server-side content (navigation, layout, content sections)
- **React Components**: Used for interactive features requiring client-side state (like buttons, forms)
- **Hybrid Approach**: Astro serves static content with selective React hydration for interactivity

#### Internationalization System
- Centralized translations in `src/translations.ts`
- Functions: `getTranslations(language)` and `t(key, language)`
- Support for nested translation keys using dot notation
- Default language: Spanish ('es'), fallback to Spanish if key not found

#### Styling Strategy
- TailwindCSS for utility-first styling
- CSS custom properties for theming (--background, --sec, --white, etc.)
- Global styles in Layout.astro for animations and effects
- Responsive design with mobile-first approach

#### Performance Optimizations
- Static site generation (SSG) with Astro
- Preloaded fonts and critical resources
- Mobile detection for disabling heavy animations
- Parallax effects disabled on mobile devices
- Canvas-based particle effects only on desktop

### Special Features

#### Interactive Effects
- **Particle Network**: Canvas-based animated particle system (desktop only)
- **Matrix Effect**: Triggered by clicking the π admin button, includes:
  - Matrix rain animation
  - Glitch lines
  - Hacking text sequence
  - Screen distortion effects
- **Parallax Scrolling**: Multi-layer parallax background (desktop only)
- **Smooth Scrolling**: Custom easing function for navigation

#### SEO & Analytics
- Comprehensive meta tags and Open Graph data
- Structured data (JSON-LD) for Person schema
- Google Analytics integration with gtag
- Vercel Speed Insights
- Optimized loading with preconnect and preload

#### Firebase Integration
- Firestore database configuration
- Environment variables for Firebase config
- Used for storing contact form submissions and analytics

### Development Guidelines

#### File Organization
- Use `.astro` files for static content and layout
- Use `.tsx` files in `/React/` for interactive components
- Keep translations centralized in `translations.ts`
- Place global styles in Layout.astro

#### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Disable resource-intensive effects on mobile
- Test animations on both desktop and mobile

#### Performance Considerations
- Heavy animations (parallax, particles) are desktop-only
- Use `transform3d()` and `will-change` for optimized animations
- Throttle scroll events for better performance
- Implement mobile detection to skip heavy computations

#### Astro-Specific Conventions
- Use `---` frontmatter for component logic
- Import React components with `client:` directives when needed
- Utilize Astro's built-in optimizations for images and assets
- Follow Astro's island architecture pattern

### Environment Setup
- Requires Node.js and npm
- Firebase environment variables needed for database connection
- Development server runs on `http://localhost:4321`
- Supports hot reload for both Astro and React components

### Important Notes
- The project uses a custom admin access system with Matrix-themed effects
- Spotify embed integration in footer requires manual embed code updates
- All animations respect `prefers-reduced-motion` accessibility setting
- Color scheme follows a purple-theme with CSS custom properties