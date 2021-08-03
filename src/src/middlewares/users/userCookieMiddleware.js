const path = require('path');
const users = require(path.resolve(__dirname, path.join('..', '..', 'data/users.json'))); // de la forma de require el archivo JSON.

module.exports = (req, res, next) => {
    if(req.cookies.recuerdame && !req.session.user){
        const user = users.find( user => user.id == req.cookies.recuerdame);
        user ? req.session.user = user : '';
        next();
    }
    next();
};