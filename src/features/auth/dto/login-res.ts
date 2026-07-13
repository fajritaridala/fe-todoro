import * as z from "zod";

// schema for validation
const loginResponseSchema = z.object({
  token: z.jwt(),
});
const userResponseSchema = z.object({
  id: z.uuid(),
  email: z.email(),
  name: z.string(),
  isVerified: z.boolean(),
});

// for type inference
type LoginResponseDto = z.infer<typeof loginResponseSchema>;
type UserResponseDto = z.infer<typeof userResponseSchema>;

export {
  loginResponseSchema,
  userResponseSchema,
  type LoginResponseDto,
  type UserResponseDto,
};
