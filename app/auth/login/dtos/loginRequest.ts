import * as z from 'zod'

// for validation
const loginRequestSchema = z.object({
  email: z.email('Incorrect email or password'),
  password: z.string().min(8, 'Incorrect email or password'),
})

type LoginRequestDto = z.infer<typeof loginRequestSchema>

export { loginRequestSchema, type LoginRequestDto }
