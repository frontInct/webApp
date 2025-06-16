'use client'

import { Button } from '@/shared/components/button'
import { Input } from '@/shared/components/input'
import Link from 'next/link'
import s from './SignInForm.module.scss'

export const SignInForm = () => {
  return (
    <>
      <div className={s.formContainer}>
        <div className={s.inputWrapper}>
          <Input
            variant='inputDefault'
            id='email'
            label='Email'
            name='email'
            placeholder='Epam@epam.com'
            width={'330px'}
          />
          <Input
            variant='inputWithPasswordToggle'
            id='password'
            type='password'
            label='Password'
            name='password'
            placeholder='**********'
            width={'330px'}
            className={s.label}
          />
        </div>
        <Link href='/forgot-password'>Forgot Password</Link>
        <Link href='/'>
          <Button style={{ width: '330px' }}>Sign In</Button>
        </Link>
      </div>
    </>
  )
}
