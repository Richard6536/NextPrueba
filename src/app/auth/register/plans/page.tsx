'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckIcon } from "@radix-ui/react-icons"
import { useRouter } from 'next/navigation'

export default function Configure() {
    const router = useRouter()

    return (
        <>
            <div className="text-center grid gap-2">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
                    Escoge el plan correcto para tu empresa
                </h1>
                <p className="text-base text-muted-foreground">
                    A modal dialog that interrupts the user with important content and expects
                    a response.
                </p>
            </div>

            <div className="flex space-x-3">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle>Starter</CardTitle>
                    <CardDescription>Especial para empresas con poca cantidad de vehículos</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-2 text-center">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
                        $100
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Mensual
                    </p>
                    <Separator/>
                    <div className="items-center w-full">
                        <div className="flex py-1.5">
                            <CheckIcon className="mr-2"></CheckIcon>
                            <p className="text-sm font-medium leading-none">Crear y optimizar rutas.</p>
                        </div>
                        <div className="flex py-1.5">
                            <CheckIcon className="mr-2"></CheckIcon>
                            <p className="text-sm font-medium leading-none">Seguimiento en vivo de conductores.</p>
                        </div>
                        <div className="flex py-1.5">
                            <CheckIcon className="mr-2"></CheckIcon>
                            <p className="text-sm font-medium leading-none">Crear hasta 10 almacenes.</p>
                        </div>
                        <div className="flex py-1.5">
                            <CheckIcon className="mr-2"></CheckIcon>
                            <p className="text-sm font-medium leading-none">Acceso a estadísticas.</p>
                        </div>
                        
                        <div className="flex py-1.5">
                            <CheckIcon className="mr-2"></CheckIcon>
                            <p className="text-sm font-medium leading-none">Asignación de roles a usuarios.</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                    <Button className="w-full" onClick={() => router.push('/auth/register/confirm')}>Comenzar Gratis por 15 días</Button>
                </CardFooter>
            </Card>
            <Card>
            <CardHeader className="text-center">
                <CardTitle>Standard</CardTitle>
                <CardDescription>Especial para empresas con poca cantidad de vehículos</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2 text-center">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
                    $250
                </h1>
                <p className="text-sm text-muted-foreground">
                    Mensual
                </p>
                <Separator/>
                <div className="items-center w-full">
                    <div className="flex py-1.5">
                        <CheckIcon className="mr-2"></CheckIcon>
                        <p className="text-sm font-medium leading-none">Crear y optimizar rutas.</p>
                    </div>
                    <div className="flex py-1.5">
                        <CheckIcon className="mr-2"></CheckIcon>
                        <p className="text-sm font-medium leading-none">Seguimiento en vivo de conductores.</p>
                    </div>
                    <div className="flex py-1.5">
                        <CheckIcon className="mr-2"></CheckIcon>
                        <p className="text-sm font-medium leading-none">Crear hasta 10 almacenes.</p>
                    </div>
                    <div className="flex py-1.5">
                        <CheckIcon className="mr-2"></CheckIcon>
                        <p className="text-sm font-medium leading-none">Acceso a estadísticas.</p>
                    </div>
                    
                    <div className="flex py-1.5">
                        <CheckIcon className="mr-2"></CheckIcon>
                        <p className="text-sm font-medium leading-none">Asignación de roles a usuarios.</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col">
                <Button className="w-full" onClick={() => router.push('/auth/register/confirm')}>Comenzar Gratis por 15 días</Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader className="text-center">
                <CardTitle>Pro</CardTitle>
                <CardDescription>Especial para empresas con poca cantidad de vehículos</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2 text-center">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
                    $500
                </h1>
                <p className="text-sm text-muted-foreground">
                    Mensual
                </p>
                <Separator/>
                <div className="items-center w-full">
                    <div className="flex py-1.5">
                        <CheckIcon className="mr-2"></CheckIcon>
                        <p className="text-sm font-medium leading-none">Crear y optimizar rutas.</p>
                    </div>
                    <div className="flex py-1.5">
                        <CheckIcon className="mr-2"></CheckIcon>
                        <p className="text-sm font-medium leading-none">Seguimiento en vivo de conductores.</p>
                    </div>
                    <div className="flex py-1.5">
                        <CheckIcon className="mr-2"></CheckIcon>
                        <p className="text-sm font-medium leading-none">Crear hasta 10 almacenes.</p>
                    </div>
                    <div className="flex py-1.5">
                        <CheckIcon className="mr-2"></CheckIcon>
                        <p className="text-sm font-medium leading-none">Acceso a estadísticas.</p>
                    </div>
                    
                    <div className="flex py-1.5">
                        <CheckIcon className="mr-2"></CheckIcon>
                        <p className="text-sm font-medium leading-none">Asignación de roles a usuarios.</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col">
                <Button className="w-full" onClick={() => router.push('/auth/register/confirm')}>Comenzar Gratis por 15 días</Button>
            </CardFooter>
        </Card>
        </div>
        <div className="text-center grid gap-2">
                <p className="text-base text-muted-foreground">
                    A modal dialog that interrupts the user with important content and expects
                    a response.
                </p>
            </div>
        </>
    )
}