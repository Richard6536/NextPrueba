"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button'

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
        key={item.href}
        href={item.href}
        className={cn(
          pathname === item.href
            ? "bg-muted hover:bg-muted p-2 rounded-md my-1.5" // Aquí agregamos el cambio de color de texto cuando el enlace está activo.
            : "hover:bg-muted/50 hover:text-primary p-2 rounded-md my-1.5",
          "transition-colors duration-300 ease-in-out" // Agregamos transición y duración.
        )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}