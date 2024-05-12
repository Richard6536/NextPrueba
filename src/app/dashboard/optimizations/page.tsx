import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { getColumns } from "./components/datatable/ColumnsHeader"
import { OptimizationModel } from "./model/optimization"
import { OptimizationViewController } from "./components/OptimizationViewController"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {

  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/dashboard/optimizations/data/optimizations.json")
  )

  const tasks = JSON.parse(data.toString())
  return z.array(OptimizationModel).parse(tasks)
}

export default async function UserPage() {
  const tasks = await getTasks()

  return (
    <OptimizationViewController data={ tasks } columns={ getColumns } />
  )
}