import { z } from 'zod'

export const createPostSchema = z.object({
  description: z
    .string()
    .max(500, 'Description must be at most 500 characters')
    .optional(),
})

export type CreatePostFormData = z.infer<typeof createPostSchema>
