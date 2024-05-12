'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { DetailRegister, defaultValues } from "./model/DetailsRegister"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from 'next/navigation'
import { RegisterContext } from "@/context/register/RegisterContext"
import { useContext } from "react"


export default function Details() {
  const router = useRouter()
  const { setDetails } = useContext( RegisterContext )

  const form = useForm<z.infer<typeof DetailRegister>>({
    resolver: zodResolver(DetailRegister),
    defaultValues: defaultValues,
  })

  function onSubmit(data: z.infer<typeof DetailRegister>) {
    setDetails( data );
    router.push('/auth/register/plans')
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
              <div className="flex space-x-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>¿Cual es tu nombre?</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingresa tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>¿Cual es tu apellido?</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingresa tu apellido" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="fleetName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>¿Cual es el nombre de tu flota?</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre de tu flota" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="segment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>¿Cuantos vehículos tiene tu flota?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una cantidad" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="segment_1">1-5</SelectItem>
                        <SelectItem value="segment_2">6-10</SelectItem>
                        <SelectItem value="segment_3">Más de 10</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Siguiente</Button>
            </form>
          </Form>
        </div>
    </>

  )
}
