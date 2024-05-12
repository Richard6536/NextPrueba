import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ChevronRight, ImportIcon } from 'lucide-react'
import React from 'react'
import { ListStopItem } from './ListStopItem'

const stops = [
    {
        id: 1,
        street: '1836, Los carrera',
        location: 'Osorno, Los Lagos'
    },
    {
        id: 2,
        street: '1356, Amador Barrientos',
        location: 'Osorno, Los Lagos'
    },
    {
        id: 3,
        street: '2114, 12 de Octubre',
        location: 'Osorno, Los Lagos'
    }
]

export const ListStops = () => {

  const divClasses = stops.length > 0 ? 'items-top justify-top' : 'items-center justify-center';

  return (
    <>
        <div className="flex space-x-2">
            <Input placeholder="Busca una dirección" />
            <TooltipProvider delayDuration={0}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="secondary" size="icon">
                            <ImportIcon className="h-4 w-4" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Importar ubicaciones</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
        <div className={ `flex flex-col h-full text-center ${ divClasses } rounded-md bg-muted/55 gap-4 p-4` }>
            {
                stops.length > 0 ? (
                    stops.map((stop, index) => (
                        <>
                            <ListStopItem key={ stop.id } { ...stop } />
                            { index < stops.length - 1 && <Separator /> }
                        </>
                    ))
                ) : (
                    <>
                        <p className="text-sm text-muted-foreground">Busca una dirección de destino o importala desde una fuente externa</p>
                        <Button className="h-9">
                            <ImportIcon className="mr-2 h-4 w-4" />
                            Importar
                        </Button>
                    </>
                )
            }   
        </div>
    </>
  )
}
