"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import api from "@/lib/axios"

export default function Login(){

 const router = useRouter()

 const[email,setEmail]=useState("")
 const[password,setPassword]=useState("")

 const login = async()=>{

  await api.post("/auth/login",{ email,password })

  router.push("/dashboard")

 }

 return(

  <div className="flex items-center justify-center min-h-screen bg-slate-100">

   <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md flex flex-col gap-4">

    <h1 className="text-2xl font-bold text-center text-slate-800">
     Login
    </h1>

    <input
     placeholder="Email"
     onChange={e=>setEmail(e.target.value)}
     className="border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
    />

    <input
     type="password"
     placeholder="Password"
     onChange={e=>setPassword(e.target.value)}
     className="border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
    />

    <button
     onClick={login}
     className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition"
    >
     Login
    </button>

   </div>

  </div>

 )

}