'use client'
import { PageWrapper } from '@/shared/components/pageWrapper'
import { AuthLayout } from '@/shared/components/authLayout'
import SignUpForm from '@/features/auth/signUp/SignUpForm'

export default function SignUpPage() {
  return (
    <PageWrapper>
      <AuthLayout>
        <SignUpForm/>
      </AuthLayout>
    </PageWrapper>
  )
}
