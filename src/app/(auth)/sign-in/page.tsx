'use client'
import { SignInForm } from '@/features/auth/signIn/SignInForm'
import { AuthLayout } from '@/shared/components/authLayout'
import { PageWrapper } from '@/shared/components/pageWrapper'
import { Typography } from '@/shared/components/Typography'
import YandexAuth from '@/shared/components/YandexAuth/YandexAuth'
import s from './SignInPage.module.scss'

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
