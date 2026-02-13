# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React.js personal portfolio website built with Create React App. Single-page application with smooth scroll navigation between sections.

## Commands

```bash
npm start       # Development server on localhost:3000
npm run build   # Production build to /build folder
npm test        # Run tests in watch mode
```

## Architecture

**Entry Point:** `src/index.js` renders `App.js` which sets up React Router and the Navbar.

**Page Structure:** `src/components/Pages/Home.js` is the main page that composes all sections:
- `Intro.js` - Hero section
- `AboutMe.js` - Bio with headshot
- `Experience.js` - Tabbed work experience viewer (EXPERIENCES constant array)
- `Work.js` - Project portfolio grid (PROJECTS constant array)

**Component Pattern:** Functional components with hooks. Each component has a co-located CSS file (e.g., `Navbar.js` + `Navbar.css`).

**Reusable Components:**
- `Button.js` - Supports variants: `btn--primary`, `btn--outline`, `btn--resume`
- `ButtonList.js` - Renders lists of buttons

**State Management:** Local React state only (useState/useEffect). No Redux or Context.

**Responsive Design:** Mobile breakpoint at 960px. Navbar toggles to hamburger menu on mobile.

## Styling

- CSS files co-located with components
- Color palette: Dark blue theme (#031f4b, #035b96, #b3cde0, #6497b1)
- Font: PT Sans
- Icons: Font Awesome via CDN + react-icons library

## Key Files for Content Updates

- `src/components/Experience.js` - Work experience data in EXPERIENCES array
- `src/components/Work.js` - Project portfolio data in PROJECTS array
- `src/components/Button.js` - Resume PDF import path
