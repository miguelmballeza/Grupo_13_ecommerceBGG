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
            title: "Escucha lo más actual y perron en tu genero favorito",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis pariatur in, ipsa deserunt exercitationem ea. Quidem maxime illo nihil atque, laborum labore fugiat, doloremque, ducimus necessitatibus commodi sunt esse iusto?",
            elements: [ { id : 1, elementName : "Artistas", link : "/productos/artistas" },
                         { id : 2, elementName : "Generos", link : "/productos/generos" },
                         { id : 3, elementName : "Productos ;)", link : "/productos" }, ],
        };

        res.render('main/index', { head, products, firstSection });
    },
    cart: function(req, res) {
        const head = {
            title: "Carrito",
            styleSheet: "/css/stylesCart.css",
        };
        res.render('main/productCart', { head });
    },
};

module.exports = mainController;