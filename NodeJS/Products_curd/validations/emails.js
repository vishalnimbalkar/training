const { body } = require('express-validator');

emailValidators = [ 
    body('to').isEmail().withMessage('Eamil is invalid'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('text').notEmpty().withMessage('Text is required')
];

module.exports = {emailValidators}