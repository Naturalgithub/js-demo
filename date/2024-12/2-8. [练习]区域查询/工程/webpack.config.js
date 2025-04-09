const baseConfig = require('./webpack.base.js')
const devConfig = require('./webpack.dev.js')
const prodConfig = require('./webpack.prod.js')
module.exports = (env) => {
    if (env && env.prod) {
        //生产环境
       const config = {
           ...baseConfig,
           ...prodConfig
       }
       config.plugins = [...baseConfig.plugins, ...prodConfig.plugins]
       return config
    }
    else {
        //开发环境
        return {
            ...baseConfig,
            ...devConfig
        }
    }
}