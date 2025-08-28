import { Close } from '@/public/icons'

import s from './Toast.module.scss'
import clsx from 'clsx'
import {
  Toast as ToastRoot,
  ToastClose,
  ToastDescription,
  type ToastProps,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@radix-ui/react-toast'
import { Typography } from '@/shared/components/Typography'

interface Props extends ToastProps {
  description: string
  variant: 'error' | 'success'
}

export const Toast = (props: Props) => {
  const { title, description, variant, className, ...rest } = props
  const isError = variant === 'error'
  const isSuccess = variant === 'success'
  const ERROR_TITLE = 'Error!'
  const defaultTitle = isError && ERROR_TITLE
  const classNames = {
    toastRoot: clsx(s.toastRoot, isError && s.error, isSuccess && s.success, className),
    closeButton: s.closeButton,
    textContainer: s.textContainer,
    viewPort: s.viewPort,
  }

  return (
    <ToastProvider swipeDirection="up">
      <ToastRoot className={classNames.toastRoot} duration={3000} type="foreground" {...rest}>
        <div className={s.textContainer}>
          {isError && (
            <ToastTitle asChild>
              <Typography variant="bold_16">{title ?? defaultTitle}</Typography>
            </ToastTitle>
          )}
          <ToastDescription asChild>
            <Typography variant="regular_16">{description}</Typography>
          </ToastDescription>
        </div>
        <ToastClose aria-label="Close" className={s.closeButton}>
          <span aria-hidden>
            <Close />
          </span>
        </ToastClose>
      </ToastRoot>
      <ToastViewport className={s.viewPort} />
    </ToastProvider>
  )
}