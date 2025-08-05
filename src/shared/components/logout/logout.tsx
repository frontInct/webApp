'use client'

import styles from './logout.module.scss'
import { Typography } from '@/shared/components/Typography'
import { Button } from '@/shared/components/button'
import { ModalRadix } from '@/shared/components/cards'
import { TOKEN } from '@/shared/constants'
import { useLogOutMutation } from '@/shared/store/baseApi'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

type Props = {
  open: boolean
  onClose: (open: boolean) => void
  email: string
}

export default function LogoutModal({ open, onClose, email }: Props) {
  const [logOut] = useLogOutMutation()
  const router = useRouter()

  const handleLogout = useCallback(async () => {
    try {
      await logOut().unwrap()
    } catch (err) {
      console.error('Logout failed:', err)
      //alert('Logout failed. Please try again.')
    } finally {
      localStorage.removeItem(TOKEN)
      onClose(false)
      router.push('/sign-in')
    }
  }, [logOut, router, onClose])

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
              style={{ width: '70px' }}
              onClick={() => onClose(false)}
            >
              No
            </Button>
            <Button
              style={{ width: '70px' }}
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
