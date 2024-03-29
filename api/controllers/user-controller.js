const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// create json web token
const maxAge = 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "[Code Ryders UserAuth Secret]", {
    expiresIn: maxAge,
  });
};

const getUser = async (req, res) => {
  const user = await User.find({ user: req.params.id })
    res.status(200).json(user)

}

// login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      const token = createToken(user._id);
      res.status(201).json({email, token, username: user.username});
    }
    else {
      res.status(200).json({ message: "Incorrect password" });
    }
  } 
  else {
    res.status(200).json({ message: "Incorrect email" });
  }
})

// create new user, catch and handle any errors if they are present
// return both user and any erroes as JSON doc
const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  
  if(password.length < 8) { return res.status(200).json({ message: "Password must be at least 8 characters"});}

  // check if user exists in db
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(200).json({
      message: "An account is already registered with that email.",
    });
  }

  const user = await User.create({ username, email, password });
  const token = createToken(user._id);
  res.status(201).json({email, token, username});
});

const logoutUser = asyncHandler(async (req, res) => {

  return res.status(200).json({
    message: "You are Logged Out.",
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

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  loginUser,
  createUser,
  logoutUser,
  deleteUser,
  getUser,
};
