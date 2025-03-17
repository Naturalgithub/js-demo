const validate = require("validate.js")
const moment = require("moment")

validate.extend(validate.validators.datetime, {
    /** 
     * description: 该函数会自动用于日期格式转换
     * 验证自动触发，无需手动调用
     * 如果违法转换，返回null
     * param {*} value  传入转换的值
     * param {*} options 针对某个属性的验证配置
     * return {*}
     */
    parse(value, options) {
        let formats = ["YYYY-MM-DD HH:mm:ss", "YYYY-M-D H:m:s", 'x']
        if (options.dateOnly) {
            formats = ["YYYY-MM-DD", "YYYY-M-D", 'x']
        }
        return +moment.utc(value, formats, true)
    },

    /** 
     * description: 
     * param {*} value
     * param {*} options
     * return {*}
     */
    format(value, options) {
        let format = "YYYY-MM-DD"
        if (!options.dateOnly) {
            format += " HH:mm:ss"
        }

        return moment.utc(value).format(format)
    },
})
