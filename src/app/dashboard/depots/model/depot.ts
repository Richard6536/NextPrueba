import { z } from "zod"
import { UserModel } from "../../users/model/user"

export const DepotModel = z.object({
  id: z.number(),
  nombre: z.string(),
  direccion: z.string(),
  conductores: z.array(UserModel)
})

export type DepotModel = z.infer<typeof DepotModel>