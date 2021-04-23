import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config();

connectDB();

// Import Data
const importData = async () => {
  try {
    // Before importing data, make sure to delete all data first
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    // Import users data
    const createdUsers = await User.insertMany(users)

    // stores admin user data
    const adminUser = createdUsers[0]._id

    const samepleProducts = products.map(product => {
      // Return existing products and add admin user to product
      return { ...product, user: adminUser }
    })

    await Product.insertMany(samepleProducts)

    console.log('Data Imported!!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}


// Destroy data
const destroyData = async () => {
  try {
    // Before importing data, make sure to delete all data first
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if(process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}