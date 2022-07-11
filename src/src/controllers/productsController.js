const { validationResult } = require('express-validator');
let { db } = require('../database/models');
const { Op } = require('sequelize');
const path = require('path');
const { sequelize } = require('../database/models');
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
    productImage: async function(req, res) {
        if(Number.isInteger(Number(req.params.id))){
            let product = await db.vinyls.findByPk(req.params.id, { attributes : ["vinyl_id", "image"] });
            if(product){
                product = product.dataValues;
                const head = {
                    title: "Foto de Producto " + product.vinyl_id,
                    styleSheet: "",
                };
                res.render('products/productImage', { head, product });
            } else {
                res.status(404).render('inCaseOf/not-found')    
            }
        } else {
            res.status(404).render('inCaseOf/not-found')
        }
    },
    APIproducts: async function(req, res) {
        try{
            const products = await db.vinyls.findAll({ attributes : ["vinyl_id", "name", "description"], include : ["songs"] });
            let finalProducts = [];
            products.forEach( product => {
                finalProducts.push(product.dataValues)
            });
            const resultProducts = finalProducts.map( product => {
                product.detail = "/productos/" + product.vinyl_id;
                return product;
            });

            const [ vinylTypes ] = await sequelize.query("SELECT B.type_id, B.RPM, B.diameter, B.avg_min_perSide, B.avg_file_size_MP3, B.avg_file_size_WAV, count(A.vinyl_id) AS Count FROM vinyl AS A INNER JOIN vinyl_type AS B ON A.type_id_1 = B.type_id GROUP BY A.type_id_1 ORDER BY A.type_id_1 ASC");
            let countByCategory = {};
            vinylTypes.forEach( type => {
                !countByCategory[type.RPM + " " + type.diameter] ? countByCategory[type.RPM + " " + type.diameter] = type.Count : '';
            });
            const result = { success: true, count : products.length, countByCategory, products: resultProducts }
            res.send(JSON.stringify(result));
        }catch(err){
            res.send(JSON.stringify({ success: false}));    
        }
    },
    APIproduct: async function(req, res) {
        if(Number.isInteger(Number(req.params.id))){
            try{
                const {dataValues : product} = await db.vinyls.findByPk(req.params.id, { include: ["artists", "songs", "bills", "carts"]});
                if(product){
                    product.imageURL = `/images/registeredProducts/${product.image}`;
                    product.success = true;
                    res.send(JSON.stringify(product));
                } else {
                    res.send(JSON.stringify({ success: false}));   
                }
            }catch(err){
                res.send(JSON.stringify({ success: false}));   
            }      
        } else {
            res.send(JSON.stringify({ success: false}));   
        }
    },
    artists: async function(req, res) {
        const head = {
            title: "Artistas",
            styleSheet: "/css/stylesProducts.css",
        };
        const content = { title : 'Todos los artistas' };
        const artists = await db.artists.findAll({ include: ["colors"]});
        res.render('products/artists', { head, artists, content });
    },
    categories: async function(req, res) {
        const head = {
            title: "Categorias",
            styleSheet: "/css/stylesProducts.css",
        };
        const content = { title : 'Todos las categorias' };
        const categories = await db.vinylTypes.findAll();
        res.render('products/categories', { head, categories, content });
    },
    artist: async function(req, res) {
        if(Number.isInteger(Number(req.params.id))){
            const artist = await db.artists.findByPk(req.params.id ,{ attributes: ["fullName"] });
            if(artist){
                const head = {
                    title: "Artista : " + req.params.id,
                    styleSheet: "/css/stylesProducts.css",
                };
                const content = { title : artist.fullName };
                const [ artistVinyls ] = await sequelize.query("SELECT * FROM vinyl AS a INNER JOIN vinyl_artists AS b ON a.vinyl_id = b.vinyl_id_2 AND b.artist_id_2 = " + req.params.id + " INNER JOIN color AS c ON c.color_id = a.color_id_1");
                res.render('products/specificArtist', { head, artistVinyls, content });
            } else {
                res.status(404).render('inCaseOf/not-found')    
            }
        } else {
            res.status(404).render('inCaseOf/not-found')
        }
    },
    category: async function(req, res) {
        if(Number.isInteger(Number(req.params.id))){
            const category = await db.vinylTypes.findByPk(req.params.id ,{ attributes: ["RPM", "diameter"] });
            if(category){
                const head = {
                    title: "Categoria : " + req.params.id,
                    styleSheet: "/css/stylesProducts.css",
                };
                const content = { title : "RPM : " + category.RPM + "  Diametro : " + category.diameter };
                const [ categoryVinyls ] = await sequelize.query("SELECT * FROM vinyl AS a INNER JOIN vinyl_type AS b ON a.type_id_1 = b.type_id AND b.type_id = " + req.params.id + " INNER JOIN color AS c ON c.color_id = a.color_id_1");
                console.log(categoryVinyls);
                res.render('products/specificCategory', { head, categoryVinyls, content });
            } else {
                res.status(404).render('inCaseOf/not-found')    
            }
        } else {
            res.status(404).render('inCaseOf/not-found')
        }
    }
};

module.exports = productsController;