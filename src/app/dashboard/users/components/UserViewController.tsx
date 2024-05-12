'use client'

import { DataTable } from '@/components/datatable/Datatable'
import { Button } from '@/components/ui/button'
import { useAppDispatch, useAppSelector } from '@/store'
import { addUser } from '@/store/users/userSlice'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'
import { UserModel } from '../model/user'
import { DataTableFilterField } from '@/app/types'
import { roles } from '../data/constants'
import { Plus, User } from 'lucide-react'
import { CreateUserModal } from './CreateUserModal'

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
  }

const filterFields: DataTableFilterField [] = [
  {
    label: "Email",
    value: "email",
    placeholder: "Filtrar por Email...",
  },
  {
    label: "Roles",
    value: "roles",
    options: roles.map(( rol ) => ({
      label: rol.label[0]?.toUpperCase() + rol.label.slice(1),
      value: rol.value,
      icon: rol.icon,
      withCount: true,
    })),
  },
]

export const UserViewController = <TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) => {

  const users = useAppSelector( state => state.user );
  const dispatch = useAppDispatch();

  const handleAddUser = () => {
    
    const user = UserModel.parse({
      id: 4,
      nombre: 'Carlos',
      email: 'carlos@example.com',
      roles: ['conductor'],
      asignado: 'Proyecto B',
    });

    dispatch(addUser(user));
  };

  return (
    <>
      <div className="flex flex-col p-4 gap-4">
        <div className="flex flex-row items-center">
            <div className="flex items-center">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Usuarios</h2>
                  <p className="text-muted-foreground">
                    Manage your account settings and set e-mail preferences.
                  </p>
                </div>
            </div>
            <CreateUserModal />
         </div>
      </div>
      <DataTable data={ data } columns={ columns } filterFields={ filterFields } />
    </>
  )
}
