import mongoose from 'mongoose'

// productSchema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  shortDescription: { type: String, required: true, maxlength: 150 },
  description: { type: String, required: true, maxlength: 300 },
  ingredient: [{ type: String, required: true }],
  image: { type: String, required: true },
  typeAnimal: { type: String, required: true },
  allergins: [{ type: String, required: true }],
  storage: { type: String, required: true },
  typeProduct: { type: String, required: true },
  age: { type: Number, required: true },
  price: { type: Number, required: true }
})

export default mongoose.model('Product', productSchema)