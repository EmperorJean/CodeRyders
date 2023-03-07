const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const jwt = require("jsonwebtoken");


// const loginUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   // Check for user email
//   const user = await User.findOne({ email })
//   const auth = await bcrypt.compare(password, user.password)

//   if (user && auth) {
//     res.json({
//       _id: user.id,
//       username: user.username,
//       email: user.email,
//       // token: generateToken(user._id),
//     })
//   } if (auth){
//     const token = createToken(user._id)
//     console.log(token)
//     res.cookie("jwt", token, {httpOnly: true, maxAge:maxAge * 1000})
//     res.status(200).json({user: user._id})
//   }
//   else {
//     res.status(400).json({message: "invalid credentials"})
//     throw new Error('Invalid credentials')
//   }
// })
const getUser = async (req, res) => {
  const user = await User.find({ user: req.params.id })
    res.status(200).json(user)

}
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check for user email
  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    })
    res.cookie("jwt", token)
    res.send('ok')
    // res.status(200).json({user: user._id})
    window.localStorage.setItem('x-auth-token', res.token)
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

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
  req.logout(() => {
    console.log('User has logged out.')
  })
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
    res.redirect("/");
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
  getUser
};
