const path = require('path')
module.exports = (req, res, next) => {
    if (req.url.includes('/api')) {
        next()
    } else {
        console.log(req.url.substring(1))

        res.sendFile(path.resolve(__dirname, '../assets', req.url.substring(1)))
    }
}