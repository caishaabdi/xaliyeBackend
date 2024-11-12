// import express from 'express'
// import connectDB from './databse/db.js'
// import userRouter from './routers/userRouter.js'
// import dotenv from 'dotenv'


// dotenv.config()
// const app = express()

// connectDB();
// // MiddleWare
// app.use(express.json())
// app.use('/api/users', userRouter)


// const port = process.env.PORT
// app.listen(port, () => {
//     console.log(`server is rununig on port : ${port}`)
// })




// Import necessary modules
import express from 'express';
import connectDB from './Database/db.js'// Place this at the top
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv';
import { register } from './controllers/userControlle.js';

dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
// app.use('/api/users', userRouter);
app.post('/api/users', register)

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

