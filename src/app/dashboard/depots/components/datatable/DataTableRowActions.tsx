"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { DialogDeleteDefault } from "../../../../../components/datatable/DialogDeleteDefault"
import { useState } from "react"
import { DepotModel } from "../../model/depot"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row
}: DataTableRowActionsProps<TData>) {
  const user = DepotModel.parse(row.original)
  const [showDeleteTaskDialog, setShowDeleteTaskDialog] = useState(false)

  const handleDelete = (id : string) => {
    // Lógica para eliminar la fila con el `id` dado
    console.log(`Eliminando elemento con ID: ${id}`);
    setShowDeleteTaskDialog(false);
    // Añade aquí tu lógica para eliminar el elemento con este `id`.
};

  return (
    <>
      <DialogDeleteDefault 
        id={ user.nombre }
        isOpen={ showDeleteTaskDialog }
        setIsOpen={ setShowDeleteTaskDialog }
        onDelete={ handleDelete }
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Make a copy</DropdownMenuItem>
          <DropdownMenuItem>Favorite</DropdownMenuItem>
          <DropdownMenuSeparator />
            {/* <DropdownMenuSub>
              <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup value={user.label}>
                  {
                    labels.map((label) => (
                      <DropdownMenuRadioItem key={label.value} value={label.value}>
                        {label.label}
                      </DropdownMenuRadioItem>
                    ))
                  }
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          <DropdownMenuSeparator /> */}
          <DropdownMenuItem className="text-red-600" onClick={ () => setShowDeleteTaskDialog(true) }>
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}