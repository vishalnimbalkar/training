const express = require('express');
const { getAllProducts, addProduct, getProduct, deleteProduct, updateProduct, replaceProduct} = require('../controllers/products');
const {jwtAuthMiddleware} = require('../middlewares/jwt.js')
const router = express.Router();

router.get('/',getAllProducts)
router.post('/add',addProduct)

router.get('/:product_id', jwtAuthMiddleware, getProduct)
router.patch('/:product_id', jwtAuthMiddleware, updateProduct)
router.delete('/:product_id', jwtAuthMiddleware, deleteProduct)
router.put('/:product_id', jwtAuthMiddleware, replaceProduct)

module.exports = router;