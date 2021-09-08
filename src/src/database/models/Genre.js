module.exports = (sequelize, dataTypes) => {

    const genre = sequelize.define("genres", {
    genre_id : {
        type: dataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    name : {
        type: dataTypes.STRING(25).BINARY, allowNull: false
    }
}, {
    tableName: 'genre',
    timestamps: false
});

genre.associate = (models) => {
    genre.hasMany(models.playlists, {
        as: 'playlists',
        foreignKey: 'genre_id_1'
    });
    genre.belongsToMany(models.recordLabels, {
        as: 'recordLabelsGenres',
        through: 'recordLabel_genre',
        foreignKey: 'genre_id_2',
        otherKey: 'recordLabel_id_2',
        timestamps: false
    });
};

return genre;
};