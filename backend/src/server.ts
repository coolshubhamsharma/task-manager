import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.js"
import taskRoutes from "./routes/task"

dotenv.config()

const app = express()

app.use(express.json())

app.use(cookieParser())

app.use(cors({
 origin:"http://localhost:3000",
 credentials:true
}))

app.use("/auth",authRoutes)

app.use("/tasks",taskRoutes)

app.listen(process.env.PORT,()=>{

 console.log("Server running")

})