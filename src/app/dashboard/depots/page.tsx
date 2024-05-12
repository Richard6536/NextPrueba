import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { getColumns } from "./components/datatable/ColumnsHeader"
import { DataTableFilterField } from "@/app/types"
import { DepotModel } from "./model/depot"
import { DepotViewController } from "./components/DepotViewController"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

async function getTasks() {

  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/dashboard/depots/data/depots.json")
  )

  const tasks = JSON.parse(data.toString())
  return z.array(DepotModel).parse(tasks)
}

export default async function DepotPage() {
  const tasks = await getTasks()

  return (
    <DepotViewController data={ tasks } columns={ getColumns } />
  )
}