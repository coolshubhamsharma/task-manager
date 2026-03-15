"use client"

import { useState } from "react"
import api from "@/lib/axios"

type CardProps = {
 refresh: () => void
}

export default function Form({refresh}: CardProps){

 const[title,setTitle]=useState("")
 const[description,setDescription]=useState("")

 const createTask = async()=>{

  await api.post("/tasks",{ title,description })

  setTitle("")
  setDescription("")

  refresh()

 }

 return(

  <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-3">

   <h2 className="font-semibold text-slate-700">
    Create Task
   </h2>

   <input
    placeholder="Title"
    value={title}
    onChange={e=>setTitle(e.target.value)}
    className="border border-slate-300 rounded-md p-2"
   />

   <input
    placeholder="Description"
    value={description}
    onChange={e=>setDescription(e.target.value)}
    className="border border-slate-300 rounded-md p-2"
   />

   <button
    onClick={createTask}
    className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition"
   >
    Create Task
   </button>

  </div>

 )

}