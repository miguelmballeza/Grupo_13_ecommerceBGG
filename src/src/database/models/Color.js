module.exports = (sequelize, dataTypes) => {

    const color = sequelize.define('colors', {
    color_id : {
        type: dataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    name : {
        type: dataTypes.STRING(25).BINARY, allowNull: false
    }
}, {
    tableName: 'color',
    timestamps: false
});

color.associate = (models) => {
    color.hasMany(models.vinyls, {
        as: 'vinyls',
        foreignKey: 'color_id_1'
    });
    color.hasMany(models.artists, {
        as: 'artists',
        foreignKey: 'color_id_2'
    });
    color.hasMany(models.recordLabels, {
        as: 'recordLabels',
        foreignKey: 'color_id_3'
    });
    color.hasMany(models.playlists, {
        as: 'playlists',
        foreignKey: 'color_id_4'
    });
};

return color;
};