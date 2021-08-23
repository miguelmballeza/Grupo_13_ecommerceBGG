module.exports = (sequelize, dataTypes) => {
const bill = sequelize.define('bills', {
    bill_id: {
        type: dataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    user_id_1 : {
        type: dataTypes.INTEGER, allowNull: false
    },
    coupon_id_1 : {
        type: dataTypes.INTEGER, allowNull: false
    },
    state_2 : {
        type: dataTypes.STRING(50), allowNull: false
    },
    country_3 : {
        type: dataTypes.STRING(50), allowNull: false
    },
    date: {
        type: dataTypes.DATE, allowNull: false
    },
    total: {
        type: dataTypes.FLOAT, allowNull: false
    },
    totalWithDiscount : {
        type: dataTypes.FLOAT, allowNull: false
    },
    address : {
        type: dataTypes.STRING(50), allowNull: false
    },
    zip: {
        type: dataTypes.INTEGER, allowNull: false
    },
    city : {
        type: dataTypes.STRING(50), allowNull: false
    },
    createdAt: {
        type: dataTypes.DATE, allowNull: false
    },
    updatedAt: {
        type: dataTypes.DATE, allowNull: false
    }
}, {
    tableName: 'bill',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
});

bill.associate = (models) => {
    bill.belongsTo(models.coupons, {
        as: 'coupons',
        foreignKey: 'coupon_id_1'
    });
    bill.belongsTo(models.users, {
        as: 'users',
        foreignKey: 'user_id_1'
    });
    bill.belongsToMany(models.vinyls, {
        as: 'vinyls',
        through: 'vinyls_bill',
        foreignKey: 'bill_id_1',
        otherKey: 'vinyl_id_3',
        timestamps: false
    });
};
};