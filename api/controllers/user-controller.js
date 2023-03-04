const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const jwt = require("jsonwebtoken");


const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // Check for user email
  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// create new user, catch and handle any errors if they are present
// return both user and any erroes as JSON doc
const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // check if user exists in db
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(200).json({
      message: "User exists.",
    });
  }

  const user = await User.create({ username, email, password });
  res.status(201).json({ user: user._id });

  const errors = handleErrors(error, user.username);
  res.status(400).json({ errors });
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
