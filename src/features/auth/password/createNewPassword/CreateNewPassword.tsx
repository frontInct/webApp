'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { z } from 'zod'
import { AuthLayout } from '@/shared/components/authLayout'
import { Button } from '@/shared/components/button'
import { Input } from '@/shared/components/input'
import { Typography } from '@/shared/components/Typography'
import { useForgotPasswordMutation } from '@/shared/store/baseApi'
import s from './CreateNewPassword.module.scss'
import { ModalRadix } from '@/shared/components/cards'
import { passwordSchema } from '@/shared/schemas/primitives/password'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

const resetPasswordSchema = z
  .object({
    newPassword: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine(data => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords must match',
  })

type FormData = z.infer<typeof resetPasswordSchema>

type ApiError = {
  data?: {
    errors?: Array<{ field?: string; message: string }>
    message?: string
  }
  status?: number
}

function isApiError(obj: unknown): obj is ApiError {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'data' in obj &&
    (typeof (obj as Record<string, unknown>).data === 'object' || typeof (obj as Record<string, unknown>).data === 'undefined')
  )
}

export const CreateNewPassword = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const code = searchParams.get('code') ?? ''

  const [showTokenErrorModal, setShowTokenErrorModal] = useState(false)
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields, isSubmitting },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onChange',
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    if (!code) {
      setShowTokenErrorModal(true)
      return
    }
    try {
      await forgotPassword({ code, password: data.newPassword }).unwrap()
      router.push('/login')
    } catch (err: unknown) {
      if (isApiError(err)) {
        const backendErrors = err.data?.errors || []
        const invalidCode = backendErrors.some(m =>
          ['Invalid or expired code', 'Invalid or expired token'].includes(m.message)
        )
        if (invalidCode) {
          setShowTokenErrorModal(true)
          return
        }
        if (err.data?.message === 'Passwords must match') {
          // Можно показать ошибку через setError, если нужно
          return
        }
      }
      // Общая обработка ошибок, если нужно
    }
  }

  const shouldShowError = (field: keyof FormData) =>
    (touchedFields[field] || !!watch(field)) && errors[field]?.message

  const handleModalClose = () => {
    setShowTokenErrorModal(false)
    router.push('/forgot-password')
  }

  return (
    <AuthLayout>
      <Typography
        component='h1'
        variant='H1'
      >
        Create New Password
      </Typography>
      <form
        className={s.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className={s.inputContainer}>
          <Input
            {...register('newPassword')}
            variant='inputWithPasswordToggle'
            type='password'
            id='new-password'
            label='New password'
            error={shouldShowError('newPassword') ? errors.newPassword?.message : undefined}
            disabled={isSubmitting}
            autoComplete='new-password'
          />
        </div>
        <div className={s.inputContainer}>
          <Input
            {...register('confirmPassword')}
            variant='inputWithPasswordToggle'
            type='password'
            id='confirm-password'
            label='Confirm password'
            error={shouldShowError('confirmPassword') ? errors.confirmPassword?.message : undefined}
            disabled={isSubmitting}
            autoComplete='new-password'
          />
        </div>
        <div className={s.requirementsBlock}>
          <Typography
            component='p'
            variant='regular_text_14'
            className={s.passwordRequirements}
          >
            Your password must be between 6 and 20 characters
          </Typography>
        </div>
        <div className={s.buttonContainer}>
          <Button
            variant='primary'
            type='submit'
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Create new password'}
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
          <Typography
            component='p'
            variant='regular_text_16'
          >
            Your password reset link is invalid or expired.
          </Typography>
          <Button
            style={{ marginTop: '16px' }}
            onClick={handleModalClose}
          >
            Go to reset form
          </Button>
        </div>
      </ModalRadix>
    </AuthLayout>
  )
}
