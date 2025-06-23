'use client'
import clsx from 'clsx'
import { type ComponentPropsWithRef, type CSSProperties } from 'react'
import s from './PageWrapper.module.scss'

type Props = ComponentPropsWithRef<'main'> & {
  mt?: CSSProperties['marginTop']
  pr?: CSSProperties['paddingRight']
  pl?: CSSProperties['paddingLeft']
  direction?: 'row' | 'column'
}

export function PageWrapper({
  className,
  mt,
  pr,
  pl,
  direction = 'column',
  style,
  ref,
  ...rest
}: Props) {
  const classNames = {
    page: clsx(
      className,
      s.wrapper,
      direction === 'row' && s.row,
      direction === 'column' && s.column
    ),
  }
  const styles: CSSProperties = { marginTop: mt, paddingRight: pr, paddingLeft: pl, ...style }

  return (
    <main
      ref={ref}
      className={classNames.page}
      style={styles}
      {...rest}
    />
  )
}
