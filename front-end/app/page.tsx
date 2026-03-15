import Link from "next/link"

export default function Home(){

 return(

  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">

   <div className="bg-white shadow-xl rounded-xl p-10 text-center flex flex-col gap-6">

    <h1 className="text-4xl font-bold text-slate-800">
     Task Manager
    </h1>

    <p className="text-slate-500">
     Manage your tasks efficiently
    </p>

    <div className="flex gap-4 justify-center">

     <Link
      href="/login"
      className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
     >
      Login
     </Link>

     <Link
      href="/register"
      className="border border-slate-300 px-6 py-2 rounded-md hover:bg-slate-100 transition"
     >
      Register
     </Link>

    </div>

   </div>

  </div>

 )

}