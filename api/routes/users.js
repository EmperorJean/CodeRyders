const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user-controller');

router.get('/', UserController.getUser);
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.get('/me', UserController.meUser);
//router.get('/logout', UserController.loginUser);


module.exports = router;
