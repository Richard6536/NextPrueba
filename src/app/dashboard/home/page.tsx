import { SelectDriverModal } from '@/app/planning/components/SelectDriverModal'
import React from 'react'
import { NewSolutionDialog } from './components/NewSolutionDialog'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { File } from 'lucide-react'
import { auth } from '@/auth.config'

export default async function HomePage() {

  const session = await auth();
    console.log(session?.user);
    
    return (
      <div className='flex w-full items-center justify-center'>
          <Card className="w-[450px] p-5">
            <CardHeader>
              <CardTitle>Miercoles 08, Mayo 2024 { JSON.stringify( session ) }</CardTitle>
              <CardDescription>No hay rutas activas</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <NewSolutionDialog />
              <Button variant="outline">
                  <File className="mr-2 h-4 w-4" />
                  Crear una solución desde un Archivo
              </Button>
            </CardContent>
        </Card>
        
      </div>
    )
}