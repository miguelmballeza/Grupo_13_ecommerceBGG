const path = require('path');
const usersPath = path.resolve(__dirname, '../data/users.json');
const fs = require('fs');
const users = require(usersPath);
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const usersJSON = fs.readFileSync(usersPath, { encoding: 'utf-8' });
const usersParse = JSON.parse(usersJSON);

const usersController = {
    profile: function(req, res) {
        const head = {
            title: "Perfil de Usuario",
            styleSheet: "/css/stylesUser.css",
        };
        res.render('users/profile', { head, user: req.session.user });
    },
    register: function(req, res) {
        const head = {
            title: "Registro",
            styleSheet: "/css/stylesRegister.css",
        };
        res.render('users/register', { head, newID: users.length + 1 });
    },
    login: function(req, res) {
        const head = {
            title: "Iniciar Sesión",
            styleSheet: "/css/stylesLogin.css",
        };
        res.render('users/login', { head });
    },
    registerPost: function(req, res) {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            if((users.find( user => user.email == req.body.email) == undefined)){
            const head = {
                title: "Usuario registrado",
                styleSheet: "/css/stylesRegisterConfirmation.css",
            };
            const fileName = req.file ? req.file.filename : 'defaultUser_img_.jpg';
            const user = {
                "id": users.length + 1,
                "firstName": req.body.firstName,
                "lastName": req.body.lastName,
                "email": req.body.email,
                "password": bcrypt.hashSync(req.body.password, 12),
                "category": "user",
                "image": fileName,
            };
            users.push(user);
            usersParse.push(user);
            //fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), JSON.stringify(usersParse, null, 2));
            req.session.user = user;
            res.render('users/createdUser', { head });
            } else {
                const head = {
                    title: "Registro",
                    styleSheet: "/css/stylesRegister.css",
                };
                const newID = users.length + 1;
                const writtenValues = req.body;
                res.render('users/register', { head, newID, errors : [ { msg: 'Este correo ya fue registrado.' } ], writtenValues});
            }   
        } else {
            const head = {
                title: "Registro",
                styleSheet: "/css/stylesRegister.css",
            };
            const newID = users.length + 1;
            const writtenValues = req.body;
            res.render('users/register', { head, newID, errors : errors.array(), writtenValues });
        }
    },
    loginPost: function(req, res) {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            const user = users.find( user => {
                return user.email == req.body.email
            });
            if(user){
                if(bcrypt.compareSync(req.body.password, user.password)){
                    const head = {
                        title: "Perfil de " + user.firstName,
                        styleSheet: "/css/stylesUser.css", // faltan estilos.
                    };
                    req.body.recuerdame ? res.cookie('recuerdame', user.id, { maxAge: 300000 }) : '' ;
                    req.session.user = user;
                    res.render('users/profile', { head, user });
                    // return res.send('usuario encontrado.');
                } else {
                    const head = {
                        title: "Iniciar Sesión",
                        styleSheet: "/css/stylesLogin.css",
                    };
                    const email = req.body.email;
                    res.render('users/login', { head,  errors : [ { msg: 'Correo o contraseña incorrectos.' } ], email}); 
                }
            } else {
                const head = {
                    title: "Iniciar Sesión",
                    styleSheet: "/css/stylesLogin.css",
                };
                const email = req.body.email;
                res.render('users/login', { head,  errors : [ { msg: 'Correo o contraseña incorrectos.' } ], email});
            }
        } else {
            const head = {
                title: "Iniciar Sesión",
                styleSheet: "/css/stylesLogin.css",
            };
            const email = req.body.email;
            res.render('users/login', { head, errors : errors.array(), email });
        }
    },
};

module.exports = usersController;