import express from 'express'
import asyncHandler from 'express-async-handler'

const router = express.Router()
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get(
  '/',
  asyncHandler (async(req, res) => {        // Using express-async-handler below to handle the returned promise
    // Below products will return a promise and rather than returning that promise, use await instead
    const products = await Product.find({})

    // having .send or .json will both send info in it's correct format
    res.json(products)
  })
)

// @desc Fetch single products
// @route GET /api/products/:id
// @access Public
router.get('/:id', asyncHandler (async(req, res) => {
  const product = await Product.findById(req.params.id)   // Will give us ID that is in the URL

  if(product) {
    res.json(product)                                     // If product is true, return the product from JSON
  } else {
    res.status(404)                                       // Set status to 404, else it will return 500 by default
    throw new Error('Product not found')                  // 404 error message for product not found
  }

}))

export default router