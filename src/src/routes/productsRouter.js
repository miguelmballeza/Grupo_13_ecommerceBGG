const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.index);
router.get('/crear', productsController.createProduct);
router.get('/editar', productsController.editProduct);
router.get('/:id', productsController.productDetail);

module.exports = router;