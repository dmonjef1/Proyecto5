import {Router} from "express"
import {getProducts,getProductById, getProductbyName,createProducts,updateProductById,deleteProductById} from "../controllers/user.controller.js"
const productsRouter = Router()
const ep = "/products"

productsRouter.get(ep,getProducts )
productsRouter.get( `${ ep }/:id`, getProductById )
productsRouter.get(`${ep}/:slug`, getProductbyName)
productsRouter.post(ep, createProducts)
productsRouter.put( `${ ep }/:id`, updateProductById )
productsRouter.delete( `${ep}/:id`, deleteProductById )

export default productsRouter