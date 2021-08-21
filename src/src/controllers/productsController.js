const path = require('path');
const productsPath = path.resolve(__dirname, '../data/products.json');
let products = require(productsPath); 
/* 
    Se le asignó nuevamente "let" y no "const" debido a que para eliminar un producto, 
    necesitas hacer una asignación más a la variable de "products" para obtener todos 
    los productos que sean diferentes al id del eliminado, para más detalle mirar 
    método 'deleteProduct'.
*/
const colorsPath = path.resolve(__dirname, '../data/availableColors.json');
const availableColors = require(colorsPath);
const { validationResult } = require('express-validator');
// const fs = require('fs');
// const productsString = fs.readFileSync(productsPath, {encoding : 'utf-8'});
// const products = JSON.parse(productsString);

const productsController = {
    index: function(req, res) {
        const head = {
            title: "Productos",
            styleSheet: "/css/stylesProducts.css",
        };
        res.render('products/index', { head, products});
    },
    productDetail: function(req, res) {
        const head = {
            title: "Detalle del Producto",
            styleSheet: "/css/stylesDetail.css",
        };
        try{
            const product = products.find( product => product.id == req.params.id); // because the initial 0 in arrays.
            if(parseInt(req.params.id)>0 && product){
                res.render('products/productDetail', { head, product});
            } else {
                res.status(404).render('inCaseOf/not-found')
            }
        } catch(error) {
            res.send('Error en la carga del Producto, verifique que el producto exista.');
        }
    },
    createProduct: function(req, res) {
        const head = {
            title: "Creación de Producto",
            styleSheet: "/css/stylesCreateProduct.css",
        };
        res.render('products/createProduct', { head, length: products.length, availableColors });
    }, 
    editProduct: function(req, res) {
        const head = {
            title: "Edición de Producto",
            styleSheet: "/css/stylesEditProduct.css",
        };

        try{
            const product = products.find( product => product.id == req.params.id); // because the initial 0 in arrays.
            if(parseInt(req.params.id)>0 && product){
                res.render('products/editProduct', { head, product, availableColors });
            } else {
                res.status(404).render('inCaseOf/not-found')
            }
        } catch(error) {
            res.send('Error en la carga del Producto, verifique que el producto exista.');
        }
    },
    createProductPost : function(req, res){
        const errors = validationResult(req);
        if(errors.isEmpty()){
            const head = {
                title: "Detalle del Producto",
                styleSheet: "/css/stylesDetail.css",
            };
            let product = {"id": products.length + 1, 
            "title": req.body.album ,
            "artist": req.body.artist,
             "year": parseInt(req.body.year) ,
             "name": req.body.album ,
             "genre": req.body.genre ,
             "description":req.body.description,
             "price": req.body.price ,
             "IDContainer": req.body.color ,
             "IDImage":"standardImage", 
             "finalMessage":"Nuevo Albúm ->",
             "image": req.file.filename,
             "songs":[{"title" : req.body.song, "lenght" : req.body.lenght}]};
            products.push(product);
            res.render('products/productDetail', { head, product, creation: true }); // how can I obtain the logic of creation variable with : redirect('/carrito-de-cormpras');
        } else {
            const head = {
                title: "Creación de Producto",
                styleSheet: "/css/stylesCreateProduct.css",
            };
            const writtenValues = req.body;
            res.render('products/createProduct', { head, length: products.length, errors: errors.array(), writtenValues, availableColors});
        }
    },
    updateProduct : function(req, res) {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            const head = {
                title: "Detalle del Producto",
                styleSheet: "/css/stylesDetail.css",
            };
            let product = products.find( product => product.id == req.params.id);
            product.artist = req.body.artist;
            product.name = req.body.album;
            product.genre = req.body.genre;
            product.year = req.body.year;
            product.price = req.body.price;
            product.description = req.body.description;
            req.file ? product.image = req.file.filename : '';
            product.IDContainer = req.body.color;
            for(let i = 0; i < product.songs.length; i++) {
                i == 0 ? product.songs[i].title = req.body.song1 : 
                i == 1 ? product.songs[i].title = req.body.song2 : 
                i == 2 ? product.songs[i].title = req.body.song3 : 
                i == 3 ? product.songs[i].title = req.body.song4 : 
                i == 4 ? product.songs[i].title = req.body.song5 : 
                i == 5 ? product.songs[i].title = req.body.song6 : 
                i == 6 ? product.songs[i].title = req.body.song7 : 
                i == 7 ? product.songs[i].title = req.body.song8 : 
                i == 8 ? product.songs[i].title = req.body.song9 : 
                i == 9 ? product.songs[i].title = req.body.song10 : 
                i == 10 ? product.songs[i].title =req.body.song11 : 
                i == 11 ? product.songs[i].title =req.body.song12 : 
                i == 12 ? product.songs[i].title =req.body.song13 : 
                i == 13 ? product.songs[i].title =req.body.song14 : 
                i == 14 ? product.songs[i].title =req.body.song15 : '';
                i == 0 ? product.songs[i].lenght = req.body.lenght1 : 
                i == 1 ? product.songs[i].lenght = req.body.lenght2 : 
                i == 2 ? product.songs[i].lenght = req.body.lenght3 : 
                i == 3 ? product.songs[i].lenght = req.body.lenght4 : 
                i == 4 ? product.songs[i].lenght = req.body.lenght5 : 
                i == 5 ? product.songs[i].lenght = req.body.lenght6 : 
                i == 6 ? product.songs[i].lenght = req.body.lenght7 : 
                i == 7 ? product.songs[i].lenght = req.body.lenght8 : 
                i == 8 ? product.songs[i].lenght = req.body.lenght9 : 
                i == 9 ? product.songs[i].lenght = req.body.lenght10 : 
                i == 10 ? product.songs[i].lenght =req.body.lenght11 : 
                i == 11 ? product.songs[i].lenght =req.body.lenght12 : 
                i == 12 ? product.songs[i].lenght =req.body.lenght13 : 
                i == 13 ? product.songs[i].lenght =req.body.lenght4 : 
                i == 14 ? product.songs[i].lenght =req.body.lenght15 : '';
            }
            res.render('products/productDetail', { head, product, edition: true });
        } else {
            const head = {
                title: "Edición de Producto",
                styleSheet: "/css/stylesEditProduct.css",
            };
            const writtenValues = req.body;
            const product = products.find( product => product.id == req.params.id); // because the initial 0 in arrays.
            res.render('products/editProduct', { head, product, availableColors, errors: errors.array(), writtenValues });
        }
    },
    deleteProduct : function(req, res){
        const head = {
            title: "Productos",
            styleSheet: "/css/stylesProducts.css",
        };
        let id = parseInt(req.params.id);
            products = products.filter(product => 
                product.id != id
            );
            res.render('products/index', { head, products, deletion: true });  
    }
};

module.exports = productsController;