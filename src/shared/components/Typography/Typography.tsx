import { HTMLAttributes, ReactNode } from 'react'
import styles from './style.module.scss'

export type TypographyVariant =
  | 'large'
  | 'H1'
  | 'H2'
  | 'H3'
  | 'regular_text_16'
  | 'bold_text_16'
  | 'regular_text_14'
  | 'medium_text_14'
  | 'bold_text_14'
  | 'small_text'
  | 'semi-bold_small_text'
  | 'regular_link'
  | 'small_link'

type ComponentVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

type TypographyProps = HTMLAttributes<HTMLElement> & {
  component?: ComponentVariants
  children?: ReactNode | string
  variant?: TypographyVariant
  className?: string
}

export const Typography = ({
  component = 'p',
  children,
  variant = 'regular_text_16',
  className,
  ...props
}: TypographyProps) => {
  const Comp = component
  return (
    <Comp
      className={[styles[variant], className].filter(el => el).join(' ')}
      {...props}
    >
      {children}
    </Comp>
  )
}
