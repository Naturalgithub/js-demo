const sequelize = require('./db');
const { DataTypes } = require('sequelize');

// 模型对象 会自动生成的表
const Admin = sequelize.define('Admin', {
    loginId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    // freezeTableName: true, // 禁止sequelize自动转换表名,否则会自动加s s
    // tableName: 'admin', // 自定义表名
    createdAt: 'false', // 禁止sequelize自动生成创建时间
    // createdAt:'chuangjianshijian', // 自定义创建时间字段名
    updatedAt: false, // 禁止sequelize自动生成更新时间
    paranoid: true, // 软删除 从此以后 该表的数据不会真正的删除,而是会自动增加一个删除时间字段 deleteAt
});

// 同步功能 如果表不存在就自动创建表
// force: true 如果表存在就先{删除}表再创建
// alter 如果表存在 如果有差异就{修改}表


// (async () => {
//     Admin.sync({
//         force: false,
//         alter: true
//     }).then(() => {
//         console.log('Admin 同步成功');
//     })
// })()


module.exports = Admin;