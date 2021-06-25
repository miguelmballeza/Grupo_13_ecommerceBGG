const usersController = {
    info: function(req, res) {
        const head = {
            title: "Perfil de Usuario",
            styleSheet: "/css/stylesUser.css",
        };
        res.render('users/info', {head: head});
    },
    register: function(req, res) {
        const head = {
            title: "Registro",
            styleSheet: "/css/stylesRegister.css",
        };
        res.render('users/register', {head: head});
    },
    login: function(req, res) {
        const head = {
            title: "Inicio de Sesión",
            styleSheet: "/css/stylesLogin.css",
        };
        res.render('users/login', {head: head});
    },
};

module.exports = usersController;