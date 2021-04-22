import mongoose from 'mongoose';

// product review schema
const reviewSchema = mongoose.Schema({
  // User's name who reviewed product
  name: { type: String, required: true},
  // Average rating for product
  rating: { type: Number, required: true},
  // Comment for product
  comment: { type: String, required: true}
}, {
  timestamps: true
})

// product obj schema
const productSchema = mongoose.Schema(
  {
    // what user created this product
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'     // creates relationship between model and user
    },
    // product name
    name: {
      type: String,
      required: true
    },
    // product image
    image: {
      type: String,
      required: true,
    },
    // product brand
    brand: {
      type: String,
      required: true
    },
    // product category
    category: {
      type: String,
      required: true,
      default: false
    },
    // product description
    description: {
      type: String,
      required: true,
      default: false
    },
    // references seperate product reviews schema above
    reviews: [reviewSchema],
    // product rating
    rating: {
      type: Number,
      required: true,
      default: 0
    },
    // product number of reviews
    reviewsNum: {
      type: Number,
      required: true,
      default: 0
    },
    // product price
    price: {
      type: Number,
      required: true,
      default: 0
    },
    // product inStock countner
    inStockCounter: {
      type: Number,
      required: true,
      default: 0
    },
  }, {
  // product time created
  timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product;