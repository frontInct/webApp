import Yandex from '@/shared/assets/icons/yandex.svg'
import s from './yandex.module.scss'

export default function YandexAuth() {
  return (
    <div className={s.svgContainer}>
      <a href='https://www.yandex.ru/'>
        <Yandex />
      </a>
    </div>
  )
}
