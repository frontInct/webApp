'use client'

import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'
import styles from './Modal.module.scss'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Typography } from '../Typography'

type Props = {
  children: React.ReactNode
  title?: string
  open?: boolean
  width?: string | number
  height?: string | number
  backgroundColor?: 'dark300' | 'dark500'
  borderColor?: 'dark100' | 'dark300'
  onOpenChange?: (open: boolean) => void
}

export const Modal = ({
  children,
  title,
  open,
  backgroundColor,
  borderColor,
  width,
  height,
  onOpenChange,
}: Props) => {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={onOpenChange}
    >
      <Dialog.Portal>
        <div className={styles.overlay} />
        <Dialog.Content
          className={`${styles.content} ${styles[backgroundColor || 'dark300']} ${
            styles[`border-${borderColor || 'dark100'}`]
          }`}
          style={{ width, height }}
          onOpenAutoFocus={e => e.preventDefault()}
        >
          <div className={styles.header}>
            {/* Dialog.Title обязателен нужен в Radix для доступности, без него мне выдавало ошибку, пустым он не мешает */}
            <Dialog.Title asChild>
              {title ? (
                <Typography className={styles.title}>{title}</Typography>
              ) : (
                <VisuallyHidden>Modal window</VisuallyHidden>
              )}
            </Dialog.Title>
            {/* Кнопка закрытия открывается вместе с title */}
            {title && (
              <Dialog.Close asChild>
                <button
                  className={styles.closeButton}
                  aria-label='Close'
                >
                  X
                </button>
              </Dialog.Close>
            )}
          </div>
          {/* Если есть title, рисуем разделитель */}
          {title && <div className={styles.divider} />}
          <Typography className={styles.body}>{children}</Typography>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
