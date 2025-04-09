// const sequelize =
// require('./model/sync')
//

// const Admin = require('./model/admin');
// const ins = Admin.build({
//     loginId: "adc",
//     loginPwd: "123",
//     name: "张三",
//     phone: "123456789",
// });
// ins.loginId = 'bcd'

// ins.save().then(() => {
//     console.log('新建管理员成功')
// })

// 先运行 build 再自动运行 save
// Admin.create({
//     loginId: "adc",
//     loginPwd: "123",
//     name: "james",
//     phone: "123456789",
// }).then((res) => {
//     console.log('新建管理员成功', res)
// })
// 

// const adminService = require('./services/adminService');
// (
//     async function () {
//         const a = await adminService.getAdmin(5)
//         console.log("🐒🐒 ~ file: index.js:31 ~ a:", a)
//     }
// )()
// adminService.deleteAdmin(4)
// adminService.updateAdmin(2, {
//     loginId: "956757565675756",
// })

// 设置模型关系
// const Class = require('./model/Class');
// const Student = require('./model/Student');
// Class.hasMany(Student);
// Student.belongsTo(Class);
// const sequelize = require('./model/sync',)


require("./model/relation");
require("./mock/mockStudent");
