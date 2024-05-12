import { z } from "zod"

export const VehicleModel = z.object({
  id: z.number(),
  nombre: z.string(),
  almacen: z.string(),
  conductor: z.string()
})

export type VehicleModel = z.infer<typeof VehicleModel>