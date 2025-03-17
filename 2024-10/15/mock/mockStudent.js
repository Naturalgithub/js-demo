const Mock = require("mockjs");
const result = Mock.mock({
    "datas|10": [
        {
            name: "@cname",
            birthday: "@date",
            "sex|1-2": true,
            mobile: /1\d{10}/,
            //   location: "@city(true)",
            "ClassId|1-6": 1,
        },
    ],
}).datas;
const Student = require("../model/Student");
Student.bulkCreate(result);

