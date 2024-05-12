'use client'

import { DataTable } from '@/components/datatable/Datatable'
import { Button } from '@/components/ui/button'
import { useAppDispatch, useAppSelector } from '@/store'
import { addUser } from '@/store/users/userSlice'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'
import { DataTableFilterField } from '@/app/types'
import { estados } from '../data/constants'
import { OptimizationModel } from '../model/optimization'

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
  }

const filterFields: DataTableFilterField [] = [
  {
    label: "Vehiculo",
    value: "vehiculo",
    placeholder: "Buscar por Vehículo...",
  },
  {
    label: "Estado",
    value: "estado",
    options: estados.map(( v ) => ({
      label: v.label[0]?.toUpperCase() + v.label.slice(1),
      value: v.value,
      icon: v.icon,
      withCount: true,
    })),
  },
]

export const OptimizationViewController = <TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) => {

  return (
    <>
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Optimizaciones</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>  
      <DataTable data={ data } columns={ columns } filterFields={ filterFields } />
    </>
  )
}
