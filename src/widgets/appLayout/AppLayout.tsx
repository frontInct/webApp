'use client'

import { ReactNode } from 'react'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { Sidebar } from '@/widgets/sidebar'
import { usePathname } from 'next/navigation'

interface AppLayoutProps {
  children: ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const pathname = usePathname()

  // Пути страниц авторизации, где сайдбар не нужен
  const authPaths = ['/create-new-password', '/forgot-password', '/password-recovery', '/sign-in', '/sign-up']

  // Проверяем, не на странице ли авторизации мы сейчас
  const isAuthPage = authPaths.includes(pathname)

  return (
    <div style={{ display: 'flex' }}>
      {/* Показываем Sidebar только если авторизован и не на странице авторизации */}
      {isLoggedIn && !isAuthPage && <Sidebar />}
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  )
}
