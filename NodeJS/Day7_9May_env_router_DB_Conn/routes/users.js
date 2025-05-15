const express = require('express');
const { getAllUsers, getByUserId, insertUser, updateUser, deleteUser, replaceUser } = require('../controllers/users');

const router = express.Router();

router.get('/', getAllUsers)
router.get('/:id', getByUserId)
router.post('/', insertUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id', replaceUser)
module.exports = router;