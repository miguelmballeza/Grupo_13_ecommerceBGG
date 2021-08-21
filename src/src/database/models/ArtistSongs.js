module.exports = (sequelize, dataTypes) => {

    const artistSongs = sequelize.define('artistsSongs', {
    artist_id_1 : {
        type: dataTypes.INTEGER, allowNull: false, model: 'artists', key: 'artist_id'
    },
    song_id_2 : {
        type: dataTypes.INTEGER, allowNull: false, model: 'songs', key: 'song_id'
    },
}, {
    tableName: 'artist_songs',
    timestamps: false
});

artistSongs.associate = (models) => {
    artistSongs.belongsTo(models.artists, {
        foreignKey: 'artist_id_1'
    });
    artistSongs.belongsTo(models.songs, {
        foreignKey: 'song_id_2'
    });
};

return artistSongs;
};