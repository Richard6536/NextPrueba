'use client'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import createAccount from '@/api/auth/createAccountService'
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { RegisterContext } from "@/context/register/RegisterContext"
import { useRouter } from 'next/navigation'
import { useContext, useState } from "react"

export default function ConfirmPage() {
    const router = useRouter()
    const { email, password, name, lastName, fleetName, segment } = useContext(RegisterContext)

    const [isChecked, setIsChecked] = useState(true);

    function onSubmit() {
        if (!isChecked) {
            createAccount(email, password, name, lastName, fleetName, segment)
                .then((data) => {
                    console.log('Cuenta de usuario creada:', data);
                    // Manejar la respuesta de la API
                })
                .catch((error) => {
                    console.error('Error al crear la cuenta de usuario:', error);
                    // Manejar el error
                });
        }
    }

    return (
        <>
            <div className="text-center grid gap-2">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
                    Confirmar suscripción
                </h1>
                <p className="text-base text-muted-foreground">
                    Al aceptar, comenzarás una suscripción de prueba por 15 días
                </p>
            </div>

            <div className="flex space-x-3 text-center justify-center">
                <Card>
                    <CardHeader className="text-center">
                        Plan de prueba base
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            Starter
                        </h4>
                    </CardHeader>
                    <CardContent className="grid gap-2 text-center">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
                            15 días gratis
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Luego, USD 100 por mes
                        </p>
                        <Separator />
                        <div className="items-center w-full">
                            <div className="grid grid-cols-2 gap-4 py-1.5">
                                <div className="flex justify-start">
                                    <p className="text-sm font-medium leading-none">Monto a pagar ahora</p>
                                </div>
                                <div className="flex justify-end">
                                    <p className="text-sm font-medium leading-none">USD 0.00</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 py-2.5">
                                <div className="flex justify-start">
                                    <p className="text-sm font-medium leading-none">Monto a pagar a partir del 24/04/2024</p>
                                </div>
                                <div className="flex justify-end">
                                    <p className="text-sm font-medium leading-none">USD 100</p>
                                </div>
                            </div>
                        </div>
                        <Separator />
                        <div className="items-top text-start flex space-x-2 mt-8">
                            <Checkbox id="terms1" onCheckedChange={() => setIsChecked(!isChecked)} />
                            <div className="grid gap-1.5 leading-none">
                                <label
                                    htmlFor="terms1"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Aceptar los términos y condiciones
                                </label>
                                <p className="text-sm text-muted-foreground">
                                    Al aceptar, estás de acuerdo con nuestros términos y condiciones.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">

                        <Button className="w-full" disabled={isChecked} onClick={() => onSubmit()}>
                            Comenzar Periodo de Prueba
                        </Button>
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground mt-4">
                                Si no cancelas la prueba antes del 24 de junio del 2024,
                            </p>
                            <p className="text-sm text-muted-foreground">
                                se te cobrará un importe mensual de USD 100
                            </p>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <div className="text-center">
                <Button variant='ghost'>Regresar al paso anterior</Button>
            </div>
        </>
    )
}