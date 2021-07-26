const path = require('path');
const usersPath = path.resolve(__dirname, '../data/users.json');
const users = require(usersPath);
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const usersController = {
    info: function(req, res) {
        const head = {
            title: "Perfil de Usuario",
            styleSheet: "/css/stylesUser.css",
        };
        res.render('users/info', { head });
    },
    register: function(req, res) {
        const head = {
            title: "Registro",
            styleSheet: "/css/stylesRegister.css",
        };
        const newID = users.length + 1;
        res.render('users/register', { head, newID });
    },
    login: function(req, res) {
        const head = {
            title: "Iniciar Sesión",
            styleSheet: "/css/stylesLogin.css",
        };
        res.render('users/login', { head });
    },
    registerPost: function(req, res) {
        // const head = {
        //     title: "Usuario registrado",
        //     styleSheet: "/css/stylesUser.css", // faltan estilos.
        // };
        const errors = validationResult(req);
        if(errors.isEmpty()){
            const user = {
                "id": users.length + 1,
                "firstName": req.body.firstName,
                "lastName": req.body.lastName,
                "email": req.body.email,
                "password": bcrypt.hashSync(req.body.password, 12),
                "category": "user",
                "image": req.file.filename,
            }
            users.push(user);
            res.status(200).send('usuario registrado');
            //res.render('users/profile', { head, user });
        } else {
            const head = {
                title: "Registro",
                styleSheet: "/css/stylesRegister.css",
            };
            const newID = users.length + 1;
            return res.render('users/register', { head, newID, errors : errors.array() });
        }
    },
};

module.exports = usersController;