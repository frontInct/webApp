'use client'

import LogoutModal from '@/shared/components/logout/logout'
import { PageWrapper } from '@/shared/components/pageWrapper'
import { useRouter } from 'next/navigation'

export default function InterceptedLogoutModal() {
  const router = useRouter()

  const handleClose = () => router.back()

  return (
    <PageWrapper>
      <LogoutModal
        open={true}
        onClose={handleClose}
        email='user@example.com'
      />
    </PageWrapper>
  )
}
