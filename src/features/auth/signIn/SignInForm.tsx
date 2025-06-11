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
            width={'330px'}
            label='Email'
          />
          <Input
            variant='inputWithPasswordToggle'
            type='password'
            width={'330px'}
            label='Password'
            className={s.label}
          />
        </div>
        <Link href='/forgot-password'>Forgot Password</Link>
        <Button style={{ width: '330px' }}>Sign In</Button>
      </div>
    </>
  )
}
