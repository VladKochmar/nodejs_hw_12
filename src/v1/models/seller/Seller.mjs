import mongoose from 'mongoose'

const { Schema } = mongoose

const sellerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [3, 'Name must be at least 3 characters long'],
    maxlength: [20, 'Name must be at most 20 characters long'],
    trim: true,
  },
})

const Seller = mongoose.model('Seller', sellerSchema)
export default Seller
