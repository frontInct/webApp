'use client'

import { forwardRef } from 'react'
import styles from './CheckBox.module.scss'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  indeterminate?: boolean
  containerClassName?: string
  labelClassName?: string
}

export const CheckBox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      checked,
      onChange,
      disabled = false,
      className = '',
      containerClassName = '',
      labelClassName = '',
      ...props
    },
    ref
  ) => {
    return (
      <div className={`${styles.container} ${containerClassName}`}>
        <label className={`${styles.label} ${disabled ? styles.disabled : ''}`}>
          <input
            type='checkbox'
            ref={ref}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className={`${styles.input} ${className}`}
            {...props}
          />
          <span className={`${styles.checkmark} ${checked ? styles.checked : ''}`}></span>
          {label && <span className={`${styles.labelText} ${labelClassName}`}>{label}</span>}
        </label>
      </div>
    )
  }
)

CheckBox.displayName = 'Checkbox'
