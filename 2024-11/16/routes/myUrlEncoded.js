const qs = require('querystring')
module.exports = (req, res, next) => {
    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        // 自行解析消息体 
        let result = ''
        req.on("data", (chunk) => {
            result += chunk
        })

        req.on('end', () => {
            result = result.toString('utf-8')
            const query = qs.parse(result)
            req.body = query
            next()
        });
    } else {
        next()
    }
}