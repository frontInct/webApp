'use client'
import { SignInForm } from '@/features/auth/signIn/SignInForm'
import { Typography } from '@/shared/components/Typography'
import { Header } from '@/widgets/header'
import Link from 'next/link'
import GoogleIcon from '../../../shared/assets/icons/google-icon.svg'
import GitHubIcon from '../../../shared/assets/icons/github-icon.svg'
import styled from './SignInPage.module.scss'

export default function SignInPage() {
  return (
    <main className={styled.main}>
      <Header isLoggedIn={true} />
      <div className={styled.formContainer}>
        <Typography variant='H1'>Sign In</Typography>
        <div>
          {<GoogleIcon />} {<GitHubIcon />}
        </div>
        <div>
          <SignInForm />
          <div className={styled.linkSignUp}>
            <span>Don’t have an account?</span>
            <Link href='/sign-up'>Sign Up</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
