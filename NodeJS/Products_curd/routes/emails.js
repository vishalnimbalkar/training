const express = require('express');
const { sendMail } = require('../controllers/emails');
const { body } = require('express-validator');
const router = express.Router();

router.post('/send', [ 
    body('to').isEmail().withMessage('Eamil is invalid'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('text').notEmpty().withMessage('Text is required')
], sendMail)
module.exports = router