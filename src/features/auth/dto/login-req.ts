import * as z from 'zod'

// for validation
const loginRequestSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'please enter an email address' })
    .email({ message: 'please enter a valid email address ' }),
  password: z.string().min(1, { message: 'please enter a password' }),
})

type LoginRequestDto = z.infer<typeof loginRequestSchema>

export { loginRequestSchema, type LoginRequestDto }
