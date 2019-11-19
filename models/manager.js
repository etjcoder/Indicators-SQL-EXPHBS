module.exports = function(sequelize, DataTypes) {

    var Manager = sequelize.define("manager", {
        protege_1: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        protege_2: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        protege_3: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        protege_4: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        protege_5: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        mentor_1: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        mentor_2: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        mentor_3: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        mentor_4: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        mentor_5: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        name: {
            type: DataTypes.STRING
        }
    });
    return Manager;
}