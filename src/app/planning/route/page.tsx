'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ArrowRight, ArrowUp, ArrowUpRight, ChevronRight, CircleArrowUp, ImportIcon, Link, MoreVerticalIcon, Plus, User } from "lucide-react";
import { SelectDriverModal } from "../components/SelectDriverModal";
import { useAppSelector } from "@/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapView } from "../components/MapView";
import { ArrowRightIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { ListStops } from "../components/ListStops";
  
  export default function RoutePage() {

    const conductores = useAppSelector( state => state.driver );

    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full w-full"
      >
        <ResizablePanel minSize={25} defaultSize={25}>
          <div className="h-full items-center justify-center">
            <div className="h-full flex flex-col">
              <div className="flex flex-col p-4 gap-4">
                  <div className="flex flex-row items-center">
                        <div className="flex items-center">
                            <div>
                              <p className="text-sm text-muted-foreground">22/05/2024</p>
                              <h2 className="scroll-m-20 text-1xl font-semibold tracking-tight">Ruta de Osorno</h2>
                            </div>
                        </div>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="ml-auto h-8"
                        >
                          <MoreVerticalIcon className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <Separator />
                <div className="flex flex-col p-4 gap-4">
                  <div className="flex flex-row items-center">
                        <div className="flex items-center">
                            <div>
                                <h3 className="font-semibold leading-none tracking-tight mb-1">Gestionar Conductores</h3>
                                {conductores.length > 0 ? (
                                    <div className="flex -space-x-2 overflow-hidden mt-1">
                                      {conductores.map((user) => (
                                      <TooltipProvider delayDuration={100}>
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <Avatar
                                            key={ user.email }
                                            className="inline-block border-2 border-background"
                                          >
                                            <AvatarImage src={user.avatar} />
                                            <AvatarFallback>{user.nombre[0]}</AvatarFallback>
                                          </Avatar>
                                        </TooltipTrigger>
                                        <TooltipContent>{ user.nombre }</TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                      ))}
                                    </div>
                                  ) : (<>
                                  <p className="text-sm text-muted-foreground">Agrega conductores a la solución</p>
                                  </>)}
                                
                                <div className="flex items-center sm:justify-between">
                                </div>
                            </div>
                        </div>
                        <SelectDriverModal />

                    </div>
                </div>
                <Separator />
                <div className="flex flex-col p-4 gap-4 h-full">
                    <ListStops />
                    <Button disabled>Generar Optimización</Button>
                </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
            <MapView />
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  }
  