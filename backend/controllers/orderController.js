import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc Create new order
// @route GET /api/orders
// @access Private
const addOrderItems = asyncHandler(async(req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice
  } = req.body

  if(orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No Order Items')
    return
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
})

// @desc Fetch single products
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id)   // Will give us ID that is in the URL

  if(product) {
    res.json(product)                                     // If product is true, return the product from JSON
  } else {
    res.status(404)                                       // Set status to 404, else it will return 500 by default
    throw new Error('Product not found')                  // 404 error message for product not found
  }
})

export {
  addOrderItems
}