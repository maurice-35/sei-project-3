import express from 'express'
import { getAllProducts } from '../controllers/products.js'

const router = express.Router()

router.route('/products')
  .get(getAllProducts)

router.route('/register')
  .post(registerUser)


export default router