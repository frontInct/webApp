'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const hash = window.location.hash

    if (!hash) {
      // Нет токена — отправляем на страницу логина
      router.replace('/sign-in')
      return
    }

    const params = new URLSearchParams(hash.substring(1)) // убираем #
    const yandexToken = params.get('access_token')

    if (!yandexToken) {
      router.replace('/sign-in')
      return
    }

    async function sendToken() {
      try {
        const res = await fetch('http://178.20.41.242:9000/api/v1/auth/yandex', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: yandexToken }),
        })

        if (!res.ok) {
          console.warn('Ошибка авторизации на сервере, статус:', res.status)
          router.replace('/sign-in')
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


// 'use client'

// import { useEffect } from 'react'

// export default function CallbackPage() {
//   useEffect(() => {
//     const hash = window.location.hash
//     const params = new URLSearchParams(hash.substring(1))
//     const token = params.get('access_token')

//     if (token) {
//       // Отправляем токен во вкладку, из которой открыли это окно
//       if (window.opener) {
//         window.opener.postMessage({ token }, '*')
//         window.close() // закрываем текущее окно
//       } else {
        
//         console.log('Token:', token)
//       }
//     } else {
//       console.warn('Токен не найден в hash')
//     }
//   }, [])

//   return <p>Обработка авторизации...</p>
// }
