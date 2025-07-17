'use client'
import * as Dialog from '@radix-ui/react-dialog'
// import { Cross2Icon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'
import s from './ModalRadix.module.scss'
import Img from '../../assets/icons/close-outline.svg'

type ModalSize = 'lg' | 'md' | 'sm'

type Props = {
  open: boolean
  onClose: (open: boolean) => void
  size?: ModalSize
  modalTitle: string
} & ComponentPropsWithoutRef<'div'>

export const ModalRadix = ({
  modalTitle,
  children,
  open,
  onClose,
  size = 'md',
  className,
  ...rest
}: Props) => (
  <Dialog.Root
    open={open}
    onOpenChange={onClose}
    {...rest}
  >
    <Dialog.Portal>
      <Dialog.Overlay className={s.Overlay} />
      <Dialog.Content className={clsx(s.Content, s[size], className)}>
        <Dialog.Title className={s.Title}>{modalTitle}</Dialog.Title>
        <hr className={s.hr} />
        {children}
        <Dialog.Close asChild>
          <button
            className={s.IconButton}
            aria-label='Close'
          >
            {/* <Cross2Icon/> */}
            <Img />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)
