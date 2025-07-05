'use client'

import { ReactNode } from 'react'
// import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { Sidebar } from '@/widgets/sidebar'

interface AppLayoutProps {
  children: ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  // const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const isLoggedIn = true // временно для тестирования 

  return (
    <div style={{ display: 'flex' }}>
      {isLoggedIn && <Sidebar />}
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  )
}
