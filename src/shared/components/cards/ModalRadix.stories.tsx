import { Meta, StoryObj } from '@storybook/react'
import { ModalRadix } from './ModalRadix'
import { Button } from '../button/Button'
import { useState } from 'react'

const meta = {
  component: ModalRadix,
  tags: ['autodocs'],
} satisfies Meta<typeof ModalRadix>

export default meta
type Story = StoryObj<typeof ModalRadix>

/** Primary variant. Used as "default"  */
export const BaseModal: Story = {
  args: {
    modalTitle: 'Заголовок модального окна',
    children: <div>Lorem ipsum dolor...</div>,
  },
  render: args => {
    const ModalWrapper = () => {
      const [showModal, setShowModal] = useState(false)

      const openModalHandler = () => setShowModal(true)
      const closeModalHandler = () => setShowModal(false)

      return (
        <>
          <Button
            variant={'primary'}
            onClick={openModalHandler}
          >
            Open modal
          </Button>
          <ModalRadix
            {...args}
            open={showModal}
            onClose={closeModalHandler}
          >
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <Button
              variant={'primary'}
              onClick={closeModalHandler}
            >
              Accept
            </Button>
          </ModalRadix>
        </>
      )
    }

    return <ModalWrapper />
  },
}
