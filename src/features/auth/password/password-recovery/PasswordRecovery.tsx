'use client'

import { Button } from "@/shared/components/button"
import { Typography } from "@/shared/components/Typography"
import Img from '/src/shared/assets/images/img-with-clock.svg'
import s from './PasswordRecovery.module.scss'

export const PasswordRecovery = () => {


  return (
    <div className={s.container}>
      <div className={s.text}>
        <Typography component="h1" variant="H1">
          Email verification link expired
        </Typography>
        <Typography component="p" variant="regular_text_16">
          Looks like the verification link has expired. Not to worry, we can send the link again
        </Typography>
        <Button variant="primary">
          Resend link
        </Button>
      </div>
      <Img />
    </div>
  )
} 