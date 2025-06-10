'use client'

import { Modal } from '@/shared/components/cards/Modal'
import styles from './logout.module.scss'
import { Typography } from '@/shared/components/Typography'
import { Button } from '@/shared/components/button'

type LogoutModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  email: string
}

export const LogoutModal = ({ open, onOpenChange, email }: LogoutModalProps) => {
  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    localStorage.removeItem('token')
    window.location.href = '/sign-in'
  }

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title='Log Out'
      backgroundColor='dark500'
      width='360px'
    >
      <div className={styles.logoutContent}>
        <Typography variant='regular_text_16'>
          Are you really want to log out of your account <br />
          <span className={styles.email}>"{email}"?</span>
        </Typography>

        <div className={styles.buttons}>
          <Button
            variant='secondary'
            onClick={() => onOpenChange(false)}
          >
            No
          </Button>
          <Button
            variant='textButton'
            onClick={handleLogout}
          >
            Yes
          </Button>
        </div>
      </div>
    </Modal>
  )
}
