'use client'

import { useEffect } from 'react'

interface YandexAuthProps {
  clientId?: string
  redirectUri?: string
  elementId?: string
}

export default function YandexAuth({
  clientId = process.env.YANDEX_CLIENT_ID || '7f2572bd68454a90b302f410ddc985e2',
  redirectUri = process.env.YANDEX_REDIRECT_URI || 'http://localhost:3000/auth/callback',
  elementId = 'buttonContainerId',
}: YandexAuthProps) {
  useEffect(() => {
    console.log(clientId, redirectUri)

    if (typeof window === 'undefined' || !window.YaAuthSuggest) return

    // Удаляем токен при инициализации, чтобы отключить автологин
    if ('YaSendSuggestToken' in window) {
      console.log('Удаляем сохранённый YaSendSuggestToken')
      delete (window).YaSendSuggestToken
    }

    window.YaAuthSuggest.init(
      {
        client_id: clientId,
        response_type: 'token',
        redirect_uri: redirectUri
      },
      // 'http://localhost:3000',
      redirectUri,
      {
        view: "button",
        parentId: elementId,
        buttonSize: 'm',
        buttonView: 'main',
        buttonTheme: 'light',
        buttonBorderRadius: "20",
        buttonIcon: 'ya',
      }
    )
      .then(({ handler }) => {
        handler()
      })
    const receiveMessage = (event: MessageEvent) => {
      if (event.data?.token) {
        console.log('Токен из callback:', event.data.token)

        fetch('http://localhost:3000/api/auth/yandex', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: event.data.token }),
        })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('appToken', data.token)
            window.location.href = '/' // переход на главную
          })
          .catch(console.error)
      }
    }

    window.addEventListener('message', receiveMessage)

    return () => window.removeEventListener('message', receiveMessage)
  }, [clientId, redirectUri, elementId])

  return <div id={elementId} />
}
