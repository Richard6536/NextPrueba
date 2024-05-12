'use client'

import * as React from "react"
import { Check, Plus, Send, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import Link from "next/link"

export function NewSolutionDialog() {
  const [open, setOpen] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
        <Button
            onClick={() => setOpen(true)}
        >
            <Plus className="mr-2 h-4 w-4" />
            Crear una solución manualmente
        </Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="gap-0 p-0 outline-none">
                <DialogHeader className="px-4 pb-4 pt-5">
                    <DialogTitle>Crear una Solución</DialogTitle>
                    <DialogDescription>
                      Crea rutas para tus envíos a partir de un almacén y una fecha de inicio.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex">
                    <div className="flex-1 p-4">
                    <div className="flex flex-col w-full items-center gap-5">
                        <div className="flex flex-col space-y-2.5 w-full ">
                            <Label htmlFor="name">Solución</Label>
                            <Input id="name" placeholder="Nombre de tu solución" />
                        </div>
                        <div className="flex flex-col space-y-2.5 w-full ">
                            <Label htmlFor="framework">Almacen</Label>
                            <Select>
                                <SelectTrigger id="framework">
                                <SelectValue placeholder="Seleccionar" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                <SelectItem value="next">Almacen Norte</SelectItem>
                                <SelectItem value="sveltekit">Almacen Sur</SelectItem>
                                <SelectItem value="astro">Almacen Este</SelectItem>
                                <SelectItem value="nuxt">Almacen Oeste</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    </div>
                    <div className="flex-1 p-4">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                        />
                    </div>
                </div>

                <DialogFooter className="flex items-center border-t p-4 sm:justify-between">
                    <Button variant="outline">Cancelar</Button>
                    <Link href="/planning/route">
                      <Button>Comenzar</Button>
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </>
  )
}