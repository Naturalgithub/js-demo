const sequelize = require("./db");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define(
    "Student",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        sex: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        mobile: {
            type: DataTypes.STRING(),
            allowNull: false,
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        paranoid: true,
    }
);

