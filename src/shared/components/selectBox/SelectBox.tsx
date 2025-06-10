'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './SelectBox.module.scss'

export interface SelectBoxOption {
  value: string
  label: string
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
      className={`${styles.selector} ${disabled ? styles.disabled : ''}`}
    >
      {title}
      <div
        className={styles.selectedValue}
        onClick={toggleDropdown}
        role='button'
        tabIndex={0}
        aria-haspopup='listbox'
        aria-expanded={isOpen}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>▼</span>
      </div>

      {isOpen && (
        <ul
          className={styles.options}
          role='listbox'
          aria-activedescendant={selectedValue}
        >
          {options.map(option => (
            <li
              key={option.value}
              id={option.value}
              className={`${styles.option} ${
                selectedValue === option.value ? styles.selected : ''
              }`}
              onClick={() => handleOptionClick(option.value)}
              role='option'
              aria-selected={selectedValue === option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
