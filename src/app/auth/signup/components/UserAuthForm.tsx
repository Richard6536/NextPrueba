"use client"

import * as React from "react"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useContext } from "react"
import { RegisterContext } from "@/context/register/RegisterContext"
import { useForm } from "react-hook-form"
import { EmailRegister, defaultValues } from "../../register/model/EmailRegister"
import { z } from "zod"
import { useRouter } from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { setEmail, email } = useContext( RegisterContext )

  const form = useForm<z.infer<typeof EmailRegister>>({
    resolver: zodResolver(EmailRegister),
    defaultValues: defaultValues,
  })

  function onSubmit(data: z.infer<typeof EmailRegister>) {
    setIsLoading(true)
    
    setEmail( data );
    
    setTimeout(() => {
      setIsLoading(false)
      router.push('/auth/register/')
    }, 1000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only" htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="name@example.com" autoCapitalize="none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only" htmlFor="email">Contraseña</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Contraseña" autoCapitalize="none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Continuar
            </Button>
          </div>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            O continuar con
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  )
}