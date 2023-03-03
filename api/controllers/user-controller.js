const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// create json web token
const maxAge = 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "{CodeRyders User Auth Secret!}", {
    expiresIn: maxAge,
  });
};

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    res.status.json({user: user._id});
  } catch (err) {
    res.status(400).json({});
  }

  console.log(username, password);
});

// create new user, catch and handle any errors if they are present
// return both user and any erroes as JSON doc
const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(200).json({
      message: "User exists.",
    });
  }

  // create user and assign them jwt token in a cookie to log them in
  const user = await User.create({ username, email, password });
  const token = createToken(user._id);
  res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
  res.status(201).json({
    user: user._id,
  });
});



const logoutUser = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "You are Loged Out.",
  });
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    return res.status(400).json("User not found");
  }
  res.status(200).json("User deleted successfully");
});

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = {
  loginUser,
  createUser,
  logoutUser,
  deleteUser,
};
