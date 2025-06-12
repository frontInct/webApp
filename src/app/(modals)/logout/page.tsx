'use client'

import { Modal } from '@/shared/components/cards/Modal'
import styles from './logout.module.scss'
import { Typography } from '@/shared/components/Typography'
import { Button } from '@/shared/components/button'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  email: string
}

export const LogoutModal = ({ open, onOpenChange, email }: Props) => {
  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'DELETE' })
      // localStorage.removeItem('token')
      window.location.href = '/sign-in' // поменять на navigate?
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title='Log Out'
      backgroundColor='dark300'
      width='440px'
      height='240px'
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
              width='96px'
              height='36px'
              onClick={() => onOpenChange(false)}
            >
              No
            </Button>
            <Button
              variant='outline'
              width='96px'
              height='36px'
              className='hover-outline'
              onClick={handleLogout}
            >
              Yes
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
