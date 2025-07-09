import { z } from 'zod'

export const passwordSchema = z
  .string()
  .superRefine((val, ctx) => {
    // Проверка на латиницу и допустимые спецсимволы — первая по приоритету
    if (!/^[A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+$/.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Password must contain A-Z, a-z, 0-9 and symbols',
      })
      return // прекращаем валидацию — показываем эту ошибку первой
    }
    if (val.length < 6) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 6,
        type: 'string',
        inclusive: true,
        message: 'Password must be at least 6 characters',
      })
      return
    }
    if (val.length > 20) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_big,
        maximum: 20,
        type: 'string',
        inclusive: true,
        message: 'Password must be no more than 20 characters',
      })
      return
    }
    if (!/[0-9]/.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Password must contain at least one number',
      })
      return
    }
    if (!/[a-z]/.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Password must contain at least one lowercase letter',
      })
      return
    }
    if (!/[A-Z]/.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Password must contain at least one uppercase letter',
      })
      return
    }
    if (!/[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Password must contain at least one special character',
      })
      return
    }
  })
