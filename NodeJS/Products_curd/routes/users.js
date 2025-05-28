const express = require('express');
const {login, logout, register, verifyUser} = require('../controllers/users.js');
const { registerValidator, loginValidator } = require('../validations/users.js');
const router = express.Router();


router.post("/register",registerValidator, register);

router.post("/login",loginValidator, login);

router.post("/logout", logout);

router.get('/verify',verifyUser)

module.exports = router;