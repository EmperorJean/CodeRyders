const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require("../models/User");

const getUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'API is working.'
  });
}

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body

  // Check for user email
  const user = await User.findOne({ username })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }

})


const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if user exists
  const userExists = await User.findOne({ username })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
    })
    
  } else {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  }
})
const logoutUser = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: 'You are Loged Out.'
  });
});

module.exports = {
  getUser,
  loginUser,
  createUser,
  logoutUser,
};
