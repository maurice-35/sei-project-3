import express from 'express'
import { loginUser, registerUser } from '../controllers/auth.js'
import { getAllProducts } from '../controllers/products.js'
import { addItemToBasket, getUserProfile } from '../controllers/users.js'
import { secureRoute } from './secureRoute.js'


const router = express.Router()

router.route('/products')
  .get(getAllProducts)

router.route('/basket')
  .post(secureRoute, addItemToBasket)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/profile')
  .get(secureRoute, getUserProfile)


export default router