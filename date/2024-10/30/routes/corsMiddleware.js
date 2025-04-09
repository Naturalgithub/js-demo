const allowOrigin = [
    'http://localhost:9527',
    'http://127.0.0.1:9527',
    'null'
]

module.exports = function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    // 处理预检请求
    if (req.method === "OPTIONS") {
        res.header(
            `Access-Control-Allow-Methods`,
            req.headers["access-control-request-method"]
        );
        res.header(
            `Access-Control-Allow-Headers`,
            req.headers["access-control-request-headers"]
        )
    }

    res.header("Access-Control-Allow-Credentials", true)

    
    // 处理普通请求
    if("origin" in req.headers && allowOrigin.includes(req.headers.Origin)) {
        res.header("Access-Control-Allow-Origin", req.headers.Origin);
        // "content-type": "application/json",
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }

    next();
}