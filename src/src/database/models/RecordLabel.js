module.exports = (sequelize, dataTypes) => {
    
    const recordLabel = sequelize.define("recordLabels", {
        recordLabel_id: {
            type: dataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
        },
        color_id_3: {
            type: dataTypes.INTEGER, allowNull: false
        },
        country_4 : {
            type: dataTypes.STRING(50), allowNull: false
        },
        name: {
            type: dataTypes.STRING(40).BINARY, allowNull: false
        },
        title: {
            type: dataTypes.STRING(25), allowNull: false
        },
        founder: {
            type: dataTypes.STRING(40), allowNull: false
        },
        distinctiveMessage: {
            type: dataTypes.STRING(20), allowNull: false
        },
        image: {
            type: dataTypes.STRING(30), allowNull: false
        },
        description: {
            type: dataTypes.STRING(140), allowNull: false
        },
        foundationYear: {
            type: dataTypes.INTEGER, allowNull: false
        }
    }, {
        tableName: 'recordLabel',
        timestamps: false
    });
    
    recordLabel.associate = (models) => {
    
        recordLabel.belongsTo(models.colors, {
            as: 'colors',
            foreignKey: 'color_id_3',
        });
        recordLabel.hasMany(models.vinyls, {
            as: 'vinyls',
            foreignKey: 'recordLabel_id_1'
        });
        recordLabel.belongsToMany(models.genres, {
            as: 'genres',
            through: 'recordLabel_genre',
            foreignKey: 'recordLabel_id_2',
            otherKey: 'genre_id_2',
            timestamps: false
        });
        recordLabel.belongsToMany(models.artists, {
            as: 'artists',
            through: 'recordLabel_artists',
            foreignKey: 'recordLabel_id_3',
            otherKey: 'artist_id_3',
            timestamps: false
        });
    
    };
    
    return recordLabel;
    };