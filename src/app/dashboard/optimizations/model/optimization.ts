import { z } from "zod"

export const OptimizationModel = z.object({
  id: z.number(),
  vehiculo: z.string(),
  stops: z.number(),
  fecha: z.string(),
  estado: z.string(),
})

export type OptimizationModel = z.infer<typeof OptimizationModel>