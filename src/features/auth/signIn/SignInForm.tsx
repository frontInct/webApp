'use client'

import { Button } from '@/shared/components/button'
import { Input } from '@/shared/components/input'
import Link from 'next/link'
import s from './SignInForm.module.scss'

export const SignInForm = () => {
  return (
    <>
      <form className={s.formContainer}>
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
        <div className={s.linkSignUp}>
          <span>Don’t have an account?</span>
          <Button variant='text'>
            <Link href='/sign-up'>Sign Up</Link>
          </Button>
        </div>
      </form>
    </>
  )
}
