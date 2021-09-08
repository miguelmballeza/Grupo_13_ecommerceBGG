module.exports = (sequelize, dataTypes) => {

    const recordLabelArtists = sequelize.define("recordLabelsArtists", {
    recordLabel_id_3 : {
        type: dataTypes.INTEGER, allowNull: false, references : { model: 'recordLabels', key: 'recordLabel_id' }
    },
    artist_id_3 : {
        type: dataTypes.INTEGER, allowNull: false, references : { model: 'artists', key: 'artist_id' }
    },
}, {
    tableName: 'recordLabel_artists',
    timestamps: false
});

recordLabelArtists.associate = (models) => {
    recordLabelArtists.belongsTo(models.recordLabels, {
        foreignKey: 'recordLabel_id_3'
    });
    recordLabelArtists.belongsTo(models.artists, {
        foreignKey: 'artist_id_3'
    });
};

return recordLabelArtists;
};