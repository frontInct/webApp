import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import { Button } from '@/shared/components/button'
import { SelectBox } from '@/shared/components/selectBox'
import Img from '../../shared/assets/icons/bell.svg'


interface HeaderProps {
  isLoggedIn?: boolean
  siteName?: string
}

export const Header: React.FC<HeaderProps> = ({ siteName = 'Inctagram', isLoggedIn = false }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          href='/'
          className={styles.logo}
        >
          {siteName}
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
                  <Button variant='text'>Log in</Button>
                </li>
                <li>
                  <Button>Sign up</Button>
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
