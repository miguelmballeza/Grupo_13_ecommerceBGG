module.exports = (req, res, next) => {
    if(req.session.addedProducts){
        const head = {
            title: "Carrito",
            styleSheet: "/css/stylesCart.css",
        };
        res.render('main/productCart', { head, addedProducts: req.session.addedProducts, totalPrice: req.session.totalPrice });
    } else {
        next();
    }
};