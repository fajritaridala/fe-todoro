import * as z from 'zod'

// for validation
const registerRequestSchema = z
  .object({
    username: z
      .string()
      .min(1, { message: 'please enter a username' })
      .min(3, { message: 'username must be at least 3 characters' }),
    email: z
      .string()
      .min(1, { message: 'please enter an email address' })
      .email({ message: 'please enter a valid email address' }),
    password: z
      .string()
      .min(1, { message: 'please enter a password' })
      .min(8, { message: 'password must be at least 8 characters' })
      .max(20, { message: 'password to long' })
      .refine((password) => /[A-Z]/.test(password), {
        message: 'password must contain at least one uppercase letter',
      })
      .refine((password) => /[a-z]/.test(password), {
        message: 'password must contain at least one lowercase letter',
      })
      .refine((password) => /[0-9]/.test(password), {
        message: 'password must contain at least one number',
      }),
    confirmPassword: z
      .string()
      .min(1, { message: 'please confirm your password' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'password do not match',
    path: ['confirmPassword'],
  })

type RegisterRequestDto = z.infer<typeof registerRequestSchema>

export { registerRequestSchema, type RegisterRequestDto }
