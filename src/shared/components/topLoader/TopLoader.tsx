'use client'

import React from 'react'
import s from './TopLoader.module.scss'

interface TopLoaderProps {
  isActive: boolean
}

export const TopLoader: React.FC<TopLoaderProps> = ({ isActive }) => {
  if (!isActive) return null

  return <div className={s.loader} />
}
