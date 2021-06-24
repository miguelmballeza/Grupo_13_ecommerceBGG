const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.main);
router.get('/carrito-de-compras', mainController.cart);

module.exports = router;