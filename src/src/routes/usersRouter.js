const express = require('express');
const multer = require('multer');
const usersController = require('../controllers/usersController');
const path = require('path');
const usersImagePath = path.resolve(path.join(__dirname, '..', '..' ,'/public/images/registeredUsers'));
const router = express.Router();
const { body } = require('express-validator');

const registerValidation = [
    body('firstName').notEmpty().withMessage('El campo de nombre esta vacío.'),
    body('lastName').notEmpty().withMessage('El campo de apellidos esta vacío.'),
    body('email').notEmpty().withMessage('El campo de Email esta vacío.').bail().isEmail().withMessage('El formato del Email tiene que ser correcto.'),
    body('password').notEmpty().withMessage('La contraseña no puede estar vacia.').bail().isLength({ min: 8 }).withMessage('La contraseña tiene que tener 8 caracteres como mínimo.').bail().equals('rewrited-password').withMessage('Las contraseñas no coinciden.'),
];

const storageToRegister = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, usersImagePath);
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now}_img_${path.extname(file.originalname)}`);
    }
});

const uploadFile = multer({ storage : storageToRegister });

router.get('/', usersController.info);
router.get('/registro', usersController.register);
router.get('/inicio-de-sesion', usersController.login);
router.post('/:id', uploadFile.single('image'), registerValidation, usersController.registerPost);

module.exports = router;