const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '.../public/images');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now + "_img_" + path.extname(file.originalname));
    }
});

const uploadFile = multer({ storage });

router.get('/', productsController.index);
router.get('/crear', productsController.createProduct);
router.post('/crear', uploadFile.single('image'), productsController.agregarProducto )
router.get('/:id', productsController.productDetail);
router.get('/:id/editar', productsController.editProduct);
router.put('/:id', productsController.updateProduct );
router.delete('/:id', productsController.eliminarProduct);

module.exports = router;