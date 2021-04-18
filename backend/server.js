const express = require('express')
const products = require('./data/products')   // gets the data from the data folder

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
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})

app.listen(5000, console.log('Server running in port 5000'))