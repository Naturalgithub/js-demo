require('./init')

const express = require('express')
const http = require('http')


const app = express()
// app实际上一个函数，用于处理请求的函数
const server = http.createServer(app)


const port = 9527
server.listen(port, (req, res) => {
    console.log(req)

    console.log(`server listen on ${port}`)
})