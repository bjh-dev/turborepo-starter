import type { Meta, StoryObj } from '@storybook/react'
import { HeroComponent } from './hero.component'

const meta: Meta<typeof HeroComponent> = {
  title: 'Components/Hero',
  component: HeroComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>


export const Default: Story = {
  args: {
    heading: 'Build Amazing Things',
    subheading: 'Create, deploy, and scale your applications with confidence using our platform.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    imageAlt: 'Hero background image',
    cta: {
      label: 'Get Started',
      link: '/signup',
    },
  },
}

export const WithoutImage: Story = {
  args: {
    heading: 'Simple Hero',
    subheading: 'A hero section without an image.',
    cta: {
      label: 'Learn More',
      link: '/about',
    },
  },
}

export const WithoutCTA: Story = {
  args: {
    heading: 'Informational Hero',
    subheading: 'A hero section focused on information without a call to action.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    imageAlt: 'Hero background image',
  },
}



