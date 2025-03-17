const Mock = require('mockjs');
// const result = Mock.mock({
//     'name|3': '**',
//     age: '@integer(0, 100)',
//     "number|+1": 1
// })
const result = Mock.mock({
    "data|3-10": [{
        "id|+1": 1,
        "name": '前端第 @id 期',
        "openDate": '@date',
    }]
})
const Class = require('../model/Class')
Class.bulkCreate(result.data)