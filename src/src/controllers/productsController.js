const path = require('path');
const productsPath = path.resolve(__dirname, '../data/products.json');
const fs = require('fs');
const productsString = fs.readFileSync(productsPath, {encoding : 'utf-8'});
const products = JSON.parse(productsString);

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
            if(id>0){
                res.render('products/editProduct', { head, products, id });
            } else {
                res.status(404).render('inCaseOf/not-found')
            }
        } catch(error) {
            res.send('Error en la carga del Producto, verifique que el producto exista.');
        }
    },
    
    agregar: function(req, res){
        let id = products.length+1;
        let datos = {id:id, title:'Creacion', artist:"beatles", name:req.params.name, genre:req.params.category, description:req.params.description, price:parseInt(req.params.price), IDContainer:"yellow", IDImage:"standardImage", finalMessage:"Ir a la colección ->", image:"pleasepleaseme.jpg"}
        products.push()
        res.send(datos)
    },
    
    actualizarProduct: function(req, res) {
        const head = {
            title: "Edición de Producto",
            styleSheet: "/css/stylesEditProduct.css",
        };
        
            let id = parseInt(req.params.id)
            if(id>0){
                let producto = products[id-1]
                products[id-1].title = 'prueba';
                products[id-1].name = req.body.name;
                products[id-1].artist = req.body.artist;
                products[id-1].description = req.body.description;
                products[id-1].price = req.body.price;
                
                res.send(producto)
        }
        
    }
};

module.exports = productsController;