import { TermsOfService } from '@/features/auth/rules/termsOfService/TermsOfService'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | webApp',
}

export default function TermsOfServicePage() {
  return (
    <main>
      <TermsOfService />
    </main>
  )
}
