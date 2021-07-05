const express = require('express');
const path = require('path');
const routers = require('./routes/');
const methodOverride = require('method-override');

const app = express();

const publicPATH = path.resolve(__dirname, '../public');
const viewsPATH = path.resolve(__dirname, './views');
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPATH));
app.set('view engine', 'ejs');
app.set('views', viewsPATH);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/', routers.mainRouter);

app.use('/productos', routers.productsRouter);

app.use('/usuario', routers.usersRouter);

app.use((req, res, next) => {
    res.status(404).render('inCaseOf/not-found')
});

app.listen(PORT, () => {
    console.log('El servidor se esta ejecutando en el Puerto 3000.');
});