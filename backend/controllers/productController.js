import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async(req, res) => {
  const products = await Product.find({})

    // having .send or .json will both send info in it's correct format
    res.json(products)
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
  getProducts,
  getProductById
}