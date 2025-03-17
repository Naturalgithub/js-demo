//客户端:用户体验
//服务端:业务逻辑
//数据库:数据存储 数据库验证 为了保证数据完整性,安全性,数据一致性

const Admin = require("../model/admin")

// 管理员初始化
// 判断数据库中是否用管理员,如果没有则初始化一个管理员

// 一个完整的系统,最重要的验证,一定在服务端
exports.addAdmin = async function (adminObj) {
    // 应该判断 adminobj 的各种属性是否合理,以及账号是否已经存在
    const ins = await Admin.create(adminObj)
    console.log("🐒🐒 ~ file: adminService.js:14 ~ ins:", ins)
    return ins.toJSON()
}

exports.getAdmin = async function (adminId) {
    const ins = await Admin.findByPk(adminId)
    return ins?.toJSON() || 'null'
}

exports.updateAdmin = async function (id, adminObj) {
    // // 1. 得到实例
    // const ins = await Admin.findByPk(id)
    // console.log("🐒🐒 ~ file: adminService.js:26 ~ ins:", ins)
    // // 2. 修改实例的属性
    // ins.loginId = adminObj.loginId
    // ins.save()

    // 方式 2
    Admin.update(adminObj, {
        where: {
            id
        }
    })
}

exports.deleteAdmin = async function (adminId) {
    // 1. 第一种方式
    // const ins = await Admin.findByPk(adminId)
    // // 删除
    // await ins.destroy()
    // 2. 第二种方式
    await Admin.destroy({
        where: {
            id: adminId
        }
    })
}

