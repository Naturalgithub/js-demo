const { Op } = require("sequelize");
const Student = require("../model/Student");
const validate = require("validate.js")
const Class = require("../model/Class");
exports.addStudent = async function (stuObj) {
  const rule = {
    name: {
      // 出席 必须存在
      presence: {
        // 是否允许空白字符串
        allowEmpty: false,
      },
      type: 'string'
    }
  }
  const res = validate(stuObj, rule);
  console.log(res)


  // const ins = await Student.create(stuObj);
  // return ins.toJSON();
};

exports.deleteStudent = async function (id) {
  return await Student.destroy({
    where: {
      id,
    },
  });
};

exports.updateStudent = async function (id, obj) {
  return await Student.update(obj, {
    where: {
      id,
    },
  });
};

exports.getStudents = async function (page = 1, limit = 100, queryObj = {
  name: '芳',
}) {
  // const res = await Student.findAll();
  // return JSON.stringify(res);
  // const res = await Student.findAll({
  //   offset: (page - 1) * limit,
  //   limit: +limit,
  // })

  // const total = await Student.count();

  // return {
  //   total,
  //   data: JSON.parse(JSON.stringify(res)),
  // }


  // 方法二 findAndCountAll 贴心的分页
  // 往往会给一些条件
  const res = await Student.findAndCountAll({
    offset: (page - 1) * limit,
    limit: +limit,
    where: {
      // ...queryObj,
      // 模糊查询
      name: {
        // 操作符: Op.like,
        [Op.like]: `%${queryObj.name || ''}%`,
      }
    },
    // 需要哪些字段
    attributes: ["id", "name", "birthday"],
    // 包含关系,预加载  当前对象中包含关联对象
    include: [{
      model: Class,
    }]
  })

  return {
    total: res.count,
    data: JSON.parse(JSON.stringify(res.rows)),
  }
}

