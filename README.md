# 🚀 BTF Kabir - Full-Stack Developer Portfolio

> **Built with ❤️ by [BTF Kabir](https://github.com/BTF-Kabir-2020)**

A modern, professional portfolio website built with Nuxt.js, Vue.js, and Tailwind CSS. Features a beautiful design with comprehensive SEO optimization, PWA capabilities, and an advanced todo list application.

[![Nuxt.js](https://img.shields.io/badge/Nuxt.js-4.1.0-00DC82?style=for-the-badge&logo=nuxt.js)](https://nuxt.com)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=for-the-badge&logo=vue.js)](https://vuejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

## ✨ Features

### 🎨 Modern Design & UI/UX

- **Beautiful Color Scheme**: Custom primary colors with soft gradients
- **Dark/Light Mode**: Automatic theme switching with system preference support
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Professional Layout**: Clean, modern design optimized for portfolios

### 📱 PWA & Mobile Experience

- **Progressive Web App**: Installable on mobile devices
- **Offline Support**: Service worker for offline functionality
- **App-like Experience**: Native app feel on mobile devices
- **Touch Optimized**: Mobile-friendly interactions and gestures

### 🚀 Advanced Todo Application

- **Core Features**: Add, edit, delete, and manage todos
- **Priority System**: Low, Medium, High priority levels
- **Due Date Management**: Set and track due dates
- **Search & Filter**: Advanced search and filtering capabilities
- **Local Storage**: Persistent data storage
- **Real-time Updates**: Instant UI updates

### 🔍 Comprehensive SEO

- **Meta Tags**: Complete meta information for all pages
- **Open Graph**: Social media optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: Schema.org markup for better search results
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Proper crawling instructions
- **Performance**: Optimized loading and rendering

### 🛠️ Technology Stack

#### Frontend Framework

- **Nuxt.js 4** - Vue.js framework with SSR/SSG capabilities
- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript development
- **Composition API** - Modern Vue 3 API

#### Styling & Design

- **Tailwind CSS** - Utility-first CSS framework
- **Custom Color Palette** - Professional color scheme
- **Responsive Grid** - Flexible layout system
- **Dark Mode Support** - Automatic theme switching

#### State Management

- **Pinia** - Intuitive state management for Vue
- **Composables** - Reusable logic and state
- **Local Storage** - Persistent data management

#### Build & Development

- **Nuxt Build System** - Optimized build toolchain
- **ESLint** - Code quality and consistency
- **Prettier** - Automatic code formatting
- **TypeScript** - Type safety and better DX

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm turbo 8+ (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/BTF-Kabir-2020/ToDo-Portfolio-Nuxt.git
cd ToDo-Portfolio-Nuxt

# Install dependencies
pnpm turbo install

# Start development server
pnpm turbo dev
```

### Available Commands

```bash
pnpm turbo dev          # Development server
pnpm turbo build        # Production build
pnpm turbo generate     # Static site generation
pnpm turbo preview      # Preview production build
pnpm turbo lint         # Code linting
pnpm turbo type-check   # TypeScript checking
```

## 📁 Project Structure

```
app/
├── assets/
│   └── css/
│       └── main.css          # Global styles and custom CSS
├── components/
│   ├── AppHeader.vue         # Main header component
│   ├── AppFooter.vue         # Footer component
│   ├── AppNavbar.vue         # Navigation component
│   └── TodoItem.vue          # Individual todo item
├── composables/
│   └── useTodos.ts           # Todo management logic
├── layouts/
│   └── default.vue           # Main layout wrapper
├── pages/
│   ├── index.vue             # Homepage with hero section
│   ├── about.vue             # About page
│   ├── todos.vue             # Todo application
│   └── contact.vue           # Contact information
├── stores/
│   ├── theme.ts              # Theme management
│   └── todos.ts              # Todo state management
├── app.vue                   # Root component
└── error.vue                 # Error handling page

public/
├── favicon.ico               # Site favicon
├── robots.txt                # Search engine crawling rules
├── sitemap.xml               # XML sitemap
├── site.webmanifest          # PWA manifest
└── browserconfig.xml         # Windows tile configuration
```

## 🎨 Design System

### Color Palette

- **Primary**: Professional blue tones (#0ea5e9)
- **Surface**: Clean white and dark surfaces
- **Background**: Subtle gradients and backgrounds
- **Text**: High contrast for readability
- **Accents**: Strategic use of primary colors

### Typography

- **Font Family**: Inter (system fallbacks)
- **Headings**: Bold weights for hierarchy
- **Body Text**: Optimized for readability
- **Responsive**: Scalable text sizes

### Components

- **Cards**: Soft shadows and rounded corners
- **Buttons**: Hover effects and transitions
- **Forms**: Clean, accessible form elements
- **Navigation**: Responsive navigation system

## 🔍 SEO Features

### Meta Tags

- Complete title, description, and keywords
- Open Graph tags for social sharing
- Twitter Card optimization
- Language and region specifications

### Technical SEO

- XML sitemap with proper priorities
- Robots.txt with crawling instructions
- Canonical URLs
- Structured data (Schema.org)

### Performance SEO

- Fast loading times
- Mobile optimization
- Accessibility improvements
- Core Web Vitals optimization

## 📱 PWA Features

### Web App Manifest

- App name and description
- Icons for different sizes
- Theme colors and display modes
- Shortcuts for quick access

### Service Worker

- Offline functionality
- Caching strategies
- Background sync
- Push notifications (ready)

## 🚀 Deployment

### Static Generation (Recommended)

```bash
pnpm turbo generate
# Deploy .output/public to any static hosting
```

### Server-Side Rendering

```bash
pnpm turbo build
# Deploy .output/server to Node.js hosting
```

### Hosting Platforms

- **Vercel**: Automatic deployments
- **Netlify**: Static hosting with forms
- **GitHub Pages**: Free hosting
- **AWS S3**: Enterprise hosting
- **Docker**: Containerized deployment

## 🧪 Development

### Code Quality

- **ESLint**: JavaScript/TypeScript linting
- **Prettier**: Code formatting
- **TypeScript**: Type safety
- **Vue SFC**: Single file components

### Testing

- **Unit Tests**: Component testing
- **E2E Tests**: End-to-end testing
- **Performance**: Lighthouse testing
- **Accessibility**: A11y testing

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines.

### Development Setup

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Code Standards

- Follow Vue.js style guide
- Use TypeScript for type safety
- Write meaningful commit messages
- Test your changes thoroughly

## 📞 Contact

- **GitHub**: [BTF Kabir](https://github.com/BTF-Kabir-2020)
- **Portfolio**: [Portfolio Website](/) (Current Domain)
- **Email**: PouyaGH2080@gmail.com

## 🌟 About the Developer

**BTF Kabir** is a passionate Full-Stack Developer with expertise in:

- **Frontend**: Vue.js, Nuxt.js, React, TypeScript
- **Backend**: Node.js, Python, Database design
- **Design**: UI/UX, Tailwind CSS, Responsive design
- **DevOps**: Docker, CI/CD, Cloud deployment
- **Performance**: Optimization, SEO, Core Web Vitals

---

**Built with ❤️ using Nuxt.js and modern web technologies.**
