const express = require('express');
const {login, logout, register} = require('../controllers/users.js')
const {jwtAuthMiddleware} = require('../middlewares/jwt.js')
const { body } = require('express-validator');
const router = express.Router();


router.post("/register", [
    body('name').notEmpty().withMessage('Name is required').bail(),
    body('email').isEmail().withMessage('Email is invalid').bail(),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
    ], register);

router.post("/login", 
    [
    body('email').isEmail().withMessage('Email is invalid').bail(),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
    ], login);

router.post("/logout", logout);

router.get('/getVehicles/:id',jwtAuthMiddleware)

module.exports = router;