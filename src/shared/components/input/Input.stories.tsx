import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['inputDefault', 'inputWithPasswordToggle', 'searchInput'],
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    active: { control: 'boolean' },
    error: { control: 'text' },
    type: { control: 'text' },
    width: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    variant: 'inputDefault',
    label: 'Default Input',
    placeholder: 'Enter text...',
    disabled: false,
    active: false,
    error: '',
    type: 'text',
    width: '300px',
  },
  parameters: {
    pseudo: { hover: true, focus: true },
  },
}

export const WithButton: Story = {
  args: {
    variant: 'inputWithPasswordToggle',
    label: 'Password Input',
    placeholder: 'Enter password',
    type: 'password',
    active: false,
    disabled: false,
    error: '',
    width: '300px',
  },
  parameters: {
    pseudo: { hover: true, focus: true },
  },
}

export const Search: Story = {
  args: {
    variant: 'searchInput',
    label: 'Search',
    placeholder: 'Search...',
    active: false,
    disabled: false,
    error: '',
    width: '300px',
  },
  parameters: {
    pseudo: { hover: true, focus: true },
  },
}

export const Disabled: Story = {
  args: {
    variant: 'inputDefault',
    label: 'Disabled Input',
    placeholder: 'Can’t type here',
    disabled: true,
    active: false,
    error: '',
    width: '300px',
  },
}

export const WithError: Story = {
  args: {
    variant: 'inputDefault',
    label: 'Email',
    placeholder: 'Enter email',
    error: 'Некорректный email',
    width: '300px',
  },
  parameters: {
    pseudo: { hover: true, focus: true },
  },
}
