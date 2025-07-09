// shared/components/AuthInitializer.tsx
'use client'

import { useEffect } from 'react'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { setIsLoggedIn, setEmail } from '@/shared/store/authSlice'

export const AuthInitializer = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    const email = localStorage.getItem('email') // если сохраняешь
    if (accessToken) {
      dispatch(setIsLoggedIn(true))
      if (email) dispatch(setEmail(email))
    }
  }, [dispatch])

  return null
}
