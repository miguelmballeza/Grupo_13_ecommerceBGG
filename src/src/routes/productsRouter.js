const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');
const { query } = require('express-validator');
const productsController = require('../controllers/productsController');
const { usersMiddleware } = require('../middlewares/users');

const productsPath = path.resolve(__dirname, '../data/products.json');
const products = require(productsPath);
const productsImagePath = path.resolve(path.join(__dirname, '..', '..' ,'/public/images/registeredProducts'));

const registeredProductValidation = [
    body('artists').notEmpty().withMessage('El artista no puede estar vacío.'),
    body('album').notEmpty().withMessage('El album no puede estar vacío.').bail().isLength({ min: 5 }).withMessage("El album debe tener por lo menos 5 caracteres."),
    body('type').notEmpty().withMessage('El tipo no puede estar vacío.'),
    body('year').notEmpty().withMessage('El año no puede estar vacío.').bail().isNumeric().withMessage('El año debe ser un número valido.').bail().matches('^[1-2][09][0-9][0-9]$').withMessage("El año debe contener un formato valido. [ABCD > 1900]"),
    body('price').notEmpty().withMessage('El precio no puede estar vacío.').bail().isNumeric().withMessage('El precio debe ser un formato valido.').bail().matches('^[0-9]*.[0-9][0-9]$').withMessage("El precio debe tener dos decimales y por lo menos un entero."),
    body('description').notEmpty().withMessage('La descripción no puede estar vacía.').bail().isLength({ min: 20, max: 140 }).withMessage('La descripción no puede exceder los 140 caracteres.'),
    body('color').notEmpty().withMessage('Debes de seleccionar un color.'),
    body('pieces').notEmpty().withMessage('Debes de escribir una cantidad de piezas.').bail().isNumeric().withMessage('Las piezas deben de ser un formato valido.').bail().matches('^[0-9]*$').withMessage("El número de piezas puede ser : X, XX ó XXX."),
    body('recordLabel').notEmpty().withMessage('Debes de seleccionar un sello discografico.'),
    body('songs').notEmpty().withMessage('La canción 1 no puede estar vacía.')
    // body('lenght').notEmpty().withMessage('La duración 1 no puede estar vacía.').matches('^[0-9][0-9]:[0-9][0-9]$').withMessage('La duración de la canción debe tener un formato valido (XX:XX).')
]; // // AQUi se hará más dinámico, debido a que se tendran tantas canciones como sea necesario, con el JS en el front-end
// quite : body('image').notEmpty().withMessage('La imagen no puede estar vacía.'), , debido a que no funcionaba correctamente, siempre decia que estaba vacía.

const updatedProductValidation = [
    body('artists').notEmpty().withMessage('El artista no puede estar vacío.'),
    body('album').notEmpty().withMessage('El album no puede estar vacío.').bail().isLength({ min: 5 }).withMessage("El album debe tener por lo menos 5 caracteres."),
    body('type').notEmpty().withMessage('El tipo no puede estar vacío.'),
    body('year').notEmpty().withMessage('El año no puede estar vacío.').bail().isNumeric().withMessage('El año debe ser un número valido.').bail().matches('^[1-2][09][0-9][0-9]$').withMessage("El año debe contener un formato valido. [ABCD > 1900]"),
    body('price').notEmpty().withMessage('El precio no puede estar vacío.').bail().isNumeric().withMessage('El precio debe ser un formato valido.').bail().matches('^[0-9]*.[0-9][0-9]$').withMessage("El precio debe tener dos decimales y por lo menos un entero."),
    body('description').notEmpty().withMessage('La descripción no puede estar vacía.').bail().isLength({ min: 20, max: 140 }).withMessage('La descripción no puede exceder los 140 caracteres.'),
    body('color').notEmpty().withMessage('Debes de seleccionar un color.'),
    body('pieces').notEmpty().withMessage('Debes de escribir una cantidad de piezas.').bail().isNumeric().withMessage('Las piezas deben de ser un formato valido.').bail().matches('^[0-9]*$').withMessage("El número de piezas puede ser : X, XX ó XXX."),
    body('recordLabel').notEmpty().withMessage('Debes de seleccionar un sello discografico.'),
    // body('song1').notEmpty().withMessage('El titlo debe estar completo.'),
    // body('lenght1').notEmpty().withMessage('La duración 1 no puede estar vacía.').matches('^[0-9][0-9]:[0-9][0-9]$').withMessage('La duración de la canción debe tener un formato valido (XX:XX).')
]; // AQUi se hará más dinámico, debido a que se tendran tantas canciones como sea necesario.
// quite : body('image').notEmpty().withMessage('La imagen no puede estar vacía.'), , debido a que no funcionaba correctamente, siempre decia que estaba vacía.

const searchValidation = [
    query("search").notEmpty().withMessage("La búsqueda no puede estar vacía.")
];

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
router.get('/busqueda', searchValidation, productsController.search);
router.get('/crear', usersMiddleware, productsController.createProduct);
router.get('/:id', productsController.productDetail);
router.get('/:id/editar', usersMiddleware, productsController.editProduct);

router.post('/:id', uploadFile.single('image'), registeredProductValidation, productsController.createProductPost);
router.put('/:id', editFile.single('image'), updatedProductValidation, productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;