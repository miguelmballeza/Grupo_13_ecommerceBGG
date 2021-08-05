const path = require('path');
const productsPath = path.resolve(__dirname, '../data/products.json');
let products = require(productsPath);

const mainController = {
    main: function(req, res) {
        const head = {
            title: "Inicio",
            styleSheet: "/css/styles.css",
        };
        const firstSection = {
            title: "Escucha lo más actual y perron en tu genero favorito a todas horas",
            description: "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis pariatur in, ipsa deserunt exercitationem ea. Quidem maxime illo nihil atque, laborum labore fugiat, doloremque, ducimus necessitatibus commodi sunt esse iusto?",
            elements: [ { id : 1, elementName : "Artistas", link : "/productos/artistas" },
                         { id : 2, elementName : "Generos", link : "/productos/generos" },
                         { id : 3, elementName : "Productos ;)", link : "/productos" }, ],
        };
        let user = undefined;
        req.session.user ? user = req.session.user : '' ;
        res.render('main/index', { head, products, firstSection, user });
    },
    cart: function(req, res) {
        const head = {
            title: "Carrito",
            styleSheet: "/css/stylesCart.css",
        };
        res.render('main/productCart', { head, addedProducts: req.session.addedProducts, totalPrice: req.session.totalPrice });
    },
    cartPost: function(req, res) {
        const head = {
            title: "Producto agregado",
            styleSheet: "/css/stylesCart.css",
        };
        let totalPrice;
        const product = products.find( product => product.id == req.params.id);
        req.session.addedProducts ? req.session.addedProducts.push( product ) : req.session.addedProducts = [ product ];
        req.session.addedProducts ? totalPrice = req.session.addedProducts.reduce( (acum = 0, addedProduct) => acum + addedProduct.price, 0) : totalPrice = 0;
        req.session.totalPrice = totalPrice;
        res.redirect('/carrito-de-compras');
    },
};

module.exports = mainController;