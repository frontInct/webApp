'use client'
import { PageWrapper } from '@/shared/components/pageWrapper'
import { AuthLayout } from '@/shared/components/authLayout'
import SignUpForm from '@/features/auth/signUp/SignUpForm'
import s from '@/app/(auth)/sign-up/SignUp.module.scss'
import { Typography } from '@/shared/components/Typography'
import GoogleIcon from '@/shared/assets/icons/google-icon.svg'
import GitHubIcon from '@/shared/assets/icons/github-icon.svg'

export default function SignUpPage() {
  return (

    <PageWrapper>
      <AuthLayout>
        <Typography variant='H1' className={s.title}>Sign Up</Typography>
        <div className={s.svgContainer}>
          {<GoogleIcon />} {<GitHubIcon />}
        </div>
        <SignUpForm/>
      </AuthLayout>
    </PageWrapper>


  )
}
