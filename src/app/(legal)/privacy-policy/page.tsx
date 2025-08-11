import { PrivacyPolicy } from '@/features/auth/rules/privacyPolicy/PrivacyPolicy'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | webApp',
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  )
}
