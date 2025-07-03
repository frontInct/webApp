'use client'

import { Button } from '@/shared/components/button'
import { Input } from '@/shared/components/input'
import { Typography } from '@/shared/components/Typography'
import s from './ForgotPasswordForm.module.scss'
import { useEffect, useRef, useState } from 'react'
import { ForgotPasswordData, forgotPasswordSchema } from '@/shared/schemas/forms/forgotPassword'
import { z } from 'zod'
import Link from 'next/link'
import ReCaptcha from 'react-google-recaptcha'
import { usePasswordRecoveryMutation } from '@/shared/store/baseApi'
import type { BadRequestError, NotFoundError, UnauthorizedError } from '@/shared/types/api/index'

export const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState<ForgotPasswordData>({ email: '', recaptchaToken: '' })
  const [errors, setErrors] = useState<Partial<Record<keyof ForgotPasswordData, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof ForgotPasswordData, boolean>>>({})
  const [isValid, setIsValid] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [passwordRecovery] = usePasswordRecoveryMutation()

  const recaptchaRef = useRef<ReCaptcha>(null)

  useEffect(() => {
    const validateForm = async () => {
      try {
        await forgotPasswordSchema.parseAsync(formData)
        setErrors({})
        setIsValid(true)
      } catch (error) {
        if (error instanceof z.ZodError) {
          const newErrors: Record<string, string> = {}
          error.errors.forEach(err => {
            newErrors[err.path[0]] = err.message
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
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validatedData = forgotPasswordSchema.safeParse(formData)
    if (!validatedData.success) {
      const newErrors: Record<string, string> = {}
      validatedData.error.errors.forEach(e => {
        newErrors[e.path[0]] = e.message
      })
      setErrors(newErrors)
      return
    }

    try {
      setIsLoading(true)
      await passwordRecovery({
        email: formData.email,
        recaptchaToken: formData.recaptchaToken,
      }).unwrap()

      setIsSubmitted(true)
    } catch (err) {
      const error = err as BadRequestError | UnauthorizedError | NotFoundError
      if (error.status === 404) {
        setErrors({ email: "User with this email doesn't exist" })
      } else if (error.status === 401) {
        setErrors({ recaptchaToken: 'Invalid or missing reCAPTCHA token' })
      } else if (error.status === 400 && error.data?.errorsMessages) {
        const newErrors: Record<string, string> = {}
        error.data.errorsMessages.forEach((msg: { field: string; message: string }) => {
          newErrors[msg.field as keyof ForgotPasswordData] = msg.message
        })
        setErrors(newErrors)
      } else {
        console.error('Unexpected error:', err)
      }

      setIsValid(false)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
  }

  const shouldShowError = (field: keyof ForgotPasswordData) => {
    return touched[field] || formData[field] !== ''
  }

  const onClickHandler = () => {
    console.log('Email sand')
  }

  const onChange = (token: string | null) => {
    setFormData(prev => ({
      ...prev,
      recaptchaToken: token || '',
    }))
  }

  const handleExpired = () => {
    setIsValid(false)
  }

  if (isSubmitted) {
    return (
      <div>
        <Input
          variant='inputDefault'
          type='email'
          id='email'
          name='email'
          label='Email'
          value={formData.email}
          placeholder='Epam@epam.com'
          error={shouldShowError('email') ? errors.email : undefined}
          style={{ width: '330px' }}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <Typography
          component='p'
          variant='regular_text_14'
          className={s.typography}
        >
          Enter your email address and we will send you further instructions
        </Typography>
        <Typography
          component='p'
          variant='regular_text_14'
          className={s.typographySendLink}
        >
          We have sent a link to confirm your email to <strong>{formData.email}</strong>.
        </Typography>
        <Button
          onClick={() => setIsSubmitted(false)}
          style={{ width: '330px' }}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Link Again'}
        </Button>
        <div className={s.linkSignIn}>
          <Button
            variant='text'
            asChild
          >
            <Link href='/sign-in'>Back to Sign In</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          className={s.form}
        >
          <Input
            variant='inputDefault'
            type='email'
            id='email'
            name='email'
            label='Email'
            value={formData.email}
            placeholder='Epam@epam.com'
            error={shouldShowError('email') ? errors.email : undefined}
            style={{ width: '330px' }}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <Typography
            component='p'
            variant='regular_text_14'
            className={s.typography}
          >
            Enter your email address and we will send you further instructions
          </Typography>
          <Button
            type='submit'
            style={{ width: '330px' }}
            disabled={!isValid}
            onClick={onClickHandler}
          >
            Send Link
          </Button>
          <div className={s.linkSignIn}>
            <Button
              variant='text'
              asChild
            >
              <Link href='/sign-in'>Back to Sign In</Link>
            </Button>
          </div>
          <ReCaptcha
            size='normal'
            theme='dark'
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
            onChange={onChange}
            ref={recaptchaRef}
            onExpired={handleExpired}
          />
        </form>
      </div>
    </>
  )
}
