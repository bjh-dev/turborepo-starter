<h1 style="display:flex; align-items:center;">
  <img src=".github/images/turbo-logo.avif" alt="Turborepo Logo" style="margin-right:10px;" height="32"> Turborepo Starter
</h1>

A modern, turbocharged monorepo template for building Next.js apps with **integrated content management**. Built for organizations that need to manage multiple websites with shared components and content schemas across different business units.

[![Stars](https://img.shields.io/github/stars/bjh-dev/turborepo-starter?style=social)](https://github.com/bjh-dev/turborepo-starter)
[![Node.js](https://img.shields.io/badge/Node.js-v20.19.2+-green)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-v10.6.2-orange)](https://pnpm.io/)
[![nextjs](https://img.shields.io/badge/Next.js-15.3.5-blue?logo=nextdotjs)](https://nextjs.org/)
[![tailwindcss](https://img.shields.io/badge/TailwindCSS-4.1.11-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![sanity](https://img.shields.io/badge/Sanity-CMS-orange?logo=sanity)](https://www.sanity.io/)

---

## 🎯 Project Overview

This Turborepo starter is designed for **multi-tenant content management systems** where you need to:

- **Manage multiple websites** for different business units
- **Share content components** across all sites
- **Maintain consistent schemas** while allowing customization
- **Scale development** with reusable, type-safe components
- **Accelerate content creation** with smart generators

Perfect for agencies, enterprises, or organizations managing multiple brands or business units under one content management system.

---

## ✨ Key Features

- **🎨 Modern Stack**: Next.js 15, Turborepo, Shadcn UI, TailwindCSS v4
- **📝 Content-First**: Integrated Sanity CMS with shared schemas
- **🔧 Smart Generators**: Rapid component development with Turborepo generators
- **🎯 Multi-Tenant Ready**: Designed for multiple business units/sites
- **🔒 Type Safety**: Full TypeScript integration throughout
- **🧪 Testing Ready**: Built-in testing and Storybook documentation
- **🐳 Docker Ready**: Containerized development environment
- **⚡ Performance**: Optimized builds with Turborepo caching

---

## 🗂️ Project Structure

```
├── apps/
│   ├── web/                # Next.js 15 app (main website)
│   └── studio/             # Sanity Studio (content management)
├── packages/
│   ├── ui/                 # Shadcn UI components & utilities
│   ├── components/         # Content components with Sanity schemas
│   ├── sanity-config/      # Shared Sanity configuration
│   └── typescript-config   # Shared TypeScript settings
├── turbo/
│   └── generators/         # Turborepo generators
├── docker-compose.yml      # Docker setup
├── turbo.json              # Turborepo config
└── pnpm-workspace.yaml     # Workspace definitions
```

---

## 🚀 Content Component System

### Component Generator

Generate complete content components with integrated Sanity CMS schemas:

```bash
pnpm turbo gen component
```

**What it creates:**
- Sanity schema definition
- GROQ query fragments
- React component with TypeScript
- Component tests
- Storybook stories
- Package exports

**Available templates:**
- **Basic**: Simple heading and text
- **Hero**: Full hero section with image and CTA
- **Card List**: Array of cards with images and links
- **Testimonial**: Quote with author information
- **Custom**: Empty template with examples

**Example usage:**
```bash
# Generate a hero component
pnpm turbo gen component
# → Component name: hero
# → Display name: Hero Section
# → Template: Hero
```

📖 **Full Documentation**: [Components Package README](./packages/components/README.md)

### Multi-Tenant Architecture

This starter is designed for organizations managing multiple websites:

```
Organization
├── Business Unit A
│   ├── Website A (Next.js app)
│   └── Sanity Project A
├── Business Unit B
│   ├── Website B (Next.js app)
│   └── Sanity Project B
└── Shared Components & Schemas
    ├── packages/components/
    └── packages/sanity-config/
```

**Benefits:**
- **Shared Components**: Reuse components across all business units
- **Consistent Schemas**: Maintain content structure standards
- **Independent Development**: Each business unit can customize as needed
- **Centralized Management**: Single source of truth for shared resources

---

## 🛠️ Get Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22.12.0+)
- [pnpm](https://pnpm.io/) (`npm i -g pnpm@10.6.2`)
- [Docker](https://www.docker.com/) (optional, for containerized dev)

### Setup

```bash
git clone https://github.com/bjh-dev/turborepo-starter.git
cd turborepo-starter
pnpm install
```

### Run Locally

```bash
pnpm dev           # Start the Next.js app
pnpm turbo check-types  # Type checking
```

### Build

```bash
pnpm build         # Build all apps and packages
```

### Docker

```bash
pnpm docker        # Launch with Docker Compose
pnpm docker:build  # Rebuild containers
```

---

## 🎨 Code Quality

Keep your code sharp with [Biome.js](https://biomejs.dev/):

```bash
pnpm format-write  # Format code
pnpm lint         # Check for issues
pnpm lint:fix     # Auto-fix issues
```

---

## 🌟 Advanced Features

- **Remote Caching**: Connect to [Vercel](https://vercel.com/) for faster builds:
  ```bash
  npx turbo login
  npx turbo link
  ```
- **Shared UI**: Reuse components and utilities from `packages/ui` across projects
- **Content Components**: Pre-built components with Sanity CMS integration
- **Multi-Environment**: Support for development, staging, and production environments

---

## 🗺️ Development Roadmap

### Phase 1: Foundation (Current)
- [x] **Component Generator System** - Complete with 5 templates
- [x] **Multi-Tenant Architecture** - Basic structure for multiple business units
- [x] **Documentation** - Comprehensive README and component docs
- [x] **Type Safety** - Full TypeScript integration

### Phase 2: Content Management (Next)
- [ ] **Sanity Studio Integration** - Set up shared studio configuration
- [ ] **Schema Registry** - Centralized schema management system
- [ ] **Content Migration Tools** - Helpers for schema updates
- [ ] **Multi-Project Sanity Setup** - Support for multiple Sanity projects

### Phase 3: Advanced Components (Upcoming)
- [ ] **More Component Templates** - FAQ, Pricing, Contact forms, etc.
- [ ] **Field Generator** - Add fields to existing components
- [ ] **Component Library** - Storybook with design system
- [ ] **Performance Optimization** - Lazy loading, code splitting

### Phase 4: Developer Experience (Future)
- [ ] **CLI Tools** - Command-line utilities for common tasks
- [ ] **Development Templates** - Quick-start templates for new business units
- [ ] **Testing Framework** - Enhanced testing utilities
- [ ] **Deployment Automation** - CI/CD for multi-tenant deployments

### Phase 5: Enterprise Features (Long-term)
- [ ] **Access Control** - Role-based permissions for content
- [ ] **Analytics Integration** - Content performance tracking
- [ ] **Internationalization** - Multi-language support
- [ ] **Advanced Caching** - Content delivery optimization

---

## 🤝 Contributing

This project is actively developed by [Bryan Hickey](https://github.com/bryanjhickey) and the team at [bjh-dev](https://github.com/bjh-dev/).

### Get Involved

- **Issues**: Report bugs or request features
- **Discussions**: Join conversations about architecture and features
- **Pull Requests**: Contribute code improvements
- **Documentation**: Help improve guides and examples

### Development Guidelines

1. **Use the generators** for new components
2. **Follow TypeScript** best practices
3. **Write tests** for new features
4. **Update documentation** when adding features
5. **Consider multi-tenant** implications

---

## 📚 Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/)
- [Components Package Documentation](./packages/components/README.md)

---

## 👨‍💻 About the Developer

**Bryan Hickey** is a senior React developer with expertise in:
- **Modern React Development** - Next.js, TypeScript, TailwindCSS
- **Content Management Systems** - Sanity CMS, headless CMS architecture
- **Monorepo Architecture** - Turborepo, pnpm workspaces
- **Developer Experience** - Generators, tooling, automation

**Connect:**
- [Personal GitHub](https://github.com/bryanjhickey)
- [Company GitHub](https://github.com/bjh-dev/)
- [Personal Website](https://bryanjhickey.com/)

---

Built with ❤️ by [Bryan Hickey](https://github.com/bryanjhickey) and [bjh-dev](https://github.com/bjh-dev/). Happy coding!