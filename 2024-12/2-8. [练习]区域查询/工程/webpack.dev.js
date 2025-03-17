// 开发配置
module.exports = {
    mode: 'development',
    devServer:{
        open: true,
        openPage: 'index.html',
        proxy: {
            '/api': {
                target: "http://yuanjin.tech:5100/",
                changeOrigin: true
            }
        }
    }
}