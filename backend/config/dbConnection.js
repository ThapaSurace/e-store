import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
    } catch (error) {
        console.log(error)
    }
}