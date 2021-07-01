import User from '../models/user.js'
// import jwt from 'jsonwebtoken'
// import { secret } from '../config/environment.js'

// REGISTER
export const registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    console.log(newUser)
    return res.status(202).json({ message: `Welcome ${newUser.username}` })
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}
