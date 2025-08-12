import React from 'react'
import Link from 'next/link'
import s from './Header.module.scss'
import { Button } from '@/shared/components/button'
import { SelectBox } from '@/shared/components/selectBox'
import Img from '@/shared/assets/icons/bell.svg'
import ImgEn from '@/shared/assets/icons/flag-uk.svg'
import ImgRu from '@/shared/assets/icons/flag-russia.svg'
import { Typography } from '@/shared/components/Typography'

interface HeaderProps {
  isLoggedIn?: boolean
  siteName?: string
}

export const Header: React.FC<HeaderProps> = ({ siteName = 'Inctagram', isLoggedIn }) => {
  const languageOptions = [
    { value: 'en', label: 'English', flag: <ImgEn /> },
    { value: 'ru', label: 'Russian', flag: <ImgRu /> },
  ]

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link href='/'>
          <Typography variant='large'>{siteName}</Typography>
        </Link>
        <nav className={s.nav}>
          <ul className={s.navList}>
            {isLoggedIn && (
              <li>
                <Img />
              </li>
            )}
            <li>
              <SelectBox
                defaultValue='en'
                options={languageOptions}
              />
            </li>
            {!isLoggedIn && (
              <>
                <li>
                  <Link href='/sign-in'>
                    <Button
                      variant='text'
                      style={{ width: '100px' }}
                    >
                      Log in
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href='/sign-up'>
                    <Button
                      variant='primary'
                      style={{ width: '100px', borderRadius: '2px' }}
                    >
                      Sign up
                    </Button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
