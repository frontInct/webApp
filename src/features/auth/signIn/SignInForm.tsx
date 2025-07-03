'use client'

import { Button } from '@/shared/components/button'
import { Input } from '@/shared/components/input'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import styles from './SignInForm.module.scss'
import { shouldShowError } from '@/shared/utils/forms/shouldShowError'
import { SignInFormData, signInSchema } from '@/shared/schemas/forms/signIn'

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields, isSubmitting },
    watch,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: SignInFormData) => {
    console.log('Sign In with:', data)
    // Тут отправка данных на сервер (например, вызов useLoginMutation)
  }

  return (
    <form
      className={styles.formContainer}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className={styles.inputWrapper}>
        <Input
          {...register('email')}
          variant='inputDefault'
          id='email'
          label='Email'
          placeholder='Epam@epam.com'
          width='330px'
          error={
            shouldShowError('email', touchedFields, errors, watch)
              ? errors.email?.message
              : undefined
          }
        />
        <Input
          {...register('password')}
          variant='inputWithPasswordToggle'
          id='password'
          type='password'
          label='Password'
          placeholder='**********'
          width='330px'
          className={styles.label}
          error={
            shouldShowError('password', touchedFields, errors, watch)
              ? errors.password?.message
              : undefined
          }
        />
      </div>
      <Link href='/forgot-password'>Forgot Password</Link>

      <Button
        type='submit'
        style={{ width: '330px' }}
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? 'Signing in...' : 'Sign In'}
      </Button>

      <div className={styles.linkSignUp}>
        <span>Don’t have an account?</span>
        <Button variant='text'>
          <Link href='/sign-up'>Sign Up</Link>
        </Button>
      </div>
    </form>
  )
}
