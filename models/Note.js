const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Note extends Model {}

Note.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isComplete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'note'
    }
)

module.exports = Note;