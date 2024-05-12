import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Bell, Package2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const StepRegister = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span className="">Acme Inc</span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 py-3 text-sm font-medium lg:px-4">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-3 bg-muted text-primary transition-all hover:text-primary"
          >
            <Badge className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              1
            </Badge>
            Detalles
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
          >
            <Badge className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              2
            </Badge>
            Configura tu Almacen
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
          >
            <Badge className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              3
            </Badge>
            Plan de Prueba
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
          >
            <Badge className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              4
            </Badge>
            Comenzar
          </Link>
        </nav>
      </div>
    </div>
  </div>
  )
}
