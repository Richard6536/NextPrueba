import { ChevronRight } from 'lucide-react'
import React from 'react'

interface Props {
    street: string;
    location: string;
}

export const ListStopItem = ({ street, location } : Props ) => {
  return (
    <div className="flex items-center w-full text-left">
        <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{ street }</p>
        <p className="text-xs text-muted-foreground">{ location }</p>
        </div>
        <div className="ml-auto"><ChevronRight className="text-muted-foreground/30"></ChevronRight></div>
    </div>
  )
}
