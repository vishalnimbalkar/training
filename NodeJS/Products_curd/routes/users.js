const express = require('express');
const { login, logout, register, verifyUser } = require('../controllers/users.js');
const { loginValidator } = require('../validations/users.js');
const { validate } = require('../middlewares/user.js');
const schema = require('../schemas/user.js');
const router = express.Router();

router.post('/register', validate(schema), register);
// router.post('/register', registerValidator, register);

router.post('/login', loginValidator, login);

router.post('/logout', logout);

router.get('/verify', verifyUser);

module.exports = router;
