# dev-portfolio

A small repository to manage my software engineering portfolio.
Built with Vite, React, and Tailwind.

## Local Development

### Prerequisites

- Node.js (version 14 or higher recommended)
- yarn package manager

### Setup Instructions

1. **Install dependencies**

   ```bash
   yarn install
   ```

2. **Start the development server**

   ```bash
   yarn dev
   ```

3. **Open your browser**
   - The app will be available at `http://localhost:5173` (or the port shown in your terminal)
   - The page will automatically reload when you make changes

### Other Available Commands

- **Build for production**: `yarn build`
- **Preview production build**: `yarn preview`
- **Run linter**: `yarn lint`

## Tech Stack

This portfolio is built using modern web technologies to ensure fast performance, maintainability, and an excellent user experience.

### Core Framework & Build Tools

- **[Vite](https://vitejs.dev/)** - Next-generation frontend build tool that provides lightning-fast development server and optimized production builds. Used for bundling, hot module replacement (HMR), and overall project build configuration.

- **[React](https://react.dev/)** - Modern JavaScript library for building user interfaces with component-based architecture. Used throughout the application to create reusable UI components (Navbar, Footer, Hero, Projects, About, etc.).

- **[React Router DOM](https://reactrouter.com/)** - Declarative routing library for React applications. Enables client-side navigation between pages (Home and Contact pages) without full page reloads, creating a smooth single-page application (SPA) experience.

### Styling & Design

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework used for rapid UI development. Provides consistent spacing, colors, and responsive design utilities. Custom color palette (primary and accent) is defined in `tailwind.config.js` for brand consistency.

- **[Sass/SCSS](https://sass-lang.com/)** - CSS preprocessor used for component-specific styling. Provides features like variables, mixins, and nested selectors. Each component has its own SCSS file for modular styling (e.g., `navbar.scss`, `hero.scss`, `projects.scss`).

- **[PostCSS](https://postcss.org/)** & **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS processing tools that automatically add vendor prefixes and ensure cross-browser compatibility.

### Animation & Visual Effects

- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library for React. Used to create smooth animations, transitions, and interactive gestures throughout the portfolio for enhanced user experience.

- **[Particles.js](https://github.com/VincentGarreau/particles.js/)** - Lightweight JavaScript library for creating interactive particle effects. Used to add dynamic background animations and visual interest to the portfolio.

### UI Components & Icons

- React Icons

- **[React Social Icons](https://github.com/couetilc/react-social-icons)** - React component library for displaying social media icons. Used in the Footer component to render clickable social media links with branded icons.

### Development Tools

- **[ESLint](https://eslint.org/)** - JavaScript linter that identifies and fixes problems in code. Configured with React-specific plugins to enforce code quality and best practices.

- **[Prettier](https://prettier.io/)** - Opinionated code formatter that ensures consistent code style across the project. Automatically formats code on save and during pre-commit hooks.

- **[Husky](https://typicode.github.io/husky/)** - Git hooks manager that runs scripts at different Git lifecycle events. Used to enforce code quality by running linters and formatters before commits.

- **[lint-staged](https://github.com/okonet/lint-staged)** - Runs linters on Git staged files only. Configured to run Prettier on staged files before commits, ensuring only formatted code is committed.
