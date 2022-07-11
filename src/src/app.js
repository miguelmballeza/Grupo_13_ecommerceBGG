const express = require('express');
const path = require('path');
const routers = require('./routes/');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const userCookie = require('./middlewares/users/userCookieMiddleware');
const cors = require('cors')

const app = express();

const publicPATH = path.resolve(__dirname, '../public');
const viewsPATH = path.resolve(__dirname, './views');
const PORT = process.env.PORT || 1080;

app.use(express.static(publicPATH));
app.set('view engine', 'ejs');
app.set('views', viewsPATH);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({ secret: "bmg_ecommerce" }));
app.use(cookieParser());
app.use(userCookie);
app.use( cors ({ origin: 'https://dashboard-to-ecommercebmg.herokuapp.com' }) );

app.use('/', routers.mainRouter);
app.use('/productos', routers.productsRouter);
app.use('/usuario', routers.usersRouter);

app.use((req, res, next) => {
    res.status(404).render('inCaseOf/not-found')
});

app.listen(PORT, () => {
    console.log('El servidor se esta ejecutando en el Puerto 1080.');
}); 