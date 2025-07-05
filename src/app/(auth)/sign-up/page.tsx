'use client'
import s from '@/app/(auth)/sign-up/SignUp.module.scss'
import SignUpForm from '@/features/auth/signUp/SignUpForm'
import { AuthLayout } from '@/shared/components/authLayout'
import { PageWrapper } from '@/shared/components/pageWrapper'
import { Typography } from '@/shared/components/Typography'
import YandexAuth from '@/shared/components/YandexAuth/YandexAuth'

export default function SignUpPage() {
  return (
    <PageWrapper>
      <AuthLayout>
        <Typography
          variant='H1'
          className={s.title}
        >
          Sign Up
        </Typography>
        <YandexAuth />
        <SignUpForm />
      </AuthLayout>
    </PageWrapper>
  )
}
