'use client'
import { z } from 'zod'
import React, { useState, useEffect } from 'react'
import { Input } from '@/shared/components/input'
import Link from 'next/link'
import styles from './SignUpForm.module.scss'
import { Button } from '@/shared/components/button'
import { Checkbox } from '@/shared/components/checkBox'
import { signUpSchema, SignUpFormData } from '@/shared/schemas/forms/signUp'
import { useRegistrationMutation } from '@/shared/store/baseApi'
import { ModalRadix } from '@/shared/components/cards'

export default function SignUpForm() {
  const [formData, setFormData] = useState<
    Omit<SignUpFormData, 'confirmPassword' | 'agreeToTerms'> & {
      confirmPassword: string
      agreeToTerms: boolean
    }
  >({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })

  const [errors, setErrors] = useState<Partial<Record<keyof SignUpFormData, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof SignUpFormData, boolean>>>({})
  const [isValid, setIsValid] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [successEmail, setSuccessEmail] = useState<string>('')

  const [registration, { isLoading }] = useRegistrationMutation()

  useEffect(() => {
    const validateForm = async () => {
      try {
        await signUpSchema.parseAsync(formData)
        setErrors({})
        setIsValid(true)
      } catch (error) {
        if (error instanceof z.ZodError) {
          const newErrors: Record<string, string> = {}
          error.errors.forEach(err => {
            if (err.path && err.path[0] !== 'agreeToTerms') {
              newErrors[err.path[0]] = err.message
            }
          })
          setErrors(newErrors)
          setIsValid(false)
        }
      }
    }
    validateForm().catch(console.error)
  }, [formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      agreeToTerms: checked,
    }))
    setTouched(prev => ({ ...prev, agreeToTerms: true }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    try {
      const validatedData = signUpSchema.parse(formData)

      await registration({
        email: validatedData.email,
        username: validatedData.username,
        password: validatedData.password,
      }).unwrap()

      setSuccessEmail(validatedData.email)
      setIsSuccessModalOpen(true)

      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
      })
      setIsValid(false)
      setTouched({})
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        err.errors.forEach(e => {
          if (e.path && e.path[0] !== 'agreeToTerms') {
            newErrors[e.path[0]] = e.message
          }
        })
        setErrors(newErrors)
        return
      }

      if (err?.data) {
        if (Array.isArray(err.data.errorsMessages)) {
          const serverErrors: Partial<Record<keyof SignUpFormData, string>> = {}
          err.data.errorsMessages.forEach(({ field, message }: { field: string; message: string }) => {
            if (field === 'email' || field === 'username') {
              serverErrors[field as keyof SignUpFormData] = message
            }
          })
          setErrors(serverErrors)
        } else if (Array.isArray(err.data.errors)) {
          const serverErrors: Partial<Record<keyof SignUpFormData, string>> = {}
          err.data.errors.forEach(({ field, message }: { field: string; message: string }) => {
            if (field === 'email' || field === 'username') {
              serverErrors[field as keyof SignUpFormData] = message
            }
          })
          setErrors(serverErrors)
        }
      }
    }
  }

  const shouldShowError = (field: keyof SignUpFormData) => {
    return Boolean(touched[field] && errors[field])
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <div className={styles.content}>
          <Input
            variant="inputDefault"
            name="username"
            value={formData.username}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Username"
            error={shouldShowError('username') ? errors.username : undefined}
            width="100%"
          />

          <Input
            variant="inputDefault"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Email"
            error={shouldShowError('email') ? errors.email : undefined}
            width="100%"
          />

          <Input
            variant="inputWithPasswordToggle"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Password"
            error={shouldShowError('password') ? errors.password : undefined}
            width="100%"
          />

          <Input
            variant="inputWithPasswordToggle"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Password confirmation"
            error={shouldShowError('confirmPassword') ? errors.confirmPassword : undefined}
            width="100%"
          />

          <Checkbox
            checked={formData.agreeToTerms}
            onCheckedChange={handleCheckboxChange}
            label={
              <>
                I agree to the{' '}
                <Link href="/terms-of-service" className={styles.link}>
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy-policy" className={styles.link}>
                  Privacy Policy
                </Link>
              </>
            }
          />

          <Button type="submit" variant="primary" disabled={!isValid || isLoading} className="mt-4">
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </Button>

          <span className={styles.questionText}>Do you have an account?</span>

          <Button asChild variant="text">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </form>

      <ModalRadix
        open={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        modalTitle="Email sent"
        size="sm"
      >
        <p className="mb-4">We have sent a link to confirm your email to {successEmail}</p>
        <Button onClick={() => setIsSuccessModalOpen(false)} variant="primary">
          OK
        </Button>
      </ModalRadix>
    </>
  )
}
