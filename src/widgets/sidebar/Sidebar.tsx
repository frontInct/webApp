'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import s from './Sidebar.module.scss'
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
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const email = useAppSelector(state => state.auth.email)

  useEffect(() => {
    setIsMounted(true)
    setActiveItem(pathname)
  }, [pathname])

  // Если пользователь не авторизован — не отображаем сайдбар
  if (!isMounted || !isLoggedIn) {
    return null
  }

  const primaryLinks = [
    { href: '/', label: 'Feed', icon: <FeedIcon /> },
    { href: '/create-post', label: 'Create', icon: <CreateIcon /> },
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
      <aside className={s.sidebar}>
        <nav className={s.nav}>
          <ul className={s.section}>
            {primaryLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(s.navItem, activeItem === link.href && s.active)}
                  onClick={() => setActiveItem(link.href)}
                >
                  <span className={s.icon}>{link.icon}</span>
                  <span className={s.label}>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className={s.section}>
            {secondaryLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(s.navItem, activeItem === link.href && s.active)}
                  onClick={() => setActiveItem(link.href)}
                >
                  <span className={s.icon}>{link.icon}</span>
                  <span className={s.label}>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={clsx(s.logout, activeItem === 'logout' && s.active)}
          onClick={openLogout}
          type='button'
        >
          <span className={s.icon}>
            <LogoutIcon />
          </span>
          <span className={s.label}>Logout</span>
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
