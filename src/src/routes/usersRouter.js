const express = require('express');
const multer = require('multer');
const usersController = require('../controllers/usersController');
const path = require('path');
const usersImagePath = path.resolve(path.join(__dirname, '..', '..' ,'/public/images/registeredUsers'));
const router = express.Router();
const { body } = require('express-validator');
const usersMiddlewares = require('../middlewares/users');

const registerValidation = [
    body('firstName').notEmpty().withMessage('El campo de nombre esta vacío.'),
    body('lastName').notEmpty().withMessage('El campo de apellidos esta vacío.'),
    body('email').notEmpty().withMessage('El campo de Email esta vacío.').bail().isEmail().withMessage("El formato del email no es correcto."),
    body('password').notEmpty().withMessage('La contraseña no puede estar vacía.').bail().isLength({ min: 8 }).withMessage("La contraseña debe tener 8 caracteres como mínimo."),
];

const logInValidation = [
    body('email').notEmpty().withMessage('El campo de Email esta vacío.').bail().isEmail().withMessage('El formato del email no es correcto.'),
    body('password').notEmpty().withMessage('La contraseña no puede estar vacía.')
];

const storageToRegister = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, usersImagePath);
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});

const uploadFile = multer({ storage : storageToRegister });

router.get('/registro', usersController.register);
router.get('/inicio-de-sesion', usersMiddlewares.existentUserMiddleware, usersController.login);
router.get('/perfil', usersMiddlewares.usersMiddleware, usersController.profile);

router.post('/perfil', logInValidation, usersController.loginPost);
router.post('/:id', registerValidation, uploadFile.single('image'), usersController.registerPost);

module.exports = router;