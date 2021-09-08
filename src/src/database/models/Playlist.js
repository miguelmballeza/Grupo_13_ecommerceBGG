module.exports = (sequelize, dataTypes) => {
    
    const playlist = sequelize.define("playlists", {
        playlist_id: {
            type: dataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
        },
        genre_id_1: {
            type: dataTypes.INTEGER, allowNull: false
        },
        color_id_4: {
            type: dataTypes.INTEGER, allowNull: false
        },
        name: {
            type: dataTypes.STRING(25), allowNull: false
        },
        title: {
            type: dataTypes.STRING(25), allowNull: false
        },
        description: {
            type: dataTypes.STRING(140), allowNull: false
        },
        year: {
            type: dataTypes.INTEGER, allowNull: false
        },
        distinctiveMessage: {
            type: dataTypes.STRING(20), allowNull: false
        },
        image: {
            type: dataTypes.STRING(30), allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE, allowNull: false
        },
        updatedAt: {
            type: dataTypes.DATE, allowNull: false
        }
    }, {
        tableName: 'playlist',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    });
    
    playlist.associate = (models) => {
    
        playlist.belongsTo(models.colors, {
            as: 'colors',
            foreignKey: 'color_id_4',
        });
        playlist.belongsTo(models.genres, {
            as: 'genres',
            foreignKey: 'genre_id_1'
        });
        playlist.belongsToMany(models.songs, {
            as: 'songs',
            through: 'playlist_songs',
            foreignKey: 'playlist_id_1',
            otherKey: 'song_id_3',
            timestamps: false
        });
    
    };
    
    return playlist;
    };