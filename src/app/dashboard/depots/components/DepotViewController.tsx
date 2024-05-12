'use client'

import { DataTable } from '@/components/datatable/Datatable'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'
import { DataTableFilterField } from '@/app/types'

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

export const DepotViewController = <TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) => {

  return (
    <DataTable data={ data } columns={ columns } filterFields={ filterFields } />
  )
}
