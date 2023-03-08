const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAuth = async (req, res, next) => {
   // verify authentication
   const { authorization } = req.headers;
   console.log(authorization);
  
  //  if (!authorization) {
  //   return res.status(2010.).json({message: "Authentization token required"});
  //  }

  //  const token = authorization.split(' ')[1]

  //  try {
  //    const { _id } = jwt.verify(token, "[Code Ryders UserAuth Secret]")
 
  //    req.user = await User.findOne({ _id }).select('_id')
  //    console.log(req.user)
  //    next()
 
  //  } catch (error) {
  //    console.log(error)
  //    res.status(200).json({message: 'Request is not authorized'})
  //  }
 }
 
 module.exports = requireAuth
