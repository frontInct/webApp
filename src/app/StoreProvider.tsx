'use client'
import { Provider } from 'react-redux'
import { store } from '@/shared/store/store'

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}

//https://redux.js.org/usage/nextjs
//https://github.com/vercel/next.js/tree/canary/examples/with-redux
