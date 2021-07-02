import express from 'express'
import { loginUser, registerUser } from '../controllers/auth.js'
import { addComment, deleteComment, getAllProducts } from '../controllers/products.js'
import { addItemToBasket, getUserProfile, removeItemFromBasket } from '../controllers/users.js'
import { secureRoute } from './secureRoute.js'


const router = express.Router()

router.route('/products')
  .get(getAllProducts)

router.route('/basket')
  .post(secureRoute, addItemToBasket)
  .delete(secureRoute, removeItemFromBasket)

router.route('/products/:id/comments')
  .post(secureRoute, addComment)

router.route('/products/:id/comments/:commentId')
  .delete(secureRoute, deleteComment)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/profile')
  .get(secureRoute, getUserProfile)


export default router