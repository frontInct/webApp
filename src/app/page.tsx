import type { Metadata } from 'next'
import Img from '/src/shared/assets/images/img-with-clock.svg'

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

      <Img />
    </div>
  )
}
