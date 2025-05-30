import React from 'react'
import styles from './Button.module.scss'

type Variant = 'primary' | 'secondary' | 'outline' | 'textButton' | 'variant21'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  active?: boolean
  width?: string | number
  height?: string | number
}

export const Button = ({
  children,
  variant = 'primary',
  active = false,
  disabled = false,
  className,
  width,
  height,
  ...rest
}: Props) => {
  const classNames = [
    styles.button, // базовый стиль
    styles[variant], // модификатор по варианту
    active && styles.active, // если active = true, добавим класс
    disabled && styles.disabled, // если disabled = true, добавим класс
    className,
  ]
    .filter(Boolean) // убирает все ложные значения (чтобы не было лишний undefined или false)
    .join(' ') // соединяет элементы массива в строку

  return (
    <button
      className={classNames}
      disabled={disabled}
      style={{ ...rest.style, width, height }} // можно пропсами менять размер кнопки
      {...rest} // передаём всё остальное — onClick и т.д.
    >
      {children}
    </button>
  )
}
