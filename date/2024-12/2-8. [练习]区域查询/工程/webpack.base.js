const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// 公共配置
module.exports = {
    entry:{
        list: './src/list/index.js',
        detail: './src/detail/index.js'
    },
    output:{
        filename: 'scripts/[name].[chunkhash:5].js',
    },
    stats : {
        colors: true,
        modules: false,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./public/list.html",
            filename: "list.html",
            chunks: ["list"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/detail.html",
            filename: "detail.html",
            chunks: ["detail"]
        }),
        new CopyWebpackPlugin([
            {from : "./public", to: './'}
        ])
    ]
}

//new Array(10).fill(1)
// 1-10