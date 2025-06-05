import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121112' }],
    },
  },
  argTypes: {
    siteName: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    siteName: 'Inctagram',
  },
}

export const LoggedIn: Story = {
  args: {
    siteName: 'Inctagram',
    isLoggedIn: true,
  },
}
