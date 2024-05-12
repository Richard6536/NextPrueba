'use client'

import { DataTable } from '@/components/datatable/Datatable'
import { Button } from '@/components/ui/button'
import { useAppDispatch, useAppSelector } from '@/store'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'
import { DataTableFilterField } from '@/app/types'
import { VehicleModel } from '../model/vehicle'

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
  }

const filterFields: DataTableFilterField [] = [
  {
    label: "Nombre",
    value: "nombre",
    placeholder: "Filtrar por Nombre...",
  },
]

export const VehicleViewController = <TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) => {

  return (
    <>
        <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Vehículos</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
        <DataTable data={ data } columns={ columns } filterFields={ filterFields } />
    </>
  )
}
