const { validationResult } = require('express-validator');
let { db } = require('../database/models');
const { Op } = require('sequelize');
const path = require('path');
/* 
    Se le asignó nuevamente "let" y no "const" debido a que para eliminar un producto, 
    necesitas hacer una asignación más a la variable de "products" para obtener todos 
    los productos que sean diferentes al id del eliminado, para más detalle mirar 
    método 'deleteProduct'.
*/

const productsController = {
    index: async function(req, res) {
        const head = {
            title: "Productos",
            styleSheet: "/css/stylesProducts.css",
        };
        const content = { title : 'Todos los productos' };
        const products = await db.vinyls.findAll({ include: ["colors"] });
        // console.log("color : " + products[0].colors.value);
        res.render('products/index', { head, products, content });
    },
    search: async function(req, res) {
        const errors = validationResult(req);
        if(errors.isEmpty()){
        const head = {
            title: "Resultado de la busqueda",
            styleSheet: "/css/stylesProducts.css",
        };
                const content = { title : `Resultados de la busqueda por : ${req.query.search}` };
        const products = await db.vinyls.findAll({ where: { name: {  [Op.like] : '%' + req.query.search.toUpperCase() + '%' } }, include: ["colors"] });
        res.render('products/index', { head, products, content });
        } else {
            const path = req._parsedOriginalUrl.pathname.replace(req.route.path, '');
            res.redirect(path);
        }
    },
    productDetail: async function(req, res) {
        const head = {
            title: "Detalle del Producto",
            styleSheet: "/css/stylesDetail.css",
        };
        try{
            // const product = products.find( product => product.id == req.params.id); // because the initial 0 in arrays.
            const product = await db.vinyls.findByPk(req.params.id ,{ include: ["artists", "songs"] });
            if(parseInt(req.params.id)>0 && product){
                res.render('products/productDetail', { head, product});
            } else {
                res.status(404).render('inCaseOf/not-found')
            }
        } catch(error) {
            res.send('Error en la carga del Producto, verifique que el producto exista.');
        }
    },
    createProduct: async function(req, res) {
        const head = {
            title: "Creación de Producto",
            styleSheet: "/css/stylesCreateProduct.css",
        };
        const products = await db.vinyls.findAll();
        const availableColors = await db.colors.findAll();
        const types = await db.vinylTypes.findAll();
        const recordLabels = await db.recordLabels.findAll();
        const artists = await db.artists.findAll();
        const songs = await db.songs.findAll({ include: ["artistsSongs"] });
        res.render('products/createProduct', { head, length: products.length, availableColors, types, recordLabels, artists, songs });
    }, 
    editProduct: async function(req, res) {
        const head = {
            title: "Edición de Producto",
            styleSheet: "/css/stylesEditProduct.css",
        };
        try{
            // const product = products.find( product => product.id == req.params.id); // because the initial 0 in arrays.
            const product = await db.vinyls.findByPk(req.params.id ,{ include: ["artists", "songs", "vinylTypes", "colors"] });
            const availableColors = await db.colors.findAll();
            const types = await db.vinylTypes.findAll();
            const songs = await db.songs.findAll({ include: ["artistsSongs"] });
            const artists = await db.artists.findAll();
            const recordLabels = await db.recordLabels.findAll();
            if(parseInt(req.params.id)>0 && product){
                res.render('products/editProduct', { head, product, availableColors, types, songs, artists, recordLabels});
            } else {
                res.status(404).render('inCaseOf/not-found')
            }
        } catch(error) {
            res.send('Error en la carga del Producto, verifique que el producto exista.');
        }
    },
    createProductPost : async function(req, res){
        const errors = validationResult(req);
        if(errors.isEmpty()){
            const vinylImage = req.file ? req.file.filename : 'unknownVinyl.jpg';
            const fileNameExtension = path.extname(vinylImage).toLowerCase();
            const extensions = {
                '.jpg' : true,
                '.jpeg' : true,
                '.png' : true,
                '.gif' : true
            };
            const ok = extensions[fileNameExtension];
            if(ok){
                const head = {
                    title: "Detalle del Producto",
                    styleSheet: "/css/stylesDetail.css",
                };
                const color = await db.colors.findOne({ where : { color_id : req.body.color} , attributes: ["color_id"] });
                const type = await db.vinylTypes.findOne({ where : { type_id : req.body.type }, attributes: ["type_id"]  });
                const recordLabel = await db.recordLabels.findOne({ where : { recordLabel_id : req.body.recordLabel }, attributes: ["recordLabel_id"]  });
                const products = await db.vinyls.findAll({attributes: ["vinyl_id"]  });
                if(color && type && recordLabel){
                    await db.vinyls.create({
                        vinyl_id: parseInt(products.length) + 1,
                        color_id_1: color.color_id,
                        type_id_1 : type.type_id,
                        recordLabel_id_1 : recordLabel.recordLabel_id,
                        user_id_2 : req.session.user.user_id,
                        name: req.body.album.toUpperCase(),
                        title: req.body.album.toUpperCase(),
                        year: parseInt(req.body.year),
                        description: req.body.description,
                        price: req.body.price,
                        pieces : req.body.pieces,
                        image: vinylImage,
                        distinctiveMessage: "Nuevo Albúm ->",
                    });
                    await db.vinylsSongs.create({
                        vinyl_id_1: parseInt(req.params.id),
                        song_id_1: parseInt(req.body.songs)
                    });
                    await db.vinylsArtists.create({
                        vinyl_id_2: parseInt(req.params.id),
                        artist_id_2: parseInt(req.body.artists)
                    });
                    const product = await db.vinyls.findByPk(req.params.id ,{ include: ["artists", "songs"] });
                    let creation = product ? true : false;
                    console.log("LLEGO");
                    res.render('products/productDetail', { head, product, creation }); // how can I obtain the logic of creation variable with : redirect('/carrito-de-cormpras');
                } else {
                    const head = {
                        title: "Creación de Producto",
                        styleSheet: "/css/stylesCreateProduct.css",
                    };
                    const writtenValues = req.body;
                    const products = await db.vinyls.findAll();
                    const availableColors = await db.colors.findAll();
                    const recordLabels = await db.recordLabels.findAll();
                    const types = await db.vinylTypes.findAll();
                    const songs = await db.songs.findAll({ include: ["artistsSongs"] });
                    const artists = await db.artists.findAll();
                    res.render('products/createProduct', { head, length: products.length, errors: [ { msg : 'El color, el tipo o sello discográfico no fue encontrado. Solicite ayuda técnica.' }], writtenValues, availableColors, recordLabels, types, songs, artists});
                }
            } else {
                const head = {
                    title: "Creación de Producto",
                    styleSheet: "/css/stylesCreateProduct.css",
                };
                const writtenValues = req.body;
                const products = await db.vinyls.findAll();
                const availableColors = await db.colors.findAll();
                const recordLabels = await db.recordLabels.findAll();
                const types = await db.vinylTypes.findAll();
                const songs = await db.songs.findAll({ include: ["artistsSongs"] });
                const artists = await db.artists.findAll();
                res.render('products/createProduct', { head, length: products.length, errors: [ { msg : 'La imagen debe ser formato JPG, JPEG, PNG o GIF.' }], writtenValues, availableColors, recordLabels, types, songs, artists});
            }
        } else {
            const head = {
                title: "Creación de Producto",
                styleSheet: "/css/stylesCreateProduct.css",
            };
            const writtenValues = req.body;
            const products = await db.vinyls.findAll();
            const availableColors = await db.colors.findAll();
            const recordLabels = await db.recordLabels.findAll();
            const types = await db.vinylTypes.findAll();
            const songs = await db.songs.findAll({ include: ["artistsSongs"] });
            const artists = await db.artists.findAll();
            res.render('products/createProduct', { head, length: products.length, errors: errors.array(), writtenValues, availableColors, recordLabels, types, songs, artists});
        }
    },
    updateProduct : async function(req, res) {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            const oldImage = await db.vinyls.findByPk(req.params.id ,{ attributes: ['image']});
            const vinylImage = req.file ? req.file.filename : oldImage.image;
            const fileNameExtension = path.extname(vinylImage).toLowerCase();
            const extensions = {
                '.jpg' : true,
                '.jpeg' : true,
                '.png' : true,
                '.gif' : true
            };
            const ok = extensions[fileNameExtension];
            if(ok){
                const head = {
                    title: "Detalle del Producto",
                    styleSheet: "/css/stylesDetail.css",
                };
                await db.vinyls.update({
                    color_id_1: parseInt(req.body.color),
                    type_id_1 : parseInt(req.body.type),
                    recordLabel_id_1 : parseInt(req.body.recordLabel),
                    user_id_2 : req.session.user.user_id,
                    name: req.body.album.toUpperCase(),
                    title: req.body.album.toUpperCase(),
                    year: parseInt(req.body.year),
                    description: req.body.description,
                    price: req.body.price,
                    pieces : req.body.pieces,
                    image: vinylImage,
                    distinctiveMessage: "Nuevo Albúm ->"
                },
                { where : { vinyl_id : parseInt(req.params.id) } });
                await db.vinylsSongs.update({
                    song_id_1: parseInt(req.body.songs)
                }, { where : { vinyl_id_1: parseInt(req.params.id), } });
                await db.vinylsArtists.update({
                    artist_id_2: parseInt(req.body.artists)
                }, { where : { vinyl_id_2: parseInt(req.params.id), } });
                const product = await db.vinyls.findByPk(req.params.id ,{ include: ["artists", "songs"] });
                res.render('products/productDetail', { head, product, edition: true });
            } else {
                const head = {
                    title: "Edición de Producto",
                    styleSheet: "/css/stylesEditProduct.css",
                };
                const writtenValues = req.body;
                const product = await db.vinyls.findByPk(req.params.id ,{ include: ["artists", "songs", "vinylTypes", "colors"] });
                const availableColors = await db.colors.findAll();
                const recordLabels = await db.recordLabels.findAll();
                const types = await db.vinylTypes.findAll();
                const songs = await db.songs.findAll({ include: ["artistsSongs"] });
                const artists = await db.artists.findAll();
                res.render('products/editProduct', { head, product, availableColors, errors: [{ msg : 'La imagen debe ser formato JPG, JPEG, PNG o GIF.' }], writtenValues, recordLabels, types, songs, artists });
            }
        } else {
            const head = {
                title: "Edición de Producto",
                styleSheet: "/css/stylesEditProduct.css",
            };
            const writtenValues = req.body;
            const product = await db.vinyls.findByPk(req.params.id ,{ include: ["artists", "songs", "vinylTypes", "colors"] });
            const availableColors = await db.colors.findAll();
            const recordLabels = await db.recordLabels.findAll();
            const types = await db.vinylTypes.findAll();
            const songs = await db.songs.findAll({ include: ["artistsSongs"] });
            const artists = await db.artists.findAll();
            res.render('products/editProduct', { head, product, availableColors, errors: errors.array(), writtenValues, recordLabels, types, songs, artists });
        }
    },
    deleteProduct : async function(req, res){
        const head = {
            title: "Productos",
            styleSheet: "/css/stylesProducts.css",
        };
        let id = parseInt(req.params.id);
        await db.vinyls.destroy( { where: { vinyl_id : id } });
        const products = await db.vinyls.findAll({ include: ["colors"] });
            res.render('products/index', { head, products, deletion: true });  
    },
    APIproducts: async function(req, res) {
        const products = await db.vinyls.findAll({ attributes : ["vinyl_id", "name", "description"], include : ["songs"] });
        console.log(products);
        let finalProducts = [];
        products.forEach( product => {
            finalProducts.push(product.dataValues)
        });
        const resultProducts = finalProducts.map( product => {
            product.detail = "/productos/" + product.vinyl_id;
            return product;
        });
        const result = { count : products.length, products: resultProducts }
        res.send(JSON.stringify(result));
    },
    APIproduct: async function(req, res) {
        if(Number.isInteger(Number(req.params.id))){
            const product = await db.vinyls.findByPk(req.params.id, { attributes : ["vinyl_id", "name", "description"], include: ["artists", "songs", "bills", "carts"]});
            const artists = product.artists;
            const songs = product.songs;
            const bills = product.bills;
            const carts = product.carts;
            if(product){
                res.send(JSON.stringify(product));
            } else {
                res.status(404).render('inCaseOf/not-found')    
            }
        } else {
            res.status(404).render('inCaseOf/not-found')
        }
    },
};

module.exports = productsController;