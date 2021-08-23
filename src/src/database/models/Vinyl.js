module.exports = (sequelize, dataTypes) => {
    
    const vinyl = sequelize.define('recordLabels', {
        vinyl_id: {
            type: dataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
        },
        color_id_1: {
            type: dataTypes.INTEGER, allowNull: false
        },
        type_id_1 : {
            type: dataTypes.INTEGER, allowNull: false
        },
        recordLabel_id_1 : {
            type: dataTypes.INTEGER, allowNull: false
        },
        user_id_2 : {
            type: dataTypes.INTEGER, allowNull: false
        },
        name: {
            type: dataTypes.STRING(50), allowNull: false
        },
        title: {
            type: dataTypes.STRING(25), allowNull: false
        },
        year: {
            type: dataTypes.INTEGER, allowNull: false
        },
        description: {
            type: dataTypes.STRING(140), allowNull: false
        },
        price: {
            type: dataTypes.FLOAT, allowNull: false
        },
        pieces : {
            type: dataTypes.INTEGER, allowNull: false
        },
        image: {
            type: dataTypes.STRING(30), allowNull: false
        },
        distinctiveMessage: {
            type: dataTypes.STRING(20), allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE, allowNull: false
        },
        updatedAt: {
            type: dataTypes.DATE, allowNull: false
        }
    }, {
        tableName: 'vinyl',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    });
    
    vinyl.associate = (models) => {
    
        vinyl.belongsTo(models.vinylTypes, {
            as: 'vinylTypes',
            foreignKey: 'type_id_1',
        });
        vinyl.belongsTo(models.colors, {
            as: 'colors',
            foreignKey: 'color_id_1',
        });
        vinyl.belongsTo(models.recordLabels, {
            as: 'recordLabels',
            foreignKey: 'recordLabel_id_1',
        });
        vinyl.belongsToMany(models.artists, {
            as: 'artists',
            through: 'vinyl_artists',
            foreignKey: 'vinyl_id_2',
            otherKey: 'artist_id_2',
            timestamps: false
        });
        vinyl.belongsToMany(models.bills, {
            as: 'bills',
            through: 'vinyls_bill',
            foreignKey: 'vinyl_id_3',
            otherKey: 'bill_id_1',
            timestamps: false
        });
        vinyl.belongsToMany(models.songs, {
            as: 'songs',
            through: 'vinyl_songs',
            foreignKey: 'vinyl_id_1',
            otherKey: 'song_id_1',
            timestamps: false
        });
        vinyl.belongsToMany(models.carts, {
            as: 'carts',
            through: 'cart',
            foreignKey: 'vinyl_id_4',
            otherKey: 'user_id_2',
            timestamps: false
        });
    
    };
    
    return vinyl;
    };