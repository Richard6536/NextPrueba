"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Plus, Warehouse } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CommandList, CommandSeparator } from "cmdk"
import { DropdownMenuSeparator } from "../ui/dropdown-menu"

const frameworks = [
  {
    value: "almacen 1",
    label: "Almacen 1",
  },
  {
    value: "almacen 2",
    label: "Almacen 2",
  },
  {
    value: "almacen 3",
    label: "Almacen 3",
  },
]

export function SelectDepot() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Todos los almacenes"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
            <CommandList>
                <CommandInput placeholder="Buscar almacen..." />
                <CommandEmpty>Almacen no encontrado</CommandEmpty>
                <CommandGroup heading="Almacenes">
                    {frameworks.map((framework) => (
                        <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                            }}
                        >
                            <Check
                            className={cn(
                                "mr-2 h-4 w-4",
                                value === framework.value ? "opacity-100" : "opacity-0"
                            )}
                            />
                            {framework.label}
                        </CommandItem>
                        ))}
                </CommandGroup>
                <DropdownMenuSeparator />
                <CommandGroup heading="Acciones">
                    <CommandItem>
                        <Plus className="mr-2 h-4 w-4" />
                        <span>Crear Almacen</span>
                    </CommandItem>
                    <CommandItem>
                        <Warehouse className="mr-2 h-4 w-4" />
                        <span>Gestionar Almacenes</span>
                    </CommandItem>
                </CommandGroup>              
            </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
