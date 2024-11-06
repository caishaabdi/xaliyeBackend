import express from 'express'
import connectDB from './databse/db.js'
import userRouter from './routers/userRouter.js'
import { configDotenv } from 'dotenv'
import dotenv from 'dotenv'


dotenv.config()
const app = express()

connectDB();
// MiddleWare
app.use(express.json())
app.use('/api/users', userRouter)


const port = process.env.PORT || 5000
app.listen(() => {
    console.log(`server is rununig on port : ${port}`);
})