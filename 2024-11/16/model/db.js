// sequlize
// js ts
// typeorm
// https://github.com/demopark/sequelize-docs-Zh-CN

const { Sequelize } = require('sequelize')
const { sqlLogger } = require('../logger')

// 一个 orm 的实例
const sequelizee = new Sequelize('myschooldb', 'root', '123456', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql', // 数据库支持的类型
    // logging: null, // 是否打印日志 废话太多了 也可以写个回调 自定义日志
    logging: (msg) => {
        sqlLogger.debug(msg)
    }
})

module.exports = sequelizee
