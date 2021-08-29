const path = require('path');
const usersPath = path.resolve(__dirname, '../data/users.json');
const fs = require('fs');
const users = require(usersPath);
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const fetch = require('node-fetch');
const { db } = require('../database/models');

const usersController = {
    profile: async function(req, res) {
        const head = {
            title: "Perfil de Usuario",
            styleSheet: "/css/stylesUser.css",
        };
        res.render('users/profile', { head, user: req.session.user });
    },
    editProfile: async function(req, res) {
        const head = {
            title: "Editar usuario",
            styleSheet: "/css/stylesUser.css",
        };
        const countries = await fetch('https://restcountries.eu/rest/v2/all')
            .then( response => response.json());
        res.render('users/profile', { head, user: req.session.user, editing: true, countries });
    },










    editProfilePost: async function(req, res) {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            const head = {
                title: "Perfil de Usuario",
                styleSheet: "/css/stylesUser.css",
            };
            const currentUser = await db.users.findByPk(req.session.user.user_id, { attributes : ["image"] });
            const fileName = req.file ? req.file.filename : currentUser.image;
            await db.users.update({
                firstName: req.body.firstName.toUpperCase(),
                lastName: req.body.lastName.toUpperCase(),
                password: bcrypt.hashSync(req.body.password, 12),
                image: fileName,
                birthday: req.body.birthday,
                address: req.body.address,
                zip: req.body.zip,
                city: req.body.city,
                state_1: req.body.state,
                country_1 : req.body.country
            }, {
                where: {
                    user_id : req.session.user.user_id
                }
            });
            const user = await db.users.findByPk(req.session.user.user_id);
            req.session.user = user;
            res.render('users/profile', { head, user: user });
            // res.redirect('/usuario/perfil');
        } else {
            const head = {
                title: "Editar usuario",
                styleSheet: "/css/stylesUser.css",
            };
            const countries = await fetch('https://restcountries.eu/rest/v2/all')
                .then( response => response.json());
            res.render('users/profile', { head, user: req.session.user, editing: true, countries, errors: errors.array() });
        }
    },


















    register: async function(req, res) {
        const head = {
            title: "Registro",
            styleSheet: "/css/stylesRegister.css",
        };
        const countries = await fetch('https://restcountries.eu/rest/v2/all')
            .then( response => response.json());
        res.render('users/register', { head, newID: users.length + 1, countries });
    },
    login: function(req, res) {
        const head = {
            title: "Iniciar Sesión",
            styleSheet: "/css/stylesLogin.css",
        };
        res.render('users/login', { head });
    },







    registerPost: async function(req, res) {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            if(!(await db.users.findOne({ where : { email : req.body.email } }))){
            const head = {
                title: "Usuario registrado",
                styleSheet: "/css/stylesRegisterConfirmation.css",
            };
            const fileName = req.file ? req.file.filename : 'defaultUser_img_.jpg';
            const user = await db.users.create({
                    category_id_1: 1,
                    firstName: req.body.firstName.toUpperCase(),
                    lastName: req.body.lastName.toUpperCase(),
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 12),
                    image: fileName,
                    birthday: req.body.birthday,
                    address: req.body.address,
                    zip: req.body.zip,
                    city: req.body.city,
                    state_1: req.body.state,
                    country_1 : req.body.country
                });
            req.session.user = user;
            res.render('users/createdUser', { head });
            } else {
                const head = {
                    title: "Registro",
                    styleSheet: "/css/stylesRegister.css",
                };
                const newID = await db.users.findAll({ attributes: ["user_id"] }).length + 1;
                const countries = await fetch('https://restcountries.eu/rest/v2/all')
                    .then( response => response.json());
                const writtenValues = req.body;
                res.render('users/register', { head, newID, countries, errors : [ { msg: 'Este correo ya fue registrado.' } ], writtenValues});
            }   
        } else {
            const head = {
                title: "Registro",
                styleSheet: "/css/stylesRegister.css",
            };
            const newID = await db.users.findAll({ attributes: ["user_id"] }).length + 1;
            const countries = await fetch('https://restcountries.eu/rest/v2/all')
                .then( response => response.json());
            const writtenValues = req.body;
            res.render('users/register', { head, newID, countries, errors : errors.array(), writtenValues });
        }
    },









    loginPost: async function(req, res) {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            console.log(req.body.email);
            const user = await db.users.findOne({ where : { email : req.body.email } });
            if(user){
                if(bcrypt.compareSync(req.body.password, user.password)){
                    const head = {
                        title: "Perfil de " + user.firstName,
                        styleSheet: "/css/stylesUser.css", // faltan estilos.
                    };
                    req.body.recuerdame ? res.cookie('recuerdame', user.user_id, { maxAge: 300000 }) : '' ;
                    req.session.user = user;
                    req.session.user.id = user.user_id;
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