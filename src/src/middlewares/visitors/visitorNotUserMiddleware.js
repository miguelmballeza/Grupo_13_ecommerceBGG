module.exports = (req, res, next) => {
    if(!req.session.user){
        const head = {
            title: "Iniciar Sesión",
            styleSheet: "/css/stylesLogin.css",
        };
        res.render('users/login', { head });
    } else {
        next();
    }
};