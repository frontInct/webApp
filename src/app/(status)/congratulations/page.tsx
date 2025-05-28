'use client'
import { useRouter } from 'next/navigation'

export default function CongratulationsPage() {
  const router = useRouter()
  return (
    <div>
      <h2>Congratulations!</h2>
      <span>Your email has been confirmed</span>
      <br />
      <button onClick={() => router.push('/sign-in')}>Sign In</button>
    </div>
  )
}
