"use client"

import { useRouter } from "next/navigation"

export default function Navbar() {

 const router = useRouter()

 const logout = async () => {

  await fetch("http://localhost:5000/auth/logout",{
   credentials:"include"
  })

  router.push("/login")

 }

 return(

  <div className="flex justify-between items-center px-6 py-4 bg-white border-b shadow-sm">

   <h1 className="text-xl font-bold text-slate-800">
    Task Manager
   </h1>

   <button
    onClick={logout}
    className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
   >
    Logout
   </button>

  </div>

 )

}