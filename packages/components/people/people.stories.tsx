import type { Meta, StoryObj } from '@storybook/react'
import { PeopleComponent } from './people.component'

const meta: Meta<typeof PeopleComponent> = {
  title: 'Components/People',
  component: PeopleComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    heading: 'Welcome to Our Platform',
    text: 'This is a sample text that demonstrates the basic component functionality.',
  },
}

export const WithoutText: Story = {
  args: {
    heading: 'Heading Only',
  },
}




