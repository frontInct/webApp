import { Input } from './Input'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['inputDefault', 'inputWithButton', 'searchInput'],
    },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    width: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Input>

// --- inputDefault ---

export const InputDefault: Story = {
  args: {
    variant: 'inputDefault',
    label: 'Default input',
    placeholder: 'Enter text',
    disabled: false,
    error: '',
  },
}

export const InputDefaultError: Story = {
  args: {
    variant: 'inputDefault',
    label: 'Default input',
    placeholder: 'Enter text',
    error: 'Required field',
  },
}

export const InputDefaultDisabled: Story = {
  args: {
    variant: 'inputDefault',
    label: 'Default input',
    placeholder: 'Enter text',
    disabled: true,
  },
}

// --- inputWithButton ---

export const InputWithButton: Story = {
  args: {
    variant: 'inputWithButton',
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
  },
}

export const InputWithButtonError: Story = {
  args: {
    variant: 'inputWithButton',
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    error: 'Wrong password',
  },
}

export const InputWithButtonDisabled: Story = {
  args: {
    variant: 'inputWithButton',
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    disabled: true,
  },
}

// --- searchInput ---

export const SearchInput: Story = {
  args: {
    variant: 'searchInput',
    label: 'Search',
    placeholder: 'Search something...',
  },
}

export const SearchInputError: Story = {
  args: {
    variant: 'searchInput',
    label: 'Search',
    placeholder: 'Search something...',
    error: 'Nothing found',
  },
}

export const SearchInputDisabled: Story = {
  args: {
    variant: 'searchInput',
    label: 'Search',
    placeholder: 'Search something...',
    disabled: true,
  },
}
