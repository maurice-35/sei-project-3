// import Product from '../models/product.js'
import User from '../models/user.js'

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error()
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Not Found', messageTwo: err })
  }
}

// add items to basket
export const addItemToBasket = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
    console.log('USER ->', user)

    if (!user) throw new Error()

    const itemToAdd = { ...req.body }
    user.basket.push(itemToAdd)

    await user.save()

    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Not found' })
  }
}

// remove items from basket
export const removeItemFromBasket = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error('User not found')

    const basketItem = user.basket.id(req.body.basket)
    console.log('REQ.BODY', req.body.basket)

    if (!basketItem) throw new Error('Item not found')

    await basketItem.remove()
    await user.save()

    return res.sendStatus(204)

  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err })
  }
}