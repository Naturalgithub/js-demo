const { getErr } = require("./getSentResult")
module.exports = (err, req, res, next) => {
    // 中间件可以接收 req.baseUrl

    // console.log(err);
    // 错误处理中间件
    if (err) {
        const errObj = {
            code: 500,
            msg: err instanceof Error ? err.message : err
        }
        res.status(500).send(getErr('400', errObj.msg)).end()
    } else {
        next()
    }
}