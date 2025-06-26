import { z } from 'zod'

export const emailSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address'}),
})

export type EmailSchemaType = z.infer<typeof emailSchema>