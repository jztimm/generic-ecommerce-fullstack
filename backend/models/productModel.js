import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true,
      default: false
    },
    description: {
      type: String,
      required: true,
      default: false
    },
    rating: {
      type: Number,
      required: true,
      default: 0
    },
    reviewsNum: {
      type: Number,
      required: true,
      default: 0
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    inStockCounter: {
      type: Number,
      required: true,
      default: 0
    },
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User;