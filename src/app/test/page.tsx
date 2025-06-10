'use client'

import { useState } from 'react'
import { Button } from '@/shared/components/button'
import { LogoutModal } from '../(modals)/logout/page'

export default function ExamplePage() {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)
  const userEmail = 'user@example.com' // Получайте из контекста/стора

  return (
    <div>
      {/* Ваш контент страницы */}

      <Button
        variant='primary'
        onClick={() => setIsLogoutOpen(true)}
      >
        Выйти из аккаунта
      </Button>

      <LogoutModal
        open={isLogoutOpen}
        onOpenChange={setIsLogoutOpen}
        email={userEmail}
      />
    </div>
  )
}

// Кнопка выхода
// Модальное окно выхода
//добавить стейт
// сторибук
