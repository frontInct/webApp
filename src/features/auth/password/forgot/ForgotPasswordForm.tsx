import { Button } from '@/shared/components/button'
import { Input } from '@/shared/components/input'
import { Typography } from '@/shared/components/Typography'
import Link from 'next/link'
import s from './ForgotPasswordForm.module.scss'

export const ForgotPasswordForm = () => {
  return (
    <>
      <div>
        <Input
          variant='inputDefault'
          type='email'
          id='email'
          name='email'
          label='Email'
          placeholder='Epam@epam.com'
          style={{ width: '330px' }}
        />
      </div>
      <Typography
        component='p'
        variant='regular_text_14'
        className={s.typography}
      >
        Enter your email address and we will send you further instructions
      </Typography>
      <Link href='/'>
        <Button style={{ width: '330px' }}>Send Link</Button>
      </Link>
    </>
  )
}
