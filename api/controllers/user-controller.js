const getUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'API is working.'
  });
}

const registerUser =  (req, res) => {
res.json({message: 'Register User'})
}

const loginUser =  (req, res) => {
  res.json({message: 'Login User'})
  }

  
  const meUser =  (req, res) => {
    res.json({message: 'User display'})
    }
    



module.exports = {
  getUser,
  registerUser,
  loginUser,
  meUser

};
