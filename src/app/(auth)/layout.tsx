import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'src/shared/styles/globals.css'
import '@radix-ui/themes/styles.css'
import { Header } from '@/widgets/header'
import { Providers } from '@/app/StoreProvider'


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
})

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
      <body className={`${inter.variable}`}>
        <Providers>
          {children}
          <Header />
        </Providers>
      </body>
    </html>
  )
}
