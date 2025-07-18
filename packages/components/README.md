# Components Package

This package contains reusable content components with integrated Sanity CMS schemas. Each component is a complete, self-contained unit that includes everything needed for content management, rendering, testing, and documentation.

## 🎯 Overview

Each component includes:

- **Sanity Schema**: Content structure definition for the CMS
- **GROQ Query**: Data fetching fragments for Sanity
- **React Component**: UI implementation with TypeScript
- **TypeScript Types**: Full type safety throughout
- **Tests**: Component testing with Vitest and React Testing Library
- **Storybook Stories**: Component documentation and examples

## 🚀 Quick Start

### Generate a New Component

```bash
bun turbo gen component
```

Follow the prompts to:

1. Enter a component name (e.g., `hero`, `testimonial`)
2. Choose a display name (e.g., `Hero Section`)
3. Select a template (Basic, Hero, Card List, Testimonial, or Custom)
4. Optionally include examples (for custom templates)

### Use a Component

```tsx
import { HeroComponent } from '@repo/components/hero'

export default function HomePage() {
  return (
    <HeroComponent
      heading="Welcome to Our Platform"
      subheading="Build amazing things with confidence"
      image="/hero-image.jpg"
      imageAlt="Hero background"
      cta={{
        label: "Get Started",
        link: "/signup"
      }}
    />
  )
}
```

## 📋 Available Templates

### Hero Template ✅ Available

Full hero section with heading, subheading, background image, and call-to-action button.

```tsx
<HeroComponent
  heading="Build Amazing Things"
  subheading="Create with confidence"
  image="/hero.jpg"
  imageAlt="Hero background"
  cta={{ label: "Get Started", link: "/signup" }}
/>
```

**Fields**: `heading` (required), `subheading`, `image` (with alt text), `cta` (label + link)

### Basic Template

Simple heading and text content - perfect for introductory sections.

```tsx
<BasicComponent 
  heading="Welcome" 
  text="This is a simple component" 
/>
```

**Fields**: `heading` (required), `text` (optional)

### Card List Template

Section with a heading and an array of cards, each with title, description, image, and link.

```tsx
<CardListComponent
  heading="Our Services"
  cards={[
    { 
      title: "Web Development", 
      description: "Custom web applications", 
      image: "/web-dev.jpg",
      imageAlt: "Web development",
      link: "/services/web-dev" 
    },
    // ... more cards
  ]}
/>
```

**Fields**: `heading` (required), `cards[]` (array of card objects)

### Testimonial Template

Quote with author information and optional author image.

```tsx
<TestimonialComponent
  quote="This platform has transformed how we build applications!"
  author={{ 
    name: "Sarah Johnson", 
    title: "CTO", 
    company: "TechCorp" 
  }}
  image="/sarah.jpg"
  imageAlt="Sarah Johnson"
/>
```

**Fields**: `quote` (required), `author` (name, title, company), `image` (with alt text)

### Custom Template

Empty template with example comments - use when you need a completely custom component.

**Features**: Includes commented examples of common Sanity field types for reference.

## 📁 Component Structure

Each generated component follows this structure:

```text
packages/components/[component-name]/
├── [component-name].schema.ts    # Sanity schema definition
├── [component-name].query.ts     # GROQ query fragments
├── [component-name].component.tsx # React component
├── [component-name].types.ts     # TypeScript interfaces
├── [component-name].test.tsx     # Component tests
├── [component-name].stories.tsx  # Storybook stories
└── index.ts                      # Component exports
```

## 🔧 Integration with Sanity

### 1. Add Schema to Sanity Studio

```tsx
// sanity.config.ts
import { heroSchema } from '@repo/components/hero'

export default defineConfig({
  // ... other config
  schema: {
    types: [
      heroSchema,
      // ... other schemas
    ],
  },
})
```

### 2. Use in Content Blocks

```tsx
// In your page schema
defineField({
  name: 'blocks',
  title: 'Content Blocks',
  type: 'array',
  of: [
    { type: 'hero' },
    { type: 'testimonial' },
    // ... other block types
  ],
})
```

### 3. Query Data with GROQ

```tsx
import { heroFragment, testimonialFragment } from '@repo/components'

const pageQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    title,
    blocks[]{
      ${heroFragment},
      ${testimonialFragment}
    }
  }
`
```

### 4. Render in Your App

```tsx
import { HeroComponent, TestimonialComponent } from '@repo/components'

export default function Page({ data }) {
  return (
    <div>
      {data.blocks.map((block) => {
        switch (block._type) {
          case 'hero':
            return (
              <HeroComponent
                key={block._key}
                heading={block.heading}
                subheading={block.subheading}
                image={block.image}
                imageAlt={block.imageAlt}
                cta={block.cta}
              />
            )
          case 'testimonial':
            return (
              <TestimonialComponent
                key={block._key}
                quote={block.quote}
                author={block.author}
                image={block.image}
                imageAlt={block.imageAlt}
              />
            )
          default:
            return null
        }
      })}
    </div>
  )
}
```

## 🎨 Styling and Customization

### Using className Prop

All components accept a `className` prop for custom styling:

```tsx
<HeroComponent
  heading="Custom Hero"
  className="bg-gradient-to-r from-blue-500 to-purple-600"
/>
```

### Tailwind CSS Integration

Components use Tailwind CSS classes and integrate with your design system:

```tsx
// Components use semantic color classes
<HeroComponent
  heading="Styled Hero"
  className="bg-primary text-primary-foreground"
/>
```

### Custom Styling

You can override component styles by modifying the generated `.component.tsx` file:

```tsx
// In hero.component.tsx
export function HeroComponent({ heading, className }: HeroComponentProps) {
  return (
    <section className={cn('py-16 bg-gradient-to-br from-blue-50 to-indigo-100', className)}>
      {/* Your custom styling */}
    </section>
  )
}
```

## 🧪 Testing

Each component includes comprehensive tests:

```bash
# Run tests for all components
bun test

# Run tests for a specific component
bun test packages/components/hero
```

### Test Examples

```tsx
// Generated test file includes:
describe('HeroComponent', () => {
  it('renders hero content', () => {
    const props = {
      heading: 'Hero Title',
      subheading: 'Hero subtitle',
      image: '/test-image.jpg',
      imageAlt: 'Test image',
      cta: { label: 'Get Started', link: '/signup' },
    }
    
    render(<HeroComponent {...props} />)
    
    expect(screen.getByText('Hero Title')).toBeInTheDocument()
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })
})
```

## 📚 Storybook Documentation

Each component includes Storybook stories for documentation:

```bash
# Start Storybook
bun storybook

# Build Storybook
bun build-storybook
```

### Story Examples

```tsx
// Generated stories include multiple variants:
export const Default: Story = {
  args: {
    heading: 'Build Amazing Things',
    subheading: 'Create with confidence',
    // ... other props
  },
}

export const WithoutImage: Story = {
  args: {
    heading: 'Simple Hero',
    subheading: 'No image variant',
  },
}
```

## 🔄 Development Workflow

### 1. Generate Component

```bash
bun turbo gen component
# Follow prompts
```

### 2. Customize Component

Edit the generated files as needed:

- Modify `.component.tsx` for UI changes
- Update `.schema.ts` for content structure
- Adjust `.types.ts` for type changes
- Update `.query.ts` for data fetching

### 3. Test Your Changes

```bash
bun test packages/components/[component-name]
```

### 4. View in Storybook

```bash
bun storybook
# Navigate to your component
```

### 5. Use in Your App

```tsx
import { YourComponent } from '@repo/components/[component-name]'
```

## 🏗️ Best Practices

### Component Design

1. **Single Responsibility**: Each component should have one clear purpose
2. **Flexible Props**: Use optional props and className for customization
3. **Type Safety**: Leverage TypeScript for better development experience
4. **Accessibility**: Include proper ARIA labels and semantic HTML

### Content Management

1. **Required Fields**: Only make fields required when absolutely necessary
2. **Validation**: Use Sanity validation rules for data integrity
3. **Preview**: Configure schema previews for better CMS experience
4. **Documentation**: Add helpful field descriptions in schemas

### Performance

1. **Image Optimization**: Use Next.js Image component for production
2. **Lazy Loading**: Consider lazy loading for below-the-fold components
3. **Bundle Size**: Keep components lightweight and focused
4. **Caching**: Leverage Turborepo caching for faster builds

## 🐛 Troubleshooting

### Common Issues

#### TypeScript Errors

```bash
# Check types
bun type-check

# Fix type issues in component files
```

#### Missing Dependencies

```bash
# Install missing packages
bun install

# Check workspace dependencies
bun pm ls --depth=0
```

#### Generator Issues

```bash
# Clear cache and reinstall
bun clean
bun install

# Regenerate component
bun turbo gen component
```

### Getting Help

1. Check the generated files for examples
2. Review the template files in `turbo/generators/templates/component/`
3. Look at existing components for patterns
4. Check the main project README for generator documentation

## 📈 Future Enhancements

### Planned Features

- [ ] More component templates (FAQ, Pricing, Contact forms)
- [ ] Field generator for existing components
- [ ] Migration helpers for schema updates
- [ ] Performance optimization templates
- [ ] Accessibility-focused templates

### Contributing

When adding new components or templates:

1. Use the generator to create the initial structure
2. Follow existing patterns and conventions
3. Add comprehensive tests
4. Create Storybook stories
5. Update this documentation

---

For more information about the generator system, see the [main project README](../../README.md#generators).
