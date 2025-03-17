// 同步所有模型

require('./admin');
require('./Class');
require('./Student')
require('./Book')

const sequelize = require('./db');
sequelize.sync({ alter: true }).then(() => {
    console.log('已同步所有表模型');
})