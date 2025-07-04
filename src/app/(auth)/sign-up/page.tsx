'use client'
import { PageWrapper } from '@/shared/components/pageWrapper'
import { AuthLayout } from '@/shared/components/authLayout'
import SignUpForm from '@/features/auth/signUp/SignUpForm'
import s from '@/app/(auth)/sign-up/SignUp.module.scss'
import { Typography } from '@/shared/components/Typography'
import YandexAuth from '@/shared/components/YandexAuth/YandexAuth'
import Script from 'next/script'

export default function SignUpPage() {
  return (
    <>
   <Script
  src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js"
  strategy="beforeInteractive"
  onLoad={() => console.log('Yandex SDK loaded')}
/>
    <PageWrapper>
      <AuthLayout>
        <Typography
          variant='H1'
          className={s.title}
        >
          Sign Up
        </Typography>
         <YandexAuth/>
        <SignUpForm />
      </AuthLayout>
    </PageWrapper>
    </>
  )
}
