import React from 'react'
import Link from "next/link"

interface Props {
    path: string;
    title: string;
}

export const NavbarItem = ( { path, title } : Props ) => {
  return (
    <Link
        href={ path }
        className="text-muted-foreground transition-colors hover:text-foreground"
    >
        { title }
    </Link>
  )
}