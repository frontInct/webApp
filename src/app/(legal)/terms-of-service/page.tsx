import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | webApp',
}

export default function TermsOfServicePage() {
  return (
    <main>
      <h1>Условия использования</h1>
      <p>Здесь размещаются условия предоставления сервиса</p>
    </main>
  );
}