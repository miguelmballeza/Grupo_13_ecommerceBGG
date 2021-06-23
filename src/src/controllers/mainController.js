const mainController = {
    main: function(req, res) {
        res.render('main/index');
    },
    cart: function(req, res) {
        res.render('main/productCart');
    },
};

module.exports = mainController;