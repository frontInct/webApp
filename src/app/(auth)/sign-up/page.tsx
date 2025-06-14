'use client'
import { PageWrapper } from '@/shared/components/pageWrapper'
import { AuthLayout } from '@/shared/components/authLayout'
import SignUpForm from '@/features/auth/signUp/SignUpForm'
import s from '@/app/(auth)/sign-in/SignInPage.module.scss'

export default function SignUpPage() {
  return (
    <main className={s.main}>
    <PageWrapper>
      <AuthLayout>
        <SignUpForm/>
      </AuthLayout>
    </PageWrapper>

      </main>
  )
}
