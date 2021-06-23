const productsController = {
    index: function(req, res) {
        res.render('products/index');
    },
    productDetail: function(req, res) {
        res.render('products/productDetail');
    },
};

module.exports = productsController;