module.exports = (sequelize, dataTypes) => {
    
const user = sequelize.define("users", {
    user_id: {
        type: dataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    category_id_1: {
        type: dataTypes.INTEGER, allowNull: false
    },
    firstName: {
        type: dataTypes.STRING(40), allowNull: false
    },
    lastName: {
        type: dataTypes.STRING(40), allowNull: false
    },
    email: {
        type: dataTypes.STRING(40), allowNull: false
    },
    password: {
        type: dataTypes.STRING(60), allowNull: false
    },
    image: {
        type: dataTypes.STRING(30), allowNull: false
    },
    birthday: {
        type: dataTypes.DATEONLY, allowNull: false
    },
    address: {
        type: dataTypes.STRING(50), allowNull: false
    },
    zip: {
        type: dataTypes.INTEGER,
    },
    city: {
        type: dataTypes.STRING(50), allowNull: false
    },
    state_1: {
        type: dataTypes.STRING(50)
    },
    country_1 : {
        type: dataTypes.STRING(50), allowNull: false
    },
    createdAt: {
        type: dataTypes.DATE, allowNull: false
    },
    updatedAt: {
        type: dataTypes.DATE, allowNull: false
    }
}, {
    tableName: 'user',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
});

user.associate = (models) => {

    user.belongsTo(models.categories, {
        as: 'categories',
        foreignKey: 'category_id_1',
    });
    user.hasMany(models.bills, {
        as: 'bills',
        foreignKey: 'user_id_1'
    });
    user.belongsToMany(models.vinyls, {
        as: 'carts',
        through: 'cart',
        foreignKey: 'user_id_2',
        otherKey: 'vinyl_id_4',
        timestamps: false
    });

};

return user;
};