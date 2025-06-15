'use client'

import React, { useState, useEffect } from 'react'
import { z } from 'zod'

import { Input } from '@/shared/components/input'
import Link from 'next/link'
import styles from './SignUpForm.module.scss'
import { Button } from '@/shared/components/button'
import { Checkbox } from '@/shared/components/checkBox'


// Схема валидации
const signUpSchema = z
  .object({
    username: z
      .string()
      .min(6, 'Minimum number of characters 6')
      .max(30, 'Maximum number of characters 30')
      .regex(/^[a-zA-Z0-9_-]+$/, 'Username must contain 0-9, a-z, A-Z'),
    email: z.string().email('The email must match the format example@example.com'),
    password: z
      .string()
      .min(6, 'Minimum number of characters 6')
      .max(20, 'Maximum number of characters 20')
      .regex(
        /[0-9]/,
        'Password must contain 0-9, a-z, A-Z, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ { | } ~'
      )
      .regex(
        /[a-z]/,
        'Password must contain 0-9, a-z, A-Z, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ { | } ~'
      )
      .regex(
        /[A-Z]/,
        'Password must contain 0-9, a-z, A-Z, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ { | } ~'
      )
      .regex(
        /[!\"#$%&'()*+,-.\/:;<=>?@[\\\]^_`{|}~]/,
        'Password must contain 0-9, a-z, A-Z, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ { | } ~'
      ),
    confirmPassword: z.string(),
    agreeToTerms: z.literal(true),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  })

type FormData = z.infer<typeof signUpSchema>

export default function SignUpForm() {
  const [formData, setFormData] = useState<
    Omit<FormData, 'confirmPassword' | 'agreeToTerms'> & {
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

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [isValid, setIsValid] = useState(false)

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

    validateForm()
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
    try {
      const validatedData = signUpSchema.parse(formData)
      console.log('Form data is valid:', validatedData)
      // Здесь можно добавить отправку данных на сервер
    } catch (error) {
      console.error('Validation failed:', error)
    }
  }

  const shouldShowError = (field: keyof FormData) => {
    return (
      touched[field] ||
      (formData[field as keyof typeof formData] !== '' &&
        formData[field as keyof typeof formData] !== false)
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.formWrapper}
    >
      <div className={styles.content}>
        <Input
          variant='inputDefault'
          name='username'
          value={formData.username}
          onChange={handleChange}
          onBlur={handleBlur}
          label='Username'
          error={shouldShowError('username') ? errors.username : undefined}
          width='100%'
        />

        <Input
          variant='inputDefault'
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          label='Email'
          error={shouldShowError('email') ? errors.email : undefined}
          width='100%'
        />

        <Input
          variant='inputWithPasswordToggle'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          label='Password'
          error={shouldShowError('password') ? errors.password : undefined}
          width='100%'
        />

        <Input
          variant='inputWithPasswordToggle'
          type='password'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          label='Password confirmation'
          error={shouldShowError('confirmPassword') ? errors.confirmPassword : undefined}
          width='100%'
        />

        <Checkbox
          checked={formData.agreeToTerms}
          onCheckedChange={handleCheckboxChange}
          label={
            <>
              I agree to the{' '}
              <Link
                href='/terms-of-service'
                className={styles.link}
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href='/privacy-policy'
                className={styles.link}
              >
                Privacy Policy
              </Link>
            </>
          }
        />

        <Button
          type='submit'
          variant='primary'
          disabled={!isValid}
          className='mt-4'
        >
          Sign Up
        </Button>
        <span className={styles.questionText}>Do you have an account?</span>
        <Button
          asChild
          variant='text'
        >
          <Link href='/sign-in'>Sign In</Link>
        </Button>
      </div>
    </form>
  )
}
