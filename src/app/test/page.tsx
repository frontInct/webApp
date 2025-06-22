'use client'

import { useState } from 'react'
import { Button } from '@/shared/components/button'
import LogoutModal from '../(modals)/logout/page'
import { PageWrapper } from '@/shared/components/pageWrapper'

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

// 'use client'

// import { useState } from 'react'
// import { Button } from '@/shared/components/button'
// import LogoutModal from '../(modals)/logout/page'

// export default function TestModalPage() {
//   const [isOpen, setIsOpen] = useState(false)
//   const email = 'test@example.com'

//   return (
//     <div>
//       <Button onClick={() => setIsOpen(true)}>Тест модалки выхода</Button>

//       <LogoutModal
//         open={isOpen}
//         onClose={() => setIsOpen(false)}
//         email={email}
//       />
//     </div>
//   )
// }

// ('use client')

// import { useState } from 'react'
// import { Button } from '@/shared/components/button'
// import LogoutModal from '../(modals)/logout/page'

// export default function ExamplePage() {
//   const [isLogoutOpen, setIsLogoutOpen] = useState(false)
//   const userEmail = 'user@example.com' // Получайте из контекста/стора

//   return (
//     <div>
//       {/* Ваш контент страницы */}

//       <Button
//         variant='primary'
//         onClick={() => setIsLogoutOpen(true)}
//       >
//         Выйти из аккаунта
//       </Button>

//       <LogoutModal
//         open={isLogoutOpen}
//         onClose={setIsLogoutOpen}
//         email={userEmail}
//       />
//     </div>
//   )
// }

// Кнопка выхода
// Модальное окно выхода
//добавить стейт
// сторибук
