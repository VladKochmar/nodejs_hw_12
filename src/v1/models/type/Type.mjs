import mongoose from 'mongoose'

const { Schema } = mongoose

const typeSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [3, 'Title must be at least 3 characters long'],
    maxlength: [20, 'Title must be at most 20 characters long'],
    trim: true,
  },
})

const Type = mongoose.model('Type', typeSchema)
export default Type
