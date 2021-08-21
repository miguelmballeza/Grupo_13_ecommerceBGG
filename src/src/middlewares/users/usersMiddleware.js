module.exports = (req, res, next) => {
    if(req.session.user){
        next();
    } else {
        const head = {
            title: "Iniciar Sesión",
            styleSheet: "/css/stylesLogin.css",
        };
        res.render('users/login', { head });
    }
};