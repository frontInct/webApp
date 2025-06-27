'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { z } from 'zod'
import { AuthLayout } from '@/shared/components/authLayout'
import { Button } from '@/shared/components/button'
import { Input } from '@/shared/components/input'
import { Typography } from '@/shared/components/Typography'
import { useForgotPasswordMutation } from '@/shared/store/baseApi'
import s from './CreateNewPassword.module.scss'
import { ModalRadix } from '@/shared/components/cards'

// Схема валидации пароля
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

// Определяем тип ошибки API
type ApiError = {
  data?: {
    errorsMessages?: Array<{ field?: string; message: string }>
    message?: string
  }
  status?: number
}

// Type guard для проверки, что объект — ApiError
function isApiError(obj: unknown): obj is ApiError {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'data' in obj &&
    (typeof (obj as any).data === 'object' || typeof (obj as any).data === 'undefined')
  )
}

export const CreateNewPassword = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const code = searchParams.get('code') ?? ''

  const [formData, setFormData] = useState<FormData>({
    newPassword: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [isValid, setIsValid] = useState(false)
  const [showTokenErrorModal, setShowTokenErrorModal] = useState(false)

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation()

  // Валидация формы
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
            const field = err.path[0] as keyof FormData
            if (!newErrors[field]) newErrors[field] = err.message
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
    setFormData(prev => ({ ...prev, [name]: value }))
    setTouched(prev => ({ ...prev, [name]: true }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!code) {
      setShowTokenErrorModal(true)
      return
    }

    if (!isValid) return

    try {
      await forgotPassword({ code, password: formData.newPassword }).unwrap()
      router.push('/login')
    } catch (err: unknown) {
      if (isApiError(err)) {
        const backendErrors = err.data?.errorsMessages || []
        const invalidCode = backendErrors.some(m =>
          ['Invalid or expired code', 'Invalid or expired token'].includes(m.message)
        )
        if (invalidCode) {
          setShowTokenErrorModal(true)
          return
        }
        if (err.data?.message === 'Passwords must match') {
          // Здесь можно добавить отображение ошибки, если нужно
          return
        }
      }
      // Можно добавить обработку других ошибок или показать общее сообщение
    }
  }

  const shouldShowError = (field: keyof FormData) =>
    touched[field] || formData[field].length > 0

  const handleModalClose = () => {
    setShowTokenErrorModal(false)
    router.push('/forgot-password')
  }

  return (
    <AuthLayout>
      <Typography component='h1' variant='H1'>
        Create New Password
      </Typography>
      <form className={s.form} onSubmit={handleSubmit} noValidate>
        <div className={s.inputContainer}>
          <Input
            variant='inputWithPasswordToggle'
            type='password'
            id='new-password'
            name='newPassword'
            label='New password'
            value={formData.newPassword}
            onChange={handleChange}
            onBlur={() => setTouched(prev => ({ ...prev, newPassword: true }))}
            error={shouldShowError('newPassword') ? errors.newPassword : undefined}
            disabled={isLoading}
            autoComplete='new-password'
          />
        </div>
        <div className={s.inputContainer}>
          <Input
            variant='inputWithPasswordToggle'
            type='password'
            id='confirm-password'
            name='confirmPassword'
            label='Confirm password'
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={() => setTouched(prev => ({ ...prev, confirmPassword: true }))}
            error={shouldShowError('confirmPassword') ? errors.confirmPassword : undefined}
            disabled={isLoading}
            autoComplete='new-password'
          />
        </div>

        <div className={s.requirementsBlock}>
          <Typography component='p' variant='regular_text_14' className={s.passwordRequirements}>
            Your password must be between 6 and 20 characters
          </Typography>
        </div>

        <div className={s.buttonContainer}>
          <Button variant='primary' type='submit' disabled={!isValid || isLoading}>
            {isLoading ? 'Saving...' : 'Create new password'}
          </Button>
        </div>
      </form>

      <ModalRadix
        open={showTokenErrorModal}
        onClose={handleModalClose}
        modalTitle='Link expired'
        size='sm'
      >
        <div style={{ padding: '16px' }}>
          <Typography component='p' variant='regular_text_16'>
            Your password reset link is invalid or expired.
          </Typography>
          <Button style={{ marginTop: '16px' }} onClick={handleModalClose}>
            Go to reset form
          </Button>
        </div>
      </ModalRadix>
    </AuthLayout>
  )
}
