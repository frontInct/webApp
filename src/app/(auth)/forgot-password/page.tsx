'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ForgotPasswordPage() {
  const router = useRouter()

  return (
    <main>
      <h1>Забыли пароль</h1>
      <p>Форма восстановления пароля</p>
      <form
        action='#'
        method='POST'
      >
        <div>
          <label htmlFor='email'>Email</label>
          <br />
          <input
            type='email'
            id='email'
            name='email'
            placeholder='your@email.com'
          />
        </div>

        <div>
          <label>
            <input
              type='checkbox'
              name='not-robot'
            />
            <span>I&#39;m not a robot</span>
          </label>
        </div>
        <div>
          <button
            type='button'
            onClick={() => router.push('/sign-in')}
          >
            Send Link
          </button>
          <br />
          <Link href='/sign-in'>Back to Sign In</Link>
        </div>
      </form>
    </main>
  )
}
