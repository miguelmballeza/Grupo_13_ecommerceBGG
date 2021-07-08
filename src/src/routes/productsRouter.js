const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.index);
router.get('/crear', productsController.createProduct);
router.get('/:id', productsController.productDetail);
router.get('/:id/editar', productsController.editProduct);

module.exports = router;