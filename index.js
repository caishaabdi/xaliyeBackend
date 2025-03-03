import express from 'express';
import connectDB from './Database/db.js'// Place this at the top
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productsRouter.js';

import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRouter);
app.use('/api/product', productRouter);
app.get('/', (req, res) => res.send("Hello word..."));
app.post('https://xaliyebackend.onrender.com/api/product/all', (req, res) => res.send("Hello product..."));

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

