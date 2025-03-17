const { Op } = require("sequelize");
const Student = require("../model/Student");
const validate = require("validate.js")
const moment = require("moment");
const Class = require("../model/Class");
const { pick } = require("../utils/propertyHelper")
exports.addStudent = async function (stuObj) {
  console.log("🐒🐒 ~ file: studentService.js:8 ~ stuObj:", stuObj)
  stuObj = pick(stuObj, ...['name', 'birthday', 'sex', 'mobile', 'ClassId'])

  validate.validators.classExist = async function (value) {
    const c = await Class.findByPk(value)
    if (c) return
    return '班级不存在'
  }

  // 验证规则
  const rule = {
    name: {
      // 出席 必须存在
      presence: {
        // 是否允许空白字符串
        allowEmpty: false,
      },
      type: 'string',
      length: {
        minimum: 1,
        maximum: 10,
      }
    },
    birthday: {
      presence: {
        allowEmpty: false,
      },
      datetime: {
        dateOnly: true,
        // 最早时间 100年以内
        earliest: +moment.utc().subtract(100, "y"),
        // 最晚时间 5年之前
        latest: +moment.utc().subtract(5, "y"),
      }
    },
    sex: {
      presence: true,
      type: 'boolean'
    },
    mobile: {
      presence: {
        allowEmpty: false,
      },
      format: /1\d[3456789]\d{9}/
    },
    ClassId: {
      presence: {
        allowEmpty: false,
      },
      numericality: {
        onlyInteger: true,
      },
      classExist: true
    }
  }
  // const res = validate(stuObj, rule);
  // try {
  //   const res = await validate.async(stuObj, rule);
  // }
  // catch (e) {
  //   console.log(e)

  // }

  await validate.async(stuObj, rule);
  const ins = await Student.create(stuObj);
  return ins.toJSON();
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
    // 需要哪些字段*** 不要忘了 
    attributes: ["id", "name", "birthday", "age"],
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

exports.getStudentById = async function (id) {
  const result = await Student.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
};

