'use client'

import { Controller } from 'react-hook-form'
import { Input } from '@/shared/components/input'
import { Button } from '@/shared/components/button'
import { Checkbox } from '@/shared/components/checkBox'
import { ModalRadix } from '@/shared/components/cards'
import Link from 'next/link'
import styles from './SignUpForm.module.scss'
import { shouldShowError } from '@/shared/utils/forms/shouldShowError'
import { useSignUpForm } from '@/shared/hooks/useSignUpForm'
import { TopLoader } from '@/shared/components/topLoader/TopLoader'

export default function SignUpForm() {
  const {
    form,
    onSubmit,
    isLoading,
    isSuccessModalOpen,
    setIsSuccessModalOpen,
    successEmail,
  } = useSignUpForm()

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
  } = form

  return (
    <>
    <TopLoader isActive={isLoading}/>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
        <div className={styles.content}>
          <Input
            variant='inputDefault'
            label='Username'
            error={shouldShowError('username', touchedFields, errors) ? errors.username?.message : undefined}
            width='100%'
            {...register('username')}
          />

          <Input
            variant='inputDefault'
            type='email'
            label='Email'
            error={shouldShowError('email', touchedFields, errors) ? errors.email?.message : undefined}
            width='100%'
            {...register('email')}
          />

          <Input
            variant='inputWithPasswordToggle'
            type='password'
            label='Password'
            error={shouldShowError('password', touchedFields, errors) ? errors.password?.message : undefined}
            width='100%'
            {...register('password')}
          />

          <Input
            variant='inputWithPasswordToggle'
            type='password'
            label='Password confirmation'
            error={shouldShowError('confirmPassword', touchedFields, errors) ? errors.confirmPassword?.message : undefined}
            width='100%'
            {...register('confirmPassword')}
          />

          <Controller
            name='agreeToTerms'
            control={control}
            render={({ field }) => (
              <>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={value => field.onChange(!!value)}
                  label={
                    <>
                      I agree to the{' '}
                      <Link href='/terms-of-service' className={styles.link}>
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href='/privacy-policy' className={styles.link}>
                        Privacy Policy
                      </Link>
                    </>
                  }
                />
                {shouldShowError('agreeToTerms', touchedFields, errors) && (
                  <p className={styles.errorMessage}>{errors.agreeToTerms?.message}</p>
                )}
              </>
            )}
          />

          <Button type='submit' variant='primary' disabled={!isValid || isLoading} className='mt-4'>
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </Button>

          <span className={styles.questionText}>Do you have an account?</span>
          <Button asChild variant='text'>
            <Link href='/sign-in'>Sign In</Link>
          </Button>
        </div>
      </form>

      <ModalRadix
        open={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        modalTitle='Email sent'
        size='sm'
      >
        <p className='mb-4'>We have sent a link to confirm your email to {successEmail}</p>
        <Button onClick={() => setIsSuccessModalOpen(false)} variant='primary'>
          OK
        </Button>
      </ModalRadix>
    </>
  )
}
