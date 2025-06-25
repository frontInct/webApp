import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

type Story = StoryObj<typeof Button>

const meta = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outlined', 'text'],
    },
    disabled: {
      control: 'boolean',
    },
    asChild: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined Button',
  },
}

export const ButtonAsLink: Story = {
  args: {
    variant: 'text',
    asChild: true,
    children: <a href={'https://google.com'}>Link Button</a>,
  },
}

export const DisabledStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button
        variant='primary'
        disabled
      >
        Primary Disabled
      </Button>
      <Button
        variant='secondary'
        disabled
      >
        Secondary Disabled
      </Button>
      <Button
        variant='outlined'
        disabled
      >
        Outlined Disabled
      </Button>
      <Button
        variant='text'
        disabled
      >
        Text Disabled
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Все варианты кнопок в disabled состоянии',
      },
    },
  },
}

export const FocusStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button
        variant='primary'
        className='force-focus'
      >
        Primary Focus
      </Button>
      <Button
        variant='secondary'
        className='force-focus'
      >
        Secondary Focus
      </Button>
      <Button
        variant='outlined'
        className='force-focus'
      >
        Outlined Focus
      </Button>
      <Button
        variant='text'
        className='force-focus'
      >
        Text Focus
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Все варианты кнопок в focus состоянии (используем класс для эмуляции)',
      },
    },
  },
}
