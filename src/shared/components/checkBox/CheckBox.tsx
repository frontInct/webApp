'use client'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import s from './CheckBox.module.scss'
import { ComponentPropsWithoutRef, ReactNode, useId } from 'react'
import CheckmarkOutline from './CheckmarkOutline'

type Props = {
  label?: ReactNode
  id?: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = ({ label, id, ...rest }: Props) => {
  const generatedId = useId()
  const uniqueId = id ?? generatedId

  return (
    <div className={s.container}>
      <CheckboxRadix.Root
        className={s.checkbox}
        {...rest}
        id={uniqueId}
      >
        <CheckboxRadix.Indicator className={s.CheckboxIndicator}>
          <CheckmarkOutline />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      {label && (
        <label
          className={s.label}
          htmlFor={uniqueId}
        >
          {label}
        </label>
      )}
    </div>
  )
}
