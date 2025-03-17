// 将所有的链接 缓存到一个数组
const mysql = require('mysql2/promise')
const mysql2 = mysql.createPool({
    host: "localhost",
    user: "root",
    port: "3307",
    database: "company",
    password: "123456",
    waitForConnections: true, // 是否等待
    connectionLimit: 10,// 最大链接
    queueLimit: 0, // 链接不够用,排队 队列最多? 0 代表无限排
    multipleStatements: true // 可以运行多行 sql 语句
});


async function test(id) {
    const [results] = await mysql2.execute(
        // `SELECT * FROM department where id = ?`,
        // 模糊查询 要用 concat 注意 ? 不要用银行
        `SELECT * from employee where \`name\` like concat('%', ?, '%');`,
        [id]);
    console.log(results)

}

test('袁')