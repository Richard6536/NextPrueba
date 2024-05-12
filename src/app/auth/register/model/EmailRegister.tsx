import { z } from "zod"

const EmailRegister = z.object({
  email: z.string().min(1, {
    message: "Ingresa tu correo.",
    }).email(),
  password: z.string().min(5, {
      message: "Ingresa al menos 5 caracteres.",
      }),
})

const defaultValues = {
  email: "",
  password: ""
}

export { EmailRegister, defaultValues };