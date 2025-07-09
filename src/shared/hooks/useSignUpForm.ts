import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRegistrationMutation } from '@/shared/store/baseApi'
import { signUpSchema, SignUpFormData } from '@/shared/schemas/forms/signUp'
import { isApiError } from '../utils/errors/isApiError'

export function useSignUpForm() {
  const [registration, { isLoading }] = useRegistrationMutation()
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [successEmail, setSuccessEmail] = useState('')

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false,
    }
  })

  const passwordValue = form.watch('password')

    useEffect(() => {
    // При изменении пароля запускаем валидацию confirmPassword
    form.trigger('confirmPassword')
  }, [passwordValue, form])

  const onSubmit = async (data: SignUpFormData) => {
    try {
      await registration({
        email: data.email,
        username: data.username,
        password: data.password,
      }).unwrap()
      setSuccessEmail(data.email)
      setIsSuccessModalOpen(true)
      form.reset()
    } catch (err: unknown) {
      if (isApiError(err)) {
        const errorsArray = err.data?.errors || []
        errorsArray.forEach(({ field }) => {
          if (field === 'email' || field === 'username') {
            form.setError(field as keyof SignUpFormData, {
              message:
                field === 'email'
                  ? 'This email is already registered'
                  : 'This username is already taken',
            })
          }
        })
      } else {
        console.error('Unexpected error', err)
      }
    }
  }

  return {
    form,
    onSubmit,
    isLoading,
    isSuccessModalOpen,
    setIsSuccessModalOpen,
    successEmail,
  }
}
