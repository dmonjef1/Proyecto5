import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    slug: String,
    category: String,
    image: String,
    brand: String,
    price: String,
    stock: Number,
    rating: Number,
    description: String,
    

})

export const Product = new mongoose.model("Product", productSchema)
