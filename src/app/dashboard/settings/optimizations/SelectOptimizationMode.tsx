"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

const notificationsFormSchema = z.object({
    type: z.enum(["all", "mentions", "none"], {
      required_error: "You need to select a notification type.",
    }),
    mobile: z.boolean().default(false).optional(),
    communication_emails: z.boolean().default(false).optional(),
    social_emails: z.boolean().default(false).optional(),
    marketing_emails: z.boolean().default(false).optional(),
    security_emails: z.boolean(),
  })
  
  type NotificationsFormValues = z.infer<typeof notificationsFormSchema>
  
  const defaultValues: Partial<NotificationsFormValues> = {
    communication_emails: false,
    marketing_emails: false,
    social_emails: true,
    security_emails: true,
  }

export default function OptModeSelectPage() {

    const form = useForm<NotificationsFormValues>({
        resolver: zodResolver(notificationsFormSchema),
        defaultValues,
      })

      function onSubmit(data: NotificationsFormValues) {

      }    

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
               <h3 className="mb-4 text-lg font-medium">Modo de Optimización</h3>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Eficiencia Absoluta
                      </FormLabel>
                      <FormDescription>
                        El sistema minimiza al máximo los costos de la ruta y decide la cantidad de conductores necesarios para completarla.
                      </FormDescription>
                    </div>
                    <FormControl>
                        <RadioGroupItem value="all" />
                    </FormControl>
                  </FormItem>
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Trabajo Balanceado
                      </FormLabel>
                      <FormDescription>
                        Los conductores recibirán cantidades de trabajo similares, mientras se busca la mejor eficiencia posible.
                      </FormDescription>
                    </div>
                    <FormControl>
                        <RadioGroupItem value="mentions" />
                    </FormControl>
                  </FormItem>

                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Personalizado
                      </FormLabel>
                      <FormDescription>
                        Tú decides la cantidad de conductores y qué destinos deben visitar. La personalización puede afectar a la eficiencia de la ruta.
                      </FormDescription>
                    </div>
                    <FormControl>
                        <RadioGroupItem value="none" />
                    </FormControl>
                  </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    )
}