import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { UserModel } from './model/user'
import { roles } from './data/constants'
import { getColumns } from "./components/datatable/ColumnsHeader"
import { UserViewController } from "./components/UserViewController"
import { DataTableFilterField } from "@/app/types"
import createAccount from '@/api/auth/createAccountService'
import { auth } from "@/auth.config"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

const API_URL = 'https://rightgreenshed62.conveyor.cloud/api/user/getUsers';

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/dashboard/users/data/users.json")
  )

  const tasks = JSON.parse(data.toString())
  return z.array(UserModel).parse(tasks)
}

async function getUsers() {
  return createAccount("rmancilla@gmail.com", "121212", "Richard", "Mancilla", "STAP", "TEST")
  .then((data) => {
      return data;
      // Manejar la respuesta de la API
  })
  .catch((error) => {
      return error;
      // Manejar el error
  });
}


export default async function UserPage() {
  
  const session = await auth();
  const tasks = await getTasks()
  //const users = await getUsers()
  return (
    <>
        { JSON.stringify( session?.user, null, 2 ) }
        <UserViewController data={ tasks } columns={ getColumns } />
    </>
  )
}