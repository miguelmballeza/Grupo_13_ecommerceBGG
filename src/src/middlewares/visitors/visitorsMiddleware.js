module.exports = (req, res, next) => {
    if(!req.session.user){
        next();
    } else {
        const head = {
            title: "Perfil de Usuario",
            styleSheet: "/css/stylesUser.css",
        };
        res.render('users/profile', { head, user: req.session.user });
    }
};