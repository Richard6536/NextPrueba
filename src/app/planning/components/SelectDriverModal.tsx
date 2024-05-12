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

export function SelectDriverModal() {
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
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  className="ml-auto"
                  onClick={() => setOpen(true)}
                >
                  <User className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Agregar Conductores</TooltipContent>
            </Tooltip>
          </TooltipProvider>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-0 p-0 outline-none">
          <DialogHeader className="px-4 pb-4 pt-5">
            <DialogTitle>Agregar Conductores</DialogTitle>
            <DialogDescription>
              Selecciona uno o más coductores disponibles del almacen 1
            </DialogDescription>
          </DialogHeader>
          <Command className="overflow-hidden rounded-t-none border-t">
            <CommandInput placeholder="Buscar conductor..." />
            <CommandList>
              <CommandEmpty>Conductor no econtrado</CommandEmpty>
              <CommandGroup className="p-2">
                {users.map((user) => (
                  <CommandItem
                    key={user.email}
                    className="flex items-center px-2"
                    onSelect={() => {
                      if (selectedUsers.includes(user)) {
                        return setSelectedUsers(
                          selectedUsers.filter(
                            (selectedUser) => selectedUser !== user
                          )
                        )
                      }

                      return setSelectedUsers(
                        [...users].filter((u) =>
                          [...selectedUsers, user].includes(u)
                        )
                      )
                    }}
                  >
                    <Avatar>
                      <AvatarImage src={user.avatar} alt="Image" />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="ml-2">
                      <p className="text-sm font-medium leading-none">
                        {user.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                    {selectedUsers.includes(user) ? (
                      <Check className="ml-auto flex h-5 w-5 text-primary" />
                    ) : null}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
          <DialogFooter className="flex items-center border-t p-4 sm:justify-between">
            {selectedUsers.length > 0 ? (
              <div className="flex -space-x-2 overflow-hidden">
                {selectedUsers.map((user) => (
                  <Avatar
                    key={user.email}
                    className="inline-block border-2 border-background"
                  >
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Selecciona para agregar a la solución
              </p>
            )}
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