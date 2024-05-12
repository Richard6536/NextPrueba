import { z } from "zod"

const DepotConfiguration = z.object({
  depotName: z.string().min(1, {
    message: "Ingresa el nombre.",
    }),
  location: z.string().min(1, {
    message: "Ingresa una ubicación.",
    }),
  startTime: z.string().min(1, {
    message: "Ingresa una entrada.",
    }),
  endTime: z.string().min(1, {
    message: "Ingresa una salida.",
    }),
})

const defaultValues = {
    depotName: "",
    location: "",
    startTime: "",
    endTime: ""
}

export { DepotConfiguration, defaultValues };