'use client'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <main>
      <h1>Регистрация</h1>
      <p>Форма регистрации</p>
      <span>
        I agree to the <Link href='/terms-of-service'>Terms of Service</Link> and{' '}
        <Link href='/privacy-policy'>Privacy Policy</Link>
      </span>
    </main>
  )
}
