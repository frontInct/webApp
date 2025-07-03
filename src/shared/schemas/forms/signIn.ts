import { z } from 'zod'
import { emailSchema } from '../primitives/email'
import { passwordSchema } from '../primitives/password'

export const signInSchema = z.object({
  email: emailSchema.shape.email,
  password: passwordSchema,
})

export type SignInFormData = z.infer<typeof signInSchema>
