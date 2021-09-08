module.exports = (sequelize, dataTypes) => {

    const rank = sequelize.define("couponRanks", {
    rank_id : {
        type: dataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    name : {
        type: dataTypes.STRING(20).BINARY, allowNull: false
    }
}, {
    tableName: 'coupon_rank',
    timestamps: false
});

rank.associate = (models) => {
    rank.hasMany(models.coupons, {
        as: 'coupons',
        foreignKey: 'rank_id_1'
    });
};

return rank;
};