import { z } from 'zod'
import { emailSchema } from '../emailSchema/emailSchema'

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(6, 'Minimum number of characters 6')
      .max(30, 'Maximum number of characters 30')
      .regex(/^[a-zA-Z0-9_-]+$/, 'Username must contain 0-9, a-z, A-Z'),
    email: emailSchema.shape.email,
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
        /[!"#$%&'()*+,-.\/:;<=>?@[\\\]^_`{|}~]/,
        'Password must contain 0-9, a-z, A-Z, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ { | } ~'
      ),
    confirmPassword: z.string(),
    agreeToTerms: z.literal(true),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  })

export type SignUpFormData = z.infer<typeof signUpSchema>
