'use client'

import styles from './logout.module.scss'
import { Typography } from '@/shared/components/Typography'
import { Button } from '@/shared/components/button'
import { ModalRadix } from '@/shared/components/cards'
import { useLogOutMutation } from '@/shared/store/baseApi'
import { useRouter } from 'next/navigation'

type Props = {
  open: boolean
  onClose: (open: boolean) => void
  email: string
}

export default function LogoutModal({ open, onClose, email }: Props) {
  // const handleLogout = async () => {
  //   try {
  //     await fetch('/api/auth/logout', { method: 'DELETE' })
  //     // localStorage.removeItem('token')
  //     window.location.href = '/sign-in' // поменять на navigate?
  //   } catch (error) {
  //     console.error('Logout failed:', error)
  //   }
  // }
  const [logout] = useLogOutMutation()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await logout().unwrap()
      // Очистка данных
      localStorage.removeItem('accessToken')
      sessionStorage.clear()

      // Редирект
      router.push('/sign-in')
      router.refresh() // Для Next.js 13+
    } catch (error) {
      console.error('Logout failed:', error)
      // Можно добавить toast-уведомление об ошибке
    } finally {
      onClose(false)
    }
  }
  return (
    <ModalRadix
      open={open}
      onClose={onClose}
      modalTitle='Log Out'
      size='md'
    >
      <div className={styles.logoutContainer}>
        <div className={styles.logoutContent}>
          <Typography variant='regular_text_16'>
            Are you really want to log out of your account
            <br />
            <Typography
              variant='bold_text_16'
              component='span'
            >
              "{email}"?
            </Typography>
          </Typography>

          <div className={styles.buttons}>
            <Button
              variant='primary'
              onClick={() => onClose(false)}
            >
              No
            </Button>
            <Button
              variant='outlined'
              className='hover-outline'
              onClick={handleLogout}
            >
              Yes
            </Button>
          </div>
        </div>
      </div>
    </ModalRadix>
  )
}
