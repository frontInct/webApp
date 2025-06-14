import type { Meta, StoryObj } from '@storybook/react'
import { AuthLayout } from './AuthLayout'

const meta = {
  component: AuthLayout,
  tags: ['autodocs'],
  title: 'Components/AuthLayout',
} satisfies Meta<typeof AuthLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    style: {
      height: '200px',
      padding: '36px',
      width: '200px',
    },
  },
}