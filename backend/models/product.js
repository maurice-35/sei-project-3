import mongoose from 'mongoose'

// commentSchema
const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true // Create timestamps automatically on creation and update
})

// productSchema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  shortDescription: { type: String, required: true, maxlength: 500 },
  description: { type: String, required: true, maxlength: 1000 },
  ingredient: [{ type: String, required: true }],
  image: { type: String, required: true },
  typeAnimal: { type: String, required: true },
  storage: { type: String, required: true },
  typeProduct: { type: String, required: true },
  age: { type: String, required: true },
  price: { type: Number, required: true },
  onDisplay: { type: Boolean },
  comments: [commentSchema],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

// AVERAGE RATINGS
productSchema.virtual('avgRating')
  .get(function () {
    if (!this.comments.length) return 'Not rated yet'
    const sum = this.comments.reduce((acc, curr) => {
      return acc + curr.rating
    }, 0)
    return (sum / this.comments.length).toFixed(2)
  })

productSchema.set('toJSON', {
  virtuals: true
})

export default mongoose.model('Product', productSchema)