module.exports = (sequelize, dataTypes) => {

    const artist = sequelize.define("artists", {
    artist_id : {
        type: dataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    color_id_2: {
        type: dataTypes.INTEGER, allowNull: false
    },
    country_2: {
        type: dataTypes.STRING(50), allowNull: false
    },
    fullName : {
        type: dataTypes.STRING(50).BINARY, allowNull: false
    },
    title : {
        type: dataTypes.STRING(25), allowNull: false
    },
    description : {
        type: dataTypes.STRING(140), allowNull: false
    },
    sex : {
        type: dataTypes.STRING(1), allowNull: false
    },
    image : {
        type: dataTypes.STRING(30), allowNull: false
    },
    birthday : {
        type: dataTypes.DATEONLY, allowNull: false
    },
    distinctiveMessage : {
        type: dataTypes.STRING(20), allowNull: false
    },
}, {
    tableName: 'artist',
    timestamps: false
});

artist.associate = (models) => {
    artist.belongsToMany(models.songs, {
        as: 'artistsSongs',
        through: 'artist_songs',
        foreignKey: 'artist_id_1',
        otherKey: 'song_id_2',
        timestamps: false
    });
    artist.belongsToMany(models.vinyls, {
        as: 'vinylsArtists',
        through: 'vinyl_artists',
        foreignKey: 'artist_id_2',
        otherKey: 'vinyl_id_2',
        timestamps: false
    });
    artist.belongsToMany(models.recordLabels, {
        as: 'recordLabelsArtists',
        through: 'recordLabel_artists',
        foreignKey: 'artist_id_3',
        otherKey: 'recordLabel_id_3',
        timestamps: false
    });
    artist.belongsTo(models.colors, {
        as: 'colors',
        foreignKey: 'color_id_2'
    });
    
};

return artist;
};