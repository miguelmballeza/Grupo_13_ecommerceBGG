module.exports = (sequelize, dataTypes) => {

    const cart = sequelize.define('carts', {
    user_id_2 : {
        type: dataTypes.INTEGER, allowNull: false, references : { model: 'users', key: 'user_id' }
    },
    vinyl_id_4 : {
        type: dataTypes.INTEGER, allowNull: false, references : { model: 'vinyls', key: 'vinyl_id' }
    },
    pieces: {
        type: dataTypes.INTEGER, allowNull: false
    }
}, {
    tableName: 'vinyl_songs',
    timestamps: false
});

cart.associate = (models) => {
    cart.belongsTo(models.users, {
        foreignKey: 'user_id_2'
    });
    cart.belongsTo(models.vinyls, {
        foreignKey: 'vinyl_id_4'
    });
};

return cart;
};