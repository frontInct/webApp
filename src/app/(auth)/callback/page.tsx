'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const hash = window.location.hash

    if (!hash) {
      router.replace('/sign-in')
      return
    }

    const params = new URLSearchParams(hash.substring(1))
    const yandexToken = params.get('access_token')

    if (!yandexToken) {
      router.replace('/sign-in')
      return
    }

    async function sendToken() {
      try {
        // 1. Получаем данные пользователя от Яндекса
        const yaInfoRes: Response = await fetch('https://login.yandex.ru/info?format=json', {
          headers: {
            Authorization: `OAuth ${yandexToken}`,
          },
        })

        const yaInfo: {
          id: string
          login: string
          default_email?: string
          first_name?: string
          last_name?: string
          display_name?: string
          emails?: string[]
        } = await yaInfoRes.json()

        console.log('Yandex user info:', yaInfo)

        // 2. Отправляем данные на бэк
        const res = await fetch('http://178.20.41.242:9000/api/v1/auth/yandex', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            token: yandexToken,
            email: yaInfo.default_email,
            yandexId: yaInfo.id,
            login: yaInfo.login,
          }),
        })

        if (!res.ok) {
          console.warn('Ошибка авторизации на сервере, статус:', res.status)
          router.replace('/')
          return
        }

        const result = await res.json()
        localStorage.setItem('appToken', result.token)

        // Убираем хэш из URL
        history.replaceState(null, '', window.location.pathname)

        // Перенаправляем на главную
        router.replace('/')
      } catch (error) {
        console.error('Ошибка при отправке токена:', error)
        router.replace('/sign-in')
      }
    }

    sendToken()
  }, [router])

  return <p>Входим через Яндекс...</p>
}
