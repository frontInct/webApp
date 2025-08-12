import { z } from 'zod'

const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png']
const MAX_FILE_SIZE = 20 * 1024 * 1024 // 20MB

export const imageSchema = z.object({
  image: z
    .instanceof(File)
    .refine(file => file.size <= MAX_FILE_SIZE, { message: 'The photo must be less than 20 Mb.' })
    .refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: 'The photo must have JPEG or PNG format.',
    })
})

export type ImageSchemaType = z.infer<typeof imageSchema>
