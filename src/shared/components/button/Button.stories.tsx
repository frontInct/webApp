import { Button } from './Button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'textButton', 'variant21'],
    },
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
    active: false,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true, focus: true },
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
    active: false,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true, focus: true },
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
    active: false,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true, focus: true },
  },
}

export const TextButton: Story = {
  args: {
    variant: 'textButton',
    children: 'TextButton',
    active: false,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true, focus: true },
  },
}

export const Variant21: Story = {
  args: {
    variant: 'variant21',
    children: 'Variant21',
  },
}
