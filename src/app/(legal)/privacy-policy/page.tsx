import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | webApp',
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <h1>Политика конфиденциальности</h1>
      <p>Здесь размещаются условия предоставления сервиса</p>
    </main>
  );
}