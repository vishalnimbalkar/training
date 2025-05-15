const express = require('express');
const { getAllProducts, addProduct, getProduct, deleteProduct, updateProduct, replaceProduct } = require('../controllers/products');
const router = express.Router();

router.get('',getAllProducts)
router.post('/add',addProduct)

router.get('/:product_id',getProduct)
router.patch('/:product_id', updateProduct)
router.delete('/:product_id',deleteProduct)
router.put('/:product_id',replaceProduct)

// router.route('/:product_id')
// .get(getProduct)
// .patch(updateProduct)
// .delete(deleteProduct)
// .put(replaceProduct);

module.exports = router;