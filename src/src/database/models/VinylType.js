module.exports = (sequelize, dataTypes) => {

    const vinylType = sequelize.define("vinylTypes", {
    type_id : {
        type: dataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    RPM : {
        type: dataTypes.STRING(6), allowNull: false
    },
    diameter : {
        type: dataTypes.INTEGER, allowNull: false
    },
    avg_min_perSide : {
        type: dataTypes.STRING(6), allowNull: false
    },
    avg_file_size_MP3 : {
        type: dataTypes.STRING(25), allowNull: false
    },
    avg_file_size_WAV : {
        type: dataTypes.STRING(25), allowNull: false
    },
}, {
    tableName: 'vinyl_type',
    timestamps: false
});

vinylType.associate = (models) => {
    vinylType.hasMany(models.vinyls, {
        as: 'vinyls',
        foreignKey: 'type_id_1'
    });
};

return vinylType;
};