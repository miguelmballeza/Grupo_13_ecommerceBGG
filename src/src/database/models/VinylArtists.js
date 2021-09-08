module.exports = (sequelize, dataTypes) => {

    const vinylArtists = sequelize.define("vinylsArtists", {
    vinyl_id_2 : {
        type: dataTypes.INTEGER, allowNull: false, primaryKey: true, references : { model: 'vinyls', key: 'vinyl_id' }
    },
    artist_id_2 : {
        type: dataTypes.INTEGER, allowNull: false, references : { model: 'artists', key: 'artist_id' }
    },
}, {
    tableName: 'vinyl_artists',
    timestamps: false
});

vinylArtists.associate = (models) => {
    vinylArtists.belongsTo(models.vinyls, {
        foreignKey: 'vinyl_id_2'
    });
    vinylArtists.belongsTo(models.artists, {
        foreignKey: 'artist_id_2'
    });
};

return vinylArtists;
};