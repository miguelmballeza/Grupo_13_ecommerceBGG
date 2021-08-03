const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const { visitorNotUserMiddleware } = require('../middlewares/visitors/');

router.get('/', mainController.main);
router.get('/carrito-de-compras', visitorNotUserMiddleware, mainController.cart);

module.exports = router;