// sequlize
// js ts
// typeorm
// https://github.com/demopark/sequelize-docs-Zh-CN

const { Sequelize } = require('sequelize')

// 一个 orm 的实例
const sequelizee = new Sequelize('company', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql' // 数据库支持的类型
})

module.exports = sequelizee
