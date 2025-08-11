'use client'

import AddPhotoModal from '@/entities/user/createPost/addPhoto/AddPhotoModal'
import { PageWrapper } from '@/shared/components/pageWrapper'
import { useRouter } from 'next/navigation'

export default function AddPhotoModalPage() {
  const router = useRouter()

  const handleClose = () => router.back()

  return (
    <PageWrapper>
      <AddPhotoModal
        open={true}
        onClose={handleClose}
        title='Add Photo'
      />
    </PageWrapper>
  )
}
