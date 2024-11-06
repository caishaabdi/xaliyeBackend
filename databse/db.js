import mongoose, { mongo } from "mongoose";

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL
    ).then(() => {

        console.log(`Database Connnected`)
    })
}


export default connectDB;