'use client'
import { useState } from 'react'
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

  const handleResend = async () => {
    setError('')
    setMessage('')

    const validation = emailSchema.safeParse({ email })

    if (!validation.success) {
      const errorMessage = validation.error.format().email?._errors[0] || 'Invalid email'
      setError(errorMessage)
      return
    }

    try {
      setIsLoading(true)
      const res = await fetch('/api/auth/resend-confirmation-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.message || 'Failed to resend email')
      }

      setMessage(`We have sent a link to confirm your email to ${email}`)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <Header isLoggedIn />
      <div className={styles.mainContent}>
        <Typography component="h1" variant="H1" className={styles.messageTitle}>
          Email verification link expired
        </Typography>
        <Typography className={styles.messageText}>
          Looks like the verification link has expired. Not to worry, we can send the link again
        </Typography>

        <Input
          className={styles.messageInput}
          variant="inputDefault"
          label="Email"
          placeholder="Epam@epam.com"
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

        {message && (
          <Typography className={styles.successMessage}>{message}</Typography>
        )}

        <ClockImg className={styles.image} />
      </div>
    </div>
  )
}
