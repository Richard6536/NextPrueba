import React from "react"

export interface SearchParams {
    [key: string]: string | string[] | undefined
  }
  
  export interface Option {
    label: string
    value: string
    icon?: React.ComponentType<{ className?: string }>
    withCount?: boolean
  }
  
  export interface DataTableFilterField<> {
    label: string
    value: string
    placeholder?: string
    options?: Option[]
  }
  
  export interface DataTableFilterOption<TData> {
    id: string
    label: string
    value: keyof TData
    options: Option[]
    filterValues?: string[]
    filterOperator?: string
    isMulti?: boolean
  }
  