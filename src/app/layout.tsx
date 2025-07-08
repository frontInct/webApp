import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../shared/styles/globals.css'
import '@radix-ui/themes/styles.css'
import { Header } from '@/widgets/header'
import { Providers } from './StoreProvider'
import { AppLayout } from '@/widgets/appLayout/AppLayout'
import { AuthInitializer } from '@/shared/components/auth/AuthInitializer'


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
})

//автоматически вставляет title,meta в head
export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
  icons: {
    icon: [
      {
        url: '/logo/logo-dark/logo-xl.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo/logo-light/logo-xl.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Providers>
        <body className={`${inter.variable}`}>
          <AuthInitializer />
          <Header />
          <AppLayout>{children}</AppLayout>
        </body>
      </Providers>
    </html>
  )
}
