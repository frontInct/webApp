'use client'

import { CreateNewPassword } from '@/features/auth/password/createNewPassword'
import { PageWrapper } from '@/shared/components/pageWrapper'

const Page = () => {
  return (
    <PageWrapper>
      <CreateNewPassword />
    </PageWrapper>
  )
}

export default Page
