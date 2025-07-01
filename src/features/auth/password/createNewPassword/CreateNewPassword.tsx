'use client'

import { AuthLayout } from '@/shared/components/authLayout'
import { Button } from '@/shared/components/button'
import { Input } from '@/shared/components/input'
import { Typography } from '@/shared/components/Typography'
import { ModalRadix } from '@/shared/components/cards'
import { TopLoader } from '@/shared/components/topLoader/TopLoader'
import s from './CreateNewPassword.module.scss'
import { shouldShowError } from '@/shared/utils/forms/shouldShowError'
import { useCreateNewPasswordForm } from '@/shared/hooks/useCreateNewPasswordForm'

export const CreateNewPassword = () => {
  const {
    form: {
      register,
      handleSubmit,
      formState: { errors, isValid, touchedFields, isSubmitting },
      watch,
    },
    onSubmit,
    showTokenErrorModal,
    handleModalClose,
    isLoading,
  } = useCreateNewPasswordForm()

  return (
    <AuthLayout>
      <TopLoader isActive={isLoading} />
      <Typography
        component='h1'
        variant='H1'
      >
        Create New Password
      </Typography>
      <form
        className={s.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className={s.inputContainer}>
          <Input
            {...register('newPassword')}
            variant='inputWithPasswordToggle'
            type='password'
            id='new-password'
            label='New password'
            error={
              shouldShowError('newPassword', touchedFields, errors, watch)
                ? errors.newPassword?.message
                : undefined
            }
            disabled={isSubmitting}
            autoComplete='new-password'
          />
        </div>
        <div className={s.inputContainer}>
          <Input
            {...register('confirmPassword')}
            variant='inputWithPasswordToggle'
            type='password'
            id='confirm-password'
            label='Confirm password'
            error={
              shouldShowError('confirmPassword', touchedFields, errors, watch)
                ? errors.confirmPassword?.message
                : undefined
            }
            disabled={isSubmitting}
            autoComplete='new-password'
          />
        </div>
        <div className={s.requirementsBlock}>
          <Typography
            component='p'
            variant='regular_text_14'
            className={s.passwordRequirements}
          >
            Your password must be between 6 and 20 characters
          </Typography>
        </div>
        <div className={s.buttonContainer}>
          <Button
            variant='primary'
            type='submit'
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Create new password'}
          </Button>
        </div>
      </form>
      <ModalRadix
        open={showTokenErrorModal}
        onClose={handleModalClose}
        modalTitle='Link expired'
        size='sm'
      >
        <div style={{ padding: '16px' }}>
          <Typography
            component='p'
            variant='regular_text_16'
          >
            Your password reset link is invalid or expired.
          </Typography>
          <Button
            style={{ marginTop: '16px' }}
            onClick={handleModalClose}
          >
            Go to reset form
          </Button>
        </div>
      </ModalRadix>
    </AuthLayout>
  )
}
