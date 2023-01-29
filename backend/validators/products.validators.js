import joi from 'joi'

const createProductSchemaValidator = joi.object( {
    name: joi.string().required(),
    slug: joi.string().required(),
    category: joi.string().required(),
    image: joi.string(),
    brand: joi.string().required(),
    price: joi.string().required(),
    stock: joi.number().required(),
    rating: joi.number(),
    description: joi.string(),
} )

const validateCreateProductBody = async ( body ) => {
  return createProductSchemaValidator.validateAsync( body, { abortEarly: false } )
}

export default validateCreateProductBody