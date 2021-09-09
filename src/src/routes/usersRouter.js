const express = require('express');
const multer = require('multer');
const usersController = require('../controllers/usersController');
const path = require('path');
const usersImagePath = path.resolve(path.join(__dirname, '..', '..' ,'/public/images/registeredUsers'));
const router = express.Router();
const { body } = require('express-validator');
const usersMiddlewares = require('../middlewares/users');
const { db } = require('../database/models')

const registerValidation = [
    body('firstName').notEmpty().withMessage('El campo de nombre esta vacío.').bail().isLength({ min : 2 }).withMessage("El nombre debe tener 2 caracteres como mínimo."),
    body('lastName').notEmpty().withMessage('El campo de apellidos esta vacío.').bail().isLength({ min : 2 }).withMessage("El nombre debe tener 2 caracteres como mínimo."),
    body('email').notEmpty().withMessage('El campo de Email esta vacío.').bail().isEmail().withMessage("El formato del email no es correcto."),
    body('password').notEmpty().withMessage('La contraseña no puede estar vacía.').bail().isLength({ min: 8 }).withMessage("La contraseña debe tener 8 caracteres como mínimo.").bail()
        .matches(/(?=.*?[A-Z])/).withMessage('La contraseña debe tener al menos una letra mayúscula.').bail()
        .matches(/(?=.*?[a-z])/).withMessage('La contraseña debe tener al menos una letra minúscula.').bail()
        .matches(/(?=.*?[0-9])/).withMessage('La contraseña debe tener al menos un número natural.').bail()
        .matches(/(?=.*?[#?!@$%^&*-])/).withMessage('La contraseña debe tener al menos un caracter especial.').bail()
        .not().matches(/^$|\s+/).withMessage('La contraseña no debe tener ningun espacio en blanco.'),
    body('rewrited-password').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('La contraseña no coincide.');
        }
        return true;
        }),
    body('birthday').notEmpty().withMessage('El campo de cumpleaños no puede estar vacío.'),
    body('address').notEmpty().withMessage('El campo de dirección no puede estar vacío.'),
    body('zip').notEmpty().withMessage('El campo de CP no puede estar vacío.'),
    body('city').notEmpty().withMessage('El campo de ciudad no puede estar vacío.'),
    body('state').notEmpty().withMessage('El campo de estado no puede estar vacío.'),
    body('country').notEmpty().withMessage('El campo de país no puede estar vacío.'),
];

const editProfileValidation = [
    body('firstName').notEmpty().withMessage('El campo de nombre esta vacío.'),
    body('lastName').notEmpty().withMessage('El campo de apellidos esta vacío.'),
    body('password').notEmpty().withMessage('La contraseña no puede estar vacía.').bail().isLength({ min: 8 }).withMessage("La contraseña debe tener 8 caracteres como mínimo.").bail()
        .matches(/(?=.*?[A-Z])/).withMessage('La contraseña debe tener al menos una letra mayúscula.').bail()
        .matches(/(?=.*?[a-z])/).withMessage('La contraseña debe tener al menos una letra minúscula.').bail()
        .matches(/(?=.*?[0-9])/).withMessage('La contraseña debe tener al menos un número natural.').bail()
        .matches(/(?=.*?[#?!@$%^&*-])/).withMessage('La contraseña debe tener al menos un caracter especial.').bail()
        .not().matches(/^$|\s+/).withMessage('La contraseña no debe tener ningun espacio en blanco.'),
    body('rewrited-password').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('La contraseña no coincide.');
        }
        return true;
        }),
    body('birthday').notEmpty().withMessage('El campo de cumpleaños no puede estar vacío.'),
    body('address').notEmpty().withMessage('El campo de dirección no puede estar vacío.'),
    body('zip').notEmpty().withMessage('El campo de CP no puede estar vacío.'),
    body('city').notEmpty().withMessage('El campo de ciudad no puede estar vacío.'),
    body('state').notEmpty().withMessage('El campo de estado no puede estar vacío.'),
    body('country').notEmpty().withMessage('El campo de país no puede estar vacío.'),
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

const storageToEdition = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, usersImagePath);
    },
    filename: async function(req, file, cb){
        const product = await db.users.findByPk(req.session.user.user_id, { attributes : ["image"] });
        cb(null, `${product.image}`);
    }
});

const uploadFile = multer({ storage : storageToRegister });
const editFile = multer({ storage : storageToEdition });

router.get('/registro', usersController.register);
router.get('/inicio-de-sesion', usersMiddlewares.existentUserMiddleware, usersController.login);
router.get('/perfil', usersMiddlewares.usersMiddleware, usersController.profile);
router.get('/perfil/editar', usersMiddlewares.usersMiddleware, usersController.editProfile);

router.post('/perfil', logInValidation, usersController.loginPost);
router.post('/perfil/editado', editFile.single('image'), editProfileValidation, usersController.editProfilePost);
router.post('/:id', uploadFile.single('image'), registerValidation, usersController.registerPost);

module.exports = router;