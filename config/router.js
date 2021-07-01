import express from 'express'
import { loginUser, registerUser } from '../controllers/auth.js'
import { getAllProducts } from '../controllers/products.js'

const router = express.Router()

router.route('/products')
  .get(getAllProducts)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)


export default router