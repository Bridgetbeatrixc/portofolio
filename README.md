# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- Clean, component-based architecture
- Responsive design
- Smooth scrolling navigation
- Interactive project filters
- Timeline experience section
- Modern gradient design

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add placeholder images to the `public` folder:
   - `placeholder-girl.jpg` - Hero section image
   - `placeholder-project.jpg` - Project card images
   - `placeholder-logo.jpg` - Education logos

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Projects section
│   ├── Experience.tsx    # Experience timeline
│   ├── Education.tsx     # Education section
│   ├── Achievements.tsx  # Achievements section
│   └── Footer.tsx        # Footer
└── public/               # Static assets
```

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Customization

All components are modular and can be easily customized. Update the content in each component file to match your personal information.

