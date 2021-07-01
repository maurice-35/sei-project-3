import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import productData from './data/products.js'
import Product from '../models/product.js'

const seedDatabase = async () => {
  try {
    // connect to db
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🐶🐱 DB connected in seeds')

    // drop the db
    await mongoose.connection.db.dropDatabase()
    console.log('👍 DB dropped')

    const products = await Product.create(productData)
    console.log(`🌱 DB seeded with ${products.length} products`)

    // close the connection
    await mongoose.connection.close()
    console.log('👋🏼 bye felica')

  } catch (err) {
    console.log(err)
  }
}
seedDatabase()