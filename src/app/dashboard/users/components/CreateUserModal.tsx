import * as React from "react"
import { Check, Plus, Send, User } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useAppDispatch, useAppSelector } from "@/store"
import { addDrivers } from "@/store/drivers/driverSlice"
import { UserModel } from "@/app/dashboard/users/model/user"

const users = [
  {
    name: "Olivia Martin",
    email: "Volkswagen Transporter",
    avatar: "/avatars/01.png",
  },
  {
    name: "Isabella Nguyen",
    email: "Mercedes-Benz Sprinter",
    avatar: "/avatars/03.png",
  },
  {
    name: "Emma Wilson",
    email: "Ford Transit",
    avatar: "/avatars/05.png",
  },
  {
    name: "Jackson Lee",
    email: "Ram ProMaster",
    avatar: "/avatars/02.png",
  },
  {
    name: "William Kim",
    email: "Nissan NV",
    avatar: "/avatars/04.png",
  },
] as const

type User = (typeof users)[number]

const convertToUserModel = (user : (typeof users)[number], index : number) => {
  // Retorna un objeto de tipo UserModel
  return {
    id: index + 1, // Puedes usar el índice como ID o definir tu propia lógica para el ID
    nombre: user.name, // Usar el campo 'name' como 'nombre'
    email: user.email, // Usar el campo 'email' como 'email'
    roles: ["Conductor"], // Asignar un array de roles predefinido
    asignado: "Test", // Asignar un valor a 'asignado'
    avatar: user.avatar, // Asignar el campo 'avatar'
  };
};

export function CreateUserModal() {
  const [open, setOpen] = React.useState(false)
  const [selectedUsers, setSelectedUsers] = React.useState<User[]>([])

  const [input, setInput] = React.useState("")
  const inputLength = input.trim().length

  const dispatch = useAppDispatch();

  const handleAddUser = () => {

    const userModels: UserModel[] = selectedUsers.map((user, index) => convertToUserModel(user, index));
    dispatch(addDrivers(userModels));
    setOpen(false)
  };

  return (
    <>
    <Button
        className="ml-auto"
        onClick={() => setOpen(true)}>
        <Plus className="mr-2 h-4 w-4" />
        Crear Usuario 
    </Button>
      <Dialog open={ open } onOpenChange={ setOpen }>
        <DialogContent className="gap-0 p-0 outline-none">
          <DialogHeader className="px-4 pb-4 pt-5">
            <DialogTitle>Crear Usuario</DialogTitle>
            <DialogDescription>
              Selecciona uno o más coductores disponibles del almacen 1
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex items-center border-t p-4 sm:justify-between">
            <Button
              disabled={selectedUsers.length < 2}
              onClick={() => {
                handleAddUser()
              }}
            >
              Agregar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}