const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.index);
router.get('/crear', productsController.createProduct);
router.post('/crear', productsController.agregar )
router.get('/:id', productsController.productDetail);
router.get('/:id/editar', productsController.editProduct);
router.put('/:id', productsController.updateProduct );

module.exports = router;