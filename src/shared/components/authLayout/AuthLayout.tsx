import { type ComponentPropsWithRef, type ElementType } from 'react'
import { clsx } from 'clsx'
import s from './AuthLayout.module.scss'

type Props<T extends ElementType = 'div'> = {
  as?: T
} & ComponentPropsWithRef<T>

export const AuthLayout = <T extends ElementType = 'div'>({ as, className, ...rest }: Props<T>) => {
  const classNames = {
    authLayout: clsx(s.root, className),
  }

  const Component = as || 'div'

  return (
    <Component
      className={classNames.authLayout}
      {...rest}
    />
  )
}
