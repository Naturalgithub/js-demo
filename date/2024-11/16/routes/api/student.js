const express = require('express')

const studentRouter = express.Router()
const sendMsg = require("../getSentResult")
const { getErr, asyncHandler } = require("../getSentResult")

// 获取学生列表
const studentServ = require("../../services/studentService")

studentRouter.get('/', asyncHandler(async (req, res, next) => {
    console.log(req.session)
    
    const page = req.query.page || 1
    const limit = req.query.limit || 10
    const sex = req.query.sex || 0
    const name = req.query.name || ''
    return await studentServ.getStudents(page, limit, {
        sex,
        name
    })
    // res.send(sendMsg.getResult(resdata))
}))

studentRouter.get('/:id', async (req, res) => {
    const result = await studentServ.getStudentById(req.params.id)
    res.send(sendMsg.getResult(result))
})

studentRouter.post('/', async (req, res, next) => {
    // console.log("添加学生")
    try {
        const result = await studentServ.addStudent(req.body)
        res.send(sendMsg.getResult(result))
    }
    catch (err) {
        // res.send(sendMsg.getErr('400', err))
        next(err)
    }
})

studentRouter.delete('/:id', (req, res) => {
    console.log("删除学生")
})

studentRouter.put('/:id', (req, res) => {
    console.log("修改一个学生")
})

module.exports = studentRouter