import {Product} from "../models/data.js"
import validateCreateProductBody from "../validators/products.validators.js"

export const getProducts = async ( req, res ) => {
    
    const products = await Product.find()
    
    res.json( products )
}

export const createProducts = async (req, res)=>{
    const body = req.body
    try {
        const value = await validateCreateProductBody( body )
        const newProduct = await Product.create( value )
        return res.json( newProduct )
      } catch ( error ) {
        const errorResponse = {
          status: 'FAILED',
          details: error.message
        }
        return res.status( 400 ).json( errorResponse )
      }
}




