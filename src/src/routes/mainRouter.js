const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const usersMiddlewares = require('../middlewares/users/');
const usersController = require('../controllers/usersController');
const productsController = require('../controllers/productsController');

router.get('/', mainController.main);
router.get('/carrito-de-compras', usersMiddlewares.usersMiddleware, mainController.cart);
router.get('/carrito-de-compras/pagar', mainController.payment);
router.get('/carrito-de-compras/en-camino', mainController.onWay)

router.get('/api/users', usersController.APIusers);
router.get('/api/users/:id', usersController.APIuser);

router.get('/api/products', productsController.APIproducts);
router.get('/api/products/:id', productsController.APIproduct);

router.post('/carrito-de-compras/pagar', mainController.paymentPost);
router.post('/carrito-de-compras/:id', usersMiddlewares.usersMiddleware, mainController.cartPost);

router.delete('/carrito-de-compras/:id', mainController.deleteCartProduct);

module.exports = router;