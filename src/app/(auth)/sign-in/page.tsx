'use client'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <main>
      <h1>Авторизация</h1>
      <p>Форма авторизации</p>

      <span>Don’t have an account?</span>
      <br />
      <Link href='/sign-up'>Sign Up</Link>
    </main>
  )
}
