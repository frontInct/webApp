'use client'

import { useRouter } from 'next/navigation'
import styles from './logout.module.scss'
import { Typography } from '@/shared/components/Typography'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function LogoutModal({ open, onOpenChange }: Props) {
  const router = useRouter()
  const userEmail = 'Epam@epam.com' // Замените на данные из контекста/стора

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      localStorage.removeItem('token')
      onOpenChange(false)
      router.push('/sign-in')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  if (!open) return null // Не рендерим, если закрыто

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <Typography
          variant='H1'
          component='h1'
          className={styles.title}
        >
          Log Out
        </Typography>
        <button onClick={() => onOpenChange(false)}>X</button>
        <Typography
          variant='regular_text_16'
          className={styles.message}
        >
          Are you really want to log out of your account <br />
          <Typography
            variant='bold_text_16'
            component='span'
          >
            "{userEmail}"?
          </Typography>
        </Typography>
        <div className={styles.buttons}>
          <button
            onClick={handleLogout}
            className={styles.button}
          >
            <Typography variant='H3'>Yes</Typography>
          </button>
          <button
            onClick={handleLogout}
            className={styles.button}
          >
            <Typography
              variant='H3'
              onClick={() => onOpenChange(false)}
            >
              No
            </Typography>
          </button>
        </div>
      </div>
    </div>
  )
}
