import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  // User that purchased the product
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  // Array of items information
  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      // refs product from productSchema
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      }
    }
  ],
  // Order shipping information
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  // Order payment information
  paymentMethod: {
    type: String,
    required: true,
  },
  // Order payment result
  paymentResult: {
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
    email_address: { type: String },
  },
  // Order taxes amount
  taxPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  // Order shipping amount
  shippingPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  // Order total price
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  // Order is paid or not
  isPaid: {
    type: Boolean,
    required: true,
    default: false
  },
  // Time order was paid
  paidAt: {
    type: Date,
  },
  // Order delivered or not
  isDelivered: {
    type: Boolean,
    required: true,
    default: false
  },
  // Time order was delivered
  deliveredAt: {
    type: Date,
  },
  
}, {
  // Time order was placed
  timestamps: true
})

const Order = mongoose.model('Order', orderSchema)

export default Order;