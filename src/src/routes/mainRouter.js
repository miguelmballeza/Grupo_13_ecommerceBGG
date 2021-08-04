const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const usersMiddlewares = require('../middlewares/users/');

router.get('/', mainController.main);
router.get('/carrito-de-compras', usersMiddlewares.addedProductsMiddleware, mainController.cart);

router.post('/carrito-de-compras/:id', usersMiddlewares.usersMiddleware, mainController.cartPost);

module.exports = router;