const path = require('path');
const productsPath = path.resolve(__dirname, '../data/products.json');
const products = require(productsPath);
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
            const product = products[id - 1]; // because the initial 0 in arrays.
            if(id>0){
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
        res.render('products/createProduct', { head });
    },
    
    editProduct: function(req, res) {
        const head = {
            title: "Edición de Producto",
            styleSheet: "/css/stylesEditProduct.css",
        };

        try{
            let id = parseInt(req.params.id);
            const product = products[id - 1];
            if(id>0){
                res.render('products/editProduct', { head, product });
            } else {
                res.status(404).render('inCaseOf/not-found')
            }
        } catch(error) {
            res.send('Error en la carga del Producto, verifique que el producto exista.');
        }
    },
    
    agregar: function(req, res){
        let id = products.length+1;
        let datos = {id:id, title:req.body.album, artist:req.body.artist, year: parseInt(req.body.year), name:req.body.album, genre:req.body.genre, description:req.body.description, price:parseInt(req.body.price), IDContainer:req.body.color, IDImage:"standardImage", finalMessage:"Ir a la colección ->", image:"pleasepleaseme.jpg", songs: [{title: req.body.songs, length: req.body.lenght}]}
        products.push()
        res.send(datos)
    },
    
    updateProduct : function(req, res) {
        const head = {
            title: "Detalle del Producto",
            styleSheet: "/css/stylesDetail.css",
        };
            let id = parseInt(req.params.id);
            const product = products[id - 1]; // because the initial 0 in arrays.
            product.artist = req.body.artist;
            product.name = req.body.name;
            product.title = req.body.name;
            product.year = req.body.year;
            product.genre = req.body.genre;
            product.description = req.body.description;
            product.price = req.body.price;
            product.IDContainer = req.body.color;
            product.image = req.body.image;
                
            res.redirect('products/productDetail', { head, product});
        
    }
};

module.exports = productsController;