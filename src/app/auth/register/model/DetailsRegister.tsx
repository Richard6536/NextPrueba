import { z } from "zod"

const DetailRegister = z.object({
  name: z.string().min(1, {
    message: "Ingresa tu nombre.",
    }),
  lastName: z.string().min(1, {
    message: "Ingresa tu apellido.",
    }),
  fleetName: z.string().min(1, {
    message: "Ingresa el nombre de tu flota.",
    }),
  segment: z.string().min(1, {
    message: "Selecciona al menos una opción",
    }),
})

const defaultValues = {
  name: "",
  lastName: "",
  fleetName: "",
  segment: ""
}

export { DetailRegister, defaultValues };