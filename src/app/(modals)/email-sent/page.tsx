'use client';
import { useRouter } from 'next/navigation';

export default function MessageSentModal() {
  const router = useRouter();

  return (
    <div>
      <h2>Email sent</h2>
      {/* в router.push надо указать путь на sign-in */}
      <button onClick={() => router.push('/')}>ок</button>
    </div>
  );
}