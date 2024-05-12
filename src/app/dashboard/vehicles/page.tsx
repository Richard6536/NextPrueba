import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { getColumns } from "./components/datatable/ColumnsHeader"
import { DataTableFilterField } from "@/app/types"
import { VehicleModel } from "./model/vehicle"
import { VehicleViewController } from "./components/VehicleViewController"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

async function getTasks() {

  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/dashboard/vehicles/data/vehicles.json")
  )

  const tasks = JSON.parse(data.toString())
  return z.array(VehicleModel).parse(tasks)
}

export default async function VehiclePage() {
  const tasks = await getTasks()

  return (
    <VehicleViewController data={ tasks } columns={ getColumns } />
  )
}