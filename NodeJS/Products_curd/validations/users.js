const { body, query } = require('express-validator');

registerValidator = [
    body('name').notEmpty().withMessage('Name is required').bail(),
    body('email').isEmail().withMessage('Email is invalid').bail(),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];

loginValidator = [
    body('email').isEmail().withMessage('Email is invalid').bail(),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];

module.exports = { registerValidator, loginValidator}