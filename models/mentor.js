module.exports = function(sequelize, DataTypes) {

    var Mentor = sequelize.define("mentor", {
        protege_1: {
            type: DataTypes.STRING
        },
        protege_2: {
            type: DataTypes.INTEGER
        },
        protege_3: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        manager_id: {
            type: DataTypes.INTEGER
        }
    });
    return Mentor;
}