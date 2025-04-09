const { getErr } = require("./getSentResult")
const { pathToRegexp } = require("path-to-regexp")
const cryptor = require("../utils/crypt")

const needTokenApi = [
    { method: "POST", path: "/api/student" },
    { method: "GET", path: "/api/student" },
    { method: "PUT", path: "/api/student/:id" },
]

module.exports = function (req, res, next) {
    console.log(req.header("Origin"),999)
    needTokenApi
        .filter(api => api.method === req.method && pathToRegexp(api.path).regexp.test(req.path))
        .length > 0 ? checkTokenBySession() : next()

    function checkToken() {
        let token = req.cookies.token || req.header('Authorization')
        // let token = req.signCookies.token || req.header('Authorization')
        if (!token) {
            handleNonToken(req, res, next)
            console.log("没有token，认证失败")
            return
        }
        const userId = cryptor.decrypt(token)
        req.userId = userId
        // 验证token
        // 认证通过
        console.log("认证成功")
        next()
    }

    function checkTokenBySession() {
        
        next()
    }

}


// 处理没有认证的情况
function handleNonToken(req, res, next) {
    res.status(403).send(getErr("you don't have token", 403))
}