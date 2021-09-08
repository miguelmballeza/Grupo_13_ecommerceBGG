module.exports = (sequelize, dataTypes) => {

    const vinylsBill = sequelize.define("vinylsBills", {
    bill_id_1 : {
        type: dataTypes.INTEGER, allowNull: false, references : { model: 'bills', key: 'bill_id' }
    },
    vinyl_id_3 : {
        type: dataTypes.INTEGER, allowNull: false, references : { model: 'vinyls', key: 'vinyl_id' }
    },
}, {
    tableName: 'vinyls_bill',
    timestamps: false
});

vinylsBill.associate = (models) => {
    vinylsBill.belongsTo(models.bills, {
        foreignKey: 'bill_id_1'
    });
    vinylsBill.belongsTo(models.vinyls, {
        foreignKey: 'vinyl_id_3'
    });
};

return vinylsBill;
};