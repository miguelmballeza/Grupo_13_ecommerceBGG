let { db } = require('../database/models');
let { sequelize } = require('../database/models');
const mainController = {
    main: async function(req, res) {
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
        const products = await db.vinyls.findAll({ include: ["colors", "artists"] });
        res.render('main/index', { head, products, firstSection });
    },
    cart: async function(req, res) {
        const head = {
            title: "Carrito",
            styleSheet: "/css/stylesCart.css",
        };
        const [ totalPrice ] = await sequelize.query("SELECT SUM(vinyl.price * cart.pieces) AS totalPrice FROM vinyl INNER JOIN cart ON " + req.session.user.user_id +  " = cart.user_id_2 AND vinyl.vinyl_id = cart.vinyl_id_4");
        let [ addedProducts ] = await sequelize.query("SELECT vinyl.vinyl_id, vinyl.image, vinyl.name, artist.fullName, vinyl.price, cart.pieces, vinyl.pieces AS vinylPieces  from vinyl INNER JOIN cart ON 1 = cart.user_id_2 AND vinyl.vinyl_id = cart.vinyl_id_4 INNER JOIN vinyl_artists ON vinyl_artists.vinyl_id_2 = vinyl.vinyl_id INNER JOIN artist ON artist.artist_id = vinyl_artists.artist_id_2");
        totalPrice[0].totalPrice ? req.session.totalPrice = totalPrice[0].totalPrice.toFixed(2) : req.session.totalPrice = 0.00;
        addedProducts.length == 0 ? addedProducts = undefined : '';
        req.session.addedProducts = addedProducts;
        res.render('main/productCart', { head, addedProducts : req.session.addedProducts, totalPrice: req.session.totalPrice });
    },
    cartPost: async function(req, res) {
        const head = {
            title: "Producto agregado",
            styleSheet: "/css/stylesCart.css",
        };
        const product = await db.vinyls.findByPk(req.params.id);
        const sameProduct = await db.carts.findOne( { where: { user_id_2 : req.session.user.user_id, vinyl_id_4: product.vinyl_id } })
        if(sameProduct){
            await db.carts.update({ pieces: sameProduct.pieces + 1 }, { where: { user_id_2 : req.session.user.user_id, vinyl_id_4: sameProduct.vinyl_id_4 } });
        } else {
            await db.carts.create({ user_id_2 : req.session.user.user_id, vinyl_id_4 : product.vinyl_id, pieces: 1 });  
        }
        res.redirect('/carrito-de-compras');
    },
};

module.exports = mainController;