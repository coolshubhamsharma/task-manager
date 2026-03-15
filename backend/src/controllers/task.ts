import { prisma } from "../prisma/client"

export const createTask = async(req:any,res:any)=>{

 const {title,description} = req.body

 const task = await prisma.task.create({

  data:{
   title,
   description,
   userId:req.userId
  }

 })

 res.status(201).json(task)

}


export const getTasks = async(req:any,res:any)=>{

 const page = Number(req.query.page) || 1

 const limit = Number(req.query.limit) || 10

 const status = req.query.status

 const search = req.query.search

 const tasks = await prisma.task.findMany({

  where:{
   userId:req.userId,
   status: status || undefined,
   title: search
    ? { contains: search }
    : undefined
  },

  skip:(page-1)*limit,

  take:limit

 })

 res.json(tasks)

}


export const updateTask = async(req:any,res:any)=>{

 const {id} = req.params

 const task = await prisma.task.update({

  where:{id},

  data:req.body

 })

 res.json(task)

}


export const deleteTask = async(req:any,res:any)=>{

 const {id}=req.params

 await prisma.task.delete({
  where:{id}
 })

 res.json({
  message:"Task deleted"
 })

}