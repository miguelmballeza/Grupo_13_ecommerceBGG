module.exports = (req, res, next) => {
    if(req.session.user){
        const head = {
            title: "Perfil de Usuario",
            styleSheet: "/css/stylesUser.css",
        };
        res.render('users/profile', { head, user: req.session.user });
    } else {
        next();
    }
};