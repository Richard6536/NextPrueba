import { z } from "zod"

export const UserModel = z.object({
  id: z.number(),
  nombre: z.string(),
  email: z.string().email(),
  roles: z.array(z.string()),
  asignado: z.string(),
  avatar: z.string().optional(),
})

export type UserModel = z.infer<typeof UserModel>