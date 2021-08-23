module.exports = (sequelize, dataTypes) => {

    const playlistSongs = sequelize.define('playlistsSongs', {
    playlist_id_1 : {
        type: dataTypes.INTEGER, allowNull: false, references : { model: 'playlists', key: 'playlist_id' }
    },
    song_id_3 : {
        type: dataTypes.INTEGER, allowNull: false, references : { model: 'songs', key: 'song_id' }
    },
}, {
    tableName: 'playlist_songs',
    timestamps: false
});

playlistSongs.associate = (models) => {
    playlistSongs.belongsTo(models.playlists, {
        foreignKey: 'playlist_id_1'
    });
    playlistSongs.belongsTo(models.songs, {
        foreignKey: 'song_id_3'
    });
};

return playlistSongs;
};