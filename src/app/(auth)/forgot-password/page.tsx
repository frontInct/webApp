'use client'

import Link from 'next/link'
import { PageWrapper } from '../../../shared/components/pageWrapper/PageWrapper'
import { AuthLayout } from '@/shared/components/authLayout'
import { Button } from '@/shared/components/button'
import { Typography } from '@/shared/components/Typography/Typography'
import { Input } from '@/shared/components/input/Input'


const Page = () => {
  return (
    <PageWrapper>
      <AuthLayout>
        <Typography component="h1" variant="H1">
          Forgot Password
        </Typography>
        <form style={{ marginTop: "35px" }}
          action='#'
          method='POST'
        >
          <div>
            <Input
              variant="inputDefault"
              type="email"
              id="email"
              name="email"
              label="Email"
              placeholder="Epam@epam.com"
            />
          </div>
          <Typography component="p" variant="regular_text_14" style={{ marginTop: '10px', marginBottom: "15px", color: "var(--color-primary-light-900)" }}>
            Enter your email address and we will send you further instructions
          </Typography>
          <div>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexDirection: 'column', marginTop: '15px' }}>
            <Button variant="primary">
              Send Link
            </Button>
            <Button variant="text" asChild>
              <Link href="/sign-in">
                Back to Sign In
              </Link>
            </Button>
            <div>
                <label>
              <input
                type='checkbox'
                name='not-robot'
              />
            </label>
            <Typography component="span" variant="regular_text_14" style={{ marginLeft: '10px' }}> 
              I'm not a robot (заглушка)
            </Typography>
            </div>
          </div>
        </form>
      </AuthLayout>
    </PageWrapper>
  )
}
export default Page