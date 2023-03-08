const express = require("express");
const router = express.Router();
const jsonwebtoken = require("jsonwebtoken");

const UserController = require("../controllers/user-controller");

router.get("/require-auth", (req, res, next) => {
  try {
    const token = req.cookies.jwt
    if (!token) {
      return res.status(401).json({ error: "Authorization token required" });
    }

    jsonwebtoken.verify(token, "[Code Ryders UserAuth Secret]");
    res.send(true);
  } catch (err) {
    console.log(err);
    res.json(false);
  }
});

//router.get('/', UserController.getUser);
router.post("/login", UserController.loginUser);
router.post("/register", UserController.createUser);
router.get("/logout", UserController.logoutUser);
//router.delete('/:id', UserController.deleteUser);

module.exports = router;
