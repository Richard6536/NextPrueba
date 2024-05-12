"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useFormState, useFormStatus } from "react-dom"
import { authenticate } from "@/actions/auth/login"
import { useEffect } from 'react'
import { useRouter } from "next/navigation"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {

  const router = useRouter();
  const [stateAuth, dispatch] = useFormState(authenticate, undefined);

  useEffect(() => {
    if(stateAuth === 'success') {
      router.replace('/dashboard/home');
    }
  }, [stateAuth])
  
  return (
      <>
        <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Iniciar Sesión
            </h1>

            {
              stateAuth === 'success' || stateAuth === undefined ? (
                <p className="text-sm text-muted-foreground">
                  Ingresa tu correo y contraseña para acceder
                </p>
              ) : (
                <div
                  className="flex justify-center text-center items-center space-x-1"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <p className="text-sm text-red-500">{stateAuth}</p>
                </div>
              )
            }

          </div>
          <div className={cn("grid gap-6", className)} {...props}>
          <form  action={ dispatch }>
            <div className="grid gap-2">
              <div className="grid gap-1">
                <Input type="email" name="email" placeholder="name@example.com" autoCapitalize="none" />
                <Input type="password" name="password" placeholder="Contraseña" autoCapitalize="none" />
              </div>
              <LoginButton />
            </div>
          </form>
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
        <Button variant="outline" type="button">
          <Icons.google className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>
      </>
  )
}

function LoginButton() {
  const { pending } = useFormStatus();
 
  return (
    <Button type="submit" disabled={pending}>
    {pending && (
      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
    )}
    Continuar
  </Button>
  );
}