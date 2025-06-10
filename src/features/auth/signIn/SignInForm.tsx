'use client'

import { Button } from '@/shared/components/button'
import { Input } from '@/shared/components/input'
import Link from 'next/link'
import styled from './SignInForm.module.scss'

export const SignInForm = () => {
  return (
    <>
      <div className={styled.formContainer}>
        <div className={styled.inputWrapper}>
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
            className={styled.label}
          />
        </div>

        <Link href='/forgot-password'>Forgot Password</Link>

        <Button width={'330px'}>Sign In</Button>
      </div>
    </>
  )
}
