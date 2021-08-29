module.exports = (sequelize, dataTypes) => {

    const category = sequelize.define("categories", {
    category_id : {
        type: dataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    name : {
        type: dataTypes.STRING(25).BINARY, allowNull: false
    }
}, {
    tableName: 'category',
    timestamps: false
});

category.associate = (models) => {
    category.hasMany(models.users, {
        as: 'users',
        foreignKey: 'category_id_1'
    });
};

return category;
};