import {Router} from "express"
import {getProducts,createProducts} from "../controllers/user.controller.js"
const productsRouter = Router()


productsRouter.get("/products",getProducts )
productsRouter.post("/products", createProducts)


export default productsRouter