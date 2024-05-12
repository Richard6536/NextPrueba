"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"

import { UserModel } from '../../model/user'
import { DataTableColumnHeader } from "../../../../../components/datatable/DataTableColumnHeader"
import { DataTableRowActions } from "./DataTableRowActions"
import { Badge } from "@/components/ui/badge"
import { roles } from "../../data/constants"

const handleEdit = ( row : UserModel ) => {
  console.log(`Editado ${ row.id }`);
}

const handleDelete = ( row : UserModel ) => {
  console.log(`Eliminado ${ row.id }`);
}

export const getColumns: ColumnDef<UserModel>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nombre",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nombre" />
    ),
    cell: ({ row }) => {
      //const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {/*label && <Badge variant="outline">{label.label}</Badge>*/}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("nombre")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      //const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {/*label && <Badge variant="outline">{label.label}</Badge>*/}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("email")}
          </span>
        </div>
      )
    },
  },
    {
      accessorKey: "roles",
      header: ({ column }) => (
        <DataTableColumnHeader column={ column } title="Roles" />
      ),
      cell: ({ row }) => {
        const rolesArray = row.getValue("roles");
        let cellContent;

        if (Array.isArray(rolesArray)) {
            const firstRole = rolesArray[0];
            const fRole = roles.find(
              (r) => r.label === firstRole
            )

            const remainingRolesCount = rolesArray.length - 1;
          
            cellContent = (
                <div className="flex items-center space-x-2">
                    {fRole && fRole.icon && (
                      <fRole.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="truncate font-medium">
                        { firstRole }
                    </span>

                    {remainingRolesCount > 0 && (
                        <Badge variant="outline">+{ remainingRolesCount }</Badge>
                    )}
                </div>
            );
        } else {
            cellContent = (
                <span className="truncate font-medium">
                    Rol no asignado
                </span>
            );
        }

        // Devuelve el contenido de la celda
        return cellContent;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "asignado",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Asignado" />
    ),
    cell: ({ row }) => {
      //const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {/*label && <Badge variant="outline">{label.label}</Badge>*/}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("asignado")}
          </span>
        </div>
      )
    }
  },
  /*{
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
      )

      if (!priority) {
        return null
      }

      return (
        <div className="flex items-center">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{priority.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },*/
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={ row } />,
  },
]