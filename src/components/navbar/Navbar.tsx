'use client'

import React from 'react'
import Link from "next/link"
import { NavbarItem } from './NavbarItem'
import {
  CircleUser,
  Menu,
  Package2,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
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
import { ModeToggle } from '../theme/ModeToggle'
import { SelectDepot } from './SelectDepot'
import { logout } from '@/actions/auth/logout'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const menuItems = [
    {
        path: '/dashboard/home',
        title: 'Inicio'
    },
    {
        path: '/dashboard/users',
        title: 'Usuarios'
    },
    {
        path: '/dashboard/vehicles',
        title: 'Vehículos'
    },
    {
        path: '/dashboard/depots',
        title: 'Almacenes'
    },
    {
        path: '/dashboard/optimizations',
        title: 'Optimizaciones'
    }
]

export const Navbar = () => {
    const router = useRouter();

    const { data: session } = useSession();

    console.log({ session });

    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
              >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
          </Link>

          {
              menuItems.map( item => (
                  <NavbarItem key={ item.path } { ...item } />
              ))
          }

        </nav>
        <Sheet>
        <SheetTrigger asChild>
            <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
            >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
            <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
            >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
            </Link>
            <Link href="#" className="hover:text-foreground">
                Dashboard
            </Link>
            <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
            >
                Orders
            </Link>
            <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
            >
                Products
            </Link>
            <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
            >
                Customers
            </Link>
            <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
            >
                Analytics
            </Link>
            </nav>
        </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <div className="ml-auto"><SelectDepot /></div>
            <ModeToggle />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={ () => logout() } >Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
      </div>
    </header>
    )
  }
  