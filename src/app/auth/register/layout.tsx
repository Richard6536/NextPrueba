import Link from "next/link"
import {
  Bell,
  Package2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface SettingsLayoutProps {
    children: React.ReactNode
  }

export default function RegisterPage({ children }: SettingsLayoutProps) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
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
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
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
              Configurar Almacen

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
    <div className="flex flex-col">

      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-12">
          { children } 
      </main>
    </div>
  </div>
  )
}
