'use client'

import { PageWrapper } from '@/shared/components/pageWrapper/PageWrapper'
import { AuthLayout } from '@/shared/components/authLayout'
import { Typography } from '@/shared/components/Typography/Typography'
import { ForgotPasswordForm } from '@/features/auth/password/forgot/ForgotPasswordForm'

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
      </AuthLayout>
    </PageWrapper>
  )
}
