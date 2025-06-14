'use client'
import { Header } from '@/widgets/header'
import { useRouter } from 'next/navigation'
import styles from './EmailExpiredPage.module.scss'
import { Typography } from '@/shared/components/Typography'
import { Button } from '@/shared/components/button'
import ClockImg from '@/shared/assets/images/img-with-clock.svg'
import { Input } from '@/shared/components/input'

export default function EmailExpiredPage() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Header isLoggedIn />
      <div className={styles.mainContent}>
        <Typography
          component='h1'
          variant='H1'
          className={styles.messageTitle}
        >
          Email verification link expired
        </Typography>
        <Typography className={styles.messageText}>
          Looks like the verification link has expired. Not to worry, we can send the link again
        </Typography>
        <Input className={styles.messageInput} variant={'inputDefault'} label={'Email'} placeholder='Epam@epam.com'/>
        <Button className={styles.messageButton} onClick={() => router.push('/sign-in')}>Resend verification link</Button>
        <ClockImg className={styles.image}/>
      </div>
    </div>
  )
}
