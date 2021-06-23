const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.info);
router.get('/registro', usersController.register);
router.get('/inicio-de-sesion', usersController.login);

module.exports = router;