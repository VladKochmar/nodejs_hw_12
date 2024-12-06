import mongoose from 'mongoose'
const { Schema } = mongoose

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [3, 'Title must be at least 3 characters long'],
    maxlength: [20, 'Title must be at most 20 characters long'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0,
  },
  number: {
    type: Number,
    required: [true, 'Number is required'],
    min: 0,
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Seller',
  },
  productType: {
    type: Schema.Types.ObjectId,
    ref: 'Type',
  },
})

const Product = mongoose.model('Product', productSchema)
export default Product
