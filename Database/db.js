import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL)

        .then(() => {
            console.log(`Database Connected`);
        })
        .catch((err) => {
            console.error(`Error Connecting to the database:${err}`, err);
        });
}


export default connectDB