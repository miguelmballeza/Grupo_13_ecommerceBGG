const express = require('express');
const app = express();
const path = require('path');
const publicPATH = path.resolve(__dirname, '../public');
const viewsPATH = path.resolve(__dirname, './views');
const PORT = process.env.PORT || 3000;
const routers = require('./routes/');

app.use(express.static(publicPATH));
app.set('view engine', 'ejs');
app.set('views', viewsPATH);

app.use('/', routers.mainRouter);

app.use('/productos', routers.productsRouter);

app.use('/usuario', routers.usersRouter);

app.listen(PORT, () => {
    console.log('El servidor se esta ejecutando en el Puerto 3000.');
});