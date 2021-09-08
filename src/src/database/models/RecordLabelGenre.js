module.exports = (sequelize, dataTypes) => {

    const recordLabelGenre = sequelize.define("recordLabelsGenres", {
    recordLabel_id_2 : {
        type: dataTypes.INTEGER, allowNull: false, references : { model: 'recordLabels', key: 'recordLabel_id' }
    },
    genre_id_2 : {
        type: dataTypes.INTEGER, allowNull: false, references : { model: 'genres', key: 'genre_id' }
    }
}, {
    tableName: 'recordLabel_genre',
    timestamps: false
});

recordLabelGenre.associate = (models) => {
    recordLabelGenre.belongsTo(models.recordLabels, {
        foreignKey: 'recordLabel_id_2'
    });
    recordLabelGenre.belongsTo(models.genres, {
        foreignKey: 'genre_id_2'
    });
};

return recordLabelGenre;
};