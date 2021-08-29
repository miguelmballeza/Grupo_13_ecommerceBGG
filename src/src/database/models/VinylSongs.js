module.exports = (sequelize, dataTypes) => {

    const vinylSongs = sequelize.define("vinylsSongs", {
    vinyl_id_1 : {
        type: dataTypes.INTEGER, allowNull: false, primaryKey: true, references : { model: 'vinyls', key: 'vinyl_id' }
    },
    song_id_1 : {
        type: dataTypes.INTEGER, allowNull: false, references : { model: 'songs', key: 'song_id' }
    }
}, {
    tableName: 'vinyl_songs',
    timestamps: false
});

vinylSongs.associate = (models) => {
    vinylSongs.belongsTo(models.vinyls, {
        foreignKey: 'vinyl_id_1'
    });
    vinylSongs.belongsTo(models.songs, {
        foreignKey: 'song_id_1'
    });
};

return vinylSongs;
};