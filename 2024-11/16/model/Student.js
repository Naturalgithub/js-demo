const sequelize = require("./db");
const moment = require("moment");
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
            // 访问器
            get() {
                return this.getDataValue("birthday").getTime();
            }
        },
        age: {
            type: DataTypes.VIRTUAL,
            get() {
                const now = moment.utc()
                const birt = moment.utc(this.birthday)
                return now.diff(birt, 'y');
            }
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

