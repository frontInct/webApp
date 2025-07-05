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
  const [isLogoutOpen, setLogoutOpen] = useState(false)

  const userEmail = useAppSelector(state => state.auth.email) || 'user@example.com'

  const links = [
    { href: '/', label: 'Feed', icon: <FeedIcon /> },
    { href: '/create', label: 'Create', icon: <CreateIcon /> },
    { href: '/profile', label: 'My Profile', icon: <PersonIcon /> },
    { href: '/messenger', label: 'Messenger', icon: <MessengerIcon /> },
    { href: '/search', label: 'Search', icon: <SearchIcon /> },
    { href: '/statistics', label: 'Statistics', icon: <StatisticsIcon /> },
    { href: '/favorites', label: 'Favorites', icon: <FavoritesIcon /> },
  ]

  return (
    <>
      <aside className={styles.sidebar}>
        <nav className={styles.nav}>
          <ul>
            {links.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(styles.navItem, pathname === link.href && styles.active)}
                >
                  <span className={styles.icon}>{link.icon}</span>
                  <span className={styles.label}>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles.logout}
          onClick={() => setLogoutOpen(true)}
          type="button"
        >
          <span className={styles.icon}>
            <LogoutIcon />
          </span>
          <span className={styles.label}>Logout</span>
        </button>
      </aside>

      <LogoutModal
        open={isLogoutOpen}
        onClose={setLogoutOpen}
        email={userEmail}
      />
    </>
  )
}

export default Sidebar
