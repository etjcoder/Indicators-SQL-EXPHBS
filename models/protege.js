module.exports = function(sequelize, DataTypes) {

    var Protege = sequelize.define("protege", {
        mentor_id: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        manager_id: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            defaultValue: "unknown",
            allowNull: false
        },
        dials: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        prospect_dials: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        cashflow_prospect_dials: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        businessowner_prospect_dials: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        client_dials: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        cashflow_client_dials: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        businessowner_client_dials: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        contacts: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        prospect_contacts: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        client_contacts: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        scheduled_appointments: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        new_appointments: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        prospect_appointments: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        client_appointments: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING
        },
        todos: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
        },
        updatedAt: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
        }
    });
    return Protege;
}