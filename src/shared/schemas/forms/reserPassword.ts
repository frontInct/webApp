import { z } from 'zod'
import { passwordSchema } from '../primitives/password'

export const resetPasswordSchema = z
  .object({
    newPassword: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine(data => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords must match',
  })