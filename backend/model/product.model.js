import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        synopsis: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        genre: {
            type: Array, 
            required: true 
        },
        language: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
    },
    {timestamps: true}
)

export default mongoose.model.Products || 
mongoose.model("Product", productSchema)