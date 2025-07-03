import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLoginMutation } from '@/shared/store/baseApi'
import { SignInFormData } from '@/shared/schemas/forms/signIn'

export function useSignInForm() {
  const router = useRouter()
  const [loginError, setLoginError] = useState('')
  const [login, { isLoading }] = useLoginMutation()

  const signIn = async (data: SignInFormData) => {
    setLoginError('')
    try {
      const res = await login({
        loginOrEmail: data.email,
        password: data.password,
      }).unwrap()

      // Сохраняем accessToken в localStorage
      localStorage.setItem('accessToken', res.accessToken)

      // Тут наверное потом будет логика проверки "новый аккаунт" или "существующий", я не знаю тут как тут это проверяется пока что так пока просто редиректим на accManage
      // router.push('/user/profiles/accManage')

      // если нужен редиректит на профиль - заменяем на:
      // router.push('/user/profiles/myProfile')
    } catch (err: any) {
      console.log('LOGIN ERROR:', err)

      // если ошибка парсинга, но оригинальный статус 401, пока не юзаем isApiError потому что у бэка очень странная ошибка на неправильный майл и пароль, как они поправят сделаем тут норм проверку
      if (err.status === 'PARSING_ERROR' && err.originalStatus === 401) {
        setLoginError('The email or password are incorrect. Try again please.')
        return
      }

      // если приходит нормальный статус 401
      if (err.status === 401) {
        setLoginError('The email or password are incorrect. Try again please.')
        return
      }

      setLoginError('Unexpected error occurred. Please try again.')
    }
  }

  return {
    signIn,
    loginError,
    isLoading,
  }
}
