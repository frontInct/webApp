import { z } from 'zod'
import { emailSchema } from '../primitives/email'
import { passwordSchema } from '../primitives/password'

export const signUpSchema = z
  .object({
    username: z
      .string()
      .regex(/^[a-zA-Z0-9_-]+$/, 'Username must contain A-Z, a-z, 0-9')
      .min(6, 'Minimum number of characters 6')
      .max(30, 'Maximum number of characters 30'),
    email: emailSchema.shape.email,
    password: passwordSchema,
    confirmPassword: z.string(),
    agreeToTerms: z.literal(true),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  })

export type SignUpFormData = z.infer<typeof signUpSchema>
