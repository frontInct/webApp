'use client'

import Link from 'next/link'
import { PageWrapper } from '@/shared/components/pageWrapper/PageWrapper'
import { AuthLayout } from '@/shared/components/authLayout'
import { Button } from '@/shared/components/button'
import { Typography } from '@/shared/components/Typography/Typography'
import { ForgotPasswordForm } from '@/features/auth/password/forgot/ForgotPasswordForm'
import s from './ForgotPasswordPage.module.scss'
import { Checkbox } from '@/shared/components/checkBox'

export default function ForgotPasswordPage() {
  return (
    <PageWrapper>
      <AuthLayout>
        <Typography
          component='h1'
          variant='H1'
          style={{ marginBottom: '35px' }}
        >
          Forgot Password
        </Typography>
        <ForgotPasswordForm />
        <div className={s.linkSignIn}>
          <Button
            variant='text'
            asChild
          >
            <Link href='/sign-in'>Back to Sign In</Link>
          </Button>
        </div>
        <div className={s.reCaptcha}>
          <Checkbox label={"I'm not a robot"} />
        </div>
      </AuthLayout>
    </PageWrapper>
  )
}
