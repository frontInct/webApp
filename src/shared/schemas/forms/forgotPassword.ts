import { z } from 'zod'
import { emailSchema } from '../primitives/email'

export const forgotPasswordSchema = z.object({
  email: emailSchema.shape.email,
  recaptchaToken: z.string().min(1)
})
export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>
