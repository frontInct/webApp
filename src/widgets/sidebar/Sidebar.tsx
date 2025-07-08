'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import styles from './Sidebar.module.scss'

import FeedIcon from '@/shared/assets/icons/home.svg'
import SearchIcon from '@/shared/assets/icons/maximize.svg'
import MessengerIcon from '@/shared/assets/icons/message-circle.svg'
import PersonIcon from '@/shared/assets/icons/person.svg'
import StatisticsIcon from '@/shared/assets/icons/statistics.svg'
import LogoutIcon from '@/shared/assets/icons/log-out.svg'
import FavoritesIcon from '@/shared/assets/icons/bookmark.svg'
import CreateIcon from '@/shared/assets/icons/plus-square.svg'

import LogoutModal from '@/shared/components/logout/logout'
import { useAppSelector } from '@/shared/hooks/useAppSelector'

export const Sidebar = () => {
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState<string | null>(pathname)

  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const email = useAppSelector(state => state.auth.email)
  

  // Если пользователь не авторизован — не отображаем сайдбар
  if (!isLoggedIn) return null

  const primaryLinks = [
    { href: '/', label: 'Feed', icon: <FeedIcon /> },
    { href: '/create', label: 'Create', icon: <CreateIcon /> },
    { href: '/profile', label: 'My Profile', icon: <PersonIcon /> },
    { href: '/messenger', label: 'Messenger', icon: <MessengerIcon /> },
    { href: '/search', label: 'Search', icon: <SearchIcon /> },
  ]

  const secondaryLinks = [
    { href: '/statistics', label: 'Statistics', icon: <StatisticsIcon /> },
    { href: '/favorites', label: 'Favorites', icon: <FavoritesIcon /> },
  ]

  const handleCloseLogout = () => {
    setActiveItem(pathname)
  }

  const openLogout = () => {
    setActiveItem('logout')
  }

  return (
    <>
      <aside className={styles.sidebar}>
        <nav className={styles.nav}>
          <ul className={styles.section}>
            {primaryLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(styles.navItem, activeItem === link.href && styles.active)}
                  onClick={() => setActiveItem(link.href)}
                >
                  <span className={styles.icon}>{link.icon}</span>
                  <span className={styles.label}>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className={styles.section}>
            {secondaryLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(styles.navItem, activeItem === link.href && styles.active)}
                  onClick={() => setActiveItem(link.href)}
                >
                  <span className={styles.icon}>{link.icon}</span>
                  <span className={styles.label}>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={clsx(styles.logout, activeItem === 'logout' && styles.active)}
          onClick={openLogout}
          type="button"
        >
          <span className={styles.icon}>
            <LogoutIcon />
          </span>
          <span className={styles.label}>Logout</span>
        </button>
      </aside>

      <LogoutModal
        open={activeItem === 'logout'}
        onClose={handleCloseLogout}
        email={email ?? ''} // передаём email 
      />
    </>
  )
}

export default Sidebar
