'use client'

import { useState } from 'react'
import { Button } from '@/shared/components/button'
import { PageWrapper } from '@/shared/components/pageWrapper'
import LogoutModal from '@/shared/components/logout/logout'

export default function TestModalPage() {
  const [isOpen, setIsOpen] = useState(false)
  const email = 'test@example.com' // Здесь можно получить email из хранилища

  return (
    <PageWrapper>
      <h1 className='text-xl font-bold mb-4'>Тестовая страница для модалки выхода</h1>
      <Button
        variant='primary'
        onClick={() => setIsOpen(true)}
      >
        Открыть модалку выхода
      </Button>
      <LogoutModal
        open={isOpen}
        onClose={value => setIsOpen(value)}
        email={email}
      />
    </PageWrapper>
  )
}
