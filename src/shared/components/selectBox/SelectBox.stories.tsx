// Selector.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Selector } from './SelectBox'

const meta: Meta<typeof Selector> = {
  title: 'Components/Selector',
  component: Selector,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'selected' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Selector>


export const Default: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Вариант 1' },
      { value: 'option2', label: 'Вариант 2' },
      { value: 'option3', label: 'Вариант 3' },
    ],
    placeholder: 'Выберите вариант',
  },
}


export const WithDefaultValue: Story = {
  args: {
    ...Default.args,
    defaultValue: 'option2',
  },
}


export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}


export const Empty: Story = {
  args: {
    options: [],
    placeholder: 'Нет доступных вариантов',
  },
}
