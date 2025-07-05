import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLoginMutation } from '@/shared/store/baseApi'
import { SignInFormData } from '@/shared/schemas/forms/signIn'
import { isApiError } from '../utils/errors/isApiError'

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
      router.push('/user/profiles/myProfile')
    } catch (err: any) {
      console.log('LOGIN ERROR:', err)
      if (isApiError(err) && err.status === 401) {
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
