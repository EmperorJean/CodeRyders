const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user-controller');

//router.get('/', UserController.getUser);
router.post('/login', UserController.loginUser);
router.post('/register', UserController.createUser);
router.get('/logout', UserController.logoutUser);
//router.delete('/:id', UserController.deleteUser);


module.exports = router;
