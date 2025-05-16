const express = require('express');
const {login, logout, refreshToken} = require('../controllers/users.js')
const { body } = require('express-validator');
const router = express.Router();

router.post("/login", 
    [
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
    ], login);
router.post("/logout", logout);
router.post("/token", refreshToken);

module.exports = router;