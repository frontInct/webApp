'use client'
import { useRef, useState } from 'react'
import { Header } from '@/widgets/header'
import { Typography } from '@/shared/components/Typography'
import { Button } from '@/shared/components/button'
import { Input } from '@/shared/components/input'
import ClockImg from '@/shared/assets/images/img-with-clock.svg'
import s from './EmailExpiredPage.module.scss'
import { useResendConfirmationCodeMutation } from '@/shared/store/baseApi'
import { TopLoader } from '@/shared/components/topLoader/TopLoader'
import { emailSchema } from '@/shared/schemas/primitives/email'

type ServerError = {
  error?: string
}

export default function EmailExpiredPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const [resendConfirmationCode, { isLoading }] = useResendConfirmationCodeMutation()

  const handleEmailBlur = () => {
    const result = emailSchema.safeParse({ email })
    setError(
      !result.success
        ? result.error.format().email?._errors[0] || 'Enter a valid email address'
        : ''
    )
  }

  const handleResend = async () => {
    setError('')
    setMessage('')

    const validation = emailSchema.safeParse({ email })

    if (!validation.success) {
      const errorMessage = validation.error.format().email?._errors[0] || 'Invalid email'
      setError(errorMessage)
      inputRef.current?.focus()
      return
    }

    try {
      await resendConfirmationCode({ email }).unwrap()
      setMessage(`We have sent a link to confirm your email to ${email}`)
      setEmail('')
      inputRef.current?.focus()
    } catch (err: unknown) {
      console.error('Catch error:', err)
      let serverError = 'Unexpected error'

      if (typeof err === 'object' && err !== null) {
        const errorData = (err as { data?: ServerError }).data

        if (errorData?.error) {
          const rawMessage = errorData.error.replace(/^Error:\s*/, '').trim()
          if (rawMessage === 'Email уже подтверждён') {
            serverError = 'Email is already confirmed'
          } else {
            serverError = rawMessage
          }
        }
      }
      setError(serverError)
      inputRef.current?.focus()
    }
  }

  return (
    <div className={s.container}>
      <TopLoader isActive={isLoading} />
      <Header isLoggedIn />
      <div className={s.mainContent}>
        <Typography
          component='h1'
          variant='H1'
          className={s.messageTitle}
        >
          Email verification link expired
        </Typography>
        <Typography className={s.messageText}>
          Looks like the verification link has expired. Not to worry, we can send the link again
        </Typography>
        <Input
          ref={inputRef}
          className={s.emailInput}
          variant='inputDefault'
          label='Email'
          placeholder='Epam@epam.com'
          value={email}
          onChange={e => setEmail(e.target.value)}
          onBlur={handleEmailBlur}
          error={error}
        />
        <Button
          className={s.resendButton}
          onClick={handleResend}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Resend verification link'}
        </Button>
        {message && <Typography className={s.successMessage}>{message}</Typography>}
        <ClockImg className={s.image} />
      </div>
    </div>
  )
}
