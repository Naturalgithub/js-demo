require('./init')

const express = require('express')


const app = express()


const port = 9527

app.get('/', (req, res) => {
    // res.send('hello world')
    console.log(req.headers["host"])
    console.log("请求路径", req.path)
    console.log(req.query)

})


app.get('/asd', (req, res) => {
    // res.send('hello world')
    console.log(req.headers["host"])
    console.log("请求路径", req.path)
})

// 动态路由
app.get('/user/:id', (req, res) => {
    // res.send('hello world')
    // 获取请求信息
    console.log(req.headers["host"])
    console.log(req.params)

    // 响应 send 方法内部调用end 不需要 res.end()
    // 根据格式 自动设置响应头 智能的
    // res.send('hello world')
    // res.send({
    //     name: '张三',
    //     age: 18
    // })

    // 手动设置响应头
    // res.setHeader('content-type', 'text/html;charset=utf-8')
    // res.send([2, 2, 2])

    // 设置重定向
    // res.status(302).header('location', 'https://www.baidu.com').end()
    // res.status(302).location("https://duyi.ke.qq.com/").end()
    // res.redirect(302, 'https://www.baidu.com') // 默认 301
})


// 匹配任何请求

// app.all('*', (req, res) => {

// })

// app.get('*', (req, res) => {

// }
// )

app.listen(port, (req, res) => {
    console.log(req, res)
    console.log(`server listen on ${port}`)
})