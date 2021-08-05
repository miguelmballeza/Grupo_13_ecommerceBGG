const express = require('express');
const multer = require('multer');
const path = require('path');
const productsController = require('../controllers/productsController');
const productsPath = path.resolve(__dirname, '../data/products.json');
const { usersMiddleware } = require('../middlewares/users');
const { body } = require('express-validator');

let products = require(productsPath);

const router = express.Router();
const productsImagePath = path.resolve(path.join(__dirname, '..', '..' ,'/public/images/registeredProducts'));

const registeredProductValidation = [
    body('artist').notEmpty().withMessage('El artista no puede estar vacío.'),
    body('album').notEmpty().withMessage('El album no puede estar vacío.'),
    body('genre').notEmpty().withMessage('El genero no puede estar vacío.'),
    body('year').notEmpty().withMessage('El año no puede estar vacío.').bail().isNumeric().withMessage('El año debe ser un número valido.'),
    body('price').notEmpty().withMessage('El precio no puede estar vacío.').bail().isNumeric().withMessage('El precio debe ser un formato valido.'),,
    body('description').notEmpty().withMessage('La descripción no puede estar vacía.').bail().isLength({ max: 140 }).withMessage('La descripción no puede exceder los 140 caracteres.'),
    body('image').notEmpty().withMessage('La imagen no puede estar vacía.'),
    body('songs').notEmpty().withMessage('La canción 1 no puede estar vacía.'),
    body('lenght').notEmpty().withMessage('La duración 1 no puede estar vacía.').matches('^[0-9][0-9]:[0-9][0-9]$').withMessage('La duración de la canción debe tener un formato valido (XX:XX).')
]; // // AQUi se hará más dinámico, debido a que se tendran tantas canciones como sea necesario, con el JS en el front-end

const updatedProductValidation = [
    body('artist').notEmpty().withMessage('El artista no puede estar vacío.'),
    body('album').notEmpty().withMessage('El album no puede estar vacío.'),
    body('genre').notEmpty().withMessage('El genero no puede estar vacío.'),
    body('year').notEmpty().withMessage('El año no puede estar vacío.').bail().isNumeric().withMessage('El año debe ser un número valido.'),
    body('price').notEmpty().withMessage('El precio no puede estar vacío.').bail().isNumeric().withMessage('El precio debe ser un formato valido.'),,
    body('description').notEmpty().withMessage('La descripción no puede estar vacía.').bail().isLength({ max: 140 }).withMessage('La descripción no puede exceder los 140 caracteres.'),
    body('image').notEmpty().withMessage('La imagen no puede estar vacía.')
]; // AQUi se hará más dinámico, debido a que se tendran tantas canciones como sea necesario.

const storageToCreate = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, productsImagePath);
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});

const storageToEdit = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, productsImagePath);
    },
    filename: function(req, file, cb) {
        const product = products.find( product => product.id == req.params.id);
        cb(null, `${product.image}`);
    }
});

const uploadFile = multer({ storage : storageToCreate });
const editFile = multer({ storage : storageToEdit });

router.get('/', productsController.index);
router.get('/crear', usersMiddleware, productsController.createProduct);
router.get('/:id', productsController.productDetail);
router.get('/:id/editar', usersMiddleware, productsController.editProduct);


router.post('/:id', uploadFile.single('image'), productsController.createProductPost )
router.put('/:id', editFile.single('image'), productsController.updateProduct );
router.delete('/:id', productsController.deleteProduct);

module.exports = router;