'use client'

import { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useRegistrationConfirmationMutation } from '@/shared/store/baseApi'
import { TopLoader } from '@/shared/components/topLoader/TopLoader'
import styles from './Congratulations.module.scss'
import { Typography } from '@/shared/components/Typography'
import { Button } from '@/shared/components/button'
import MailImg from '@/shared/assets/images/img-with-email.svg'

function SearchParamsWrapper() {
  const searchParams = useSearchParams()
  const code = searchParams.get('code') || ''

  return <SearchParamsContent code={code} />
}

interface SearchParamsContentProps {
  code: string | null;
}

function SearchParamsContent({ code }: SearchParamsContentProps) {
  const router = useRouter()
  const [confirmRegistration, { isLoading }] = useRegistrationConfirmationMutation()
  const [confirmed, setConfirmed] = useState(false)

  useEffect(() => {
    if (!code) {
      router.replace('/email-expired')
      return
    }

    confirmRegistration({ code })
      .unwrap()
      .then(() => {
        setConfirmed(true)
      })
      .catch(err => {
        const errors = err?.data?.errors || []
        const codeError = errors.find(
          (e: { field: string; message: string }) =>
            e.field === 'code' &&
            (e.message.includes('expires') || e.message.includes('was confirmed'))
        )

        if (codeError) {
          // Код устарел или уже использован — редирект на повторную отправку
          router.replace('/email-expired')
        } else if (
          err?.data?.error
            ?.toString()
            .replace(/^Error:\s*/, '')
            .trim() === 'Email уже подтверждён'
        ) {
          setConfirmed(true)
        } else {
          router.replace('/email-expired')
        }
      })
  }, [code, confirmRegistration, router])

  if (isLoading) return <TopLoader isActive={true} />

  return (
    <div>
      {confirmed ? (
        <div className={styles.container}>
          <Typography
            className={styles.congratulations}
            variant={'H1'}
          >
            Congratulations!
          </Typography>
          <Typography
            className={styles.message}
            variant={'regular_text_16'}
          >
            Your email has been confirmed
          </Typography>
          <Button
            className={styles.signInButton}
            onClick={() => router.push('/sign-in')}
          >
            Sign In
          </Button>
          <MailImg className={styles.image} />
        </div>
      ) : null}
    </div>
  )
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsWrapper />
    </Suspense>
  )
}
