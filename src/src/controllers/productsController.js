const { validationResult } = require('express-validator');
let { db } = require('../database/models');
const { Op } = require('sequelize');
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
            const head = {
                title: "Detalle del Producto",
                styleSheet: "/css/stylesDetail.css",
            };
            const color = await db.colors.findOne({ where : { color_id : req.body.color } });
            const type = await db.vinylTypes.findOne({ where : { type_id : req.body.type } });
            const recordLabel = await db.recordLabels.findOne({ where : { recordLabel_id : req.body.recordLabel } });
            let vinylImage;
            req.file ? vinylImage = req.file.filename : vinylImage = 'unknownVinyl.jpg';
            await db.vinyls.create({
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
            // let product = {"id": products.length + 1, 
            // "title": req.body.album ,
            // "artist": req.body.artist,
            //  "year": parseInt(req.body.year) ,
            //  "name": req.body.album ,
            //  "genre": req.body.genre ,
            //  "description":req.body.description,
            //  "price": req.body.price ,
            //  "IDContainer": req.body.color ,
            //  "IDImage":"standardImage", 
            //  "finalMessage":"Nuevo Albúm ->",
            //  "image": req.file.filename,
            //  "songs":[{"title" : req.body.song, "lenght" : req.body.lenght}]};
            // products.push(product);
            let creation = product ? true : false;
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
            res.render('products/createProduct', { head, length: products.length, errors: errors.array(), writtenValues, availableColors, recordLabels, types, songs, artists});
        }
    },
    updateProduct : async function(req, res) {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            const head = {
                title: "Detalle del Producto",
                styleSheet: "/css/stylesDetail.css",
            };
            // let product = products.find( product => product.id == req.params.id);
            const oldImage = await db.vinyls.findByPk(req.params.id ,{ attributes: ['image']});
            let vinylImage;
            req.file ? vinylImage = req.file.filename : vinylImage = oldImage.image;
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
            // product.artist = req.body.artist;
            // product.name = req.body.album;
            // product.genre = req.body.genre;
            // product.year = req.body.year;
            // product.price = req.body.price;
            // product.description = req.body.description;
            // req.file ? product.image = req.file.filename : '';
            // product.IDContainer = req.body.color;
            // for(let i = 0; i < product.songs.length; i++) {
            //     i == 0 ? product.songs[i].title = req.body.song1 : 
            //     i == 1 ? product.songs[i].title = req.body.song2 : 
            //     i == 2 ? product.songs[i].title = req.body.song3 : 
            //     i == 3 ? product.songs[i].title = req.body.song4 : 
            //     i == 4 ? product.songs[i].title = req.body.song5 : 
            //     i == 5 ? product.songs[i].title = req.body.song6 : 
            //     i == 6 ? product.songs[i].title = req.body.song7 : 
            //     i == 7 ? product.songs[i].title = req.body.song8 : 
            //     i == 8 ? product.songs[i].title = req.body.song9 : 
            //     i == 9 ? product.songs[i].title = req.body.song10 : 
            //     i == 10 ? product.songs[i].title =req.body.song11 : 
            //     i == 11 ? product.songs[i].title =req.body.song12 : 
            //     i == 12 ? product.songs[i].title =req.body.song13 : 
            //     i == 13 ? product.songs[i].title =req.body.song14 : 
            //     i == 14 ? product.songs[i].title =req.body.song15 : '';
            //     i == 0 ? product.songs[i].lenght = req.body.lenght1 : 
            //     i == 1 ? product.songs[i].lenght = req.body.lenght2 : 
            //     i == 2 ? product.songs[i].lenght = req.body.lenght3 : 
            //     i == 3 ? product.songs[i].lenght = req.body.lenght4 : 
            //     i == 4 ? product.songs[i].lenght = req.body.lenght5 : 
            //     i == 5 ? product.songs[i].lenght = req.body.lenght6 : 
            //     i == 6 ? product.songs[i].lenght = req.body.lenght7 : 
            //     i == 7 ? product.songs[i].lenght = req.body.lenght8 : 
            //     i == 8 ? product.songs[i].lenght = req.body.lenght9 : 
            //     i == 9 ? product.songs[i].lenght = req.body.lenght10 : 
            //     i == 10 ? product.songs[i].lenght =req.body.lenght11 : 
            //     i == 11 ? product.songs[i].lenght =req.body.lenght12 : 
            //     i == 12 ? product.songs[i].lenght =req.body.lenght13 : 
            //     i == 13 ? product.songs[i].lenght =req.body.lenght4 : 
            //     i == 14 ? product.songs[i].lenght =req.body.lenght15 : '';
            // }
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
    }
};

module.exports = productsController;