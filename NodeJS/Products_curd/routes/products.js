const express = require('express');
const schema = require('../schemas/product.js');
const {
	getAllProducts,
	getAllFilteredProducts,
	addProduct,
	getProduct,
	deleteProduct,
	updateProduct,
	replaceProduct,
} = require('../controllers/products');
const { jwtAuthMiddleware } = require('../middlewares/jwt.js');
const { validate } = require('../middlewares/product.js');
const router = express.Router();

router.get('/', getAllProducts);
router.get('/filter', getAllFilteredProducts);
router.post('/add', validate(schema), addProduct);

router.get('/:product_id', jwtAuthMiddleware, getProduct);
router.patch('/:product_id', jwtAuthMiddleware, updateProduct);
router.delete('/:product_id', deleteProduct);
router.put('/:product_id', jwtAuthMiddleware, replaceProduct);

module.exports = router;
