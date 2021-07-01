// import model
import Product from '../models/product.js'

// INDEX ROUTE
export const getAllProducts = async (_req, res) => {
  const products = await Product.find()
  return res.status(200).json(products)
}
