import React, { InputHTMLAttributes, forwardRef } from 'react'
import styles from './Input.module.scss'

type Variant = 'inputDefault' | 'inputWithButton' | 'searchInput'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  variant: Variant
  active?: boolean
  className?: string
  error?: string
  label?: string
  width?: string | number
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      variant = 'inputDefault',
      className = '',
      error,
      label,
      active = false,
      width,
      type = 'text',
      ...rest
    },
    ref
  ) => {
    const wrapperClass = [
      styles.inputWrapper,
      styles[variant],
      error ? styles.error : '',
      className
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={wrapperClass} style={{ width }}>
        {label && <label className={styles.label}>{label}</label>}

        <div className={styles.inputContainer}>
          {variant === 'searchInput' && <span className={styles.icon}>🔍</span>}

          <input
            ref={ref}
            type={type}
            className={styles.input}
            placeholder={variant === 'searchInput' ? 'Search...' : rest.placeholder}
            {...rest}
          />

          {variant === 'inputWithButton' && (
            <span className={styles.toggleButton}>👁️</span>
          )}
        </div>

        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    )
  }
)
