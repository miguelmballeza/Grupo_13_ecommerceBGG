const express = require('express');
const { homedir } = require('os');
const app = express();
const path = require('path');
const publicPATH = path.resolve(__dirname, './public');

app.use(express.static(publicPATH));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/detalle-del-producto', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
});

app.get('/carrito-de-compras', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/inicio-de-sesion', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.listen(3000, () => {
    console.log('El servidor se esta ejecutando en el Puerto 3000.');
});