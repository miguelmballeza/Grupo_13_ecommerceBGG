let { db } = require('../database/models');
const { sequelize } = require('../database/models');
const path = require('path');

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
                         { id : 2, elementName : "Categorias", link : "/productos/categorias" },
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
        let [ addedProducts ] = await sequelize.query("SELECT vinyl.vinyl_id, vinyl.image, vinyl.name, artist.fullName, vinyl.price, cart.pieces, vinyl.pieces AS vinylPieces  from vinyl INNER JOIN cart ON "+ req.session.user.user_id +" = cart.user_id_2 AND vinyl.vinyl_id = cart.vinyl_id_4 INNER JOIN vinyl_artists ON vinyl_artists.vinyl_id_2 = vinyl.vinyl_id INNER JOIN artist ON artist.artist_id = vinyl_artists.artist_id_2");
        totalPrice[0].totalPrice ? req.session.totalPrice = totalPrice[0].totalPrice.toFixed(2) : req.session.totalPrice = 0.00;
        addedProducts.length == 0 ? addedProducts = undefined : '';
        req.session.addedProducts = addedProducts;
        res.render('main/productCart', { head, addedProducts : req.session.addedProducts, totalPrice: req.session.totalPrice });
    },
    cartPost: async function(req, res) {
        const product = await db.vinyls.findByPk(req.params.id);
        const sameProduct = await db.carts.findOne( { where: { user_id_2 : req.session.user.user_id, vinyl_id_4: product.vinyl_id } })
        if(sameProduct){
            await db.carts.update({ pieces: sameProduct.pieces + 1 }, { where: { user_id_2 : req.session.user.user_id, vinyl_id_4: sameProduct.vinyl_id_4 } });
        } else {
            await db.carts.create({ user_id_2 : req.session.user.user_id, vinyl_id_4 : product.vinyl_id, pieces: 1 });  
        }
        res.redirect('/carrito-de-compras');
    }, 
    deleteCartProduct: async function(req, res) {
        await db.carts.destroy( { where: { user_id_2 : req.session.user.user_id, vinyl_id_4: parseInt(req.params.id) } });
        res.redirect('/carrito-de-compras');
    },
    payment: async function(req, res) {
        if(req.session.user){
            const head = {
                title: "Verificación de compra",
                styleSheet: "/css/stylesUser.css",
            };
            const arrayOfObjectProperties = (Object.keys(req.query));
            let i = -2;
            let total = 0;
            while(i <= (arrayOfObjectProperties.length / 2)){
                if(req.query[arrayOfObjectProperties[i+2]] && req.query[arrayOfObjectProperties[i+3]]){
                    await db.carts.update({ pieces: req.query[arrayOfObjectProperties[i+2]] }, { where: { user_id_2 : req.session.user.user_id, vinyl_id_4: req.query[arrayOfObjectProperties[i+3]]}});
                    i = i + 2;
                } else {
                    i = i + 2;
                }
            }
            if(req.query['total-to-pay'] !== ''){
                total = parseFloat(req.query['total-to-pay']).toFixed(2);
            } else {
                const [ totalPrice ] = await sequelize.query("SELECT SUM(b.pieces * c.price) AS total FROM user AS a INNER JOIN cart AS b ON a.user_id = b.user_id_2 INNER JOIN vinyl AS c ON c.vinyl_id = b.vinyl_id_4 AND a.user_id = " + req.session.user.user_id + " GROUP BY a.user_id");
                total = totalPrice[0].total.toFixed(2);
            }
            const [ vinyls ] = await sequelize.query("SELECT a.vinyl_id, c.RPM , c.diameter, a.name, e.fullName AS artist , a.year, a.price, b.pieces AS piecesBought  FROM vinyl AS a INNER JOIN cart AS b ON a.vinyl_id = b.vinyl_id_4 AND b.user_id_2 = " + req.session.user.user_id + " INNER JOIN vinyl_type AS c ON c.type_id = a.type_id_1 INNER JOIN vinyl_artists AS d ON d.vinyl_id_2 = a.vinyl_id INNER JOIN artist AS e ON e.artist_id = d.artist_id_2");
            res.render('main/payment', {head, user: req.session.user, vinyls, total});
        } else {
            res.status(404).render('inCaseOf/not-found')    
        }
    },
    paymentPost: async function(req, res) {
        if(req.session.user){
            const [ totalPrice ] = await sequelize.query("SELECT SUM(b.pieces * c.price) AS total FROM user AS a INNER JOIN cart AS b ON a.user_id = b.user_id_2 INNER JOIN vinyl AS c ON c.vinyl_id = b.vinyl_id_4 AND a.user_id = " + req.session.user.user_id + " GROUP BY a.user_id");
            const bills = await db.bills.findAll({ attributes: ["bill_id"] });
            await db.bills.create({
                bill_id: bills.length + 1,
                user_id_1: req.session.user.user_id,
                state_2: req.session.user.state_1,
                country_3: req.session.user.country_1,
                total: totalPrice[0].total.toFixed(2),
                totalWithDiscount: totalPrice[0].total.toFixed(2),
                address: req.session.user.address,
                zip: req.session.user.zip,
                city: req.session.user.city
            });
            const [ vinyls_ids ] = await sequelize.query("SELECT vinyl.vinyl_id AS id FROM vinyl INNER JOIN cart ON "+ req.session.user.user_id + " = cart.user_id_2 AND vinyl.vinyl_id = cart.vinyl_id_4 INNER JOIN vinyl_artists ON vinyl_artists.vinyl_id_2 = vinyl.vinyl_id INNER JOIN artist ON artist.artist_id = vinyl_artists.artist_id_2 GROUP BY vinyl.vinyl_id");

            vinyls_ids.forEach( async vinyl => {
                await db.vinylsBills.create({
                    bill_id_1: parseInt(bills.length + 1) ,
                    vinyl_id_3: parseInt(vinyl.id),
                });

            });
            await db.carts.destroy({where: { user_id_2 : req.session.user.user_id }});
            const head = {
                title: "Perfil de Usuario",
                styleSheet: "/css/stylesRegisterConfirmation.css",
            };
            res.render('users/createdUser', { head, data: { title : 'Compra realizada', message: 'Confirmación de compra', extra : 'Su compra ha sido procesada exitosamente.'} });
        } else {
            res.status(404).render('inCaseOf/not-found')    
        }
    },
    onWay: async function(req, res) {
        if(req.session.user){
            const head = {
                title: "Compras realizadas",
                styleSheet: "/css/stylesUser.css",
            };
            const [ vinylsOnWay ] = await sequelize.query("SELECT c.bill_id_1 AS pedido, d.vinyl_id, e.RPM, e.diameter, d.name, g.fullName AS artist, d.year, d.price  FROM user AS a INNER JOIN bill AS b ON a.user_id = b.user_id_1 INNER JOIN vinyls_bill AS c ON c. bill_id_1 = b.bill_id INNER JOIN vinyl AS d ON d.vinyl_id = c.vinyl_id_3 AND a.user_id  = " + req.session.user.user_id + " INNER JOIN vinyl_type AS e ON e.type_id = d.type_id_1 INNER JOIN vinyl_artists AS f ON f.vinyl_id_2 = d.vinyl_id INNER JOIN artist AS g ON g.artist_id = f.artist_id_2");
            if(vinylsOnWay.length){
                res.render('main/waitingProducts', {head, vinyls:vinylsOnWay });
            } else {
                res.render('main/waitingProducts', {head});
            }
        } else {
            res.status(404).render('inCaseOf/not-found')    
        }
    }
};

module.exports = mainController;