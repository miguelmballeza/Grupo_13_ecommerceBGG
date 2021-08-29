'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
let db = {artists:'', artistsSongs:'', bills:'', carts:'', categories:'', colors:'', coupons:'', couponRanks:'', genres:'', playlists:'', playlistsSongs:'', recordLabels:'', recordLabelsArtists:'', recordLabelsGenres:'', songs:'',
 users:'', vinyls:'', vinylsArtists:'', vinylsBills:'', vinylsSongs:'', vinylTypes:''};
//  console.log(db);
let models = {Artist:'', ArtistSongs:'', Bill:'', Cart:'', Category:'', Color:'', Coupon:'', CouponRank:'', Genre:'', Playlist:'', PlaylistSongs:'', RecordLabel:'', RecordLabelArtists:'', RecordLabelGenre:'', Song:'', 
User:'', Vinyl:'', VinylArtists:'', VinylsBill:'', VinylSongs:'', VinylType:''};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
let a = 0;
Object.keys(models).forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[Object.keys(db)[a]] = model;
    a++;
  });
db.bills = require('./Bill')(sequelize, Sequelize.DataTypes);
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = { db, sequelize };
