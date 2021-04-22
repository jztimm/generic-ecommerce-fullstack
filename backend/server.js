import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js"
import products from './data/products.js';   // gets the data from the data folder

dotenv.config()

connectDB()

const app = express()

// This is a route to the home
app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/products', (req, res) => {
  // having .send or .json will both send info in it's correct format
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))