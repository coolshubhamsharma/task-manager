"use client"

import { useState } from "react"
import api from "@/lib/axios"

type Task = {
 id: string
 title: string
 description: string
 status: string
 createdAt?: string
}

type CardProps = {
 task: Task
 refresh: () => void
}

export default function Card({task,refresh}:CardProps){

 const [editing,setEditing] = useState(false)
 const [title,setTitle] = useState(task.title)
 const [description,setDescription] = useState(task.description)

 const deleteTask = async()=>{

  await api.delete(`/tasks/${task.id}`)
  refresh()

 }

 const updateStatus = async()=>{

  const newStatus =
   task.status === "pending"
    ? "completed"
    : "pending"

  await api.put(`/tasks/${task.id}`,{
   status:newStatus
  })

  refresh()

 }

 const updateTask = async()=>{

  await api.put(`/tasks/${task.id}`,{
   title,
   description
  })

  setEditing(false)
  refresh()

 }

 return(

  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-5 flex flex-col gap-3">

   {editing ? (

    <>
     <input
      value={title}
      onChange={e=>setTitle(e.target.value)}
      className="border p-2 rounded"
     />

     <textarea
      value={description}
      onChange={e=>setDescription(e.target.value)}
      className="border p-2 rounded"
     />

     <div className="flex gap-2">

      <button
       onClick={updateTask}
       className="bg-indigo-600 text-white px-3 py-1 rounded"
      >
       Save
      </button>

      <button
       onClick={()=>setEditing(false)}
       className="bg-slate-400 text-white px-3 py-1 rounded"
      >
       Cancel
      </button>

     </div>

    </>

   ) : (

    <>

     <h2 className="font-semibold text-slate-800 dark:text-white">
      {task.title}
     </h2>

     <p className="text-sm text-slate-600 dark:text-slate-300">
      {task.description}
     </p>

     <span
      className={`text-xs px-2 py-1 rounded-full w-fit ${
       task.status === "completed"
        ? "bg-green-100 text-green-700"
        : "bg-yellow-100 text-yellow-700"
      }`}
     >
      {task.status}
     </span>

     <div className="flex gap-2 mt-2">

      <button
       onClick={updateStatus}
       className="bg-green-500 text-white px-3 py-1 rounded-md"
      >
       Toggle
      </button>

      <button
       onClick={()=>setEditing(true)}
       className="bg-indigo-500 text-white px-3 py-1 rounded-md"
      >
       Edit
      </button>

      <button
       onClick={deleteTask}
       className="bg-red-500 text-white px-3 py-1 rounded-md"
      >
       Delete
      </button>

     </div>

    </>

   )}

  </div>

 )

}