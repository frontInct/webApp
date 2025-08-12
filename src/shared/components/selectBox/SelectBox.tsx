'use client'

import { useState, useRef, useEffect } from 'react'
import s from './SelectBox.module.scss'
import Img from '@/shared/assets/icons/arrow-ios-down-outline.svg'

export interface SelectBoxOption {
  value: string
  label: string
  flag?: React.ReactNode
}

export interface SelectBoxProps {
  options: SelectBoxOption[]
  defaultValue?: string
  placeholder?: string
  onChange?: (value: string) => void
  disabled?: boolean
  title?: string
}

export const SelectBox = ({
  options = [],
  defaultValue = '',
  placeholder = 'Выберите вариант',
  onChange = () => {},
  disabled = false,
  title = '',
}: SelectBoxProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = (): void => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  const handleOptionClick = (value: string): void => {
    setSelectedValue(value)
    onChange(value)
    setIsOpen(false)
  }

  const selectedOption = options.find(option => option.value === selectedValue)

  return (
    <div
      ref={dropdownRef}
      className={`${s.selector} ${disabled ? s.disabled : ''}`}
    >
      {title}
      <div
        className={s.selectedValue}
        onClick={toggleDropdown}
        role='button'
        tabIndex={0}
        aria-haspopup='listbox'
        aria-expanded={isOpen}
      >
        <div className={s.selectedContent}>
          {selectedOption?.flag && <span className={s.flag}>{selectedOption.flag}</span>}
          {selectedOption ? selectedOption.label : placeholder}
        </div>
        <span className={`${s.arrow} ${isOpen ? s.open : ''}`}>
          <Img />
        </span>
      </div>

      {isOpen && (
        <ul
          className={s.options}
          role='listbox'
          aria-activedescendant={selectedValue}
        >
          {options.map(option => (
            <li
              key={option.value}
              id={option.value}
              className={`${s.option} ${selectedValue === option.value ? s.selected : ''}`}
              onClick={() => handleOptionClick(option.value)}
              role='option'
              aria-selected={selectedValue === option.value}
            >
              <div className={s.optionContent}>
                {option.flag && <span className={s.flag}>{option.flag}</span>}
                {option.label}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
