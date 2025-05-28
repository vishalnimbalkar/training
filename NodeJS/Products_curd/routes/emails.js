const express = require('express');
const { sendMail } = require('../controllers/emails');
const { emailValidators } = require('../validations/emails');
const router = express.Router();

router.post('/send', emailValidators, sendMail)
module.exports = router