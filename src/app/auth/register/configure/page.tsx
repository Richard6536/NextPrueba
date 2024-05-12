'use client'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { DepotConfiguration, defaultValues } from "../model/ConfigureDepot"

export default function Configure() {
  const router = useRouter()

  const form = useForm<z.infer<typeof DepotConfiguration>>({
    resolver: zodResolver(DepotConfiguration),
    defaultValues: defaultValues,
  })

  function onSubmit(data: z.infer<typeof DepotConfiguration>) {
    //almaceno los datos
    router.push('/auth/register/configure')
  }

  return (
<>
        <div className="flex items-center">
          <div>
          <h2 className="text-2xl font-bold tracking-tight">Usuarios</h2>
              <p className="text-muted-foreground">
                Manage your account settings and set e-mail preferences.
              </p>
          </div>
      </div>
      <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2.5/4 space-y-6">
            <FormField
                  control={form.control}
                  name="depotName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre del almacen</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingresa un nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ubicación</FormLabel>
                      <FormControl>
                        <Input placeholder="Ubicación del almacen" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              <div className="flex space-x-4">
              <FormField
                control={form.control}
                name="startTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hora de inicio</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre de tu flota" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hora de termino</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre de tu flota" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              </div>

              <div className="flex justify-between">
                    <Button variant='outline'>Regresar</Button>
                    <Button>Continuar</Button>
                </div>
            </form>
          </Form>
        </div>
    </>
  )
}
