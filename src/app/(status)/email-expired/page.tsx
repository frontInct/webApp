'use client'
import { useRef, useState } from 'react'
import { Header } from '@/widgets/header'
import { Typography } from '@/shared/components/Typography'
import { Button } from '@/shared/components/button'
import { Input } from '@/shared/components/input'
import ClockImg from '@/shared/assets/images/img-with-clock.svg'
import styles from './EmailExpiredPage.module.scss'
import { z } from 'zod'

const emailSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
})

export default function EmailExpiredPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

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
      setIsLoading(true)
      const res = await fetch('https://justmyshots.ru/api/v1/auth/resend-confirmation-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      if (res.status === 204) {
        setMessage(`We have sent a link to confirm your email to ${email}`)
        setEmail('')
        inputRef.current?.focus()
      } else if (res.status === 400) {
        const data = await res.json()
        const errorMsg = data.errorsMessages?.[0]?.message || 'Invalid request'
        setError(errorMsg)
        inputRef.current?.focus()
      } else {
        setError('Unexpected error')
        inputRef.current?.focus()
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
        inputRef.current?.focus()
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <Header isLoggedIn />
      <div className={styles.mainContent}>
        <Typography
          component='h1'
          variant='H1'
          className={styles.messageTitle}
        >
          Email verification link expired
        </Typography>
        <Typography className={styles.messageText}>
          Looks like the verification link has expired. Not to worry, we can send the link again
        </Typography>
        <Input
          ref={inputRef}
          className={styles.messageInput}
          variant='inputDefault'
          label='Email'
          placeholder='Epam@epam.com'
          value={email}
          onChange={e => setEmail(e.target.value)}
          error={error}
        />
        <Button
          className={styles.messageButton}
          onClick={handleResend}
          disabled={isLoading}
        >
          Resend verification link
        </Button>
        {message && <Typography className={styles.successMessage}>{message}</Typography>}
        <ClockImg className={styles.image} />
      </div>
    </div>
  )
}
