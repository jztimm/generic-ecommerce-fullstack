import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js"
import productRoutes from './routes/productRoutes.js'; // gets the

dotenv.config()

connectDB()

const app = express()

// This is a route to the home
app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))