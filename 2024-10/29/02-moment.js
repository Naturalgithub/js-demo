const moment = require('moment');
moment.locale("zh-cn") // 设置中文

// console.log(moment().toString())

// const datenow = moment().format('YYYY-MM-DD HH:mm:ss')
// console.log(moment.utc().toString())

// console.log(datenow)

// console.log(moment().valueOf(), moment().toString())

// console.log(moment(0).toString(), +moment(0))
// console.log(moment.utc(0).toString(), +moment.utc(0))

const value = '1970-01-01 00:00:00'
// console.log(moment(value).toString(), +moment(value))

// 服务器一定要用UTC时间 不然有时差
// console.log(moment.utc(value).toString(), +moment.utc(value))

// 使用日期令牌转换 一般客户端传上来就用这种方式接
// 令牌是一个格式化的字符串 ，它包含日期和时间的占位符，这些占位符将被实际的日期和时间值替换
// x 是 时间戳
// 第三个参数 是否严格检查 boolean
const format = ["YYYY-MM-DD HH:mm:ss", "YYYY-M-D H:m:s", "x"]
moment("1970-01-01 00:00:00", format, true)

// moment("1970-01-01 00:00:00", format, true).format('YYYY-MM-DD HH:mm:ss')
// moment("1970-01-01 00:00:00", format, true).valueOf()
// moment("1970-01-01 00:00:00", format, true).toString()
// moment("1970-01-01 00:00:00", format, true).utc().toString()

// 判断是不是无效的
const invalid = moment("1970-01-01 00:00:00", format, true).isValid()
console.log("🐒🐒 ~ file: index.js:35 ~ invalid:", invalid)

// 判断是否 utc 时间
const isUtc = moment("1970-01-01 00:00:00", format, true).utc().isUtc()

// 转换本地时间 local
// const m = moment("1970-01-01 00:00:00", format, true).utc()
// m.local().format('YYYY-MM-DD HH:mm:ss')

// 客户端 转 utc
const m = moment("1970-01-01 00:00:00", format, true)
m.utc().format('YYYY-MM-DD HH:mm:ss')
// 传给服务器的 utc 时间



// forNow 距离现在多久
// moment.local("zh-cn")
console.log(moment("2024-09-01 00:00:00", format, true).fromNow())

console.log(moment("2024-09-01 00:00:00", format, true).local().fromNow())


