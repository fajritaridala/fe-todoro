import * as z from 'zod'

// for validation
const registerRequestSchema = z
  .object({
    username: z.string().min(3, 'Username must be at least 3 characters'),
    email: z.email('Invalid email address').min(1, 'Email is required'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .uppercase('Password must contain at least one uppercase letter')
      .min(1, 'Password must contain at least one number'),
    confirmPassword: z.string().min(1, 'Confirm Password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
  })

type RegisterRequestDto = z.infer<typeof registerRequestSchema>

export { registerRequestSchema, type RegisterRequestDto }
