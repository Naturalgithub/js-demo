const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { plugins } = require("./webpack.base")


// 生产配置
module.exports = {
    mode: 'production',
    plugins:[
        new CleanWebpackPlugin()
    ]
}