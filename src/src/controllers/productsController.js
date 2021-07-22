const path = require('path');
const productsPath = path.resolve(__dirname, '../data/products.json');
let products = require(productsPath);
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
            let id = parseInt(req.params.id);
            const product = products.find( product => product.id == id); // because the initial 0 in arrays.
            if(id>0 && product){
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
        res.render('products/createProduct', { head, length: products.length });
    },
    
    editProduct: function(req, res) {
        const head = {
            title: "Edición de Producto",
            styleSheet: "/css/stylesEditProduct.css",
        };

        try{
            let id = parseInt(req.params.id);
            const product = products.find( product => product.id == id);
            if(id>0 && product){
                res.render('products/editProduct', { head, product });
            } else {
                res.status(404).render('inCaseOf/not-found')
            }
        } catch(error) {
            res.send('Error en la carga del Producto, verifique que el producto exista.');
        }
    },
    
    agregarProducto: function(req, res){
        const head = {
            title: "Detalle del Producto",
            styleSheet: "/css/stylesDetail.css",
        };
        let id = products.length + 1;
        let product = {"id":id, 
        "title": req.body.album ,
        "artist": req.body.name,
         "year": parseInt(req.body.year) ,
         "name": req.body.album ,
         "genre": req.body.genre ,
         "description":req.body.description,
         "price": req.body.price ,
         "IDContainer": req.body.color ,
         "IDImage":"standardImage", 
         "finalMessage":"Album nuevo ->",
         "image": req.file.filename,
         "songs":[{"title" : req.body.songs, "length" : req.body.lenght}]};
        products.push(product);
        const creation = true;
        res.render('products/productDetail', {head, product, creation});
    },
    
    updateProduct : function(req, res) {
        const head = {
            title: "Detalle del Producto",
            styleSheet: "/css/stylesDetail.css",
        };
        let id = req.params.id;
        let product = products.find( product => product.id == id);
        product.artist = req.body.name;
        product.name = req.body.album;
        product.genre = req.body.genre;
        product.year = req.body.year;
        product.price = req.body.price;
        product.description = req.body.description;
        product.image = req.file.filename; 
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
        const edition = true;
        res.render('products/productDetail', { head, product, edition });
    },

    eliminarProduct: function(req, res){
        const head = {
            title: "Productos",
            styleSheet: "/css/stylesProducts.css",
        };
        let id = parseInt(req.params.id);
            products = products.filter(product => 
                product.id != id
            );
            const deletion = true;
            res.render('products/index', { head, products, deletion });  
    }
};

module.exports = productsController;