'use client'

import { useState } from 'react'
import { Button } from '@/shared/components/button'
import { PageWrapper } from '@/shared/components/pageWrapper'
import AddPhotoModal from '@/entities/user/createPosts/addPhoto/addPhoto'

export default function TestModalPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <PageWrapper>
      <h1 className='text-xl font-bold mb-4'>Тестовая страница для модалки выхода</h1>
      <Button
        variant='primary'
        onClick={() => setIsOpen(true)}
      >
        Открыть модалку добавления фотки
      </Button>
      <AddPhotoModal
        open={isOpen}
        onClose={value => setIsOpen(value)}
      />
    </PageWrapper>
  )
}
