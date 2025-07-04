'use client'
import { SignInForm } from '@/features/auth/signIn/SignInForm'
import { Typography } from '@/shared/components/Typography'
import s from './SignInPage.module.scss'
import { PageWrapper } from '@/shared/components/pageWrapper'
import { AuthLayout } from '@/shared/components/authLayout'
import Script from 'next/script'
import { Button } from '@/shared/components/button/Button'
import Link from 'next/link'
import YandexAuth from '@/shared/components/YandexAuth/YandexAuth'


export default function SignInPage() {
  return (
   <>
  {/* <Script
  src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js"
  strategy="beforeInteractive"
  onLoad={() => console.log('Yandex SDK loaded')}
/> */}
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
          Sign In
        </Typography>
        <YandexAuth />
        <SignInForm />
        <div className={s.linkSignUp}>
            <span>Don’t have an account?</span>
            <Button
              variant='text'
              asChild
            >
              <Link href='/sign-up'>Sign Up</Link>
            </Button>
          </div>
      </AuthLayout>
    </PageWrapper>
      </>
  )
}
 
    