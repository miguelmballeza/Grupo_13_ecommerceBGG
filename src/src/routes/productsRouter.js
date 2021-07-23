const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');
const productsPath = path.resolve(__dirname, '../data/products.json');
let products = require(productsPath);


const storageToCreate = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.resolve(path.join(__dirname, '..', '..' ,'/public/images/registeredProducts')));
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});

const storageToEdit = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.resolve(path.join(__dirname, '..', '..' ,'/public/images/registeredProducts')));
    },
    filename: function(req, file, cb) {
        const product = products.find( product => product.id == req.params.id);
        cb(null, `${product.image}`);
    }
});

const uploadFile = multer({ storage : storageToCreate });
const editFile = multer({ storage : storageToEdit });


router.get('/', productsController.index);
router.get('/crear', productsController.createProduct);
router.get('/:id', productsController.productDetail);
router.get('/:id/editar', productsController.editProduct);


router.post('/:id', uploadFile.single('image'), productsController.createProductPost )
router.put('/:id', editFile.single('image'), productsController.updateProduct );
router.delete('/:id', productsController.deleteProduct);

module.exports = router;