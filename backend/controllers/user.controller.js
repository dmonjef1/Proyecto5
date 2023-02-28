import {Product} from "../models/data.js"
import validateCreateProductBody from "../validators/products.validators.js"

export const getProducts = async ( req, res ) => {
    
    const products = await Product.find()
    
    res.json( products )
}

export const getProductById = async ( req, res ) => {
  const id = req.params.id
  const product = await Product.findById( id )
  res.json( product )
}
export const getProductbyName = async (req,res) => {
  const name = req.params.slug
  const type= await Product.find( name)
  res.json(type)
 
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


export const updateProductById = async ( req, res ) => {
  const body = req.body
  const id = req.params.id
  const productUpdated = await Product.findByIdAndUpdate( id, body, { new: true } )
  res.json( productUpdated )
}

export const deleteProductById = async ( req, res ) => {
  const id = req.params.id
  const productRemoved = await Product.findByIdAndDelete( id )
  res.json( productRemoved )
}




