const { Configuration } = require('webpack')
const path = require('path')
/**
 * @type {Configuration} //配置智能提示
 */
const config = {
    entry:"./src/index.ts",
    mode:"none",
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'lib'),
        libraryTarget:"umd",
        library:"wujievue",
        umdNamedDefine: true
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                // use:'ts-loader',
                use: "swc-loader"
            }
        ]
    },
    externals:{
        wujie:"wujie",
        vue:"vue"
    }
}

module.exports = config