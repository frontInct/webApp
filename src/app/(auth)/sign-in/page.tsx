'use client'
import { SignInForm } from '@/features/auth/signIn/SignInForm'
import { Typography } from '@/shared/components/Typography'
import { PageWrapper } from '@/shared/components/pageWrapper'
import { AuthLayout } from '@/shared/components/authLayout'
import GoogleIcon from '@/shared/assets/icons/google-icon.svg'
import GitHubIcon from '@/shared/assets/icons/github-icon.svg'
import Link from 'next/link'
import s from '@/app/(auth)/sign-in/SignInPage.module.scss'

import Link from 'next/link'
import s from './SignInPage.module.scss'
import { PageWrapper } from '@/shared/components/pageWrapper'
import { AuthLayout } from '@/shared/components/authLayout'
import { Button } from '@/shared/components/button'
import YandexAuth from '@/shared/components/YandexAuth/YandexAuth'

export default function SignInPage() {
  return (
    <PageWrapper>
      <AuthLayout>
        <Typography variant='H1' className={s.title}>Sign In</Typography>
        <div className={s.svgContainer}>
          <Link href='https://google.com'>{<GoogleIcon />}</Link>
          <Link href='https://github.com/frontInct'>{<GitHubIcon />}</Link>
        </div>
        <Typography
          variant='H1'
          component='h1'
        >
          Sign In
        </Typography>
        <YandexAuth />
        <div>
          <SignInForm />
      </AuthLayout>
    </PageWrapper>
  )
}
