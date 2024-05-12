"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "../datatable/DataTableViewOptions"

import { DataTableFacetedFilter } from "../datatable/DataTableFacetedFilter"
import { DataTableFilterField } from "@/app/types"
import React from "react"

interface DataTableToolbarProps<TData> {
  filterFields: DataTableFilterField[]
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  filterFields,
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  const { searchableColumns, filterableColumns } = React.useMemo(() => {
    return {
      searchableColumns: filterFields.filter((field) => !field.options),
      filterableColumns: filterFields.filter((field) => field.options),
    }
  }, [filterFields])

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
      {searchableColumns.length > 0 &&
          searchableColumns.map(
            (column) =>
              table.getColumn(column.value ? String(column.value) : "") && (
                <Input
                  key={String(column.value)}
                  placeholder={column.placeholder}
                  value={
                    (table
                      .getColumn(String(column.value))
                      ?.getFilterValue() as string) ?? ""
                  }
                  onChange={(event) =>
                    table
                      .getColumn(String(column.value))
                      ?.setFilterValue(event.target.value)
                  }
                  className="h-8 w-40 lg:w-64"
                />
              )
          )}
          {filterableColumns.length > 0 &&
            filterableColumns.map(
              (column) =>
                table.getColumn(column.value ? String(column.value) : "") && (
                  <DataTableFacetedFilter
                    key={String(column.value)}
                    column={table.getColumn(
                      column.value ? String(column.value) : ""
                    )}
                    title={column.label}
                    options={column.options ?? []}
                  />
                )
            )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}