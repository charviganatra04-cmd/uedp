# Figma-to-React Design System & Storybook Generator

A production-ready, high-fidelity React Storybook design system library generated directly from Figma design tokens and component canvas layer specifications.

---

## 🌟 Overview

This repository hosts a synchronized React & Storybook design system adhering strictly to Figma layer names and design tokens:
- **Design Tokens**: Extracted directly from `base-palette-tokens.json` and `foundational-tokens.json`.
- **Preserved Layer Naming**: React components accurately reflect Figma canvas nodes (e.g. `Component 336`, `Filters`, `Component 315`, `Date filters`, `Zones`, `Map`).
- **Strict Token Aliasing**: Component styles directly bind to CSS custom properties (`--uedp-*`) mapped from Figma Variable IDs.
- **Interactive Storybook**: Native controls (`argTypes`) and Markdown Component Spec Tables on every story.
- **Analytics & Deployment**: GA4 tracking integration and Vercel SPA deployment configuration.

---

## 📁 Repository Structure

```
├── base-palette-tokens.json       # Base color palette tokens (244 tokens)
├── foundational-tokens.json       # Geometry, spacing, radii tokens (80 tokens)
├── design-system-storybook/       # React + Vite + Storybook project
│   ├── .storybook/
│   │   ├── main.ts                # Storybook framework & addons
│   │   ├── preview.ts             # Global preview & token CSS import
│   │   └── preview-head.html      # Google Analytics 4 (GA4) script
│   ├── scripts/
│   │   ├── generate-tokens.js     # Token parser -> figma-tokens.css
│   │   ├── figma-sync.js          # Figma REST API canvas discovery
│   │   └── deploy-vercel.js       # Pre-deployment validation check
│   ├── src/
│   │   ├── components/            # Preserved Figma React components
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Component315/      # "Component 315"
│   │   │   ├── Component336/      # "Component 336"
│   │   │   ├── Container/
│   │   │   ├── DateFilters/       # "Date filters"
│   │   │   ├── Filters/           # "Filters"
│   │   │   ├── Header/
│   │   │   ├── Input/
│   │   │   ├── Map/               # "Map"
│   │   │   ├── SearchBar/
│   │   │   └── Zones/             # "Zones"
│   │   ├── stories/
│   │   │   └── Tokens/            # Interactive Color & Foundational stories
│   │   ├── styles/
│   │   │   └── figma-tokens.css   # Generated CSS custom properties
│   │   └── index.ts               # Single barrel export
│   ├── package.json
│   ├── tsconfig.json
│   ├── vercel.json                # Static SPA deployment config
│   └── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
cd design-system-storybook
npm install
```

### Synchronize Design Tokens
To regenerate `src/styles/figma-tokens.css` from the token JSON files:
```bash
npm run generate-tokens
```

### Launch Storybook Dev Server
```bash
npm run dev
# or
npm run storybook
```
Open [http://localhost:6006](http://localhost:6006) to inspect components and interactive token galleries.

### Build for Production / Vercel
```bash
npm run build-storybook
```
The static build outputs to `storybook-static/` and is immediately deployable to Vercel.

### Pre-Deployment Verification
```bash
npm run deploy-check
```
Executes TypeScript type checking (`tsc --noEmit`) and verifies the static Storybook production bundle.

---

## 📄 License
MIT
