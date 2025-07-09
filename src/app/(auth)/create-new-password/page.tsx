'use client'

import { CreateNewPassword } from '@/features/auth/password/createNewPassword'
import { PageWrapper } from '@/shared/components/pageWrapper'
import { Suspense } from 'react';

const Page = () => {
  return (
    <PageWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <CreateNewPassword />
      </Suspense>
    </PageWrapper>
  )
}

export default Page
