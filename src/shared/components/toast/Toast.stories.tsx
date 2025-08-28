import type { Meta, StoryObj } from '@storybook/react'
import { useRef, useState } from 'react'
import { Button } from '../button'
import { Toast } from './Toast'

const meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof Toast>

export const ToastSuccessAlwaysOpen: Story = {
  args: {
    description: 'Your settings are saved',
    open: true,
    variant: 'success',
  },
}

export const ToastErrorAlwaysOpen: Story = {
  args: {
    description: 'Server is not available',
    open: true,
    variant: 'error',
  },
}

export const ToastSuccess: Story = {
  args: {
    description: 'Your settings are saved',
    variant: 'success',
  },
}

export const ToastError: Story = {
  args: {
    description: 'Server is not available',
    variant: 'error',
  },
}

export const ToastWithoutControl: Story = {
  args: {
    description: 'Server is not available',
    variant: 'error',
    defaultOpen: true,
  },
}

export const ToastWithControl: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Toast</Button>
        <Toast
          description="Your settings are saved"
          open={open}
          variant="success"
          onOpenChange={setOpen}
        />
      </>
    )
  },
}

export const ToastCanReopen: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const timerRef = useRef(0)
    return (
      <>
        <Button
          onClick={() => {
            setOpen(false)
            window.clearTimeout(timerRef.current)
            timerRef.current = window.setTimeout(() => {
              setOpen(true)
            }, 100)
          }}
        >
          Open Toast
        </Button>
        <Toast
          description="Your settings are saved"
          open={open}
          variant="success"
          onOpenChange={setOpen}
        />
      </>
    )
  },
}