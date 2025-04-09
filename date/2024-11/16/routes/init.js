const path = require('path')
const express = require('express')
const app = express()
const port = 9527

app.get('/news', (req, res, next) => {
    console.log("handle")
    next()
    // throw new Error("error abc") // 相当于运行了 next(new Error("error abc"))
    // next(new Error("error abc"))  // 服务器不会报错，而是会交给错误处理中间件处理，如果没有错误处理中间件，则响应 500
}
    // 使用错误中间件 要传入四个参数
    // (err, req, res, next) => {
    //     console.log("error handle")
    //     res.json({ msg: err.message })
    // }
)

app.get('/news', (req, res, next) => {
    // res.json({ msg: "hello" })
    res.send("hello")


    next()
})

app.get('/news2', (req, res, next) => {
    throw new Error("error abc")
})

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat', // 用于生成 session 的签名
    // maxAge:null, // 会话结束厚过期
    name:'seesionid'
}))


// 静态资源
// app.use(require("./staticMiddleware"))
const staticRoot = path.resolve(__dirname, '../public')
// 内置中间件，用于处理静态资源
// 下面代码作用 根据请求路径，去指定目录下查找对应的文件，如果存在直接响应文件内容，不再移交后续的中间件，如果不存在，则移交后续的中间件
// 默认情况 index 是 index.html
app.use(express.static(staticRoot, {}))


// app use 第一个参数 是路径，第二个参数是中间件
// app.use('/static', express.static(staticRoot))
// app.use('/static', (req, res) => {
//     // req.baseUrl 是 /static 基础路径
//     // path 是除了 /static 基础路径的路径
//     // /static/abc   baseUrl => /static  path => /abc
//     console.log(req.baseUrl, req.path)
// })

// express.urlencoded 当请求头 是 application/x-www-form-urlencoded 时，自动解析请求体 把流的数据读出来，放到 req.body
// 要写到静态中间件后面，因为静态中间件没必要使用 urlencoded 是原始form表单提交
app.use(express.urlencoded({ extended: true })) // extended: true 使用 qs 模块解析请求体
app.use(express.json()) // 通过它解析json格式的请求体
// 手写
// app.use(require('./myUrlEncoded'))

// app.post('/api/student', (req, res) => {
//     console.log(req.body)
//     // urlencoded.parse(req.body)
//     res.send("hello")

// })
// const corsMiddleware = require('./corsMiddleware')
// // 跨域
// app.use(corsMiddleware)
// github.com/expressjs/cors#readme

const whiteList = [
    'http://localhost:9527',
    "http://127.0.0.1:9527",
    'null',
    undefined,
]

const cors = require('cors')
app.use(cors({
    origin(origin, callback) {
        console.log("🐒🐒 ~ file: init.js:85 ~ origin ~ origin:", origin)
        if (whiteList.includes(origin)) {
            callback(null, true)
        }
        else {
            callback(new Error("not allow"))
        }
    },
    credentials:true
}))


// 加入 cookieparser 中间件
// 加入之后 会在 req 上注入 cookies 属性  用于获取cookie
// 加入之后 会在 res 上注入 cookie 属性  用于设置cookie
const cookieParser = require('cookie-parser')
app.use(cookieParser("yuanquanke"))


app.use(require("./tokenMiddleware"))

app.use('/api/student', require('./api/student'))
app.use('/api/admin', require('./api/admin'))
app.use("/api/upload", require("./api/upload"))

// 使用错误中间件
// 能匹配 /news /news/abc  /news/123 /news/abc/123
// 不能匹配 /n /a / /newsabc
// app.use('/news', require('./errorMiddleware'))

// use的匹配更广 
// 任何请求报错，都会执行这个中间件
app.use(require('./errorMiddleware'))



app.listen(port, () => {
    console.log("🐒🐒 ~ file: init.js:108 ~ true:", true)
    console.log(`server listen on ${port}`)
})