'use client'

import { useState, useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForgotPasswordMutation } from '@/shared/store/baseApi'
import { resetPasswordSchema } from '@/shared/schemas/forms/reserPassword'
import { isApiError } from '@/shared/utils/errors/isApiError'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { z } from 'zod'

type FormData = z.infer<typeof resetPasswordSchema>

export function useCreateNewPasswordForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Код из query параметров (запоминаем только один раз)
  const code = useMemo(() => searchParams.get('code') ?? '', [searchParams])

  const [showTokenErrorModal, setShowTokenErrorModal] = useState(false)
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation()

  const form = useForm<FormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onChange',
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  })

  const onSubmit: SubmitHandler<FormData> = async data => {
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
        const invalidCode = backendErrors.some(
          e =>
            e.field === 'code' &&
            (e.message.includes('валидным UUID') || e.message.includes('Invalid or expired'))
        )
        if (invalidCode) {
          setShowTokenErrorModal(true)
          return
        }
        if (err.data?.message === 'Passwords must match') {
          return
        }
      }
    }
  }

  const handleModalClose = () => {
    setShowTokenErrorModal(false)
    router.push('/forgot-password')
  }

  return {
    form,
    onSubmit,
    showTokenErrorModal,
    handleModalClose,
    isLoading,
  }
}
