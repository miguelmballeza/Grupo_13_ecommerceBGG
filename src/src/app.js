const express = require('express');
const app = express();
const path = require('path');
const publicPATH = path.resolve(__dirname, '../public');
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPATH));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/main/index.html'));
});

app.get('/detalle-del-producto', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/products/productDetail.html'));
});

app.get('/carrito-de-compras', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/products/productCart.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/users/register.html'));
});

app.get('/inicio-de-sesion', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/users/login.html'));
});

app.listen(PORT, () => {
    console.log('El servidor se esta ejecutando en el Puerto 3000.');
});