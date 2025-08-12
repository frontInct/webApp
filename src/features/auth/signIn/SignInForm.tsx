'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInFormData, signInSchema } from '@/shared/schemas/forms/signIn'
import { shouldShowError } from '@/shared/utils/forms/shouldShowError'
import { Button } from '@/shared/components/button'
import { Input } from '@/shared/components/input'
import { TopLoader } from '@/shared/components/topLoader/TopLoader'
import { Typography } from '@/shared/components/Typography'
import Link from 'next/link'
import s from './SignInForm.module.scss'
import { useSignInForm } from '@/shared/hooks/useSignInForm'

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields, isSubmitting },
    //watch,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { signIn, loginError, isLoading } = useSignInForm()

  return (
    <>
      <TopLoader isActive={isLoading} />
      <form
        className={s.formContainer}
        onSubmit={handleSubmit(signIn)}
        noValidate
      >
        <div className={s.inputWrapper}>
          <Input
            {...register('email')}
            variant="inputDefault"
            id="email"
            label="Email"
            placeholder="Epam@epam.com"
            width="330px"
            error={
              shouldShowError('email', touchedFields, errors)
                ? errors.email?.message
                : undefined
            }
          />
          <Input
            {...register('password')}
            variant="inputWithPasswordToggle"
            id="password"
            type="password"
            label="Password"
            placeholder="**********"
            width="330px"
            className={s.label}
            error={
              shouldShowError('password', touchedFields, errors)
                ? errors.password?.message
                : undefined
            }
          />
        </div>
        <Link href="/forgot-password">Forgot Password</Link>

        {loginError && (
          <Typography className={s.loginError}>{loginError}</Typography>
        )}

        <Button
          type="submit"
          style={{ width: '330px' }}
          disabled={!isValid || isSubmitting || isLoading}
        >
          {isSubmitting || isLoading ? 'Signing in...' : 'Sign In'}
        </Button>

        <div className={s.linkSignUp}>
          <Typography>Don’t have an account?</Typography>
          <Button variant="text">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </form>
    </>
  )
}
