import type { Metadata } from 'next'
import { Typography } from '@/components/ui/typography/typography'

export const metadata: Metadata = {
  title: 'Title | webApp',
}

export default function Page() {
  return (
    <div>
      <h2>Стартовая страница</h2>
      <p>
        Здесь автоматически проверяется, зарегистрирован пользователь или нет, и происходит переход
        на соответствующую страницу в зависимости от результата
      </p>
    </div>
  )
}
