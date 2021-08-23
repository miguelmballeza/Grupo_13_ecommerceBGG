module.exports = (sequelize, dataTypes) => {

    const coupon = sequelize.define('coupons', {
    coupon_id : {
        type: dataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    rank_id_1 : {
        type: dataTypes.INTEGER, allowNull: false
    },
    name : {
        type: dataTypes.STRING(20).BINARY, allowNull: false
    },
    value: {
        type: dataTypes.INTEGER, allowNull: false
    },
    createdAt: {
        type: dataTypes.DATE, allowNull : false
    },
    updatedAt: {
        type: dataTypes.DATE, allowNull : false
    },
    active: {
        type: dataTypes.BOOLEAN, allowNull: false
    }
}, {
    tableName: 'coupon',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
});

coupon.associate = (models) => {
    coupon.hasMany(models.bills, {
        as: 'bills',
        foreignKey: 'coupon_id_1'
    });
    coupon.belongsTo(models.couponRanks, {
        as: 'couponRanks',
        foreignKey: 'rank_id_1'
    });
};

return coupon;
};