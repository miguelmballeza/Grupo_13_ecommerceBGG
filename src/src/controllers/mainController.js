const mainController = {
    main: function(req, res) {
        const head = {
            title: "Inicio",
            styleSheet: "/css/styles.css",
        };
        res.render('main/index', {head: head});
    },
    cart: function(req, res) {
        const head = {
            title: "Carrito",
            styleSheet: "/css/stylesCart.css",
        };
        res.render('main/productCart', {head: head});
    },
};

module.exports = mainController;