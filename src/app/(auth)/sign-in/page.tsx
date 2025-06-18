'use client'
import { SignInForm } from '@/features/auth/signIn/SignInForm'
import { Typography } from '@/shared/components/Typography'
import Link from 'next/link'
import GoogleIcon from '@/shared/assets/icons/google-icon.svg'
import GitHubIcon from '@/shared/assets/icons/github-icon.svg'
import s from './SignInPage.module.scss'
import { PageWrapper } from '@/shared/components/pageWrapper'
import { AuthLayout } from '@/shared/components/authLayout'
import { Button } from '@/shared/components/button'

export default function SignInPage() {
  return (
    <PageWrapper>
      <AuthLayout>
        <Typography
          variant='H1'
          component='h1'
        >
          Sign In
        </Typography>
        <div className={s.svgContainer}>
          <Link href='https://google.com'>{<GoogleIcon />}</Link>
          <Link href='https://github.com/frontInct'>{<GitHubIcon />}</Link>
        </div>
        <div>
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
        </div>
      </AuthLayout>
    </PageWrapper>
  )
}
