const log4js = require('log4js');
const path = require('path');


function getCommonAppender(pathSeg) {
    return {
        // 定义一个sal日志的出口 日期备份
        type: 'dateFile',
        // filename: 'logs/sql.log',
        filename: path.resolve(__dirname, 'logs', pathSeg, "logging.log"),
        maxLogSize: 1024 * 1024,// 配置文件的最大字节数
        keepFileExt: true,  // 配置文件是否保留扩展名
        numBackups: 1, // 配置文件保留数
        daysToKeep: 3, // 配置文件保留天数
        // 输出的格式
        layout: {
            // patten 自定义模式
            type: 'pattern',
            pattern: '[%d{yyyy-MM-dd hh:mm:ss}] [%p] %c: %m%n'
        }
    }
}

log4js.configure({
    appenders: {
        sql: getCommonAppender('sql'),
        default: {
            type: 'stdout',
            filename: path.resolve(__dirname, 'logs', 'default', "logging.log"),
        },
        api: getCommonAppender('api'),
    },
    categories: {
        default: {
            appenders: ['default'], // 该分类使用出口default的配置写入日志
            level: 'all'
        },
        sql: {
            appenders: ['sql'], // 该分类使用出口sql的配置写入日志
            level: 'all'
        },
        api: {
            appenders: ['api'], // 该分类使用出口sql的配置写入日志
            level: 'all'
        }
    }
})

process.on('exit', () => {
    log4js.shutdown()
})

const logger = log4js.getLogger('sql')

const sqlLogger = log4js.getLogger('sql')
const defaultLogger = log4js.getLogger()

exports.sqlLogger = sqlLogger
exports.logger = defaultLogger

exports.apiLogger = log4js.getLogger('api')
