import { Button } from '@/shared/components/button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Title | webApp',
}

export default function Page() {
  return (
    <div>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="textButton">Text</Button>
      <Button variant="variant21">Variant21</Button>

      <h2>Стартовая страница</h2>
      <p>
        Здесь автоматически проверяется, зарегистрирован пользователь или нет, и происходит переход
        на соответствующую страницу в зависимости от результата
      </p>
    </div>
  )
}
