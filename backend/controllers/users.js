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

//Add Pet
export const addPet = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
    console.log('USER ->', user)
    if (!user) throw new Error()
    const petToAdd = { ...req.body }
    user.pet.push(petToAdd)
    await user.save()
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Not found' })
  }
}

//Delete Pet
export const removePet = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error('User not found')

    const petToRemove = user.pet.id(req.body.petId)
    console.log('REQ.BODY', req.body)

    if (!petToRemove) throw new Error('Pet not found')

    await petToRemove.remove()
    await user.save()

    return res.sendStatus(204)

  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err })
  }
}

//Get Pet Profile
export const getPetProfile = async (req, res) =>{
  try {
    const user = await User.findById(req.currentUser._id)
    const getUserPet = user.pet
    console.log(getUserPet)
    return res.status(200).json(getUserPet)
  } catch (err){
    console.log(err)
    return res.status(404).json({ message: 'not found' })
  }
}

//Get basket on user profile

export const getBasket = async (req, res) =>{
  try {
    const user = await User.findById(req.currentUser._id)
    const getUserBasket = user.basket
    console.log(getUserBasket)
  } catch (err){
    console.log(err)
    return res.status(404).json({ message: 'not found' })
  }
}
//Delete basket
export const deleteBasket = async (req, res) => {
  try {
    const { basketId } = req.params
    const user = await User.findById(req.currentUser._id)
    const itemToDelete = user.basket.findOneAndDelete({ _id: basketId })
    console.log(itemToDelete)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err })
  }
}