'use client'
import { SignInForm } from '@/features/auth/signIn/SignInForm'
import { Typography } from '@/shared/components/Typography'
import s from './SignInPage.module.scss'
import { PageWrapper } from '@/shared/components/pageWrapper'
import { AuthLayout } from '@/shared/components/authLayout'
import YandexAuth from '@/shared/components/YandexAuth/YandexAuth'

export default function SignInPage() {
  return (
    <PageWrapper>
      <AuthLayout>
        <Typography
          variant='H1'
          className={s.title}
        >
          Sign In
        </Typography>
        <YandexAuth />
        <SignInForm />
      </AuthLayout>
    </PageWrapper>
  )
}
