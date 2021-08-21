module.exports = (sequelize, dataTypes) => {

    const song = sequelize.define('songs', {
    song_id : {
        type: dataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    name : {
        type: dataTypes.STRING(25).BINARY, allowNull: false
    },
    lengthInMinutes: {
        type: dataTypes.INTEGER, allowNull: false,
    },
    year: {
        type: dataTypes.INTEGER, allowNull : false,
    },
}, {
    tableName: 'song',
    timestamps: false
});

song.associate = (models) => {
    song.belongsToMany(models.vinyls, {
        as: 'vinylsSongs',
        through: 'vinyl_songs',
        foreignKey: 'song_id_1',
        otherKey: 'vinyl_id_1',
        timestamps: false
    });
    song.belongsToMany(models.artists, {
        as: 'artistsSongs',
        through: 'artist_songs',
        foreignKey: 'song_id_2',
        otherKey: 'artist_id_1',
        timestamps: false
    });
    song.belongsToMany(models.playlists, {
        as: 'playlistsSongs',
        through: 'playlist_songs',
        foreignKey: 'song_id_3',
        otherKey: 'playlist_id_1',
        timestamps: false
    });
};

return song;
};