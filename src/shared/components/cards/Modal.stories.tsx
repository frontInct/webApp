import { Modal } from './Modal'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../button'

// Тип для функции-детей с возможностью закрытия
type ModalChildFn = (args: { close: () => void }) => React.ReactNode

// Обёртка с хук-стейтом и поддержкой render props для children
const ModalDemo = (
  args: Omit<React.ComponentProps<typeof Modal>, 'children'> & {
    children: React.ReactNode | ModalChildFn
  }
) => {
  const [open, setOpen] = useState(true)

  const content =
    typeof args.children === 'function'
      ? args.children({ close: () => setOpen(false) })
      : args.children

  return (
    <>
      <Button onClick={() => setOpen(true)}>Открыть модалку</Button>
      <Modal
        {...args}
        open={open}
        onOpenChange={setOpen}
      >
        {content}
      </Modal>
    </>
  )
}

const meta: Meta<typeof ModalDemo> = {
  title: 'Components/Modal',
  component: ModalDemo,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    backgroundColor: {
      control: { type: 'select' },
      options: ['dark300', 'dark500'],
    },
    borderColor: {
      control: { type: 'select' },
      options: ['dark100', 'dark300'],
    },
    children: { control: false }, // задаём вручную через stories
  },
}

export default meta
type Story = StoryObj<typeof ModalDemo>

export const WithTitle: Story = {
  args: {
    title: 'Заголовок модалки',
    width: 400,
    height: 250,
    backgroundColor: 'dark300',
    borderColor: 'dark100',
    children: ({ close }) => (
      <div style={{ padding: '16px' }}>
        <p>Содержимое модального окна</p>
        <Button onClick={close}>Действие</Button>
      </div>
    ),
  },
}

export const WithoutTitle: Story = {
  args: {
    title: '',
    width: 300,
    height: 200,
    backgroundColor: 'dark500',
    borderColor: 'dark300',
    children: ({ close }) => (
      <div style={{ padding: '16px' }}>
        <p>Простое окно без заголовка</p>
        <Button onClick={close}>Закрыть</Button>
      </div>
    ),
  },
}

export const TextOnlyWithTitle: Story = {
  args: {
    title: 'Информация',
    width: 320,
    height: 180,
    backgroundColor: 'dark300',
    borderColor: 'dark100',
    children: () => (
      <div style={{ padding: '16px' }}>
        <p>Это просто текст внутри модального окна. Без кнопок.</p>
      </div>
    ),
  },
}

export const TextOnlyWithoutTitle: Story = {
  args: {
    title: '',
    width: 280,
    height: 160,
    backgroundColor: 'dark500',
    borderColor: 'dark300',
    children: () => (
      <div style={{ padding: '16px' }}>
        <p>Чистый текст. Ни заголовка, ни кнопок.</p>
      </div>
    ),
  },
}
