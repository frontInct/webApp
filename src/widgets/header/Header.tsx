import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import { Button } from '@/shared/components/button'
import { SelectBox } from '@/shared/components/selectBox'
import Img from '../../shared/assets/icons/bell.svg'
import { Typography } from '@/shared/components/Typography'

interface HeaderProps {
  isLoggedIn?: boolean
  siteName?: string
}

export const Header: React.FC<HeaderProps> = ({ siteName = 'Inctagram', isLoggedIn = false }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/'>
          <Typography
            variant='large'
          >
            {siteName}
          </Typography>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {isLoggedIn && (
              <li>
                <Img />
              </li>
            )}
            <li>
              <SelectBox
                defaultValue={'English'}
                options={[{ label: 'English', value: 'English' }]}
              />
            </li>
            {!isLoggedIn && (
              <>
                <li>
                  <Link href='/sign-in'>
                    <Button variant='text'>Log in</Button>
                  </Link>
                </li>
                <li>
                  <Link href='/sign-up'>
                    <Button>Sign up</Button>
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
