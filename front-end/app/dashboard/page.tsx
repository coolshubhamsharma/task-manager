"use client"

import { useEffect, useState } from "react"
import api from "@/lib/axios"
import Navbar from "@/components/Navbar"
import TaskCard from "@/components/Card"
import TaskForm from "@/components/Form"

type Task = {
 id: string
 title: string
 description: string
 status: string
 createdAt: string
}

export default function Dashboard(){

 const [tasks,setTasks] = useState<Task[]>([])

 const [search,setSearch] = useState("")
 const [status,setStatus] = useState("")

 const [page,setPage] = useState(1)
 const limit = 6

 const fetchTasks = async()=>{

  const res = await api.get("/tasks",{
   params:{
    page,
    limit,
    search,
    status
   }
  })

  setTasks(res.data)

 }

 useEffect(()=>{

   const loadTasks = async()=>{

   const res = await api.get("/tasks",{
      params:{
      page,
      limit,
      search,
      status
      }
   })

   setTasks(res.data)

   }

   loadTasks()

 },[page,search,status])

 return(

  <div className="min-h-screen bg-slate-100 dark:bg-slate-900">

   <Navbar/>

   <div className="max-w-6xl mx-auto p-6 flex flex-col gap-6">

    <TaskForm refresh={fetchTasks}/>

    {/* Filters */}

    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow flex gap-4 flex-wrap">

     <input
      placeholder="Search"
      onChange={e=>setSearch(e.target.value)}
      className="border border-slate-300 dark:border-slate-600 rounded-md p-2 flex-1 bg-white dark:bg-slate-800"
     />

     <select
      onChange={e=>setStatus(e.target.value)}
      className="border border-slate-300 dark:border-slate-600 rounded-md p-2 bg-white dark:bg-slate-800"
     >

      <option value="">All</option>
      <option value="pending">Pending</option>
      <option value="completed">Completed</option>

     </select>

     <button
      onClick={()=>{
       setPage(1)
       fetchTasks()
      }}
      className="bg-indigo-600 text-white px-4 rounded-md hover:bg-indigo-700"
     >
      Apply
     </button>

    </div>

    {/* Task Grid */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

     {tasks.map((task)=>(
      <TaskCard
       key={task.id}
       task={task}
       refresh={fetchTasks}
      />
     ))}

    </div>

    {/* Pagination */}

    <div className="flex justify-center gap-4 mt-4">

     <button
      onClick={()=>setPage(prev=>Math.max(prev-1,1))}
      className="px-4 py-2 bg-slate-300 dark:bg-slate-700 rounded-md"
     >
      Previous
     </button>

     <span className="px-4 py-2 font-semibold text-slate-700 dark:text-white">
      Page {page}
     </span>

     <button
      onClick={()=>setPage(prev=>prev+1)}
      className="px-4 py-2 bg-slate-300 dark:bg-slate-700 rounded-md"
     >
      Next
     </button>

    </div>

   </div>

  </div>

 )

}