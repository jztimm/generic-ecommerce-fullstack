import mongoose from 'mongoose';

// users obj schema
const userSchema = mongoose.Schema({
  // User's Name
  name: {
    type: String,
    required: true
  },
  // User's Email
  email: {
    type: String,
    required: true,
    unique: true
  },
  // User's Pass
  password: {
    type: String,
    required: true
  },
  // is User Admin
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
}, {
  // timestamps when user is created
  timestamps: true
})

// Uses mongoose model to make user schema
const User = mongoose.model('User', userSchema)

export default User;