import type { Meta, StoryObj } from '@storybook/react'
import { CheckBox } from './CheckBox'

const meta: Meta<typeof CheckBox> = {
  title: 'Components/Checkbox',
  component: CheckBox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Текст рядом с чекбоксом',
    },
    checked: {
      control: 'boolean',
      description: 'Состояние чекбокса',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние',
    },
    onChange: {
      action: 'changed',
      description: 'Обработчик изменения',
    },
  },
}

export default meta

// Базовые истории

export const Primary: StoryObj<typeof CheckBox> = {
  render: () => (
    <div style={{ background: '#121112', padding: '16px' }}>
      <CheckBox label='Check box' />
    </div>
  ),
}
export const WithoutText: StoryObj<typeof CheckBox> = {
  render: () => (
    <div style={{ background: '#121112', padding: '16px' }}>
      <CheckBox />
    </div>
  ),
}

export const Checked: StoryObj<typeof CheckBox> = {
  render: () => (
    <div style={{ background: '#121112', padding: '16px' }}>
      <CheckBox
        label='Checked'
        checked
      />
    </div>
  ),
}

export const Disabled: StoryObj<typeof CheckBox> = {
  render: () => (
    <div style={{ background: '#121112', padding: '16px' }}>
      <CheckBox
        label='Disabled'
        disabled
      />
    </div>
  ),
}

export const DisabledChecked: StoryObj<typeof CheckBox> = {
  render: () => (
    <div style={{ background: '#121112', padding: '16px' }}>
      <CheckBox
        label='DisabledChecked'
        disabled
        checked
      />
    </div>
  ),
}
