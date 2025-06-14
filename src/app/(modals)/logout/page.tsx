'use client'

import styles from './logout.module.scss'
import { Typography } from '@/shared/components/Typography'
import { Button } from '@/shared/components/button'
import { ModalRadix } from '@/shared/components/cards'

const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false)

type Props = {
  open: boolean
  onClose: () => void
  email: string
}

export const LogoutModal = ({ open, onClose, email }: Props) => {
  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'DELETE' })
      // localStorage.removeItem('token')
      window.location.href = '/sign-in' // поменять на navigate?
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <ModalRadix
      open={handleModalClose}
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
              onClick={onClose}
              // onClick={() => onClose()}
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
