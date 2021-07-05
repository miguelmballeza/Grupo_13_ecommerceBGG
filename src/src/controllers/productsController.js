const productsController = {
    index: function(req, res) {
        const head = {
            title: "Productos",
            styleSheet: "/css/stylesProducts.css",
        };
        res.render('products/index', {head: head});
    },
    productDetail: function(req, res) {
        const head = {
            title: "Detalle del Producto",
            styleSheet: "/css/stylesDetail.css",
        };
        try{
            let id = parseInt(req.params.id);
            if(id>0){
                res.render('products/productDetail', { head : head, id : id });
            } else {
                res.send('Producto no encontrado :(');
            }
        } catch(error) {
            res.send('Error en la carga del Producto.');
        }
    },
    createProduct: function(req, res) {
        const head = {
            title: "Creación de Producto",
            styleSheet: "/css/stylesCreateProduct.css",
        };
        res.render('products/createProduct', {head: head});
    },
    editProduct: function(req, res) {
        const head = {
            title: "Edición de Producto",
            styleSheet: "/css/stylesEditProduct.css",
        };
        res.render('products/editProduct', {head: head});
    },
};

module.exports = productsController;