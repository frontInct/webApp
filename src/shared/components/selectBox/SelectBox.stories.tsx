import type { Meta, StoryObj } from '@storybook/react'
import { SelectBox, SelectBoxOption } from './SelectBox'

const meta: Meta<typeof SelectBox> = {
  title: 'Components/SelectBox',
  component: SelectBox,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#121112' }],
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SelectBox>

const mockOptions: SelectBoxOption[] = [
  { value: '1', label: 'Вариант 1' },
  { value: '2', label: 'Вариант 2' },
  { value: '3', label: 'Вариант 3' },
]

// Базовая история
export const Default: Story = {
  args: {
    options: mockOptions,
    placeholder: 'Выберите вариант',
  },
}

// С выбранным значением по умолчанию
export const WithDefaultValue: Story = {
  args: {
    options: mockOptions,
    defaultValue: '3',
    placeholder: 'Выберите вариант',
  },
}

// Заблокированный селект
export const Disabled: Story = {
  args: {
    options: mockOptions,
    defaultValue: '2',
    disabled: true,
  },
}

// С кастомным заголовком
export const WithTitle: Story = {
  args: {
    options: mockOptions,
    title: 'Выберите вариант:',
    placeholder: 'Выберите вариант',
  },
}

// Пустой список
export const EmptyOptions: Story = {
  args: {
    options: [],
    placeholder: 'Нет доступных вариантов',
  },
}