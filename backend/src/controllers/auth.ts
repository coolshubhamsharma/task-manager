import bcrypt from "bcrypt"
import { prisma } from "../prisma/client"
import { generateToken } from "../utils/jwt"

export const register = async(req:any,res:any)=>{

 const {email,password}=req.body

 const hash = await bcrypt.hash(password,10)

 const user = await prisma.user.create({

  data:{
   email,
   password:hash
  }

 })

 res.status(201).json(user)

}

export const login = async(req:any,res:any)=>{

 const {email,password}=req.body

 const user = await prisma.user.findUnique({
  where:{email}
 })

 if(!user){
  return res.status(401).json({
   message:"Invalid credentials"
  })
 }

 const match = await bcrypt.compare(
  password,
  user.password
 )

 if(!match){
  return res.status(401).json({
   message:"Invalid credentials"
  })
 }

 const token = generateToken(user.id)

 res.cookie("token",token,{
  httpOnly:true,
  secure:true,
  sameSite:"strict"
 })

 res.json({
  message:"Login successful"
 })

}

export const getCurrentUser = async (req:any,res:any) => {

 const user = await prisma.user.findUnique({
  where:{
   id:req.userId
  },
  select:{
   id:true,
   email:true
  }
 })

 res.json(user)

}