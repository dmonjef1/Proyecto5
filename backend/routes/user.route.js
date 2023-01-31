import {Router} from "express"
import {getProducts,createProducts,getProductById,updateProductById,deleteProductById} from "../controllers/user.controller.js"
const productsRouter = Router()
const ep = "/products"

productsRouter.get(ep,getProducts )
productsRouter.post(ep, createProducts)
productsRouter.get( `${ ep }/:id`, getProductById )
productsRouter.put( `${ ep }/:id`, updateProductById )
productsRouter.delete( `${ep}/:id`, deleteProductById )

export default productsRouter