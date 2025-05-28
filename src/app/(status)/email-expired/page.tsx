'use client'
import { useRouter } from 'next/navigation'

export default function EmailExpiredPage() {
  const router = useRouter()
  return (
    <div>
      <h2>Email verification link expired</h2>
      <span>
        Looks like the verification link has expired. <br />
        Not to worry, we can send the link again
      </span>
      <br />
      <button onClick={() => router.push('/sign-in')}>Resend verification link</button>
    </div>
  )
}
