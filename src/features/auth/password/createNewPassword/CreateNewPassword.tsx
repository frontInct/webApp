'use client'

import { AuthLayout } from "@/shared/components/authLayout"
import { Button } from "@/shared/components/button"
import { Input } from "@/shared/components/input"
import { Typography } from "@/shared/components/Typography"
import { useState, useEffect } from "react"
import { z } from "zod"
import s from './CreateNewPassword.module.scss'

// Схема валидации для сброса пароля
const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password cannot exceed 20 characters')
      .regex(/[0-9]/, 'Password must contain at least one number (0-9)')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter (a-z)')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter (A-Z)')
      .regex(
        /[!\"#$%&'()*+,-.\/:;<=>?@[\\\]^_`{|}~]/,
        'Password must contain at least one special character (!@#$%^&*)'
      ),
    confirmPassword: z.string(),
  })
  .refine(data => data.newPassword === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  })

type FormData = z.infer<typeof resetPasswordSchema>

export const CreateNewPassword = () => {
  const [formData, setFormData] = useState<FormData>({
    newPassword: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [isValid, setIsValid] = useState(false)

  // Валидация формы при изменении данных
  useEffect(() => {
    const validateForm = async () => {
      try {
        await resetPasswordSchema.parseAsync(formData)
        setErrors({})
        setIsValid(true)
      } catch (error) {
        if (error instanceof z.ZodError) {
          const newErrors: Record<string, string> = {}
          error.errors.forEach(err => {
            if (err.path && err.path.length > 0) {
              const field = err.path[0] as keyof FormData
              // Сохраняем только первую ошибку для каждого поля
              if (!newErrors[field]) {
                newErrors[field] = err.message
              }
            }
          })
          setErrors(newErrors)
          setIsValid(false)
        }
      }
    }

    validateForm()
  }, [formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    // Отмечаем поле как "тронутое" при изменении
    setTouched(prev => ({ ...prev, [name]: true }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isValid) {
      // Обработка логики создания пароля
      console.log('Creating new password:', formData.newPassword)
      // Здесь можно добавить API-запрос для смены пароля
    }
  }

  // Определяем, нужно ли показывать ошибку для поля
  const shouldShowError = (field: keyof FormData) => {
    return touched[field] || formData[field].length > 0
  }

  return (
    <AuthLayout>
      <Typography component="h1" variant="H1">
        Create new Password
      </Typography>
      <form 
        className={s.form}
        onSubmit={handleSubmit}
      >
        <div className={s.inputContainer}>
          <Input
            variant="inputWithPasswordToggle"
            type="password"
            id="new-password"
            name="newPassword"
            label="New password"
            value={formData.newPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={shouldShowError('newPassword') ? errors.newPassword : undefined}
          />
        </div>
        <div className={s.inputContainer}>
          <Input
            variant="inputWithPasswordToggle"
            type="password"
            id="confirm-password"
            name="confirmPassword"
            label="Password confirmation"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={shouldShowError('confirmPassword') ? errors.confirmPassword : undefined}
          />
        </div>
        <div className={s.requirementsBlock}>
          <Typography 
            component="p" 
            variant="regular_text_14" 
            className={s.passwordRequirements}
          >
            Your password must be between 6 and 20 characters
          </Typography>
        </div>
        <div className={s.buttonContainer}>
          <Button 
            variant="primary" 
            type="submit"
            disabled={!isValid}
          >
            Create new password
          </Button>
        </div>
      </form>
    </AuthLayout>
  )
}