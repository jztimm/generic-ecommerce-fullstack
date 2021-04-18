import express from "express";
import dotenv from "dotenv";
import products from './data/products.js';   // gets the data from the data folder

dotenv.config()

const app = express()

// This is a route
app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/products', (req, res) => {
  // having .send or .json will both send info in it's correct format
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = find(p => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))