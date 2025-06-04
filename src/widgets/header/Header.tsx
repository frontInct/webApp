import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import { Button } from '@/shared/components/button'
import { SelectBox } from '@/shared/components/selectBox'

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
          <div className={styles.navList}>
            {isLoggedIn && <li>Д{/*TODO заменить букву Д на колокольчик*/}</li>}
            <li>
              <SelectBox
                defaultValue={'English'}
                options={[{ label: 'English', value: 'English' }]}
              />
            </li>
            {!isLoggedIn && (
              <>
                <li>
                  <Button variant='textButton'>Log in</Button>
                </li>
                <li>
                  <Button>Sign up</Button>
                </li>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
