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
            autoComplete="email"
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
            autoComplete="current-password"
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

// 'use client'

// import { Button } from '@/shared/components/button'
// import { Input } from '@/shared/components/input'
// import Link from 'next/link'
// import { useState } from 'react'
// import { useLoginMutation } from '@/shared/store/baseApi'
// import { useRouter } from 'next/navigation'
// import s from './SignInForm.module.scss'

// export const SignInForm = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [login, { isLoading }] = useLoginMutation()
//   const router = useRouter()

//   const handleSubmit = async () => {
//     try {
//       const result = await login({ loginOrEmail: email, password }).unwrap()
//       alert('Great!!!')
//       // router.push('/dashboard') — можешь включить если нужно
//     } catch (error: any) {
//       alert(error?.message || 'Ошибка входа')
//     }
//   }

//   return (
//     <div className={s.formContainer}>
//       <div className={s.inputWrapper}>
//         <Input
//           variant='inputDefault'
//           id='email'
//           label='Email'
//           name='email'
//           placeholder='Epam@epam.com'
//           width={'330px'}
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//         />
//         <Input
//           variant='inputWithPasswordToggle'
//           id='password'
//           type='password'
//           label='Password'
//           name='password'
//           placeholder='**********'
//           width={'330px'}
//           className={s.label}
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//         />
//       </div>

//       <Link href='/forgot-password'>Forgot Password</Link>

//       <Button
//         style={{ width: '330px' }}
//         onClick={handleSubmit}
//         disabled={isLoading}
//       >
//         {isLoading ? 'Loading...' : 'Sign In'}
//       </Button>
//     </div>
//   )
// }
