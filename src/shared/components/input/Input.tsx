"use client" // нужен чтобы useState работал локально, без него не работал

import React, { InputHTMLAttributes, forwardRef, useState } from 'react'
import styles from './Input.module.scss'

type Variant = 'inputDefault' | 'inputWithPasswordToggle' | 'searchInput'

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
      disabled = false,
      width,
      type = 'text',
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    // для варианта с кнопкой, если тип пароль, переключаем тип в зависимости от showPassword
    const inputType =
      variant === 'inputWithPasswordToggle' && type === 'password'
        ? showPassword
          ? 'text'
          : 'password'
        : type

    const wrapperClass = [
      styles.inputWrapper,
      styles[variant],
      error ? styles.error : '',
      active ? styles.active : '',
      disabled ? styles.disabled : '',
      className
    ]
      .filter(Boolean)
      .join(' ')

    const togglePasswordVisibility = () => {
      if (!disabled) {
        setShowPassword(prev => !prev)
      }
    }

    return (
      <div className={wrapperClass} style={{ width }}>
        {label && <label className={styles.label}>{label}</label>}

        <div className={styles.inputContainer}>
          <input
            ref={ref}
            disabled={disabled}
            type={inputType}
            className={styles.input}
            placeholder={variant === 'searchInput' ? 'O- Search' : rest.placeholder}
            {...rest}
          />

          {variant === 'inputWithPasswordToggle' && type === 'password' && (
            <span
              className={styles.toggleButton}
              onClick={togglePasswordVisibility}
              role="button"
              aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'} // для доступности
              tabIndex={0} // для фокусировки так как это span (у них на tab нажатие обычно нет фокусировки)
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') togglePasswordVisibility()
              }} // обработчик чтобы пользователь мог управлять элементом с клавиатуры, переключать видимость пароля, нажимая Enter или пробел
            >
              {showPassword ? 'X' : 'O'}
            </span>
          )}
        </div>

        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    )
  }
)
