const path = require('path');
const fs = require('fs');

module.exports = (req, res, next) => {
    fs.appendFileSync(path.resolve(__dirname, '../data/visitors.json'), 'finded user.\n');
    next();
};