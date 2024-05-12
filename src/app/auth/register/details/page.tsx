import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Details() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">

      <div className="flex flex-col">

        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
          </div>
            <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
              <div className="grid w-full max-w-sm items-start gap-6">
              <div className="grid gap-2">
                  <Label htmlFor="email">¿Cuál es tu nombre?</Label>
                  <div className="flex space-x-2">
                    <Input type="text" id="name" placeholder="Nombre" />
                    <Input type="text" id="lastName" placeholder="Apellido" />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Nombre de tu flota</Label>
                  <Input type="email" id="email" placeholder="Nombre de tu flota" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">¿Cuantos vehículos tienes?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una cantidad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">1-5</SelectItem>
                      <SelectItem value="dark">6-10</SelectItem>
                      <SelectItem value="system">Más de 10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="mt-4">Continuar</Button>
              </div>
          </div>
        </main>
        
      </div>
    </div>
  )
}
