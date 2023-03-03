const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require("../models/User");
const jwt = require("jsonwebtoken");


// handle errors
const handleErrors = async (error, username) => {
  let errors = { username: "", email: "", password: "" };

  // duplicate error: if user email already exists in db
  if (error.code === 11000) {
    errors.email = "An account has already been registered with that email";
  }

  // duplicate error: if username already exists in db
  const usernameExists = await User.findOne({ username });
  if (usernameExists) {
    errors.username = "This username already exists";
  }

  // validation error: if user fails to enter valid credentials
  if (error.message.includes("user validation failed")) {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  // return errors object to be used as JSON doc
  return errors;
}

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

// create new user, catch and handle any errors if they are present
// return both user and any erroes as JSON doc 
const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email })

    if (userExists) {
      // res.status(400)
      // throw new Error('User already exists')
      return res.status(200).json({
        message: 'User exists.'
      });
    }

    const user = await User.create({ username, email, password });
    res.status(201).json({user: user._id});
  }
  catch (error) {
    const errors = handleErrors(error, user.username);
    res.status(400).json({ errors });
  }
});

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
